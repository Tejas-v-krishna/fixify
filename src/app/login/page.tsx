"use client";

import { createClient } from "@/utils/supabase/client";
import { AuthPage, Testimonial } from "@/components/ui/sign-in";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const testimonials: Testimonial[] = [
    {
        avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        name: "Sarah Chen",
        handle: "@sarah.repairs",
        text: "Gofex saved me so much time! The pickup service is a game changer."
    },
    {
        avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        name: "Marcus J.",
        handle: "@marcus_dev",
        text: "Incredible attention to detail. My electronics came back looking brand new."
    },
    {
        avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        name: "Emily R.",
        handle: "@emily_designs",
        text: "The best repair service I've ever used. Transparent pricing and fast support."
    }
];

export default function LoginPage() {
    const router = useRouter();

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast.error("Login failed", { description: error.message });
            return;
        }

        toast.success("Welcome back!", { description: "Logging you in..." });
        router.refresh(); // Refresh to update server components with new session
        router.push("/");
    };

    const handleGoogleSignIn = async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            toast.error("Google Sign-In failed", { description: error.message });
        }
    };

    const handleResetPassword = async () => {
        // This is a placeholder as the UI component might not expose the email directly here for reset
        // Ideally, we'd have a separate forgot password flow or modal.
        toast("Reset Password", { description: "Feature coming soon." });
    };

    return (
        <AuthPage
            title={<span className="font-light text-foreground tracking-tighter">Welcome Back</span>}
            description="Sign in to track your repairs and manage bookings."
            heroImageSrc="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop"
            testimonials={testimonials}
            onSignIn={handleSignIn}
            onGoogleSignIn={handleGoogleSignIn}
            onResetPassword={handleResetPassword}
            submitButtonText="Sign In"
            footerText="New to Gofex?"
            footerActionText="Create Account"
            onFooterAction={() => router.push("/signup")}
        />
    );
}
