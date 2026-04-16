import { Badge } from "@/components/ui/badge";

export const Timeline = ({
  company,
  role,
  period,
  description,
  skills,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div className="relative pl-10 pb-16 border-l border-white/10 last:border-0 last:pb-0">
      <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
      <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight font-michroma">
          {role}
        </h3>
        <span className="text-[10px] text-orange-500 font-bold bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded uppercase tracking-[0.2em] font-michroma whitespace-nowrap">
          {period}
        </span>
      </div>
      <div className="text-sm text-gray-400 font-bold mb-4 uppercase tracking-widest font-michroma">
        {company}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed font-sans mb-6 max-w-4xl">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <Badge key={s} className="bg-white/5 border-white/10 text-gray-400">
            {s}
          </Badge>
        ))}
      </div>
    </div>
  );
};
