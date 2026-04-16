// "use client";

// import { motion } from "framer-motion";
// import FadeIn from "@/components/animations/FadeIn";
// import GlassCard from "@/components/ui/GlassCard";
// import { ShieldCheck, Target, Eye, Cpu, Landmark, Rocket } from "lucide-react";

// const complianceNodes = [
//   { label: "MSME Registration", status: "In Progress", icon: <Landmark size={18} /> },
//   { label: "Startup India Node", status: "Planned", icon: <Rocket size={18} /> },
//   { label: "MCA Legal Entity", status: "Upcoming", icon: <ShieldCheck size={18} /> },
//   { label: "ISO Architecture", status: "Planned", icon: <Cpu size={18} /> },
// ];

// export default function Company() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
      
//       {/* 1. BACKGROUND AMBIENCE */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER SECTION */}
//         <FadeIn>
//           <div className="mb-20 space-y-4">
//             <h1 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-white">
//               Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Profile.</span>
//             </h1>
//             <p className="text-zinc-500 text-sm md:text-lg italic font-medium max-w-3xl leading-relaxed uppercase tracking-wide">
//               STEALTH AI is an emerging Artificial Intelligence and software 
//               innovation company focused on building scalable AI systems, 
//               SaaS platforms, and real-world engineering solutions.
//             </p>
//           </div>
//         </FadeIn>

//         {/* 2. MISSION & VISION GRID */}
//         <div className="grid md:grid-cols-2 gap-8 mb-24">
//           <FadeIn direction="left">
//             <GlassCard className="h-full border-cyan-500/10 group">
//               <div className="space-y-6">
//                 <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
//                   <Target size={28} />
//                 </div>
//                 <h2 className="text-2xl font-black uppercase italic tracking-tighter">Our Mission</h2>
//                 <p className="text-zinc-400 text-sm leading-relaxed italic">
//                   To architect real-world AI systems and create a global workforce of 
//                   industry-ready developers through deep-tech practical innovation 
//                   and hands-on research.
//                 </p>
//               </div>
//             </GlassCard>
//           </FadeIn>

//           <FadeIn direction="right">
//             <GlassCard className="h-full border-purple-500/10 group">
//               <div className="space-y-6">
//                 <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-black transition-all duration-500">
//                   <Eye size={28} />
//                 </div>
//                 <h2 className="text-2xl font-black uppercase italic tracking-tighter">The Vision</h2>
//                 <p className="text-zinc-400 text-sm leading-relaxed italic">
//                   To become the primary global node for AI engineering and software 
//                   innovation, bridging the gap between theoretical research and 
//                   sovereign digital infrastructure.
//                 </p>
//               </div>
//             </GlassCard>
//           </FadeIn>
//         </div>

//         {/* 3. COMPLIANCE TELEMETRY */}
//         <FadeIn delay={0.2}>
//           <div className="p-12 rounded-[3rem] bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter">Compliance <span className="text-cyan-500 text-xl tracking-widest ml-2 italic underline opacity-50">v1.0.4</span></h2>
//                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Regulatory & Alignment Status</p>
//               </div>
//               <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
//                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> Digital India Aligned
//                  </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {complianceNodes.map((node, i) => (
//                 <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-cyan-500/30 transition-all">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="text-zinc-500 group-hover:text-white transition-colors">
//                       {node.icon}
//                     </div>
//                     <p className="text-[11px] font-black uppercase tracking-widest text-white">{node.label}</p>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter">{node.status}</span>
//                     <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
//                        <div className="h-full w-1/3 bg-zinc-700" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </FadeIn>

//         {/* 4. ECOSYSTEM ADVISORY */}
//         <div className="mt-12 text-center italic text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
//            Building in alignment with India's startup, technology and innovation ecosystem.
//         </div>

//       </div>
//     </div>
//   );
// }












"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Cpu, Landmark, Rocket, Fingerprint, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

const complianceNodes = [
  { label: "MSME Registration", status: "Verified Node", icon: <Landmark size={20} />, active: true },
  { label: "Startup India Hub", status: "Authentication In-Progress", icon: <Rocket size={20} />, active: false },
  { label: "MCA Legal Entity", status: "Active Status", icon: <ShieldCheck size={20} />, active: true },
  { label: "ISO Audit", status: "Scheduled Cycle", icon: <Cpu size={20} />, active: false },
];

export default function Company() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION (Easy & Clear) */}
        <div className="mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Institutional Profile v4.5.0</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic">
            Company <br/> <span className="text-blue-700">Profile.</span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            STEALTHAI is an emerging software innovation company. We focus on building scalable AI systems, modern SaaS platforms, and real-world engineering solutions for the global market.
          </p>
        </div>

        {/* 2. MISSION & VISION GRID (Clean & Simple) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-xl group hover:border-blue-600 transition-all">
            <div className="space-y-8">
              <div className="h-16 w-16 rounded-[1.5rem] bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <Target size={28} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">Our Mission</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic font-medium">
                  To build real-world AI systems and train a global workforce of industry-ready developers through practical deep-tech innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 grayscale"><Eye size={150} /></div>
            <div className="space-y-8 relative z-10">
              <div className="h-16 w-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-blue-400 border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Eye size={28} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">The Vision</h2>
                <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
                  To become the primary global node for AI engineering, bridging the gap between theoretical research and sovereign digital infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. REGULATORY ROADMAP (Genuinity Check) */}
        <div className="p-12 md:p-16 rounded-[4rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Regulatory <span className="text-blue-600">Status.</span></h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">Alignment with Digital India Framework</p>
            </div>
            <div className="px-6 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
               <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-3">
                  <Activity size={14} className="animate-pulse" /> Node Operational
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceNodes.map((node, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:border-blue-600 hover:bg-white transition-all shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${node.active ? 'text-blue-600' : 'text-slate-300'} transition-colors`}>
                    {node.icon}
                  </div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-900 italic">{node.label}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{node.status}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                     <div className={`h-full ${node.active ? 'w-full bg-blue-600' : 'w-1/3 bg-slate-400'} transition-all`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER ADVISORY */}
        <div className="mt-20 text-center space-y-8">
           <p className="italic text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] max-w-xl mx-auto">
              Building in alignment with global software standards and India's emerging technology ecosystem.
           </p>
           <Link href="/">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto py-2">
                 <ArrowRight size={14} className="rotate-180" /> Return to Command Node
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}