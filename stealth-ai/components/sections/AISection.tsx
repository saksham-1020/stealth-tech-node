// "use client";

// import { motion } from "framer-motion";
// import GlassCard from "../ui/GlassCard";
// import { BrainCircuit, Zap, BarChart3, Fingerprint } from "lucide-react";

// const aiFeatures = [
//   {
//     title: "Neural Research Nodes",
//     desc: "Self-evolving research workflows that adapt to peer-review feedback in real-time.",
//     icon: <BrainCircuit className="text-cyan-500" />,
//     delay: 0.1
//   },
//   {
//     title: "Automated Review Pipeline",
//     desc: "AI-driven manuscript validation with 99.9% similarity detection and logic verification.",
//     icon: <Zap className="text-purple-500" />,
//     delay: 0.2
//   },
//   {
//     title: "Predictive Analytics",
//     desc: "Deep-learning models to forecast research impact and placement success ratios.",
//     icon: <BarChart3 className="text-emerald-500" />,
//     delay: 0.3
//   }
// ];

// export default function AISection() {
//   return (
//     <section className="relative py-32 bg-[#020202] overflow-hidden">
      
//       {/* 1. CYBERNETIC BACKGROUND ELEMENTS */}
//       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* 2. SECTION HEADER */}
//         <div className="text-center mb-24 space-y-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="flex items-center justify-center gap-2 text-cyan-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4"
//           >
//             <Fingerprint size={14} /> Sovereign Intelligence
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter text-white"
//           >
//             Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Intelligent Systems.</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base italic font-medium leading-relaxed"
//           >
//             Our platform integrates AI-driven research workflows, automated review pipelines, 
//             and intelligent analytics for next-generation academic ecosystems.
//           </motion.p>
//         </div>

//         {/* 3. BENTO-STYLE FEATURES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {aiFeatures.map((feature, i) => (
//             <GlassCard key={i} className="group p-10 border-white/[0.03]">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: feature.delay }}
//                 className="space-y-6"
//               >
//                 <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl">
//                   {feature.icon}
//                 </div>
                
//                 <h3 className="text-xl font-black uppercase italic tracking-tight text-white group-hover:text-cyan-400 transition-colors">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">
//                   {feature.desc}
//                 </p>

//                 <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-700 group-hover:text-zinc-400 transition-colors">
//                   System Protocol v4.0 <div className="h-1 w-1 bg-cyan-500 rounded-full animate-pulse" />
//                 </div>
//               </motion.div>
//             </GlassCard>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }










"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, BarChart3, Fingerprint, Activity, ShieldCheck } from "lucide-react";

const aiFeatures = [
  {
    title: "Neural Research Nodes",
    desc: "Self-evolving research workflows that adapt to peer-review feedback in real-time.",
    icon: <BrainCircuit size={24} />,
    delay: 0.1,
    tag: "RESEARCH_NODE"
  },
  {
    title: "Automated Review",
    desc: "AI-driven manuscript validation with high-precision similarity detection and logic verification.",
    icon: <ShieldCheck size={24} />,
    delay: 0.2,
    tag: "VERIFY_PROTOCOL"
  },
  {
    title: "Predictive Analytics",
    desc: "Deep-learning models to forecast research impact and industrial placement success ratios.",
    icon: <BarChart3 size={24} />,
    delay: 0.3,
    tag: "DATA_CORE"
  }
];

export default function AISection() {
  return (
    <section className="relative py-32 bg-white border-y border-slate-100 overflow-hidden font-sans">
      
      {/* 1. INSTITUTIONAL BACKGROUND (Subtle Blueprint) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. SECTION HEADER (Sober & Direct) */}
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full"
          >
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Sovereign Intelligence Unit</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none"
          >
            Integrated <br /> <span className="text-blue-700">Neural Logic.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg italic font-medium leading-relaxed"
          >
            We integrate proprietary AI-driven workflows and intelligent analytics 
            into the core of our academic and research ecosystem.
          </motion.p>
        </div>

        {/* 3. PROFESSIONAL GRID (Clean Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
              className="group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:border-blue-600 hover:bg-white transition-all duration-500 shadow-sm"
            >
              <div className="space-y-8">
                <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  {feature.icon}
                </div>
                
                <div className="space-y-4">
                   <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
                     {feature.title}
                   </h3>
                   <p className="text-base text-slate-500 leading-relaxed font-medium italic">
                     {feature.desc}
                   </p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                   <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 italic group-hover:text-blue-600 transition-colors">
                     {feature.tag}
                   </span>
                   <div className="flex items-center gap-2">
                      <Activity size={12} className="text-emerald-500" />
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Active Sync</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}