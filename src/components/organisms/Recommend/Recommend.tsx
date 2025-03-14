import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Recommend() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="bg-card rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">今すぐ始めましょう</h2>
        <p className="text-xl text-muted-foreground mb-8">
          無料版で基本的な機能を体験できます
        </p>
        <Button size="lg" className="gap-2">
          <Download className="w-5 h-5" />
          無料ダウンロード
        </Button>
      </div>
    </section>
  );
}

