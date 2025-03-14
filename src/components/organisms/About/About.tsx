import { Marquee } from "@/components/magicui/marquee";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { AboutItemType } from "@/const/AboutList";

type Props = {
  list: AboutItemType[]
}

export default function About({ list }: Props) {
  return (
    <section className="container mx-auto px-4 py-24">
      <SectionTitle title="主な機能" />
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <Marquee pauseOnHover className="[--duration:20s]" reverse>
        {list.map((item, index) => (
          <div className="w-[400px]" key={index}>
            <FeatureCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </section>
  );
}
