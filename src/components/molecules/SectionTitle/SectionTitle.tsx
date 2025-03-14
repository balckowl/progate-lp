type Props = {
  title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
  );
}
