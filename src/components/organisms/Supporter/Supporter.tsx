import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Tooltip,
} from "@/components/ui/tooltip";
import { SupporterType } from "./SupporterContainer";
import { getTranslation } from "@/i18n/server";

type Props = {
    list: SupporterType[];
    lang: string
};

export default async function Supporter({ list, lang }: Props) {

    const { t } = await getTranslation(lang)

    return (
        <section className="container mx-auto px-4 py-24" id="supporters">
            <SectionTitle title={t("supporter_title")} />
            <div className="mx-auto max-w-3xl">
                <div className="flex flex-wrap justify-center gap-4">
                    <TooltipProvider>
                        {list.map((item, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    {item.planType !== "Free" && (
                                        <Avatar
                                            className={`h-12 w-12 border-2 ${item.planType === "Pro"
                                                    ? "border-primary"
                                                    : "border-muted"
                                                }`}
                                        >
                                            <AvatarImage
                                                src={item.image ?? ""}
                                                alt={item.name}
                                            />
                                            <AvatarFallback>
                                                {item.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.name}</p>
                                    <p className="text-xs text-muted-foreground capitalize">
                                        {item.planType}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </div>
            </div>
        </section>
    );
}
