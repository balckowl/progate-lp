import Hero from "./Hero";
import { headers } from "next/headers";
import { auth } from "@/auth";

export default async function HeroContainer() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return <Hero session={session ? true : false} />;
}
