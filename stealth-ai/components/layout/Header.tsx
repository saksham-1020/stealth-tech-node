// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Menu, X, Zap, Code2, GraduationCap, 
//   Microscope, Briefcase, Info, User, LayoutPanelLeft, 
//   ArrowUpRight, BookOpen, Presentation, ArrowRight, CheckCircle2 
// } from "lucide-react";

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔥 MAGIC LOGIC: Hide Header on restricted pages
//   const hideHeader =
//     pathname.startsWith("/journal") ||
//     pathname.startsWith("/conference") ||
//     pathname.startsWith("/dashboard") ||
//     pathname.startsWith("/auth");

//   if (hideHeader) return null; // Agar in pages par hain, toh Header mat dikhao!

//   const navLinks = [
//     { name: "Services", href: "/services", icon: <Code2 size={14} /> },
//     { name: "Training", href: "/training", icon: <GraduationCap size={14} /> },
//     { name: "Research", href: "/research", icon: <Microscope size={14} /> },
//   ];

//   const specializedLinks = [
//     { name: "Journal", href: "/journal", icon: <BookOpen size={14} />, badge: "Active" },
//     { name: "Conference", href: "/conference", icon: <Presentation size={14} />, badge: "2026" },
//   ];

//   const extraLinks = [
//     { name: "Platform", href: "/platform", icon: <LayoutPanelLeft size={18} /> },
//     { name: "Projects", href: "/projects", icon: <Briefcase size={18} /> },
//     { name: "Placement", href: "/placement", icon: <CheckCircle2 size={18} /> },
//     { name: "Careers", href: "/careers", icon: <Zap size={18} /> },
//     { name: "Founder", href: "/founder", icon: <User size={18} /> },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 bg-black/60 backdrop-blur-2xl border-b border-white/10" : "py-6 bg-transparent"}`}>
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <Link href="/" className="group flex items-center gap-3">
//           <div className="h-9 w-9 bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
//             <span className="text-black font-black text-xl italic">S</span>
//           </div>
//           <span className="text-2xl font-black tracking-tighter uppercase italic hidden sm:block">
//             Stealth <span className="text-gray-500 group-hover:text-white transition-colors">AI</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className={`text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all hover:scale-105 ${pathname === link.href ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}>
//               {link.icon} {link.name}
//             </Link>
//           ))}
          
//           <div className="h-4 w-[1px] bg-white/10 mx-2" />

//           {specializedLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="group relative text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-purple-400 hover:text-white transition-all">
//               {link.icon} {link.name}
//               <span className="absolute -top-3 -right-4 text-[7px] px-1.5 py-0.5 bg-purple-500 text-white rounded-full animate-pulse uppercase tracking-tighter">{link.badge}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* AUTH BUTTONS */}
//         <div className="flex items-center gap-4">
//           <Link href="/auth/login" className="hidden sm:block">
//             <button className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white px-4 py-2 transition-all">Login</button>
//           </Link>
//           <Link href="/auth/register">
//             <button className="bg-white text-black text-[10px] font-[1000] uppercase tracking-[0.2em] px-7 py-3 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all active:scale-95">Get Started</button>
//           </Link>
//           <button onClick={() => setIsOpen(true)} className="text-white hover:text-cyan-400 transition-colors p-2 bg-white/5 rounded-lg border border-white/10 ml-2">
//             <Menu size={20} />
//           </button>
//         </div>
//       </div>

//       {/* SIDEBAR OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]" />
//             <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-full max-w-sm bg-zinc-950 border-l border-white/10 z-[120] p-10 flex flex-col">
//               <div className="flex items-center justify-between mb-12">
//                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Navigation</span>
//                 <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform duration-300"><X size={24} /></button>
//               </div>
//               <div className="flex flex-col gap-1">
//                 {[...navLinks, ...specializedLinks, ...extraLinks].map((link) => (
//                   <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="group flex items-center justify-between py-4 border-b border-white/5">
//                     <div className="flex items-center gap-4">
//                       <span className="text-gray-600 group-hover:text-cyan-400 transition-colors">{link.icon}</span>
//                       <span className="text-xl font-black italic uppercase tracking-tighter text-gray-400 group-hover:text-white transition-all">{link.name}</span>
//                     </div>
//                     <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all text-cyan-400" />
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };














"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Zap, Code2, GraduationCap, 
  Microscope, Briefcase, User, LayoutPanelLeft, 
  ArrowUpRight, BookOpen, Presentation, ArrowRight, CheckCircle2,
  Target, Handshake, Landmark, Fingerprint, Activity
} from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MAGIC LOGIC: Hide Header on specific system pages
  const hideHeader =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/auth");

  if (hideHeader) return null;

  // Primary Navigation (Main focus)
  const navLinks = [
    { name: "Academy", href: "/training", icon: <GraduationCap size={14} /> },
    { name: "Services", href: "/services", icon: <Code2 size={14} /> },
    { name: "Research", href: "/research", icon: <Microscope size={14} /> },
  ];

  // Professional & Academic Sub-nodes
  const subNodes = [
    { name: "Journal", href: "/journal", icon: <BookOpen size={14} />, badge: "Active" },
    { name: "Conference", href: "/conference", icon: <Presentation size={14} />, badge: "2026" },
  ];

  // Full Ecosystem Links (Sidebar focus)
  const ecosystemLinks = [
    { name: "Platform", href: "/platform", icon: <LayoutPanelLeft size={16} /> },
    { name: "Why Us", href: "/why-us", icon: <Target size={16} /> },
    { name: "Placements", href: "/placement", icon: <CheckCircle2 size={16} /> },
    { name: "Partners", href: "/partners", icon: <Handshake size={16} /> },
    { name: "Company", href: "/company", icon: <Landmark size={16} /> },
    { name: "Careers", href: "/careers", icon: <Zap size={16} /> },
    { name: "Projects", href: "/projects", icon: <Briefcase size={16} /> },
    { name: "Founder", href: "/founder", icon: <User size={16} /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" 
      : "py-6 bg-transparent"
    }`}>
      <div className="max-w-[1500px] mx-auto px-8 flex items-center justify-between">
        
        {/* 1. BRAND IDENTITY */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(true)} 
            className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white transition-all group"
          >
            <Menu size={20} className="text-slate-600 group-hover:text-white" />
          </button>
          
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
              <span className="text-white font-black text-xl italic">S</span>
            </div>
            <div className="flex flex-col leading-none hidden sm:flex">
               <h1 className="text-sm font-black tracking-tighter uppercase italic text-slate-900">STEALTH_AI</h1>
               <span className="text-[8px] font-bold text-blue-600 uppercase tracking-[0.3em] italic">Institutional Node</span>
            </div>
          </Link>
        </div>

        {/* 2. DESKTOP CENTRAL NAV (Sober) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 transition-all italic ${
                pathname === link.href ? "text-blue-600 underline underline-offset-8" : "text-slate-400 hover:text-slate-900"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-slate-200" />

          {subNodes.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="group relative text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all italic"
            >
              {link.icon} {link.name}
              <span className="absolute -top-3 -right-4 text-[7px] px-1.5 py-0.5 bg-blue-600 text-white rounded-full uppercase tracking-tighter shadow-lg shadow-blue-500/20">{link.badge}</span>
            </Link>
          ))}
        </nav>

        {/* 3. SYSTEM ACCESS */}
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="hidden md:block">
            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 px-4 py-2 transition-all italic">Sign In</button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-2xl hover:bg-blue-700 shadow-xl shadow-slate-200 transition-all active:scale-95">
              Portal Access
            </button>
          </Link>
        </div>
      </div>

      {/* 4. ECOSYSTEM SIDEBAR (Full-Screen Sober) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[110]" 
            />
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }} 
              className="fixed top-0 left-0 h-full w-full max-w-sm bg-white border-r border-slate-100 z-[120] p-10 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-16">
                <div className="space-y-1">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block italic">Navigation Hub</span>
                   <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest italic">v4.5.2_INS</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-slate-900 transition-all p-2 hover:bg-slate-50 rounded-xl">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {[...navLinks, ...subNodes, ...ecosystemLinks].map((link, i) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="group flex items-center justify-between py-4 border-b border-slate-50"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-bold text-slate-200 italic">0{i+1}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-300 group-hover:text-blue-600 transition-colors">{link.icon}</span>
                        <span className="text-2xl font-black italic uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 group-hover:translate-x-3 transition-all">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all text-blue-600" />
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-slate-100">
                 <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-4">
                    <Fingerprint size={24} className="text-blue-600" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 italic">System Sync</p>
                       <p className="text-[8px] font-bold text-emerald-500 mt-1 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> NODES_OPERATIONAL
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};