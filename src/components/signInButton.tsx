"use client"

import { signIn } from "@/lib/auth-client";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={async () => await signIn()}
    >ログイン
    </Button>
  );
}
