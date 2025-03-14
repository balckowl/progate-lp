import { auth } from "@/auth";
import UserIcon from "@/components/molecules/UserIcon/UserIcon";
import SignInButton from "@/components/signInButton";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { headers } from "next/headers";
import Link from "next/link";

type Props = {
  lang: string;
}

export default async function Header({ lang }: Props) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <header className="h-15 border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="font-bold text-2xl tracking-tight">
          <Link href="/">Phantom Screen</Link>
        </h1>
        <div className="flex gap-4 items-center">
          {!session && <SignInButton />}
          {session && <UserIcon name={session.user.name} />}
          <LanguageToggle lang={lang} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
