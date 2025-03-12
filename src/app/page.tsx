import { auth } from "@/auth";
import SignInButton from "@/components/signInButton";
import SignOutButton from "@/components/signOutButton";
import { headers } from "next/headers";

export default async function Home() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <div>
      {!session && <SignInButton />}
      {session && <SignOutButton />}
    </div>
  );
}
