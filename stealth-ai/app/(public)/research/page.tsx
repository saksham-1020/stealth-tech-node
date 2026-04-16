// "use client";

// import { motion, useScroll, useSpring } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Microscope, BrainCircuit, Zap, ArrowRight, 
//   Activity, Presentation, BookOpen, Fingerprint,
//   FileSearch, Layers, Network, Database, Cpu, 
//   FlaskConical, Target, ShieldCheck
// } from "lucide-react";
// import Link from "next/link";

// const researchDomains = [
//   {
//     id: "01",
//     title: "Neural Vision Systems",
//     subtitle: "Computer Vision Lab",
//     desc: "Implementing state-of-the-art architectures for medical imaging and industrial automation. We turn raw pixel data into diagnostic intelligence.",
//     protocols: ["Dataset Annotation", "Model Architecture", "Performance Tuning", "Edge Deployment"],
//     stats: "99% Accuracy",
//     icon: <Microscope className="text-emerald-500" />
//   },
//   {
//     id: "02",
//     title: "Cognitive Language",
//     subtitle: "NLP & LLM Domain",
//     desc: "Technical guidance on Transformer-based models, semantic analysis, and fine-tuning large language models for sovereign Indian applications.",
//     protocols: ["Corpus Engineering", "LLM Fine-Tuning", "Semantic Routing", "Inference Optimization"],
//     stats: "<50ms Latency",
//     icon: <BrainCircuit className="text-cyan-500" />
//   },
//   {
//     id: "03",
//     title: "Smart Infrastructure",
//     subtitle: "IoT & Predictive Systems",
//     desc: "Developing prototypes for predictive modeling in agriculture and smart healthcare devices. Synchronizing hardware nodes with cloud intelligence.",
//     protocols: ["Sensor Integration", "Telemetry Sync", "Predictive Modeling", "Real-time Dashboards"],
//     stats: "Zero Data Loss",
//     icon: <Zap className="text-purple-500" />
//   }
// ];

// export default function ResearchPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
//   const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   const fadeIn = {
//     initial: { opacity: 0, y: 40 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
//   };

//   return (
//     <main ref={containerRef} className="bg-[#020202] text-white min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans">
      
//       {/* 1. LAB BACKGROUND (Deep Mesh) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-600/5 blur-[250px] rounded-full animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
//       </div>

//       {/* 2. DYNAMIC NAVIGATION LINE */}
//       <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent origin-top hidden lg:block z-50 opacity-50" />

//       <section className="max-w-7xl mx-auto relative z-10">
        
//         {/* 3. HERO: THE INNOVATION DOMAIN */}
//         <div className="mb-60">
//           <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
//             <FlaskConical className="text-emerald-500" size={24} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-emerald-500/80">R&D Domain / v2.0</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-7xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
//           >
//             Push <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">Possibility.</span>
//           </motion.h1>
          
//           <div className="grid md:grid-cols-2 gap-20 items-end">
//             <p className="text-gray-500 text-xl md:text-3xl font-light leading-tight italic">
//               We support academic and industrial research through precise <span className="text-white">Technical Implementation</span>. 
//               Turning complex hypotheses into deployable prototypes.
//             </p>
//             <div className="flex gap-12 border-l border-white/10 pl-12">
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">08+</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Active Patents</p>
//                </div>
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">50+</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Published Papers</p>
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* 4. LAB VERTICALS (The Heavy Bento Grid) */}
//         <div className="space-y-60">
//           {researchDomains.map((domain) => (
//             <motion.div key={domain.id} {...fadeIn} className="group relative">
//               <span className="absolute -left-20 -top-10 text-[20rem] font-black text-white/[0.01] select-none hidden lg:block tracking-tighter uppercase italic">{domain.id}</span>

//               <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
//                 {/* Left Content */}
//                 <div className="lg:col-span-5 space-y-12">
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_emerald]" />
//                        <p className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">{domain.subtitle}</p>
//                     </div>
//                     <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-emerald-400 transition-colors duration-700">{domain.title}</h2>
//                   </div>
                  
//                   <p className="text-gray-400 text-2xl font-light leading-relaxed italic border-l border-emerald-500/20 pl-8">{domain.desc}</p>

//                   <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 bg-white/[0.01] px-8 rounded-[2rem]">
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Research Metric</h5>
//                       <p className="text-2xl font-bold text-white tracking-tighter italic">{domain.stats}</p>
//                     </div>
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Lab Status</h5>
//                       <p className="text-2xl font-bold text-cyan-500 tracking-tighter italic flex items-center gap-2">
//                         <Activity size={20} className="animate-pulse" /> OPERATIONAL
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Content: Research Protocols Bento Grid */}
//                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {domain.protocols.map((protocol, idx) => (
//                     <motion.div 
//                       key={protocol}
//                       whileHover={{ y: -5, scale: 1.02 }}
//                       className="p-10 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-emerald-500/20 hover:bg-zinc-900/50 transition-all duration-500 flex flex-col justify-between h-64 shadow-2xl"
//                     >
//                       <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-emerald-400">
//                         {idx % 2 === 0 ? <FileSearch size={24} /> : <Layers size={24} />}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-black uppercase italic tracking-tight text-gray-300 mb-2">{protocol}</h4>
//                         <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Protocol Support_0{idx+1}</p>
//                       </div>
//                     </motion.div>
//                   ))}
                  
//                   <Link href="/contact" className="sm:col-span-2 group/btn block">
//                     <div className="p-10 rounded-[3rem] bg-white text-black flex justify-between items-center hover:bg-emerald-500 hover:text-white transition-all duration-700 shadow-[0_30px_60px_rgba(16,185,129,0.2)]">
//                        <span className="text-3xl font-[1000] uppercase italic tracking-tighter">Submit Research Data</span>
//                        <div className="h-16 w-16 rounded-full border-2 border-black/10 flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-500">
//                           <ArrowRight size={32} />
//                        </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 5. KNOWLEDGE ECOSYSTEM (Conference & Journal Hub) */}
//       <section className="py-80 relative z-10 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
//           <motion.div {...fadeIn}>
//             <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none mb-10">Knowledge <br /> <span className="text-zinc-700">Ecosystem.</span></h2>
//             <div className="space-y-12">
//                {[
//                  { t: "Global Conference", d: "Join our upcoming AI summit with industry leaders.", icon: <Presentation className="text-cyan-500" /> },
//                  { t: "Peer-Reviewed Journal", d: "Access state-of-the-art papers and datasets.", icon: <BookOpen className="text-purple-500" /> },
//                  { t: "Technical Forums", d: "Engage in deep-tech discussions and problem-solving.", icon: <Network className="text-emerald-500" /> },
//                  { t: "Open-Source Models", d: "Download and deploy pre-trained neural networks.", icon: <Database className="text-blue-500" /> }
//                ].map((item, i) => (
//                  <div key={i} className="flex gap-8 group/item">
//                     <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover/item:border-white transition-colors">{item.icon}</div>
//                     <div>
//                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-gray-200">{item.t}</h4>
//                        <p className="text-gray-500 text-lg font-light mt-2">{item.d}</p>
//                     </div>
//                  </div>
//                ))}
//             </div>
//           </motion.div>
          
//           <div className="relative p-1 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[5rem] overflow-hidden group shadow-2xl">
//              <div className="p-20 rounded-[4.9rem] bg-zinc-950 flex flex-col items-center text-center">
//                 <BrainCircuit size={120} className="text-emerald-500 mb-12 opacity-50 group-hover:opacity-100 transition-all" />
//                 <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-8">Access The <br /> Sovereign Network.</h3>
//                 <p className="text-gray-500 font-light mb-12">Our portals redirect to dedicated repositories for paper submissions, ticket registrations, and dataset downloads.</p>
//                 <div className="flex flex-col w-full gap-4">
//                    <Link href="/conference" className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg">Register for Summit 2026</Link>
//                    <Link href="/journal" className="w-full py-4 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">Browse Research Journal</Link>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. FINAL LAB CTA */}
//       <section className="py-60 relative z-10 overflow-hidden text-center">
//         <motion.div {...fadeIn} className="space-y-16">
//           <h2 className="text-8xl md:text-[16rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mix-blend-difference">
//             Start <br /> <span className="text-gray-800">Inquiry.</span>
//           </h2>
//           <p className="text-zinc-500 text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-[0.3em] uppercase italic border-y border-white/5 py-10">We support academic and industrial projects with technical guidance.</p>
//           <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
//              <button className="bg-emerald-500 text-black px-20 py-8 rounded-full font-[1000] text-3xl uppercase tracking-widest shadow-[0_0_60px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all">
//                Submit Proposal
//              </button>
//           </div>
//         </motion.div>
        
//         <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
//           <h3 className="text-[35rem] font-black tracking-[-0.05em] uppercase leading-none">Research</h3>
//         </div>
//       </section>

//     </main>
//   );
// }










"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { 
  Microscope, BrainCircuit, Zap, ArrowRight, 
  Activity, Presentation, BookOpen, Fingerprint,
  FileSearch, Layers, Network, Database, Cpu, 
  FlaskConical, Target, ShieldCheck, Globe, ChevronRight
} from "lucide-react";
import Link from "next/link";

const researchDomains = [
  {
    id: "01",
    title: "Neural Vision Systems",
    subtitle: "Computer Vision Lab",
    desc: "Implementing state-of-the-art architectures for medical imaging and industrial automation. We turn raw pixel data into diagnostic intelligence.",
    protocols: ["Dataset Annotation", "Model Architecture", "Performance Tuning", "Edge Deployment"],
    stats: "99% Accuracy",
    icon: <Microscope className="text-blue-600" />
  },
  {
    id: "02",
    title: "Cognitive Language",
    subtitle: "NLP & LLM Domain",
    desc: "Technical guidance on Transformer-based models, semantic analysis, and fine-tuning large language models for sovereign Indian applications.",
    protocols: ["Corpus Engineering", "LLM Fine-Tuning", "Semantic Routing", "Inference Optimization"],
    stats: "<50ms Latency",
    icon: <BrainCircuit className="text-blue-600" />
  },
  {
    id: "03",
    title: "Smart Infrastructure",
    subtitle: "IoT & Predictive Systems",
    desc: "Developing prototypes for predictive modeling in agriculture and smart healthcare devices. Synchronizing hardware nodes with cloud intelligence.",
    protocols: ["Sensor Integration", "Telemetry Sync", "Predictive Modeling", "Real-time Dashboards"],
    stats: "Zero Data Loss",
    icon: <Zap className="text-blue-600" />
  }
];

export default function ResearchPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <main ref={containerRef} className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* 2. DYNAMIC NAVIGATION LINE */}
      <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-blue-600 via-purple-500 to-transparent origin-top hidden lg:block z-50 opacity-20" />

      <section className="max-w-7xl mx-auto relative z-10">
        
        {/* 3. HERO: THE INNOVATION DOMAIN */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
            <FlaskConical className="text-blue-600" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-400">R&D Domain / v2.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic text-slate-900 mb-16"
          >
            Push <br /> 
            <span className="text-blue-700">Possibility.</span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-20 items-end border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-xl md:text-3xl font-light leading-tight italic">
              We support academic and industrial research through precise <span className="text-slate-900 font-bold">Technical Implementation</span>. 
              Turning complex hypotheses into deployable prototypes.
            </p>
            <div className="flex gap-16">
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">08+</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Active Patents</p>
               </div>
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">50+</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Published Papers</p>
               </div>
            </div>
          </div>
        </div>

        {/* 4. LAB VERTICALS (Bento Grid) */}
        <div className="space-y-40">
          {researchDomains.map((domain) => (
            <motion.div key={domain.id} {...fadeIn} className="group relative border-b border-slate-100 pb-40 last:border-0">
              <span className="absolute -left-20 -top-10 text-[20rem] font-black text-slate-50 select-none hidden lg:block tracking-tighter uppercase italic">{domain.id}</span>

              <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_blue]" />
                        <p className="text-blue-600 font-mono text-xs tracking-[0.4em] uppercase">{domain.subtitle}</p>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-blue-700 transition-colors duration-700 text-slate-900">{domain.title}</h2>
                  </div>
                  
                  <p className="text-slate-500 text-2xl font-light leading-relaxed italic border-l-4 border-blue-600/20 pl-8">{domain.desc}</p>

                  <div className="grid grid-cols-2 gap-8 py-10 border-y border-slate-100 bg-slate-50 px-8 rounded-[2rem]">
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Research Metric</h5>
                      <p className="text-2xl font-black text-slate-900 italic">{domain.stats}</p>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Lab Status</h5>
                      <p className="text-2xl font-black text-emerald-600 tracking-tighter italic flex items-center gap-2">
                        <Activity size={20} className="animate-pulse" /> OPERATIONAL
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {domain.protocols.map((protocol, idx) => (
                    <motion.div 
                      key={protocol}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:border-blue-600 transition-all duration-500 flex flex-col justify-between h-64 shadow-xl shadow-slate-100"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                        {idx % 2 === 0 ? <FileSearch size={24} /> : <Layers size={24} />}
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase italic tracking-tight text-slate-900 mb-2">{protocol}</h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Protocol Node_0{idx+1}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <Link href="/contact" className="sm:col-span-2 group/btn block">
                    <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex justify-between items-center hover:bg-blue-700 transition-all duration-700 shadow-2xl">
                        <span className="text-3xl font-black uppercase italic tracking-tighter">Submit Research Data</span>
                        <div className="h-14 w-14 rounded-full border-2 border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                           <ArrowRight size={32} />
                        </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. KNOWLEDGE ECOSYSTEM (Sober Institutional Integration) */}
      <section className="py-40 relative z-10 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none mb-10 text-slate-900">Knowledge <br /> <span className="text-slate-200 text-stroke">Ecosystem.</span></h2>
            <div className="space-y-12">
                {[
                  { t: "Global Conference", d: "Join our upcoming AI summit with industry leaders.", icon: <Presentation className="text-blue-600" /> },
                  { t: "Peer-Reviewed Journal", d: "Access state-of-the-art papers and datasets.", icon: <BookOpen className="text-blue-600" /> },
                  { t: "Technical Forums", d: "Engage in deep-tech discussions and problem-solving.", icon: <Network className="text-blue-600" /> },
                  { t: "Open-Source Models", d: "Download and deploy pre-trained neural networks.", icon: <Database className="text-blue-600" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group/item cursor-default">
                     <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">{item.icon}</div>
                     <div>
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">{item.t}</h4>
                        <p className="text-slate-500 text-lg font-medium italic mt-2">{item.d}</p>
                     </div>
                  </div>
                ))}
            </div>
          </motion.div>
          
          <div className="relative p-12 rounded-[5rem] bg-slate-900 text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <Fingerprint size={120} className="text-blue-500 mb-12 opacity-50" />
                 <h3 className="text-5xl font-black uppercase tracking-tighter italic mb-8">Sovereign <br /> Network.</h3>
                 <p className="text-slate-400 font-medium italic mb-12 text-lg">Our portals provide gateways for paper submissions, ticket registrations, and verified dataset downloads.</p>
                 <div className="flex flex-col w-full gap-4">
                    <Link href="/conference" className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-500/20">Register for Summit 2026</Link>
                    <Link href="/journal" className="w-full py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-all">Browse Research Journal</Link>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL LAB CTA */}
      <section className="py-60 relative z-10 overflow-hidden text-center bg-slate-50 border-t border-slate-100">
        <motion.div {...fadeIn} className="space-y-16">
          <h2 className="text-8xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic text-slate-900">
            Start <br /> <span className="text-blue-700">Inquiry.</span>
          </h2>
          <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-bold tracking-[0.3em] uppercase italic border-y border-slate-200 py-10">We support academic and industrial projects with technical guidance.</p>
          <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
              <Link href="/contact">
                <button className="bg-slate-900 text-white px-20 py-8 rounded-3xl font-black text-3xl uppercase tracking-widest shadow-2xl hover:bg-blue-700 transition-all">
                  Submit Proposal Node
                </button>
              </Link>
          </div>
        </motion.div>
        
        <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
          <h3 className="text-[35rem] font-black tracking-tighter uppercase leading-none text-slate-900">Research</h3>
        </div>
      </section>

    </main>
  );
}