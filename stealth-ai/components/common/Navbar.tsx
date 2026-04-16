// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X, ArrowRight, Shield, Cpu, GraduationCap, Briefcase, Globe } from "lucide-react";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   // Updated links to match your folder structure
// //   const navLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "Services", href: "/services", icon: <Cpu size={16} /> },
// //     { name: "Training", href: "/training", icon: <GraduationCap size={16} /> },
// //     { name: "Research", href: "/research", icon: <Shield size={16} /> },
// //     { name: "Placement", href: "/placement", icon: <ArrowRight size={16} /> },
// //     { name: "Conference", href: "/conference", icon: <Globe size={16} /> },
// //     { name: "Careers", href: "/careers", icon: <Briefcase size={16} /> },
// //     { name: "Contact", href: "/contact", icon: <ArrowRight size={16} /> },
// //   ];

// //   return (
// //     <>
// //       <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5">
// //         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          
// //           <div className="flex items-center gap-4">
// //             <button onClick={() => setOpen(true)} className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
// //               <Menu size={24} className="text-zinc-400 group-hover:text-white" />
// //             </button>
// //             <Link href="/" className="flex items-center gap-2 group">
// //               <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
// //                 <span className="text-black font-black text-sm italic">S</span>
// //               </div>
// //               <h1 className="text-lg font-black tracking-tighter uppercase italic">STEALTH <span className="text-zinc-500">AI</span></h1>
// //             </Link>
// //           </div>

// //           <Link href="/auth/login" className="hidden md:block">
// //             <button className="px-6 py-2 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors flex items-center gap-2 group">
// //               Portal Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </Link>
// //         </div>
// //       </nav>

// //       <AnimatePresence>
// //         {open && (
// //           <>
// //             <motion.div 
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //               onClick={() => setOpen(false)}
// //               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
// //             />
// //             <motion.div 
// //               initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
// //               transition={{ type: "spring", damping: 25, stiffness: 200 }}
// //               className="fixed top-0 left-0 w-80 h-full bg-[#050505] border-r border-white/5 z-[120] p-8 shadow-2xl flex flex-col justify-between"
// //             >
// //               <div className="space-y-12">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block">Navigation Node</span>
// //                     <span className="text-[8px] font-mono text-cyan-500/50">V4.2.0_STABLE</span>
// //                   </div>
// //                   <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white p-1 hover:bg-white/5 rounded-md"><X size={20} /></button>
// //                 </div>
                
// //                 <div className="flex flex-col gap-5">
// //                   {navLinks.map((link, i) => (
// //                     <Link 
// //                       key={link.name} 
// //                       href={link.href} 
// //                       onClick={() => setOpen(false)} 
// //                       className="group flex items-center justify-between border-b border-white/[0.03] pb-2 transition-all"
// //                     >
// //                       <div className="flex items-center gap-4">
// //                         <span className="text-[10px] font-mono text-zinc-800">0{i+1}</span>
// //                         <span className="text-xl font-black uppercase italic tracking-tighter text-zinc-400 group-hover:text-white group-hover:translate-x-2 transition-all">
// //                           {link.name}
// //                         </span>
// //                       </div>
// //                       <span className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity">
// //                         {link.icon}
// //                       </span>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="pt-8 border-t border-white/5">
// //                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
// //                   <Shield size={20} className="text-cyan-500" />
// //                   <div>
// //                     <p className="text-[9px] font-black uppercase tracking-widest text-white">System Status</p>
// //                     <p className="text-[8px] font-mono text-emerald-500 flex items-center gap-1">
// //                       <span className="h-1 w-1 bg-emerald-500 rounded-full animate-pulse" />
// //                       OPERATIONAL // ENCRYPTED
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <p className="text-center text-[8px] text-zinc-800 mt-6 uppercase tracking-widest font-black">© 2026 Stealth Tech</p>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }








// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Menu, X, ArrowRight, Shield, Cpu, 
//   GraduationCap, Briefcase, Globe, Fingerprint 
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services", icon: <Cpu size={16} /> },
//     { name: "Training", href: "/training", icon: <GraduationCap size={16} /> },
//     { name: "Research", href: "/research", icon: <Shield size={16} /> },
//     { name: "Placement", href: "/placement", icon: <ArrowRight size={16} /> },
//     { name: "Conference", href: "/conference", icon: <Globe size={16} /> },
//     { name: "Careers", href: "/careers", icon: <Briefcase size={16} /> },
//     { name: "Contact", href: "/contact", icon: <ArrowRight size={16} /> },
//   ];

//   return (
//     <>
//       {/* 1. TOP NAVIGATION BAR */}
//       <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 font-sans">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          
//           <div className="flex items-center gap-6">
//             {/* Menu Trigger */}
//             <button 
//               onClick={() => setOpen(true)} 
//               className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white transition-all group shadow-sm"
//             >
//               <Menu size={20} className="text-slate-600 group-hover:text-white" />
//             </button>

//             {/* Brand Logo */}
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
//                 <span className="text-white font-black text-lg italic">S</span>
//               </div>
//               <div className="flex flex-col leading-none">
//                 <h1 className="text-sm font-black tracking-tighter uppercase italic text-slate-900">STEALTH_AI</h1>
//                 <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">Institutional Node</span>
//               </div>
//             </Link>
//           </div>

//           {/* Action Button */}
//           <Link href="/auth/login" className="hidden md:block">
//             <button className="px-7 py-2.5 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-slate-200">
//               Portal Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* 2. SIDEBAR NAVIGATION */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Soft Overlay */}
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[110]"
//             />

//             {/* Sidebar Content */}
//             <motion.div 
//               initial={{ x: "-100%" }} 
//               animate={{ x: 0 }} 
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 w-80 h-full bg-white border-r border-slate-100 z-[120] p-10 shadow-2xl flex flex-col justify-between overflow-y-auto"
//             >
//               <div className="space-y-16">
//                 <div className="flex items-center justify-between">
//                   <div className="space-y-1">
//                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block italic">Navigation Hub</span>
//                     <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">v4.5.2_PRO</span>
//                   </div>
//                   <button 
//                     onClick={() => setOpen(false)} 
//                     className="text-slate-300 hover:text-slate-900 transition-all p-2 hover:bg-slate-50 rounded-xl"
//                   >
//                     <X size={24} />
//                   </button>
//                 </div>
                
//                 <nav className="flex flex-col gap-2">
//                   {navLinks.map((link, i) => (
//                     <Link 
//                       key={link.name} 
//                       href={link.href} 
//                       onClick={() => setOpen(false)} 
//                       className="group flex items-center justify-between border-b border-slate-50 py-4 transition-all"
//                     >
//                       <div className="flex items-center gap-5">
//                         <span className="text-[10px] font-bold text-slate-200 italic">0{i+1}</span>
//                         <div className="flex items-center gap-4">
//                            <span className="text-slate-300 group-hover:text-blue-600 transition-colors">{link.icon}</span>
//                            <span className="text-2xl font-black uppercase italic tracking-tighter text-slate-400 group-hover:text-slate-900 group-hover:translate-x-3 transition-all">
//                             {link.name}
//                            </span>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </nav>
//               </div>

//               {/* System Info Footnote */}
//               <div className="pt-8 border-t border-slate-50">
//                 <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4">
//                   <Fingerprint size={24} className="text-blue-600" />
//                   <div>
//                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-900 italic leading-none">Node Status</p>
//                     <p className="text-[8px] font-bold text-emerald-500 mt-1.5 flex items-center gap-2">
//                       <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> OPERATIONAL // SECURE
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-center text-[9px] text-slate-300 mt-8 uppercase tracking-widest font-black italic">© 2026 StealthAI Hub</p>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }













"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight, Bot } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 font-sans">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center px-8 py-4">
        
        {/* LEFT SIDE: LOGO & MENU BUTTON (Inhe rehne diya hai) */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setOpen(true)} 
            className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white transition-all group shadow-sm"
          >
            <Menu size={20} className="text-slate-600 group-hover:text-white" />
          </button>
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg italic">S</span>
            </div>
            <div className="flex flex-col leading-none hidden sm:flex">
              <h1 className="text-sm font-black tracking-tighter uppercase italic text-slate-900">STEALTH_AI</h1>
              <span className="text-[8px] font-bold text-blue-600 uppercase tracking-[0.3em] italic">Institutional Node</span>
            </div>
          </Link>
        </div>

        {/* 🚀 BEECH KE SAARE LINKS (Home, Services, etc.) DELETE KAR DIYE HAIN 🚀 */}

        {/* RIGHT SIDE: PORTAL ACCESS (Inhe professional look ke liye rakha hai) */}
        <div className="flex items-center gap-4">
          <Link href="/ai-copilot" className="hidden lg:block">
            <button className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all italic">
              <Bot size={14} /> AI Copilot
            </button>
          </Link>

          <Link href="/auth/login">
            <button className="px-7 py-2.5 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-slate-200">
              Portal Access <ArrowRight size={14} />
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}