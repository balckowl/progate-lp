"use client"

import { signIn } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { useTranslation } from "@/i18n/client";

type Props = {
  lang: string
}

export default function HeroSignInButton({ lang }: Props) {
  const { t } = useTranslation(lang)

  return (
    <Button
      type="button"
      size="lg"
      className="font-bold"
      onClick={async () => await signIn()}
    >
      <LogIn className="mr-2 h-5 w-5" />
      {t("hero_before_login_bn")}
    </Button>
  );
}
