import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationCard = ({
  degree,
  university,
  country,
  duration,
  field,
  thesis,
}: {
  degree: string;
  university: string;
  country: string;
  duration: string;
  field: string;
  thesis: string;
}) => {
  //TODO add more option for thesis description
  return (
    <div className="group relative z-10 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:z-20">
      <Card className="w-full max-w-lg border-zinc-200 transition-colors duration-300 group-hover:border-amber-500">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <GraduationCap
                className="
                text-amber-500 w-10 h-10 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl tracking-tight leading-none uppercase">
              {degree}
            </h3>
          </div>

          <div className="flex flex-col text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <span>{university}</span>
            <span className="text-zinc-400 text-xs font-normal">{country}</span>
          </div>
        </CardHeader>

        <CardContent>
          {/* CardDescription is usually for sub-text; CardContent is better for the meat of the card */}
          <div className="flex flex-col gap-1">
            <span className="text-amber-600 text-sm font-semibold uppercase italic">
              {duration}
            </span>
            <p className="text-zinc-800 font-medium">{field}</p>
          </div>
        </CardContent>
        <CardDescription>
          <div className="gap-1 px-4">
            <p className="font-medium">{thesis}</p>
          </div>
        </CardDescription>
      </Card>
    </div>
  );
};
