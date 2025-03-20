import Hero from "./Hero";
import { headers } from "next/headers";
import { auth } from "@/auth";

type Props = {
    lang: string
}

export default async function HeroContainer({lang}: Props) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return <Hero 
    session={session ? true : false} 
    lang={lang}
    />;
}
