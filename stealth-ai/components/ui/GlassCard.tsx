// "use client";

// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface GlassCardProps {
//   children: React.ReactNode;
//   className?: string;
//   hoverEffect?: boolean;
// }

// export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
//   return (
//     <motion.div 
//       whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
//       className={cn(`
//         relative group overflow-hidden
//         bg-zinc-950/40 backdrop-blur-2xl
//         border border-white/5 rounded-[2.5rem]
//         p-8 shadow-2xl
//         hover:border-cyan-500/30 transition-all duration-500
//       `, className)}
//     >
//       {/* Subtle Inner Glow */}
//       <div className="absolute -top-24 -right-24 h-48 w-48 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
      
//       <div className="relative z-10">
//         {children}
//       </div>
//     </motion.div>
//   );
// }







"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -8, scale: 1.005 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(`
        relative group overflow-hidden
        /* CHANGES: White background with very subtle glass transparency */
        bg-white/70 backdrop-blur-xl
        
        /* Sober borders and institutional rounding */
        border border-slate-200/60 rounded-[3rem]
        
        /* Soft, expensive shadow instead of heavy dark shadow */
        p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]
        
        /* Smooth hover transition to Stealth Blue */
        hover:border-blue-600/30 hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] 
        transition-all duration-500
      `, className)}
    >
      {/* 1. Subtle Structural Accent (Institutional Detail) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* 2. Soft Blue Light (Replacing Purple/Cyan Glow) */}
      <div className="absolute -top-24 -right-24 h-64 w-64 bg-blue-600/[0.02] blur-[100px] rounded-full group-hover:bg-blue-600/[0.05] transition-all duration-700" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}