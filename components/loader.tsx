import { Loader2 } from "lucide-react";
interface LoaderProps {
  label: string;
}

export const Loader = ({ label }: LoaderProps) => {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-center gap-y-4">
        <Loader2 className="w-7 h-7 text-black/50 animate-spin" />
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    </div>
  );
};
