import { hono } from "@/lib/hono";
import Supporter from "./Supporter";

export type SupporterType = {
    name: string;
    planType: string;
    image: string | null;
};

export default async function SupporterContainer() {
    const res = await hono.api.users.purchased.$get();
    const list = (await res.json()) as SupporterType[];
    return (
        <div>
            <Supporter list={list} />
        </div>
    );
}
