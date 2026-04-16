// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import { PageHeader } from "@/components/common/PageHeader";
// import { StatusBadge } from "@/components/common/StatusBadge";
// import { 
//   ShieldAlert, ShieldCheck, ShieldHalf, 
//   Terminal, Target, Briefcase, 
//   CheckCircle2, Fingerprint 
// } from "lucide-react";

// const tiers = [
//   { 
//     title: "Tier 1: Discovery", 
//     desc: "Guided research nodes and fundamental architectural training.",
//     status: "suspended", // Custom text use karenge niche
//     statusText: "No Placement Uplink",
//     color: "text-zinc-500",
//     icon: <ShieldAlert size={28} />
//   },
//   { 
//     title: "Tier 2: Intermediate", 
//     desc: "Full-stack deployment cycles with real-world concurrency scenarios.",
//     status: "pending",
//     statusText: "Limited Assistance",
//     color: "text-cyan-400",
//     icon: <ShieldHalf size={28} />
//   },
//   { 
//     title: "Tier 3: Advanced", 
//     desc: "Production-grade AI integration and high-availability backend systems.",
//     status: "active",
//     statusText: "Full Operational Uplink",
//     color: "text-purple-500",
//     icon: <ShieldCheck size={28} />
//   }
// ];

// export default function Placement() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER SECTION */}
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-cyan-500">
//             <Fingerprint size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career Protocol v1.0</span>
//           </div>
//           <PageHeader 
//             title="Placement Assistance" 
//             subtitle="Structured career transition pathways based on verified technical telemetry." 
//           />
//           <p className="text-zinc-500 text-sm md:text-lg italic font-medium max-w-3xl leading-relaxed uppercase tracking-wide mt-6">
//             We provide structured placement assistance based on real project
//             performance and technical capability. Placement is support-driven
//             and based on verified clearance levels.
//           </p>
//         </FadeIn>

//         {/* CLEARANCE TIERS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//           {tiers.map((tier, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <div className="group relative p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-white/10 transition-all h-full flex flex-col justify-between">
//                 <div className="space-y-6">
//                   <div className={`h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center ${tier.color} group-hover:bg-white group-hover:text-black transition-all duration-500`}>
//                     {tier.icon}
//                   </div>
//                   <div className="space-y-2">
//                     <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{tier.title}</h3>
//                     <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed italic">{tier.desc}</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-8 pt-6 border-t border-white/5">
//                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${
//                      tier.status === 'active' ? 'text-emerald-500' : 
//                      tier.status === 'pending' ? 'text-cyan-500' : 'text-red-900'
//                    }`}>
//                      {tier.statusText}
//                    </p>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>

//         {/* SUPPORT INFRASTRUCTURE */}
//         <FadeIn delay={0.4}>
//           <div className="mt-32 p-12 rounded-[3rem] bg-zinc-950/50 border border-white/5 backdrop-blur-md relative overflow-hidden">
//             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
//                <Target size={150} />
//             </div>

//             <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
//                <div className="lg:w-1/3 space-y-4">
//                   <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter text-white">
//                     Uplink <span className="text-cyan-500">Support.</span>
//                   </h2>
//                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Standard Support Modules</p>
//                </div>

//                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {[
//                     "Resume architecture via proof-of-work",
//                     "Peer-review interview simulations",
//                     "Direct enterprise referrals",
//                     "Cryptographic experience nodes",
//                     "Placement telemetry dashboard"
//                   ].map((item, i) => (
//                     <div key={i} className="flex items-center gap-4 group">
//                        <div className="h-2 w-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
//                        <span className="text-sm font-bold uppercase italic tracking-wide text-zinc-400 group-hover:text-white transition-colors">{item}</span>
//                     </div>
//                   ))}
//                </div>
//             </div>
//           </div>
//         </FadeIn>

//         {/* ADVISORY FOOTER */}
//         <div className="mt-12 text-center">
//            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest italic">
//               *Placement is elective and subject to technical clearance and node performance metrics.
//            </p>
//         </div>

//       </div>
//     </div>
//   );
// }







"use client";

import { 
  ShieldAlert, ShieldCheck, ShieldHalf, 
  Terminal, Target, Briefcase, 
  CheckCircle2, Fingerprint, Activity, ArrowRight, ChevronRight
} from "lucide-react";
import Link from "next/link";

const tiers = [
  { 
    title: "Tier 1: Discovery", 
    desc: "Guided research nodes and fundamental architectural training for early-stage engineering.",
    status: "suspended",
    statusText: "Baseline Node // No Uplink",
    color: "text-slate-400",
    icon: <ShieldAlert size={28} />
  },
  { 
    title: "Tier 2: Intermediate", 
    desc: "Full-stack deployment cycles with real-world high-concurrency industrial scenarios.",
    status: "pending",
    statusText: "Limited Referral Node",
    color: "text-blue-600",
    icon: <ShieldHalf size={28} />
  },
  { 
    title: "Tier 3: Advanced", 
    desc: "Production-grade AI integration and high-availability enterprise backend architectures.",
    status: "active",
    statusText: "Full Operational Uplink",
    color: "text-blue-700",
    icon: <ShieldCheck size={28} />
  }
];

export default function Placement() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER: CAREER PROTOCOL */}
        <div className="mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Career Protocol v4.5.0</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-8 uppercase italic">
            Placement <br/> <span className="text-blue-700">Uplink.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-20 items-end border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed italic border-l-4 border-blue-600 pl-8">
              Structured career transition pathways based on verified technical telemetry and industrial performance benchmarks.
            </p>
            <div className="flex gap-12">
               <div className="space-y-1">
                  <h4 className="text-4xl font-black italic text-slate-900">98%</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Sync Success</p>
               </div>
               <div className="space-y-1">
                  <h4 className="text-4xl font-black italic text-slate-900">10+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Hiring Nodes</p>
               </div>
            </div>
          </div>
        </div>

        {/* 3. CLEARANCE TIERS (Material Safe) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-blue-600 transition-all shadow-sm flex flex-col h-[480px]">
               <div className="flex-1 space-y-8">
                  <div className={`h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center ${tier.color} group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner`}>
                    {tier.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">{tier.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed italic uppercase tracking-tight opacity-80">{tier.desc}</p>
                  </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                     <div className={`h-2 w-2 rounded-full animate-pulse ${tier.status === 'active' ? 'bg-emerald-500' : tier.status === 'pending' ? 'bg-blue-400' : 'bg-slate-300'}`} />
                     <p className={`text-[10px] font-black uppercase tracking-widest ${tier.status === 'active' ? 'text-emerald-600' : tier.status === 'pending' ? 'text-blue-600' : 'text-slate-400'}`}>
                        {tier.statusText}
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* 4. SUPPORT INFRASTRUCTURE (Small & Genuine) */}
        <div className="p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
           <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                 <div className="flex items-center gap-3 justify-center lg:justify-start text-blue-400">
                    <Activity size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Support Sync Active</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
                    Uplink <br /> <span className="text-blue-500">Support.</span>
                 </h2>
                 <p className="text-slate-400 text-sm font-medium italic">Standard Operating Procedures for Industrial Onboarding.</p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                 {[
                   "Resume architecture via proof-of-work",
                   "Peer-review interview simulations",
                   "Direct enterprise referrals",
                   "Cryptographic experience nodes",
                   "Placement telemetry dashboard",
                   "Node validation clearance"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                      <span className="text-[11px] font-bold uppercase italic tracking-wider text-slate-300 group-hover:text-white transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 5. ADVISORY FOOTER */}
        <div className="mt-20 text-center space-y-12">
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] italic max-w-2xl mx-auto">
             *Placement sync is an elective protocol and subject to rigorous technical clearance, node performance metrics, and industrial audit readiness.
           </p>
           <Link href="/contact">
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto">
                 Inquire about Sync Status <ArrowRight size={14} />
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}