import { headers } from "next/headers";
import Header from "./Header";
import { auth } from "@/auth";

type Props = {
    lang: string;
}

export default async function HeaderContainer({lang}: Props) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return <Header lang={lang} session={session} />;
}
