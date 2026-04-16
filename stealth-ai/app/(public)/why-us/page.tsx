// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import GlassCard from "@/components/ui/GlassCard";
// import { PageHeader } from "@/components/common/PageHeader";
// import { BarChart3, ShieldCheck, Cpu, Globe, Zap, Fingerprint, Code2, Brain } from "lucide-react";

// const advantages = [
//   {
//     title: "No Mock Projects",
//     desc: "We don't do 'To-Do Lists' or 'Clones'. You build production-grade architectures that solve real-world industrial problems.",
//     icon: <Code2 size={24} />,
//     color: "text-purple-500"
//   },
//   {
//     title: "Cryptographic Proof",
//     desc: "Your experience is verified via git-commits and architectural reviews. A Stealth AI certificate is a validated technical claim.",
//     icon: <Fingerprint size={24} />,
//     color: "text-cyan-500"
//   },
//   {
//     title: "Industrial Rigor",
//     desc: "We follow CI/CD, Agile, and peer-review protocols used by top-tier engineering firms like Google and Meta.",
//     icon: <ShieldCheck size={24} />,
//     color: "text-emerald-500"
//   },
//   {
//     title: "AI-First Pedigree",
//     desc: "Our ecosystem is built around Gen-AI. You don't just use AI; you build, fine-tune, and deploy AI nodes.",
//     icon: <Brain size={24} />,
//     color: "text-amber-500"
//   }
// ];

// export default function WhyUs() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
      
//       {/* 1. BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-cyan-500">
//             <BarChart3 size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Comparative Analysis</span>
//           </div>
//           <PageHeader 
//             title="Why Stealth AI?" 
//             subtitle="Bridging the gap between traditional education and high-stakes engineering." 
//           />
//         </FadeIn>

//         {/* 2. CORE DIFFERENTIATORS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
//           {advantages.map((item, i) => (
//             <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
//               <GlassCard className="h-full group border-white/5 hover:border-white/20 transition-all duration-500">
//                 <div className="flex flex-col md:flex-row gap-8 items-start">
//                   <div className={`h-16 w-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl`}>
//                     {item.icon}
//                   </div>
//                   <div className="space-y-4">
//                     <h3 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-zinc-500 text-sm font-medium leading-relaxed italic uppercase tracking-wide">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </GlassCard>
//             </FadeIn>
//           ))}
//         </div>

//         {/* 3. THE "STEALTH" COMMITMENT (CTA) */}
//         <FadeIn delay={0.4}>
//           <div className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-950 to-black border border-white/5 relative overflow-hidden text-center">
//              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
             
//              <div className="relative z-10 space-y-8">
//                 <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter text-white">
//                   Stop Learning. <span className="text-cyan-500">Start Deploying.</span>
//                 </h2>
//                 <p className="max-w-2xl mx-auto text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-relaxed">
//                   We don't teach you how to code. We train you how to build sovereign systems that scale.
//                 </p>
//                 <div className="pt-6">
//                    <button className="px-12 py-5 bg-white text-black rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
//                       Initialize Your Node <Zap size={16} className="inline ml-2" />
//                    </button>
//                 </div>
//              </div>
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// }

// const BrainCircuit = ({size, className}: {size: number, className?: string}) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.245 4 4 0 0 0 7.837 0 4 4 0 0 0 .52-8.245 4 4 0 0 0-2.526-5.77A3 3 0 0 0 12 5Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 12 5"/><path d="M15 13a4.5 4.5 0 0 1-3-4"/><path d="M17.997 5.125A3 3 0 0 1 12 5"/></svg>
// );



"use client";

import { 
  BarChart3, ShieldCheck, Cpu, Globe, Zap, 
  Fingerprint, Code2, Brain, CheckCircle2, 
  ArrowRight, ShieldAlert, Network
} from "lucide-react";
import Link from "next/link";

const advantages = [
  {
    title: "No Mock Projects",
    desc: "We don't execute 'Clones' or 'To-Do Lists'. Candidates build production-grade architectures that solve real-world industrial bottlenecks.",
    icon: <Code2 size={24} />,
    color: "text-blue-600",
    node: "NODE_STRICT_PROD"
  },
  {
    title: "Cryptographic Proof",
    desc: "Experience is verified via Git-commits and peer-reviewed architectural audits. Every certificate is a validated technical claim.",
    icon: <Fingerprint size={24} />,
    color: "text-slate-900",
    node: "NODE_AUTH_VERIFY"
  },
  {
    title: "Industrial Rigor",
    desc: "We enforce CI/CD, Agile, and peer-review protocols utilized by top-tier engineering firms like Google and Meta.",
    icon: <ShieldCheck size={24} />,
    color: "text-blue-600",
    node: "NODE_CORP_READY"
  },
  {
    title: "AI-First Pedigree",
    desc: "The ecosystem is architected around Gen-AI. You don't just consume AI; you build, fine-tune, and deploy sovereign neural nodes.",
    icon: <Brain size={24} />,
    color: "text-slate-900",
    node: "NODE_NEURAL_CORE"
  }
];

export default function WhyUs() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Technical Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER SECTION (Concise & Institutional) */}
        <div className="mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <BarChart3 size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Comparative Analysis v4.5</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-8 uppercase italic">
            Why <br/> <span className="text-blue-700">StealthAI.</span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            Bridging the gap between traditional academic theory and high-stakes industrial engineering through sovereign digital infrastructure.
          </p>
        </div>

        {/* 3. ADVANTAGES GRID (Bento Institutional Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {advantages.map((item, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:border-blue-600 transition-all flex flex-col h-[350px] relative overflow-hidden">
               <span className="absolute -right-4 -top-4 text-7xl font-black text-slate-50 italic select-none opacity-40">{item.node}</span>
               
               <div className="space-y-8 flex flex-col h-full relative z-10">
                  <div className={`h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center ${item.color} group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner`}>
                    {item.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-base font-medium italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* 4. THE INDUSTRIAL COMMITMENT (Technical Box) */}
        <div className="p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
           <div className="relative z-10 flex flex-col items-center text-center space-y-10">
              <div className="flex items-center gap-3 text-blue-400">
                 <ShieldAlert size={24} />
                 <span className="text-[10px] font-black uppercase tracking-widest">Protocol Directive</span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
                 Stop Learning. <br /> <span className="text-blue-500">Start Deploying.</span>
              </h2>
              
              <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-lg font-medium italic leading-relaxed">
                 We do not simply teach code. We harden technical intuition to build sovereign systems that endure industrial scale and global scrutiny.
              </p>
              
              <div className="pt-8">
                 <Link href="/contact">
                   <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-4 group">
                      Initialize Your Node <Zap size={16} className="group-hover:scale-125 transition-transform" />
                   </button>
                 </Link>
              </div>
           </div>
        </div>

        {/* 5. RETURN FOOTNOTE */}
        <div className="mt-24 text-center">
           <Link href="/">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto">
                 <ArrowRight size={14} className="rotate-180" /> Return to command node
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}