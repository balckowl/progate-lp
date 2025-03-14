import HeroSignInButton from "@/components/heroSignInButton";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Session } from "@/lib/auth-client";
import Link from "next/link";

type Props = {
    session: Session | boolean | null;
};

export default function Hero({ session }: Props) {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center space-y-2">
                <h1 className="text-7xl font-bold tracking-wide">
                    Showcase your <br /> product{" "}
                    <AuroraText>beautifully</AuroraText>.
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    シンプルで美しいスクリーンショットツール。必要な時に、必要なだけ。
                </p>
                <div className="mt-5">
                    {session && (
                        <Button size="lg" asChild className="font-bold">
                            <Link href="/ja/download">
                                <Download className="mr-2 h-5 w-5" />
                                無料でダウンロード
                            </Link>
                        </Button>
                    )}
                    {!session && <HeroSignInButton />}
                    <p className="text-sm text-muted-foreground mt-5">
                        macOS 12.0以降対応
                    </p>
                </div>
            </div>
        </div>
    );
}
