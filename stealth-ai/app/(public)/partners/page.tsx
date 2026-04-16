// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import { PageHeader } from "@/components/common/PageHeader";
// import { Building2, Rocket, Globe, BrainCircuit, ShieldCheck, Zap } from "lucide-react";

// const categories = [
//   { name: "Tier-1 Startups", desc: "High-growth Indian ecosystem partners.", icon: <Rocket size={24} />, color: "text-purple-500" },
//   { name: "Tech Enterprises", desc: "Established software engineering firms.", icon: <Building2 size={24} />, color: "text-cyan-500" },
//   { name: "AI Research Labs", desc: "Specialized neural network and R&D hubs.", icon: <BrainCircuit size={24} />, color: "text-emerald-500" },
//   { name: "Global Clients", desc: "International offshore development nodes.", icon: <Globe size={24} />, color: "text-amber-500" },
// ];

// export default function Partners() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-purple-500/30">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER SECTION */}
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-purple-500">
//             <ShieldCheck size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Verified Network</span>
//           </div>
//           <PageHeader 
//             title="Partner Ecosystem" 
//             subtitle="Strategic alliances with global technology leaders and high-growth innovation hubs." 
//           />
//         </FadeIn>

//         {/* PARTNER CATEGORIES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
//           {categories.map((cat, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <div className="group p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-white/10 transition-all text-center flex flex-col items-center gap-6 relative overflow-hidden">
//                 <div className={`h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center ${cat.color} group-hover:bg-white group-hover:text-black transition-all duration-500`}>
//                   {cat.icon}
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-sm font-black uppercase tracking-widest text-white">{cat.name}</h3>
//                   <p className="text-[10px] text-zinc-600 font-bold uppercase italic tracking-tight">{cat.desc}</p>
//                 </div>
                
//                 {/* Subtle Glow */}
//                 <div className="absolute -bottom-10 -right-10 h-20 w-20 bg-white/5 blur-[40px] rounded-full group-hover:bg-purple-500/10 transition-all" />
//               </div>
//             </FadeIn>
//           ))}
//         </div>

//         {/* COLLABORATION CALL-TO-ACTION */}
//         <FadeIn delay={0.4}>
//           <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-zinc-950 to-black border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="space-y-4 text-center md:text-left">
//               <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter text-white">
//                 Become a <span className="text-purple-500">Hiring Partner.</span>
//               </h2>
//               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 max-w-xl">
//                 Onboard verified talent nodes and streamline your technical recruitment with Stealth AI's proof-of-work ecosystem.
//               </p>
//             </div>
//             <button className="px-10 py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all flex items-center gap-3">
//               Apply for Uplink <Zap size={16} />
//             </button>
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// }








"use client";

import { 
  Building2, Rocket, Globe, BrainCircuit, ShieldCheck, Zap, 
  Fingerprint, ArrowRight, Network, Handshake, ChevronRight, Activity 
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Tier-1 Startups", desc: "High-growth Indian ecosystem partners.", icon: <Rocket size={24} />, color: "text-blue-600" },
  { name: "Tech Enterprises", desc: "Established software engineering firms.", icon: <Building2 size={24} />, color: "text-slate-900" },
  { name: "AI Research Labs", desc: "Specialized neural network and R&D hubs.", icon: <BrainCircuit size={24} />, color: "text-blue-600" },
  { name: "Global Clients", desc: "International offshore development nodes.", icon: <Globe size={24} />, color: "text-slate-900" },
];

export default function Partners() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. ARCHITECTURAL BACKGROUND (Technical Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER SECTION (Concise & Institutional) */}
        <div className="mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <ShieldCheck size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Verified Partner Network v4.5</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-8 uppercase italic">
            Alliance <br/> <span className="text-blue-700">Ecosystem.</span>
          </h1>

          <p className="text-slate-500 text-xl max-w-2xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            Strategic alliances with global technology leaders, high-growth innovation hubs, and sovereign research entities.
          </p>
        </div>

        {/* 3. PARTNER TELEMETRY (Added for Trust) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
           {[
             { l: "Hiring Partners", v: "10+" },
             { l: "Global Nodes", v: "04" },
             { l: "Talent Synced", v: "200+" },
             { l: "Tech Validated", v: "100%" }
           ].map((s, i) => (
             <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
                <div className="text-3xl font-black italic text-slate-900">{s.v}</div>
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1">{s.l}</div>
             </div>
           ))}
        </div>

        {/* 4. PARTNER CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-blue-600 transition-all flex flex-col items-center text-center shadow-sm relative overflow-hidden">
               <div className={`h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center ${cat.color} group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner mb-8`}>
                  {cat.icon}
               </div>
               <div className="space-y-4 relative z-10">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-900">{cat.name}</h3>
                  <p className="text-sm font-medium text-slate-500 italic leading-relaxed">{cat.desc}</p>
               </div>
               <div className="mt-8 pt-6 border-t border-slate-50 w-full">
                  <span className="text-[9px] font-black text-slate-200 uppercase tracking-[0.3em]">Protocol_v4 Active</span>
               </div>
            </div>
          ))}
        </div>

        {/* 5. HIRING PARTNER CALL-TO-ACTION (Institutional Box) */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-6 text-center md:text-left">
                 <div className="flex items-center gap-3 justify-center md:justify-start text-blue-400">
                    <Handshake size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Industry Collaboration Node</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                    Become a <br /> <span className="text-blue-500">Hiring Partner.</span>
                 </h2>
                 <p className="text-slate-400 max-w-xl font-medium italic text-lg leading-relaxed">
                    Onboard verified talent nodes and streamline your technical recruitment with StealthAI's rigorous proof-of-work ecosystem.
                 </p>
              </div>
              <Link href="/contact">
                <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-4 group">
                   Initialize Sync <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
           </div>
        </div>

        {/* 6. RETURN FOOTNOTE */}
        <div className="mt-24 text-center">
           <Link href="/">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto">
                 <ChevronRight size={14} className="rotate-180" /> Return to command center
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}