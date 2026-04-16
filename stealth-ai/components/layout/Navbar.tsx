// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Menu, X, ArrowRight, Shield, Cpu, 
//   GraduationCap, Briefcase, Globe, Zap, 
//   Layers, Sparkles, Bot , Users
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // 1. Updated Links: Platform added, AI Copilot included for Sidebar
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Platform", href: "/platform", icon: <Layers size={14} /> },
//     { name: "Services", href: "/services", icon: <Cpu size={14} /> },
//     { name: "Training", href: "/training", icon: <GraduationCap size={14} /> },
//     { name: "Conference", href: "/conference", icon: <Globe size={14} /> },
//     { name: "Projects", href: "/projects", icon: <Briefcase size={14} /> },
//     { name: "Founder", href: "/founder", icon: <Users size={14} /> },
//     { name: "Research", href: "/research", icon: <Shield size={14} /> },
//     { name: "Contact", href: "/contact", icon: <ArrowRight size={14} /> },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-4">
          
//           {/* LOGO & MENU BUTTON */}
//           <div className="flex items-center gap-6">
//             <button onClick={() => setOpen(true)} className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
//               <Menu size={20} className="text-zinc-400 group-hover:text-white" />
//             </button>
//             <Link href="/" className="flex items-center gap-2 group">
//               <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
//                 <span className="text-black font-black text-sm italic">S</span>
//               </div>
//               <div className="flex flex-col leading-none">
//                 <h1 className="text-xs font-black tracking-tighter uppercase italic text-white">STEALTH LABS</h1>
//                 <span className="text-[7px] font-mono text-cyan-500 uppercase tracking-widest">Intelligence Division</span>
//               </div>
//             </Link>
//           </div>

//           {/* DESKTOP LINKS - Main Navigation */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 href={link.href} 
//                 className="text-[9px] font-[900] uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-all relative group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
//               </Link>
//             ))}
//           </div>

//           {/* RIGHT ACTIONS: AI COPILOT & PORTAL */}
//           <div className="flex items-center gap-3">
//             {/* AI COPILOT QUICK LINK (Desktop Only) */}
//             <Link href="/ai-copilot" className="hidden xl:block">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all"
//               >
//                 <Bot size={12} /> AI Copilot
//               </motion.button>
//             </Link>

//             <Link href="/auth/login">
//               <button className="px-5 py-2 rounded-full bg-white text-black text-[9px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-2 group shadow-xl">
//                 Portal Access <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE / SIDEBAR MENU */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
//             />
//             <motion.div 
//               initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 w-80 h-full bg-[#050505] border-r border-white/5 z-[120] p-8 shadow-2xl flex flex-col justify-between"
//             >
//               <div className="space-y-12">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block leading-none mb-1">Navigation Node</span>
//                     <span className="text-[8px] font-mono text-indigo-500/50 uppercase tracking-widest">v4.5.2_PRO</span>
//                   </div>
//                   <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white p-1 hover:bg-white/5 rounded-md transition-all"><X size={20} /></button>
//                 </div>
                
//                 <div className="flex flex-col gap-5">
//                   {/* Added AI Copilot at top of Mobile Menu for visibility */}
//                   <Link href="/ai-copilot" onClick={() => setOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 mb-2 group">
//                     <Bot size={20} className="group-hover:rotate-12 transition-transform" />
//                     <span className="text-lg font-black uppercase italic tracking-tighter">AI Copilot</span>
//                   </Link>

//                   {navLinks.map((link, i) => (
//                     <Link 
//                       key={link.name} 
//                       href={link.href} 
//                       onClick={() => setOpen(false)} 
//                       className="group flex items-center justify-between border-b border-white/[0.03] pb-2 transition-all"
//                     >
//                       <div className="flex items-center gap-4">
//                         <span className="text-[10px] font-mono text-zinc-800">0{i+1}</span>
//                         <span className="text-xl font-black uppercase italic tracking-tighter text-zinc-400 group-hover:text-white group-hover:translate-x-2 transition-all">
//                           {link.name}
//                         </span>
//                       </div>
//                       <span className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity">
//                         {link.icon}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-8 border-t border-white/5">
//                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
//                   <Shield size={20} className="text-emerald-500" />
//                   <div>
//                     <p className="text-[9px] font-black uppercase tracking-widest text-white leading-none">System Status</p>
//                     <p className="text-[8px] font-mono text-emerald-500 animate-pulse mt-1 flex items-center gap-1">
//                       <span className="h-1 w-1 bg-emerald-500 rounded-full" /> OPERATIONAL // ENCRYPTED
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-center text-[8px] text-zinc-800 mt-6 uppercase tracking-widest font-black italic">© 2026 Stealth Technologies</p>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Menu, X, ArrowRight, Shield, Cpu, 
//   GraduationCap, Briefcase, Globe, Zap, 
//   Layers, Bot, Users, Landmark, Target, FileText, Handshake
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // Saare links: Purane + Naye (Journal, Company, Partners, Placements, Why Us)
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Journal", href: "/journal", icon: <FileText size={14} /> },
//     { name: "Academy", href: "/training", icon: <GraduationCap size={14} /> },
//     { name: "Why Us", href: "/why-us", icon: <Target size={14} /> },
//     { name: "Placements", href: "/placement", icon: <Zap size={14} /> },
//     { name: "Partners", href: "/partners", icon: <Handshake size={14} /> },
//     { name: "Company", href: "/company", icon: <Landmark size={14} /> },
//     { name: "Research", href: "/research", icon: <Shield size={14} /> },
//     { name: "Projects", href: "/projects", icon: <Briefcase size={14} /> },
//     { name: "Contact", href: "/contact", icon: <ArrowRight size={14} /> },
//   ];

//   return (
//     <>
//       {/* NAVIGATION BAR */}
//       <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
//         <div className="max-w-[1500px] mx-auto flex justify-between items-center px-8 py-4">
          
//           {/* LOGO & MENU BUTTON */}
//           <div className="flex items-center gap-6">
//             <button 
//               onClick={() => setOpen(true)} 
//               className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white transition-all group"
//             >
//               <Menu size={18} className="text-slate-600 group-hover:text-white" />
//             </button>
            
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                 <span className="text-white font-black text-lg italic">S</span>
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <h1 className="text-xs font-black tracking-tighter uppercase italic text-slate-900 leading-none">STEALTH LABS</h1>
//                 <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">Institutional Node</span>
//               </div>
//             </Link>
//           </div>

//           {/* DESKTOP LINKS (Clean & Minimal) */}
//           <div className="hidden xl:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 href={link.href} 
//                 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all relative group italic"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all group-hover:w-full"></span>
//               </Link>
//             ))}
//           </div>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-4">
//             <Link href="/ai-copilot" className="hidden lg:block">
//               <button className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all italic">
//                 <Bot size={14} /> AI Copilot
//               </button>
//             </Link>

//             <Link href="/auth/login">
//               <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl">
//                 Portal Access <ArrowRight size={14} />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE / SIDEBAR MENU */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[110]"
//             />
//             <motion.div 
//               initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 w-80 h-full bg-white border-r border-slate-100 z-[120] p-10 shadow-2xl flex flex-col justify-between overflow-y-auto"
//             >
//               <div className="space-y-16">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block leading-none mb-1 italic">Navigation Node</span>
//                     <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">v4.5.2_PRO</span>
//                   </div>
//                   <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-slate-900 p-2 hover:bg-slate-50 rounded-xl transition-all">
//                     <X size={24} />
//                   </button>
//                 </div>
                
//                 <div className="flex flex-col gap-4">
//                   {/* AI COPILOT AT TOP */}
//                   <Link href="/ai-copilot" onClick={() => setOpen(false)} className="flex items-center gap-4 p-5 rounded-3xl bg-blue-600 text-white mb-4 group shadow-lg">
//                     <Bot size={22} className="group-hover:rotate-12 transition-transform" />
//                     <span className="text-xl font-black uppercase italic tracking-tighter">AI Copilot</span>
//                   </Link>

//                   {navLinks.map((link, i) => (
//                     <Link 
//                       key={link.name} 
//                       href={link.href} 
//                       onClick={() => setOpen(false)} 
//                       className="group flex items-center justify-between border-b border-slate-50 py-3 transition-all"
//                     >
//                       <div className="flex items-center gap-4">
//                         <span className="text-[10px] font-bold text-slate-200 uppercase tracking-tighter italic">0{i+1}</span>
//                         <span className="text-lg font-black uppercase italic tracking-tighter text-slate-400 group-hover:text-slate-900 group-hover:translate-x-2 transition-all">
//                           {link.name}
//                         </span>
//                       </div>
//                       <span className="opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity">
//                         {link.icon}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* SYSTEM STATUS AT BOTTOM */}
//               <div className="pt-8 border-t border-slate-50">
//                 <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4">
//                   <Shield size={24} className="text-emerald-500" />
//                   <div>
//                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-900 italic leading-none">System Status</p>
//                     <p className="text-[8px] font-bold text-emerald-500 mt-1.5 flex items-center gap-2">
//                       <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> OPERATIONAL // ENCRYPTED
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-center text-[9px] text-slate-300 mt-8 uppercase tracking-widest font-black italic">© 2026 StealthAI Technologies</p>
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
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  GraduationCap, 
  Shield, 
  FileText, 
  Zap, 
  Handshake, 
  Briefcase, 
  User, 
  Landmark, 
  Target, 
  ArrowRight,
  ArrowUpRight,
  Fingerprint, // Hamburger ke liye
  X, Menu     // Sidebar close karne ke liye
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Sidebar state

  // Sidebar ke andar ke links (Beech se hatakar yahan daal diye)
  const navLinks = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  
  // 1. ACADEMIC & RESEARCH (Main Core)
  { name: "Academy", href: "/training", icon: <GraduationCap size={18} /> },
  { name: "Research Hub", href: "/research", icon: <Shield size={18} /> },
  { name: "Digital Journal", href: "/journal", icon: <FileText size={18} /> },
  
  // 2. SUCCESS & TRUST (User Validation)
  { name: "Placements", href: "/placement", icon: <Zap size={18} /> },
  { name: "Our Partners", href: "/partners", icon: <Handshake size={18} /> },
  { name: "Live Projects", href: "/projects", icon: <Briefcase size={18} /> },
  
  // 3. ABOUT THE BRAINS (Human Connection)
  { name: "The Founder", href: "/founder", icon: <User size={18} /> },
  { name: "The Council", href: "/company", icon: <Landmark size={18} /> }, // Council Visionaries wala page
  
  // 4. UTILS
  { name: "Why Stealth?", href: "/why-us", icon: <Target size={18} /> },
  { name: "Get in Touch", href: "/contact", icon: <ArrowRight size={18} /> },
];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 font-sans">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-8 py-4">
          
          {/* LEFT SIDE: LOGO & MENU BUTTON */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setOpen(true)} // ✅ Yaha se Menu khulega
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

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <button className="px-7 py-2.5 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl">
                Portal Access <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* 🚀 SIDEBAR LOGIC (Yahi missing tha) 🚀 */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[110]"
            />

            {/* Actual Sidebar Content */}
            <motion.div 
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-80 h-full bg-white border-r border-slate-100 z-[120] p-10 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-16">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block italic">Navigation Hub</span>
                    <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">Institutional_v4.5</span>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-slate-900 p-2 hover:bg-slate-50 rounded-xl">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setOpen(false)} 
                      className="group flex items-center justify-between border-b border-slate-50 py-3 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-slate-200 italic">0{i+1}</span>
                        <span className="text-lg font-black uppercase italic tracking-tighter text-slate-400 group-hover:text-slate-900 group-hover:translate-x-2 transition-all">
                          {link.name}
                        </span>
                      </div>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="pt-8 border-t border-slate-50">
                <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4">
                  <Fingerprint size={24} className="text-blue-600" />
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-900 italic leading-none">Status</p>
                    <p className="text-[8px] font-bold text-emerald-500 mt-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> SYSTEM_READY
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}