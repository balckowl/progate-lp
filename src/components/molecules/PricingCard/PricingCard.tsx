import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingType } from "@/const/PricingList";
import { Check } from "lucide-react";

type Props = PricingType & { isPurchased: boolean }

export default function PricingCard({
  name,
  description,
  features,
  price,
  cta,
  url,
  isPurchased
}: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="flex items-baseline text-3xl font-bold">{price}</div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid flex-1 gap-4">
        <ul className="grid gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {!isPurchased && <Button className="w-full" variant="outline">
          <a href={url} className="w-full">
            {cta}
          </a>
        </Button>}
        {isPurchased && <Button className="w-full" variant="outline">
          <a href="/success" className="w-full">
            {cta}
          </a>
        </Button>}
      </CardFooter>
    </Card>
  );
}
