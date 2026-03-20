
"use client";

import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signOut } from "@/app/actions/auth";

export function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            toast.success("Signed out successfully");
        } catch (error: any) {
            toast.error(error.message || "Failed to sign out");
        }
    };

    return (
        <Button
            variant="ghost"
            className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
            onClick={handleSignOut}
        >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
        </Button>
    );
}
