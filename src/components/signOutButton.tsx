"use client"

import { signOut } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter()

  return (
    <button type="button" className="flex items-center"
      onClick={async () => await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh()
          },
        },
      })}>
      <LogOut className="mr-2 h-5 w-5" />
      ログアウト
    </button>
  );
}
