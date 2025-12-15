import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary p-4 relative overflow-hidden">
            {/* Background Decorative Elemens */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="w-full max-w-md z-10">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-4">
                        <span className="font-heading font-bold text-3xl text-primary tracking-tight">fixify</span>
                    </Link>
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold font-heading text-foreground">Welcome back to Fixify</h2>
                        <p className="text-muted-foreground mt-2">Track repairs, manage bookings, and more.</p>
                    </div>
                </div>

                <Card className="p-8 bg-white/80 backdrop-blur-xl border-white/20 shadow-xl" hoverEffect={false}>
                    <form className="space-y-4">
                        <Input label="Email Address" type="email" placeholder="you@example.com" />
                        <Input label="Password" type="password" placeholder="••••••••" />

                        <div className="flex justify-end">
                            <Link href="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button className="w-full rounded-full h-12 text-base shadow-lg shadow-primary/25" size="lg">
                            Sign In <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/signup" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
