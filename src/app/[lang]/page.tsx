import About from "@/components/organisms/About/About";
import Faq from "@/components/organisms/Faq/Faq";
import HeroContainer from "@/components/organisms/Hero/HeroContainer";
import RecommendContainer from "@/components/organisms/Recommend/RecommendContainer";
import SupporterContainer from "@/components/organisms/Supporter/SupporterContainer";
import { AboutList } from "@/const/AboutList";
import { FaqList } from "@/const/FaqList";

type Props = {
    params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
    const { lang } = await params;

    return (
        <div className="bg-gradient-to-b from-background to-secondary">
            <HeroContainer lang={lang} />
            <About list={AboutList} lang={lang} />
            <SupporterContainer lang={lang} />
            <Faq list={FaqList} lang={lang} />
            <RecommendContainer lang={lang} />
        </div>
    );
}
