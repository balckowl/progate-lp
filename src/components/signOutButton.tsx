"use client"

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter()

    return (
        <button type="button" onClick={async() => await signOut({
            fetchOptions: {
                onSuccess: () => {
                  router.push("/"); 
                },
              },
        })}>ログアウト</button>
    );
}
