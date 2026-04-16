// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
// import { cn } from "@/lib/utils"; // Classes merge karne ke liye utility

// interface StatCardProps {
//   title: string;
//   value: string;
//   description?: string;
//   trend?: {
//     value: string;
//     isUp: boolean;
//   };
//   icon?: React.ReactNode;
//   className?: string;
// }

// export function StatCard({ title, value, description, trend, icon, className }: StatCardProps) {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5 }}
//       className={cn(
//         "relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950/50 p-8 shadow-2xl backdrop-blur-md group transition-all duration-500 hover:border-cyan-500/30",
//         className
//       )}
//     >
//       {/* 1. DYNAMIC BACKGROUND GLOW (Only shows on hover) */}
//       <div className="absolute -right-10 -top-10 h-32 w-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700 pointer-events-none" />

//       <div className="relative z-10 flex flex-col justify-between h-full">
        
//         {/* TOP ROW: ICON & TREND INDICATOR */}
//         <div className="flex justify-between items-start mb-6">
//           <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-500 shadow-inner">
//             {icon || <Activity size={20} />}
//           </div>
          
//           {trend && (
//             <div className={cn(
//               "flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
//               trend.isUp 
//                 ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
//                 : "bg-red-500/10 text-red-500 border-red-500/20"
//             )}>
//               {trend.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
//               {trend.value}
//             </div>
//           )}
//         </div>

//         {/* MIDDLE ROW: VALUE & TITLE */}
//         <div>
//           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 group-hover:text-zinc-400 transition-colors">
//             {title}
//           </p>
//           <h3 className="text-4xl font-[1000] italic uppercase tracking-tighter text-white">
//             {value}
//           </h3>
//         </div>

//         {/* BOTTOM ROW: DESCRIPTION */}
//         {description && (
//           <p className="mt-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-relaxed group-hover:text-zinc-500 transition-colors italic">
//             {description}
//           </p>
//         )}
//       </div>

//       {/* SUBTLE SCANLINE (Cyberpunk Vibe) */}
//       <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] opacity-20" />
//     </motion.div>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({ title, value, description, trend, icon, className }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm group transition-all duration-500 hover:border-blue-600 hover:shadow-xl", className)}
    >
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
            {icon || <Activity size={20} />}
          </div>
          {trend && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black uppercase border ${trend.isUp ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"}`}>
              {trend.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {trend.value}
            </div>
          )}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1 italic">{title}</p>
          <h3 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">{value}</h3>
          {description && <p className="mt-3 text-[10px] font-medium text-slate-400 uppercase italic leading-relaxed">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
}