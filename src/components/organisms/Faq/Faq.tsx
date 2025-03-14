import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqType } from "@/const/FaqList";

type Props = {
  list: FaqType[]
}

export default function Faq({ list }: Props) {
  return (
    <section className="container mx-auto px-4 py-24">
      <SectionTitle title="よくある質問" />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {list.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
