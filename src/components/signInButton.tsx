"use client"

import { signIn } from "@/lib/auth-client";

export default function SignInButton() {
  return (
    <button
      type="button"
      onClick={async () => await signIn()}
    >ログイン
    </button>
  );
}
