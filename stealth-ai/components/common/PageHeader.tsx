interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-1 w-12 bg-cyan-500 rounded-full" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">Core Interface</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-white">
        {title}<span className="text-cyan-500">.</span>
      </h1>
      {subtitle && (
        <p className="mt-2 text-zinc-500 text-sm italic font-medium tracking-wide uppercase max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}