// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronRight, Home, Terminal } from "lucide-react";
// import { motion } from "framer-motion";

// export function Breadcrumbs() {
//   const pathname = usePathname();
  
//   // URL ko break karke array banana (e.g., /dashboard/student/projects -> ['dashboard', 'student', 'projects'])
//   const pathSegments = pathname.split("/").filter((item) => item !== "");

//   // Agar Home page par hain toh kuch mat dikhao
//   if (pathSegments.length === 0) return null;

//   return (
//     <nav className="flex items-center gap-2 px-2 py-4 mb-6 overflow-x-auto no-scrollbar">
//       {/* ROOT NODE */}
//       <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
//         <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-all">
//           <Home size={12} />
//         </div>
//       </Link>

//       {pathSegments.map((segment, index) => {
//         const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathSegments.length - 1;

//         return (
//           <div key={href} className="flex items-center gap-2">
//             <ChevronRight size={14} className="text-zinc-700 shrink-0" />
            
//             <motion.div
//               initial={{ opacity: 0, x: -5 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <Link
//                 href={href}
//                 className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md transition-all ${
//                   isLast 
//                     ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 cursor-default" 
//                     : "text-zinc-500 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 {segment.replace(/-/g, " ")}
//               </Link>
//             </motion.div>
//           </div>
//         );
//       })}

//       {/* TERMINAL DECORATION */}
//       <div className="hidden md:flex items-center gap-2 ml-4 opacity-20">
//          <div className="h-[1px] w-8 bg-white/20" />
//          <Terminal size={10} className="text-white" />
//       </div>
//     </nav>
//   );
// }








"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Fingerprint, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  if (pathSegments.length === 0) return null;

  return (
    <nav className="flex items-center gap-3 px-6 py-5 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar font-sans">
      {/* ROOT NODE: Home Icon */}
      <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all shadow-sm">
          <Home size={14} />
        </div>
      </Link>

      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <div key={href} className="flex items-center gap-3 shrink-0">
            <ChevronRight size={16} className="text-slate-200" />
            
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={href}
                className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-xl transition-all italic ${
                  isLast 
                    ? "text-blue-700 bg-blue-50 border border-blue-100 cursor-default shadow-sm" 
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {segment.replace(/-/g, " ")}
              </Link>
            </motion.div>
          </div>
        );
      })}

      {/* INSTITUTIONAL DECORATION (Visible on Desktop) */}
      <div className="hidden md:flex items-center gap-4 ml-auto opacity-40">
         <div className="h-[1px] w-12 bg-slate-100" />
         <div className="flex items-center gap-2">
            <Activity size={12} className="text-blue-600" />
            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest italic">Path_Validated</span>
         </div>
      </div>
    </nav>
  );
}