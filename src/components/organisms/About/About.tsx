import { Marquee } from "@/components/magicui/marquee";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { AboutItemType } from "@/const/AboutList";
import { getTranslation } from "@/i18n/server";

type Props = {
  list: AboutItemType[],
  lang: string
}

export default async function About({ list, lang }: Props) {

  const { t } = await getTranslation(lang)

  return (
    <section className="container mx-auto px-4 py-24">
      <SectionTitle title={t("about_title")} />
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <Marquee pauseOnHover className="[--duration:20s]" reverse>
        {list.map((item, index) => (
          <div className="w-[400px]" key={index}>
            <FeatureCard
              title={t(item.title)}
              description={t(item.description)}
              icon={item.icon}
            />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </section>
  );
}
