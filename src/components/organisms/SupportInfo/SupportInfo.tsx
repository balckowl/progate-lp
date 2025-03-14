import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Link from "next/link";

export default function SupportInfo() {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          サポーターに参加する
        </CardTitle>
        <CardDescription>スタンダードまたはプロプランを購入してサポーターになりましょう</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">サポーター特典：</h4>
          <ul className="text-sm space-y-1 list-disc pl-5">
            <li>スタンダードプラン：サポーターウォールにプロフィールアイコンが表示されます</li>
            <li>プロプラン：優先配置で強調表示されたプロフィールアイコン</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href="/#supporters">サポーターウォールを見る</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
