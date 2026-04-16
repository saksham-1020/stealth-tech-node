// "use client";

// import { COMPANY } from "@/lib/config";
// import Link from "next/link";
// import { Github, Twitter, Linkedin, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     ecosystem: [
//       { name: "About Node", href: "/about" },
//       { name: "Careers", href: "/careers" },
//       { name: "Core Platform", href: "/platform" },
//       { name: "FAQ", href: "/faq" },
//     ],
//     legal: [
//       { name: "Privacy Protocol", href: "/legal/privacy" },
//       { name: "Terms of Service", href: "/legal/terms" },
//       { name: "Compliance", href: "/legal/disclaimer" },
//     ],
//     social: [
//       { name: "GitHub", href: "https://github.com", icon: <Github size={16} /> },
//       { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} /> },
//       { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={16} /> },
//     ],
//   };

//   return (
//     <footer className="relative bg-[#020202] text-white border-t border-white/5 pt-24 pb-12 overflow-hidden selection:bg-cyan-500/30">
      
//       {/* 1. ARCHITECTURAL GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6">
        
//         {/* ===== TOP SECTION: BRAND & LINKS ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
//           {/* Brand Identity */}
//           <div className="lg:col-span-2 space-y-8">
//             <Link href="/" className="flex items-center gap-3 group">
//               <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
//                 <span className="text-black font-black text-xl italic">S</span>
//               </div>
//               <span className="text-2xl font-black tracking-tighter uppercase italic">
//                 {COMPANY.name} <span className="text-zinc-600">Technologies</span>
//               </span>
//             </Link>
//             <p className="text-zinc-500 text-sm leading-relaxed max-w-md font-medium italic">
//               "Architecting sovereign intelligence. We build the infrastructure that empowers the next generation of AI-driven ecosystems and future-ready engineering solutions."
//             </p>
//             <div className="flex items-center gap-4">
//               {footerLinks.social.map((social) => (
//                 <a key={social.name} href={social.href} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Ecosystem Links */}
//           <div className="space-y-6">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">Ecosystem</h3>
//             <ul className="space-y-4">
//               {footerLinks.ecosystem.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-sm text-zinc-500 hover:text-white flex items-center gap-2 group transition-colors">
//                     {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Node */}
//           <div className="space-y-6">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500">Communications</h3>
//             <div className="space-y-4">
//               <a href={`mailto:${COMPANY.email}`} className="block group">
//                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Official Uplink</p>
//                 <p className="text-sm font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
//                   <Mail size={14} /> {COMPANY.email}
//                 </p>
//               </a>
//               <div className="pt-4 border-t border-white/5">
//                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Infrastructure Status</p>
//                <div className="text-xs font-black text-emerald-500 flex items-center gap-2">
//   <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
//   <span className="uppercase tracking-widest">ALL NODES OPERATIONAL</span>
// </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== BOTTOM SECTION: COMPLIANCE & LEGAL ===== */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
//           <div className="space-y-2">
//             <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
//               © {currentYear} {COMPANY.fullName} • Sovereign Digital Infrastructure
//             </p>
//             <div className="flex flex-wrap justify-center md:justify-start gap-6">
//               {footerLinks.legal.map((link) => (
//                 <Link key={link.name} href={link.href} className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-tighter">
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-6 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 group hover:border-cyan-500/30 transition-all">
//              <ShieldCheck size={20} className="text-cyan-500" />
//              <div className="text-left">
//                 <p className="text-[9px] font-black uppercase tracking-widest text-white">Startup India Aligned</p>
//                 <p className="text-[8px] font-bold text-zinc-600 uppercase italic leading-none">Indore Innovation Hub Node</p>
//              </div>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }













"use client";

import { COMPANY } from "@/lib/config";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, ShieldCheck, Fingerprint, Activity } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    ecosystem: [
      { name: "Our Story", href: "/company" },
      { name: "Careers", href: "/careers" },
      { name: "Academy", href: "/training" },
      { name: "Journal", href: "/journal" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Protocol", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Disclaimer", href: "/legal/disclaimer" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com", icon: <Github size={18} /> },
      { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={18} /> },
      { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={18} /> },
    ],
  };

  return (
    /* CHANGE: Bg color set to bg-slate-50 to distinguish from main white content */
    <footer className="relative bg-slate-50 text-slate-900 border-t-4 border-blue-600 pt-24 pb-12 overflow-hidden selection:bg-blue-100 font-sans">
      
      {/* 1. ARCHITECTURAL GRID (Subtle Engineering feel) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="h-12 w-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-blue-600 transition-all duration-500">
                <span className="text-white font-black text-2xl italic">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter uppercase italic">
                  STEALTH<span className="text-blue-600">AI</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1 italic">Technologies</span>
              </div>
            </Link>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium italic border-l-4 border-slate-200 pl-8 group-hover:border-blue-600 transition-all">
              "Building smart digital solutions and training the next generation of engineers through real-world industrial research."
            </p>

            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <a key={social.name} href={social.href} className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all duration-500 shadow-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem Links */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic underline decoration-blue-100 underline-offset-8">Ecosystem</h3>
            <ul className="space-y-4">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 flex items-center gap-2 group transition-colors italic">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Node */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 italic">Communications</h3>
            <div className="space-y-6">
              <a href={`mailto:${COMPANY.email}`} className="block group">
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-2 italic">Official Link</p>
                <p className="text-base font-black text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <Mail size={16} /> {COMPANY.email}
                </p>
              </a>
              
              <div className="pt-6 border-t border-slate-200">
                <div className="text-[10px] font-black text-emerald-600 flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-emerald-100 w-fit shadow-sm">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="uppercase tracking-widest italic">All Nodes Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
              © {currentYear} {COMPANY.fullName} • Sovereign Digital Infrastructure Hub
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-[10px] font-black text-slate-300 hover:text-blue-600 uppercase tracking-widest transition-colors italic">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 px-8 py-5 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
             <Fingerprint size={24} className="text-blue-600" />
             <div className="text-left leading-tight">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 italic">Global Innovation Node</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1 italic">Indore // Digital India Partner</p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}