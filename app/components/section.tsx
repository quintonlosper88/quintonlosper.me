export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-[1px] w-12 bg-orange-500/50"></div>
        <span className="text-orange-500 text-[10px] tracking-[0.4em] uppercase font-michroma">
          {subtitle}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase leading-tight font-michroma">
        {title}
      </h2>
    </div>
  );
};
