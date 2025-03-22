import HeroSignInButton from "@/components/heroSignInButton";
import { Button } from "@/components/ui/button";
import { getTranslation } from "@/i18n/server";
import { Download } from "lucide-react";
import Link from "next/link";

type Props = {
  lang: string,
  session: boolean
}

export default async function Recommend({ lang, session }: Props) {

  const { t } = await getTranslation(lang)

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="bg-card rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">{t("rec_t_1")}</h2>
        <p className="text-xl text-muted-foreground mb-8">
          {t("rec_d_1")}
        </p>
        {session && (
          <Button size="lg" asChild className="font-bold">
            <Link href={`/${lang}/download`}>
              <Download className="mr-2 h-5 w-5" />
              {t("hero_after_login_bn")}
            </Link>
          </Button>
        )}
        {!session && <HeroSignInButton lang={lang} />}
      </div>
    </section>
  );
}

