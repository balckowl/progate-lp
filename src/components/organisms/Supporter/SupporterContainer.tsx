import { hono } from "@/lib/hono";
import Supporter from "./Supporter";

export type SupporterType = {
    name: string;
    planType: string;
    image: string | null;
};

type Props = {
    lang: string
}

export default async function SupporterContainer({ lang }: Props) {
    const res = await hono.api.users.purchased.$get();
    const list = (await res.json()) as SupporterType[];
    return (
        <div>
            <Supporter list={list} lang={lang} />
        </div>
    );
}
