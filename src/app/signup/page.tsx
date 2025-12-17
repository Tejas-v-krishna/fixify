"use client";

import { createClient } from "@/utils/supabase/client";
import { AuthPage, Testimonial } from "@/components/ui/sign-in";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const testimonials: Testimonial[] = [
    {
        avatarSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&q=80",
        name: "David K.",
        handle: "@david_k",
        text: "Signing up was seamless. I booked my first repair in minutes."
    },
    {
        avatarSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&q=80",
        name: "Jessica Lee",
        handle: "@jess_creates",
        text: "The platform is beautiful and so easy to use. Highly recommend!"
    },
    {
        avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        name: "Michael B.",
        handle: "@michael_tech",
        text: "Finally, a repair service that fits my busy schedule."
    }
];

export default function SignupPage() {
    const router = useRouter();

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const supabase = createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            toast.error("Signup failed", { description: error.message });
            return;
        }

        toast.success("Account created!", { description: "Check your email to confirm." });
        // Optionally redirect or show a "Check your email" state
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
            toast.error("Google Sign-Up failed", { description: error.message });
        }
    };

    return (
        <AuthPage
            title={<span className="font-light text-foreground tracking-tighter">Join Gofex</span>}
            description="Start your hassle-free repair journey today."
            heroImageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            testimonials={testimonials}
            onSignIn={handleSignUp}
            onGoogleSignIn={handleGoogleSignIn}
            submitButtonText="Create Account"
            footerText="Already have an account?"
            footerActionText="Log In"
            onFooterAction={() => router.push("/login")}
            showRememberMe={false}
        />
    );
}
