import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslation } from "@/i18n/server";
import { Users } from "lucide-react";
import Link from "next/link";

type Props = {
  lang: string
}

export default async function SupportInfo({lang}: Props) {

  const { t } = await getTranslation(lang)

  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          {t("download_support_t")}
        </CardTitle>
        <CardDescription>{t("download_support_st")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/50 p-4 rounded-lg">
          <ul className="text-sm space-y-1 list-disc pl-5">
            <li>{t("download_support_d_1")}</li>
            <li>{t("download_support_d_2")}</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href="/#supporters">{t("download_support_bn")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
