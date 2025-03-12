"use client"

import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
    return (
        <button type="button" onClick={async() => await signOut()}>ログアウト</button>
    );
}
