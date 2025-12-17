
"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast.error("Error signing out");
            return;
        }

        toast.success("Signed out successfully");
        router.refresh(); // Refresh server components
        router.push("/login");
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
