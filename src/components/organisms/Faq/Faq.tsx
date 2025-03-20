import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqType } from "@/const/FaqList";
import { getTranslation } from "@/i18n/server";

type Props = {
  list: FaqType[],
  lang: string
}

export default async function Faq({ list, lang }: Props) {

  const { t } = await getTranslation(lang)

  return (
    <section className="container mx-auto px-4 py-24">
      <SectionTitle title={t("faq_title")} />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {list.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{t(item.question)}</AccordionTrigger>
              <AccordionContent>{t(item.answer)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
