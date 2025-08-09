interface ProgramResponsibilitiesProps {
  number: string;
  title: string;
  description: string;
}

export default function ProgramResponsibilities({
  number,
  title,
  description,
}: ProgramResponsibilitiesProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-4xl font-bold text-pri">{number}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}
