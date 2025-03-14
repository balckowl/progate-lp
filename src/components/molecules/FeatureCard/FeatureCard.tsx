import { AboutItemType } from "@/const/AboutList";

type Props = AboutItemType

export default function FeatureCard({ icon, title, description }: Props) {
    return (
        <div className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}
