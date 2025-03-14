import { auth } from "@/auth";
import About from "@/components/organisms/About/About";
import Faq from "@/components/organisms/Faq/Faq";
import HeroContainer from "@/components/organisms/Hero/HeroContainer";
import Recommend from "@/components/organisms/Recommend/Recommend";
import SupporterContainer from "@/components/organisms/Supporter/SupporterContainer";
import { AboutList } from "@/const/AboutList";
import { FaqList } from "@/const/FaqList";
import { getTranslation } from "@/i18n/server";
import { headers } from "next/headers";

export default async function Home({ params }: { params: { lang: string } }) {
    const lang = params.lang;
    const { t } = await getTranslation(lang);

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="bg-gradient-to-b from-background to-secondary">
            {t("app_name")}
            {/* {!session && <SignInButton />}
            {session && <SignOutButton />} */}
            <HeroContainer />
            <About list={AboutList} />
            <SupporterContainer />
            <Faq list={FaqList} />
            <Recommend />
        </div>
    );
}
