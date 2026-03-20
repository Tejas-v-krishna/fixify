'use server'

import { getUser } from '@/app/actions/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createBooking(formData: FormData) {
  const user = await getUser()

  if (!user) {
    throw new Error('You must be logged in to create a booking')
  }

  const category = formData.get('category') as string
  const itemName = formData.get('itemName') as string
  const description = formData.get('description') as string
  const address = formData.get('address') as string
  const city = formData.get('city') as string
  const zipCode = formData.get('zipCode') as string
  const date = formData.get('date') as string
  const timeSlot = formData.get('timeSlot') as string

  // Note: In a real app, you would first find or create the ServiceCategory and ServiceItem.
  // For this implementation, we'll assume they exist or handle them gracefully.
  // For now, let's just create the booking directly if we can link it.
  
  // We'll need a service item ID. Let's find one or create a dummy one for now if none exists.
  let serviceItem = await prisma.serviceItem.findFirst({
    where: { name: category }
  })

  if (!serviceItem) {
    // Create a default category and item if not found (for demo purposes)
    const serviceCategory = await prisma.serviceCategory.upsert({
      where: { slug: category.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-'),
      }
    })

    serviceItem = await prisma.serviceItem.create({
      data: {
        name: itemName,
        categoryId: serviceCategory.id,
        description: `Service for ${itemName}`,
      }
    })
  }

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      serviceItemId: serviceItem.id,
      address,
      city,
      zipCode,
      scheduledDate: new Date(date),
      timeSlot,
      description,
      status: 'PENDING',
    }
  })

  // Create initial repair status
  await prisma.repairStatus.create({
    data: {
      bookingId: booking.id,
      status: 'PENDING',
      notes: 'Booking created and awaiting confirmation.',
    }
  })

  revalidatePath('/dashboard')
  revalidatePath('/dashboard/orders')
  
  redirect('/dashboard/orders')
}
