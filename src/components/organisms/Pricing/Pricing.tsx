import PricingCard from "@/components/molecules/PricingCard/PricingCard";
import { PricingType } from "@/const/PricingList";
import SupportInfo from "../SupportInfo/SupportInfo";

type Props = {
  list: PricingType[];
  isPurchased: boolean;
  lang: string;
}

export default function Pricing({ list, isPurchased, lang }: Props) {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-3 gap-3 mb-3">
        {list.map((item) => (
          <PricingCard
            key={item.name}
            name={item.name}
            price={item.price}
            features={item.features}
            cta={item.cta}
            url={item.url}
            isPurchased={isPurchased}
            lang={lang}
          />
        ))}
      </div>
      <SupportInfo lang={lang}/>
    </div>
  );
}
