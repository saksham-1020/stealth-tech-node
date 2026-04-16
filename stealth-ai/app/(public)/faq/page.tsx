// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import { PageHeader } from "@/components/common/PageHeader";
// import { HelpCircle, MessageSquare, ShieldAlert, Zap } from "lucide-react";

// const faqs = [
//   { q: "Is this a certificate course?", a: "Certificates are issued only after verified project completion. Our nodes focus on proof-of-work, not just participation metrics.", color: "purple" },
//   { q: "Is placement guaranteed?", a: "No. We provide placement assistance based on real-time performance analytics and verified skill clearance levels.", color: "cyan" },
//   { q: "Can beginners apply?", a: "Yes. Beginners start at 'Node Zero' (Discovery Track) to learn fundamentals before entering active deployment sprints.", color: "purple" },
//   { q: "What is the tech stack?", a: "We focus on the modern edge: Next.js 16, FastAPI, PostgreSQL, and Local LLM architectures.", color: "cyan" },
// ];

// export default function FAQPage() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
//       <div className="max-w-4xl mx-auto px-6">
        
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-cyan-500">
//             <HelpCircle size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Query Database</span>
//           </div>
//           <PageHeader title="Knowledge Base" subtitle="Frequently asked questions about the Stealth AI ecosystem." />
//         </FadeIn>

//         <div className="mt-16 space-y-6">
//           {faqs.map((faq, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <div className="group p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all">
//                 <div className="flex items-start gap-4">
//                   <div className={`mt-1 h-2 w-2 rounded-full ${faq.color === 'purple' ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'}`} />
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-black uppercase italic tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
//                       {faq.q}
//                     </h3>
//                     <p className="text-zinc-500 text-sm font-medium leading-relaxed italic uppercase tracking-wide">
//                       {faq.a}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>

//         {/* SYSTEM ADVISORY (CTA) */}
//         <FadeIn delay={0.4}>
//           <div className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-950 to-black border border-white/5 text-center flex flex-col items-center gap-4">
//             <ShieldAlert size={24} className="text-zinc-700" />
//             <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
//               Still have unresolved queries? Connect with our support node.
//             </p>
//             <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">
//               support@stealthai.com
//             </button>
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// }






"use client";

import { 
  HelpCircle, MessageSquare, ShieldAlert, Zap, 
  Fingerprint, ChevronDown, CheckCircle2, ArrowRight,
  ShieldCheck, FileSearch
} from "lucide-react";
import Link from "next/link";

const faqs = [
  { 
    q: "Is this a certificate course?", 
    a: "Official certificates are issued only after verified industrial project completion. Our nodes focus on proof-of-work and technical audit clearance, ensuring your credentials represent real-world engineering capability.", 
    node: "CERT_NODE_v4" 
  },
  { 
    q: "Is placement guaranteed?", 
    a: "Placement sync is performance-based. We provide dedicated assistance and direct hiring uplinks to candidates who clear our internal 'Institutional Readiness' metrics and lab performance benchmarks.", 
    node: "SYNC_PROTOCOL" 
  },
  { 
    q: "Can beginners apply?", 
    a: "Yes. Beginners are onboarded via 'Node Zero' (Discovery Track). This module hardens technical fundamentals before candidates transition into active industrial deployment sprints.", 
    node: "ENTRY_GATE" 
  },
  { 
    q: "What is the industrial tech stack?", 
    a: "The ecosystem operates on high-concurrency modern stacks: Next.js 16, FastAPI, PostgreSQL, and Local LLM (Neural) architectures for sovereign application development.", 
    node: "CORE_INFRA" 
  },
  { 
    q: "Are the labs physical or virtual?", 
    a: "StealthAI operates through hybrid nodes. We have high-end physical labs in Indore equipped with GPU clusters, and virtual nodes for remote research scholars.", 
    node: "LAB_ACCESS" 
  }
];

export default function FAQPage() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* 2. HEADER: KNOWLEDGE BASE */}
        <div className="mb-24 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Institutional Query Database</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-slate-900 leading-none">
            Knowledge <br/> <span className="text-blue-700 text-stroke">Base.</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            Detailed intelligence regarding the StealthAI ecosystem, industrial certifications, and deployment protocols.
          </p>
        </div>

        {/* 3. FAQ GRID (Sober Institutional Cards) */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-600 transition-all shadow-sm">
              <div className="flex items-start gap-6">
                <div className="mt-1.5">
                   <div className="h-2 w-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                </div>
                <div className="space-y-4 w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-900">
                      {faq.q}
                    </h3>
                    <span className="text-[8px] font-mono font-bold text-slate-300 uppercase tracking-widest hidden md:block">
                      {faq.node}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed italic border-t border-slate-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. VERIFICATION FOOTNOTE - Redirecting to Contact */}
<div className="mt-20 p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
   <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div className="space-y-2">
         <div className="flex items-center gap-3 justify-center md:justify-start text-blue-400 mb-2">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">Support Protocol Active</span>
         </div>
         <h3 className="text-2xl font-black uppercase italic tracking-tighter">Still have unresolved nodes?</h3>
         <p className="text-slate-400 text-xs font-medium italic">Initialize a direct transmission with our institutional support unit.</p>
      </div>
      
      {/* Is Link tag se redirect handle hoga */}
      <Link href="/contact" className="w-full md:w-auto">
        <button className="w-full px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-500/20">
           Contact Support Hub
        </button>
      </Link>
   </div>
</div>

        {/* 5. RETURN NAVIGATION */}
        <div className="mt-24 text-center">
           <Link href="/">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto">
                 <ArrowRight size={14} className="rotate-180" /> Return to Command Node
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}