'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  // TODO: Implement login with your preferred auth provider
  console.log('Login attempt:', formData.get('email'))
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  // TODO: Implement signup with your preferred auth provider
  console.log('Signup attempt:', formData.get('email'))
  redirect('/dashboard')
}

export async function signOut() {
  // TODO: Implement sign out with your preferred auth provider
  redirect('/login')
}

export async function getUser() {
  // TODO: Implement get user with your preferred auth provider
  return null
}
