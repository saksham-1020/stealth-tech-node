// "use client";

// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import { 
//   Code2, BrainCircuit, Smartphone, Settings, 
//   ArrowRight, Zap, Database, Cpu, Globe, 
//   ShieldCheck, Terminal, Layers, Activity, Search,
//   Box, Server, Fingerprint
// } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     id: "01",
//     title: "Enterprise Software",
//     subtitle: "Sovereign Systems",
//     desc: "We engineer high-concurrency architectures for large-scale organizational management. Our systems are built to endure industrial loads and data complexity.",
//     features: ["Custom ERP Ecosystems", "MIS & Resource Planning", "Process Automation", "Legacy Migration"],
//     tech: ["Rust", "Go", "PostgreSQL", "Docker"],
//     metric: "100ms Avg Latency",
//     icon: <Terminal className="text-cyan-500" />
//   },
//   {
//     id: "02",
//     title: "Applied Intelligence",
//     subtitle: "Neural Foundations",
//     desc: "Deploying proprietary AI models that solve real-world bottlenecks in healthcare and agriculture. We turn raw datasets into autonomous decision nodes.",
//     features: ["LLM Fine-tuning", "Computer Vision Pipelines", "Predictive Analytics", "Deep Learning Research"],
//     tech: ["PyTorch", "TensorFlow", "CUDA", "Python"],
//     metric: "98% Model Accuracy",
//     icon: <BrainCircuit className="text-purple-500" />
//   },
//   {
//     id: "03",
//     title: "System Infrastructure",
//     subtitle: "Cloud & DevSecOps",
//     desc: "Architecting the soil on which your software grows. We ensure 99.9% availability through robust cloud-native deployments and security audits.",
//     features: ["AWS/Azure Cloud Design", "CI/CD Orchestration", "Security Hardening", "Database Optimization"],
//     tech: ["Kubernetes", "Terraform", "Nginx", "Redis"],
//     metric: "99.99% Uptime SLA",
//     icon: <Cpu className="text-emerald-500" />
//   },
//   {
//     id: "04",
//     title: "Digital Experience",
//     subtitle: "Mobile & Interfaces",
//     desc: "Engineering pixel-perfect, high-performance interfaces that bridge the gap between human intuition and machine efficiency.",
//     features: ["Cross-platform Apps", "E-commerce Engines", "Interactive Dashboards", "Responsive UX Systems"],
//     tech: ["Next.js", "React Native", "Tailwind", "Swift"],
//     metric: "Top 1% UI Performance",
//     icon: <Smartphone className="text-blue-500" />
//   }
// ];

// export default function ServicesPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   // Advanced Scroll Progress Logic
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
  
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   const fadeIn = {
//     initial: { opacity: 0, y: 40 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } // Fixed Red Line
//   };

//   return (
//     <main ref={containerRef} className="bg-[#020202] text-white min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans">
      
//       {/* 1. ARCHITECTURAL BACKGROUND (Live Grid) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-cyan-600/5 blur-[250px] rounded-full animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
//       </div>

//       {/* 2. DYNAMIC NAVIGATION LINE */}
//       <motion.div 
//         style={{ scaleY }}
//         className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent origin-top hidden lg:block z-50 opacity-50"
//       />

//       <section className="max-w-7xl mx-auto relative z-10">
        
//         {/* 3. HERO CAPABILITIES SECTION */}
//         <div className="mb-60">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-4 mb-12"
//           >
//             <Fingerprint className="text-cyan-500" size={24} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-cyan-500/80">Industrial Capabilities</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-7xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
//           >
//             Core <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">Verticals.</span>
//           </motion.h1>
          
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid md:grid-cols-2 gap-20 items-end"
//           >
//             <p className="text-gray-500 text-xl md:text-3xl font-light leading-tight italic">
//               We architect sovereign ecosystems. <br />
//               <span className="text-white">Reliability</span> is our baseline; <br />
//               <span className="text-cyan-500">Innovation</span> is our standard.
//             </p>
//             <div className="flex gap-12 border-l border-white/10 pl-12">
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">15+</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Global Deployments</p>
//                </div>
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">99.9</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">System Uptime %</p>
//                </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* 4. THE SERVICES ARCHITECTURE GRID */}
//         <div className="space-y-60">
//           {services.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className="group relative"
//             >
//               {/* Parallax Background Marker */}
//               <span className="absolute -left-20 -top-10 text-[20rem] font-black text-white/[0.01] select-none hidden lg:block tracking-tighter">
//                 {item.id}
//               </span>

//               <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
//                 {/* Left Side: Definition */}
//                 <div className="lg:col-span-5 space-y-12">
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                        <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
//                        <p className="text-cyan-500 font-mono text-xs tracking-[0.4em] uppercase">{item.subtitle}</p>
//                     </div>
//                     <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-cyan-400 transition-colors duration-700">
//                       {item.title}
//                     </h2>
//                   </div>
                  
//                   <p className="text-gray-400 text-2xl font-light leading-relaxed italic border-l border-cyan-500/20 pl-8">
//                     {item.desc}
//                   </p>

//                   <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 bg-white/[0.01] px-8 rounded-[2rem]">
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Internal Metric</h5>
//                       <p className="text-2xl font-bold text-white tracking-tighter italic">{item.metric}</p>
//                     </div>
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Protocol Status</h5>
//                       <p className="text-2xl font-bold text-emerald-500 tracking-tighter italic flex items-center gap-2">
//                         <Activity size={20} className="animate-pulse" /> SYNC_OK
//                       </p>
//                     </div>
//                   </div>

//                   {/* Technology Chips */}
//                   <div className="flex flex-wrap gap-3">
//                     {item.tech.map(t => (
//                       <span key={t} className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-zinc-500 uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all cursor-default">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right Side: Implementation Bento Grid */}
//                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
//                   {item.features.map((feature, fIndex) => (
//                     <motion.div 
//                       key={feature}
//                       whileHover={{ y: -5, scale: 1.02 }}
//                       className="p-10 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-cyan-500/20 hover:bg-zinc-900/50 transition-all duration-500 group/feature flex flex-col justify-between h-64 shadow-2xl"
//                     >
//                       <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover/feature:bg-cyan-500 group-hover/feature:text-black transition-all">
//                         {fIndex % 2 === 0 ? <Box size={24} /> : <Server size={24} />}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-black uppercase italic tracking-tight text-gray-300 mb-2">{feature}</h4>
//                         <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Enterprise Protocol_v4</p>
//                       </div>
//                     </motion.div>
//                   ))}
                  
//                   <Link href="/contact" className="sm:col-span-2 group/btn block">
//                     <div className="p-10 rounded-[3rem] bg-cyan-500 text-black flex justify-between items-center hover:bg-white transition-all duration-700 shadow-[0_30px_60px_rgba(6,182,212,0.2)]">
//                        <span className="text-3xl font-[1000] uppercase italic tracking-tighter">Start Integration Sync</span>
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

//       {/* 5. DYNAMIC SCALE SECTION (The Mission) */}
//       <section className="py-80 relative z-10 overflow-hidden border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.div {...fadeIn} className="space-y-16">
//             <h2 className="text-8xl md:text-[16rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mix-blend-difference">
//               Limitless <br /> <span className="text-gray-800">Deployment.</span>
//             </h2>
//             <p className="text-zinc-500 text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-[0.3em] uppercase italic italic border-y border-white/5 py-10">
//               Transforming Indian Labs into Global Decision Engines.
//             </p>
//             <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
//                <button className="bg-white text-black px-20 py-8 rounded-full font-[1000] text-3xl uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all">
//                  Request Partnership
//                </button>
//                <Link href="/contact" className="text-white font-black text-2xl border-b-2 border-white/20 hover:border-white transition-all uppercase italic tracking-[0.2em]">
//                   Contact Engineering
//                </Link>
//             </div>
//           </motion.div>
//         </div>

//         {/* Background Animation Decorations */}
//         <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
//           <h3 className="text-[35rem] font-black tracking-[-0.05em] uppercase leading-none">Intelligence</h3>
//         </div>
//       </section>

//     </main>
//   );
// }











"use client";

import { 
  Code2, BrainCircuit, Smartphone, Settings, 
  ArrowRight, Zap, Database, Cpu, Globe, 
  ShieldCheck, Terminal, Layers, Activity, Search,
  Box, Server, Fingerprint, Microscope, ChevronRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Enterprise Software",
    subtitle: "Sovereign Systems",
    desc: "We engineer high-concurrency architectures for large-scale organizational management. Our systems are built to endure industrial loads and data complexity.",
    features: ["Custom ERP Ecosystems", "MIS & Resource Planning", "Process Automation", "Legacy Migration"],
    tech: ["Rust", "Go", "PostgreSQL", "Docker"],
    metric: "100ms Avg Latency",
    icon: <Terminal className="text-blue-600" />
  },
  {
    id: "02",
    title: "Applied Intelligence",
    subtitle: "Neural Foundations",
    desc: "Deploying proprietary AI models that solve real-world bottlenecks in healthcare and agriculture. We turn raw datasets into autonomous decision nodes.",
    features: ["LLM Fine-tuning", "Computer Vision Pipelines", "Predictive Analytics", "Deep Learning Research"],
    tech: ["PyTorch", "TensorFlow", "CUDA", "Python"],
    metric: "98% Model Accuracy",
    icon: <BrainCircuit className="text-blue-600" />
  },
  {
    id: "03",
    title: "System Infrastructure",
    subtitle: "Cloud & DevSecOps",
    desc: "Architecting the soil on which your software grows. We ensure 99.9% availability through robust cloud-native deployments and security audits.",
    features: ["AWS/Azure Cloud Design", "CI/CD Orchestration", "Security Hardening", "Database Optimization"],
    tech: ["Kubernetes", "Terraform", "Nginx", "Redis"],
    metric: "99.99% Uptime SLA",
    icon: <Cpu className="text-blue-600" />
  },
  {
    id: "04",
    title: "Digital Experience",
    subtitle: "Mobile & Interfaces",
    desc: "Engineering pixel-perfect, high-performance interfaces that bridge the gap between human intuition and machine efficiency.",
    features: ["Cross-platform Apps", "E-commerce Engines", "Interactive Dashboards", "Responsive UX Systems"],
    tech: ["Next.js", "React Native", "Tailwind", "Swift"],
    metric: "Top 1% UI Performance",
    icon: <Smartphone className="text-blue-600" />
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden font-sans min-h-screen pt-32 pb-20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. HERO SECTION (Sober & Direct) */}
        <div className="mb-40">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-10 shadow-sm">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Industrial Capabilities v4.5.2</span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic">
            Core <br/> <span className="text-blue-700">Verticals.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-20 items-end border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed italic">
              We architect sovereign ecosystems. <br />
              Reliability is our baseline; <span className="text-blue-600 font-bold">Innovation</span> is our standard.
            </p>
            <div className="flex gap-16">
               <div>
                  <h4 className="text-5xl font-black italic tracking-tighter text-slate-900">15+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Nodes</p>
               </div>
               <div>
                  <h4 className="text-5xl font-black italic tracking-tighter text-slate-900">99.9</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Uptime Node %</p>
               </div>
            </div>
          </div>
        </div>

        {/* 2. SERVICES ARCHITECTURE (Full Material Integrated) */}
        <div className="space-y-40 mb-40">
          {services.map((item) => (
            <div key={item.id} className="relative border-b border-slate-100 pb-40 last:border-0">
              <div className="grid lg:grid-cols-12 gap-20 items-start">
                
                {/* Left: Definition Node */}
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em]">{item.subtitle} // NODE_{item.id}</span>
                    <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900">
                      {item.title}
                    </h2>
                  </div>
                  
                  <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8">
                    {item.desc}
                  </p>

                  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex justify-between items-center shadow-sm">
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Performance Baseline</h5>
                      <p className="text-2xl font-black text-slate-900 italic">{item.metric}</p>
                    </div>
                    <div className="text-right">
                       <Activity className="text-emerald-500 mb-1 ml-auto animate-pulse" size={20} />
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Sync Active</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Implementation Grid (Bento Style) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {item.features.map((feature, fIndex) => (
                    <div key={feature} className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:border-blue-600 transition-all flex flex-col justify-between h-64 group cursor-default">
                       <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          {fIndex % 2 === 0 ? <Box size={24} /> : <Server size={24} />}
                       </div>
                       <div>
                          <h4 className="text-xl font-black uppercase italic tracking-tighter text-slate-900 mb-2">{feature}</h4>
                          <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">Sovereign Engineering Standard</p>
                       </div>
                    </div>
                  ))}
                  
                  <Link href="/contact" className="sm:col-span-2 group/btn">
                    <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex justify-between items-center hover:bg-blue-700 transition-all shadow-xl">
                       <span className="text-3xl font-black uppercase italic tracking-tighter">Initialize Project Node</span>
                       <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                          <ArrowRight size={24} />
                       </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 3. NEW ADDITION: TECHNICAL CONSULTANCY (Sober Addition) */}
        <section className="py-24 bg-blue-700 rounded-[4rem] text-white p-12 md:p-20 shadow-2xl relative overflow-hidden mb-40">
           <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12"><Globe size={400}/></div>
           <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Industrial <br/> Consultancy.</h2>
                 <p className="text-blue-100 text-xl font-medium leading-relaxed italic opacity-80">
                    StealthAI provides high-level technical advisory for government entities and private corporations looking for sovereign tech migration.
                 </p>
                 <div className="flex gap-4">
                    <button className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg">Request Brief</button>
                 </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 {[
                   { t: "Architecture Audit", d: "Security & Scalability check" },
                   { t: "Neural Assessment", d: "Model performance verification" },
                   { t: "Governance Sync", d: "MCA & Data Law compliance" }
                 ].map((item, i) => (
                   <div key={i} className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md flex items-center justify-between">
                      <div>
                        <h4 className="font-bold uppercase text-sm tracking-widest">{item.t}</h4>
                        <p className="text-[10px] opacity-60 uppercase mt-1">{item.d}</p>
                      </div>
                      <ChevronRight size={18} className="text-blue-300" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. MISSION FOOTER (Material Safe) */}
        <div className="text-center space-y-12">
           <h2 className="text-7xl md:text-[12rem] font-black tracking-[0.05em] uppercase italic text-slate-100 leading-none select-none">DEPLOYMENT.</h2>
           <p className="text-slate-400 text-xl md:text-2xl font-medium uppercase tracking-[0.3em] italic underline decoration-blue-600 underline-offset-8">Transforming Indian Labs into Global Engines.</p>
           <div className="pt-10 flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 transition-all">Partner with Node</button>
              </Link>
           </div>
        </div>

      </div>
    </main>
  );
}