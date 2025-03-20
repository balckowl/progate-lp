import { auth } from "@/auth";
import Recommend from "./Recommend";
import { headers } from "next/headers";

type Props = {
  lang: string;
}

export default async function RecommendContainer({ lang }: Props) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <>
      <Recommend
        session={session ? true : false}
        lang={lang}
      />
    </>
  );
}
