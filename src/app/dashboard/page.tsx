
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Wrench, Package, Clock, ShieldCheck, LogOut } from "lucide-react";
import { SignOutButton } from "@/components/dashboard/SignOutButton";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // Get user profile if available (or use metadata)
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    const displayName = profile?.full_name || user.user_metadata?.full_name || "User";

    const repairSteps = [
        {
            num: "01",
            title: "Diagnose & Book",
            desc: "Tell us what's wrong with your device and schedule a pickup time that works for you.",
            icon: Wrench,
            color: "text-[#2DD4BF]",
            bg: "bg-[#2DD4BF]/10"
        },
        {
            num: "02",
            title: "Expert Pickup",
            desc: "Our verified Gofex Pilot will pick up your device securely from your doorstep.",
            icon: Package,
            color: "text-[#818CF8]",
            bg: "bg-[#818CF8]/10"
        },
        {
            num: "03",
            title: "Track Repair",
            desc: "Monitor your repair status in real-time through your dashboard.",
            icon: Clock,
            color: "text-[#F472B6]",
            bg: "bg-[#F472B6]/10"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-foreground">
                            Welcome back, <span className="text-[#2DD4BF]">{displayName}</span>
                        </h1>
                        <p className="text-muted-foreground mt-1">Ready to get your devices fixed?</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/orders">
                            <Button variant="outline" className="border-border">
                                <Package className="w-4 h-4 mr-2" />
                                My Orders
                            </Button>
                        </Link>
                        <SignOutButton />
                    </div>
                </div>

                {/* Main Action Section: Book a Repair */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <Card className="lg:col-span-2 p-8 bg-card dark:bg-zinc-900 border-border dark:border-zinc-800 shadow-sm" hoverEffect={false}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Start a New Repair</h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                                    Experiencing issues with your phone, laptop, or smart device? Booking a repair is simple, fast, and secure.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {repairSteps.map((step, i) => (
                                        <div key={i} className="flex flex-col gap-3">
                                            <div className={`w-10 h-10 rounded-lg ${step.bg} ${step.color} flex items-center justify-center`}>
                                                <step.icon size={20} />
                                            </div>
                                            <h3 className="font-semibold text-foreground">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/book">
                                <Button size="lg" className="w-full sm:w-auto bg-[#2DD4BF] text-zinc-950 hover:bg-[#2DD4BF]/90 font-bold">
                                    Book Now <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </Card>

                    {/* Quick Stats / Info Widget */}
                    <div className="space-y-6">
                        <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20" hoverEffect={false}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-500">
                                    <ShieldCheck size={24} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Gofex Assurance</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Your devices are insured up to $5,000 during transit and repair.
                            </p>
                            <Link href="/support/warranty" className="text-indigo-500 text-sm font-medium hover:underline">
                                Learn about warranty &rarr;
                            </Link>
                        </Card>

                        <Card className="p-6 bg-card dark:bg-zinc-900 border-border dark:border-zinc-800" hoverEffect={false}>
                            <h3 className="text-lg font-bold text-foreground mb-4">Active Orders</h3>
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <Package className="w-12 h-12 text-muted-foreground/30 mb-3" />
                                <p className="text-muted-foreground text-sm">No active repairs.</p>
                                <Link href="/book" className="text-[#2DD4BF] text-sm font-medium hover:underline mt-2">
                                    Schedule one now
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
