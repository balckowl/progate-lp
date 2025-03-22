import HeroSignInButton from "@/components/heroSignInButton";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Session } from "@/lib/auth-client";
import Link from "next/link";
import { getTranslation } from "@/i18n/server";

type Props = {
    session: Session | boolean | null;
    lang: string
};

export default async function Hero({ session, lang }: Props) {

    const { t } = await getTranslation(lang)
    const subTitle = t("hero_sub_title")
    const afterLogInBn = t("hero_after_login_bn")

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center space-y-2">
                <h1 className="text-7xl font-bold tracking-wide">
                    Showcase your <br /> product{" "}
                    <AuroraText>beautifully</AuroraText>.
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {subTitle}
                </p>
                <div className="mt-5">
                    {session && (
                        <Button size="lg" asChild className="font-bold">
                            <Link href={`/${lang}/download`}>
                                <Download className="mr-2 h-5 w-5" />
                                {afterLogInBn}
                            </Link>
                        </Button>
                    )}
                    {!session && <HeroSignInButton lang={lang} />}
                    <p className="text-sm text-muted-foreground mt-5">
                        {t("hero_d")}
                    </p>
                </div>
            </div>
        </div>
    );
}
