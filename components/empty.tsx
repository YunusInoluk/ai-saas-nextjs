import Image from "next/image";
interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image alt="Empty" src="/talking.png" fill />
      </div>
      <p className="text-muted-foreground text-sm text-center mt-5">{label}</p>
    </div>
  );
};
