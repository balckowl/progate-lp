import { headers } from "next/headers";
import Header from "./Header";
import { auth } from "@/auth";

export default async function HeaderContainer() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return <Header lang="en" session={session} />;
}
