"use client"

import { signIn } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function HeroSignInButton() {
  return (
    <Button
      type="button"
      size="lg"
      className="font-bold"
      onClick={async () => await signIn()}
    >
      <LogIn className="mr-2 h-5 w-5"/>
      サイトにログイン
    </Button>
  );
}
