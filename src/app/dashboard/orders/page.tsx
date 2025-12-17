
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Package, Clock, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export default async function OrdersPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // In a real app, we would fetch orders here:
    // const { data: orders } = await supabase.from('orders').select('*').eq('user_id', user.id);

    // For now, we'll use an empty state or mock data if requested. 
    // Since the DB is fresh, it's likely empty.
    const orders: any[] = [];

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ArrowLeft size={20} />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-foreground">My Orders</h1>
                        <p className="text-muted-foreground">Track and manage your repair requests.</p>
                    </div>
                </div>

                {orders.length === 0 ? (
                    <Card className="p-12 text-center bg-card dark:bg-zinc-900 border-border dark:border-zinc-800" hoverEffect={false}>
                        <div className="w-20 h-20 mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                            <Package className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground mb-2">No orders found</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            You haven't booked any repairs yet. Once you do, they will appear here with real-time tracking updates.
                        </p>
                        <Link href="/book">
                            <Button className="bg-[#2DD4BF] text-zinc-950 hover:bg-[#2DD4BF]/90 font-bold px-8">
                                Book a Repair
                            </Button>
                        </Link>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {/* Placeholder for order list implementation */}
                        <p>Order list content would go here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
