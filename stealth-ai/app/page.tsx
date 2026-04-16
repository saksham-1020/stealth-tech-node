// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Code2, BrainCircuit, Rocket, GraduationCap, 
//   Briefcase, Microscope, CheckCircle2, ArrowRight,
//   Database, Globe, Zap, Network, Bot, Cpu, Layers, Terminal, Sparkles,
//   Activity, Fingerprint, ShieldCheck, Presentation, BookOpen
// } from "lucide-react";
// import Link from "next/link";

// // --- CREATIVE COMPONENT: INFINITE MARQUEE (Brightened & Scaled) ---
// const Marquee = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => {
//   const scrollParams = direction === "left" ? { x: ["0%", "-50%"] } : { x: ["-50%", "0%"] };
//   return (
//     <div className="w-full overflow-hidden whitespace-nowrap py-14 border-y border-white/5 bg-white/[0.01] backdrop-blur-md relative z-10">
//       <motion.div
//         animate={scrollParams}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="inline-flex gap-24"
//       >
//         {[...items, ...items].map((item, i) => (
//           <span key={i} className="text-sm font-extrabold uppercase tracking-[0.5em] text-zinc-200 hover:text-indigo-400 transition-colors flex items-center gap-4 cursor-default">
//             <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" /> {item}
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const fadeIn = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } // ✅ Add "as const"
//   };

//   const partners = ["NVIDIA Inception", "Microsoft for Startups", "Google Cloud", "AWS Active", "TensorFlow", "PyTorch", "OpenAI Research"];
//   const techStack = ["Next.js 16", "Rust", "Python", "Kubernetes", "PyTorch", "CUDA", "TypeScript", "PostgreSQL"];

//   return (
//     <main ref={containerRef} className="bg-[#030303] text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans relative pb-20">
      
//       {/* ===== 1. THE CREATIVE DYNAMIC BACKGROUND ===== */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <motion.div 
//           animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }} // ✅ Add "as const"
//           className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full"
//         />
//         <motion.div 
//           animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }} // ✅ Add "as const"
//           className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full"
//         />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
//       </div>

//       {/* ===== 2. HERO SECTION ===== */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-12 shadow-2xl"
//         >
//           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
//           <span className="text-[9px] font-black tracking-[0.5em] uppercase text-zinc-500">
//             Sovereign Intelligence Node_v4.5.2
//           </span>
//         </motion.div>

//         <motion.h1 
//           className="relative z-10 text-7xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.85] mb-12"
//           style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
//         >
//           <span className="bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent uppercase italic">Stealth</span> <br />
//           <span className="text-white tracking-[-0.04em]">Technologies</span>
//         </motion.h1>

//         <motion.p className="relative z-10 text-zinc-400 max-w-4xl mx-auto text-xl md:text-2xl font-light tracking-tight leading-relaxed italic px-4">
//           Architecting the future of <span className="text-white font-semibold">Autonomous Software Systems</span>. <br className="hidden md:block" />
//           Where industrial reliability meets artificial intuition.
//         </motion.p>

//         {/* --- HERO ACTIONS: PROFESSIONAL HIERARCHY --- */}
//         <div className="mt-20 flex flex-col items-center gap-10 relative z-10 w-full">
          
//           {/* Row 1: Dual Main Routes */}
//           <div className="flex flex-wrap justify-center gap-6">
//             <Link href="/services">
//               <motion.button 
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group relative bg-white text-black px-12 py-6 rounded-[1.8rem] font-[900] text-xl md:text-2xl transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] uppercase tracking-tighter overflow-hidden"
//               >
//                 <span className="relative z-10">Initialize Project</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
//               </motion.button>
//             </Link>
            
//             <Link href="/training">
//               <motion.button 
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group border border-white/10 bg-white/5 backdrop-blur-2xl px-12 py-6 rounded-[1.8rem] font-bold text-xl md:text-2xl hover:bg-white/10 transition-all flex items-center gap-4 uppercase tracking-tighter text-white"
//               >
//                 Training Hub <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//               </motion.button>
//             </Link>
//           </div>

//           {/* Row 2: Ultra-Advanced AI Copilot Launchpad */}
//           <Link href="/ai-copilot" className="w-full max-w-xl group px-4">
//             <motion.button 
//               whileHover={{ scale: 1.02 }}
//               className="w-full relative flex items-center justify-center gap-8 bg-[#08080A] border border-indigo-500/30 p-8 shadow-[0_0_50px_rgba(79,70,229,0.1)] group-hover:shadow-[0_0_100px_rgba(79,70,229,0.3)] transition-all duration-700 overflow-hidden"
//               style={{
//                 clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)" 
//               }}
//             >
//               {/* Holographic animated scanline */}
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite]" />
              
//               <div className="flex items-center gap-6 relative z-10">
//                 <div className="relative">
//                   <Bot size={40} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-500" />
//                   <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] leading-none mb-2">Neural Interface Node</p>
//                   <h3 className="text-3xl font-[1000] uppercase italic tracking-tighter text-white group-hover:text-indigo-400 transition-colors">Launch AI Copilot</h3>
//                 </div>
//               </div>
//               <Sparkles className="text-indigo-500/40 group-hover:text-indigo-400 group-hover:scale-150 transition-all duration-700" size={32} />
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       <Marquee items={partners} direction="left" />
//       <Marquee items={techStack} direction="right" />

//       {/* ===== 3. GLOBAL STANDARDS SECTION ===== */}
//       <section className="py-48 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
//         <div className="grid md:grid-cols-2 gap-32 items-center mb-40">
//           <motion.div {...fadeIn}>
//             <h2 className="text-6xl md:text-8xl font-[1000] mb-10 tracking-tighter italic leading-none uppercase">Global <br/> Standards.</h2>
//             <p className="text-zinc-500 text-xl leading-relaxed font-light mb-12 border-l border-white/10 pl-10 italic">
//               A multidisciplinary deep-tech organization building future-ready professionals and industrial-grade intelligent software systems.
//             </p>
            
//             <div className="space-y-5">
//               {[
//                 { title: "Neural Software Architecture", link: "/services" },
//                 { title: "Elite Technical Training", link: "/training" },
//                 { title: "Global R&D Hub", link: "/research" }
//               ].map((item, i) => (
//                 <Link key={i} href={item.link} className="block group">
//                     <div className="flex gap-5 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 items-center group-hover:bg-white/[0.05] group-hover:border-indigo-500/50 transition-all duration-500 shadow-xl">
//                         <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]" />
//                         <span className="font-black text-zinc-400 tracking-tight uppercase text-xs italic group-hover:text-white transition-colors">{item.title}</span>
//                         <ArrowRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-indigo-400" />
//                     </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>

//           <div className="relative aspect-square rounded-[6rem] bg-gradient-to-br from-indigo-950/20 to-zinc-950 border border-white/10 p-20 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.6)] overflow-hidden group">
//              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//              <div className="text-center relative z-10">
//                 <Sparkles className="mx-auto mb-8 text-indigo-400 animate-pulse" size={90} strokeWidth={1} />
//                 <h3 className="text-4xl font-black mb-6 uppercase tracking-widest italic">Core Domain</h3>
//                 <p className="text-zinc-500 text-xl leading-relaxed font-light italic px-4">Engineering decentralized intelligence to empower the next generation of digital infrastructure.</p>
//              </div>
//           </div>
//         </div>

//         {/* ADVANCED SERVICE GRID */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             { t: "Software", d: "Scalable ERP, MIS, and Enterprise grade automation systems.", icon: <Code2 className="text-indigo-400" />, href: "/services", tag: "Engineering" },
//             { t: "Training", d: "Elite mentoring for the next billion-dollar technology stack.", icon: <GraduationCap className="text-emerald-400" />, href: "/training", tag: "Education" },
//             { t: "Research", d: "Peer-reviewed model implementation and performance evaluation.", icon: <Network className="text-purple-400" />, href: "/research", tag: "R&D" }
//           ].map((item, i) => (
//             <Link key={i} href={item.href} className="group block h-full">
//                 <motion.div {...fadeIn} className="p-14 h-full rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group-hover:border-indigo-500/50 group-hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden shadow-2xl">
//                     <div className="absolute top-8 right-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-800 group-hover:text-indigo-900 transition-colors italic">{item.tag}</div>
//                     <div className="w-16 h-16 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-3xl">
//                         {item.icon}
//                     </div>
//                     <h3 className="text-5xl font-black mb-8 tracking-tighter uppercase italic">{item.t}</h3>
//                     <p className="text-zinc-500 text-lg leading-relaxed font-light mb-12 group-hover:text-zinc-300 transition-colors">{item.d}</p>
//                     <div className="flex items-center gap-3 text-indigo-500 font-black uppercase text-[10px] tracking-[0.4em]">
//                         Sync Domain <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
//                     </div>
//                 </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ===== 5. INDUSTRIAL SOLUTIONS (SRS 3: Software, Web, Mobile, IT) ===== */}
//       <section className="py-40 bg-zinc-950/40 border-y border-white/5 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter text-center uppercase italic">Industrial Solutions.</h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div {...fadeIn} className="p-12 rounded-[4rem] bg-zinc-900 border border-white/5 h-[650px] flex flex-col justify-between group overflow-hidden relative shadow-2xl">
//               <Terminal className="absolute -bottom-10 -right-10 text-white/5 scale-150" size={350} />
//               <Code2 size={64} className="text-cyan-400" />
//               <div>
//                 <h3 className="text-5xl font-black mb-6 tracking-tighter italic uppercase">Software & Web</h3>
//                 <p className="text-gray-400 text-xl mb-10 leading-relaxed font-light italic">ERP Systems, E-commerce Platforms, MIS, and Enterprise Automation Software.</p>
//                 <div className="flex flex-wrap gap-3">
//                   {["System Maintenance", "Software Testing", "Database Design", "Deployment"].map(tag => (
//                     <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-gray-500 hover:text-white transition-colors">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div {...fadeIn} className="p-12 rounded-[4rem] bg-gradient-to-br from-purple-900/20 to-zinc-950 border border-white/5 h-[650px] flex flex-col justify-between relative group shadow-2xl overflow-hidden">
//               <BrainCircuit size={64} className="text-purple-400" />
//               <div>
//                 <h3 className="text-5xl font-black mb-6 tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">AI & Deep Tech</h3>
//                 <p className="text-gray-400 text-xl mb-10 leading-relaxed font-light italic">Autonomous agents, predictive analytics dashboards, and neural network applications.</p>
//                 <div className="flex flex-wrap gap-3">
//                   {["NLP Pipelines", "Computer Vision", "Model Ops", "Predictive Modeling"].map(tag => (
//                     <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== 6. DELIVERY LOOP (SRS 7) ===== */}
//       <section className="py-40 relative z-10 border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
//             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">Delivery <br/> Loop.</h2>
//             <p className="text-gray-500 max-w-xs text-sm font-bold uppercase tracking-[0.3em] border-l border-white/10 pl-8 italic">
//               Structured practices ensuring quality, reliability, and extreme scalability.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//             {["Requirement Analysis", "System Design", "Development", "Testing", "Maintenance"].map((step, i) => (
//               <div key={i} className="group p-10 rounded-3xl border border-white/5 bg-zinc-950 hover:bg-white hover:text-black transition-all duration-500 shadow-xl">
//                 <span className="text-[10px] font-mono mb-12 block opacity-50 tracking-[0.3em]">STEP_0{i+1}</span>
//                 <h4 className="font-black text-2xl leading-tight uppercase italic">{step}</h4>
//                 <ArrowRight className="mt-8 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== 7. APPLIED RESEARCH (SRS 6) ===== */}
//       <section className="py-40 px-6 max-w-7xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-24 items-center">
//           <motion.div {...fadeIn}>
//             <div className="flex items-center gap-3 text-emerald-500 font-mono text-sm mb-6 uppercase tracking-[0.5em] font-black">
//               <Microscope size={24} /> R&D Labs
//             </div>
//             <h2 className="text-6xl md:text-[6.5rem] font-black mb-10 leading-[0.85] tracking-tighter italic uppercase">Deep Tech <br /> Research.</h2>
//             <p className="text-gray-400 text-2xl mb-12 font-light leading-relaxed italic">
//               Technical guidance in <span className="text-white">Image Processing</span>, 
//               Model Implementation, and Performance Evaluation.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all shadow-lg">
//                  <Activity size={24} className="mb-4 text-emerald-500" />
//                  <h4 className="font-black text-lg mb-2 uppercase italic">Healthcare</h4>
//                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Diagnostic Vision</p>
//                </div>
//                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all shadow-lg">
//                  <Zap size={24} className="mb-4 text-cyan-500" />
//                  <h4 className="font-black text-lg mb-2 uppercase italic">Agri-Tech</h4>
//                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Predictive Yield</p>
//                </div>
//             </div>
//           </motion.div>

//           <div className="relative aspect-square rounded-[5rem] bg-zinc-950 border border-white/5 p-16 flex flex-col justify-center gap-10 overflow-hidden group shadow-2xl">
//              <Layers className="absolute -top-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-1000" size={400} />
//              {["Computer Vision", "NLP Pipelines", "IoT Smart Systems", "Data Analytics"].map((area, i) => (
//                <div key={i} className="flex items-center gap-8 relative z-10 group/item">
//                   <span className="text-[10px] font-mono text-gray-700 font-black">/ 0{i+1}</span>
//                   <h4 className="text-3xl md:text-5xl font-black italic tracking-tighter text-gray-700 group-hover/item:text-white transition-all cursor-default uppercase">
//                     {area}
//                   </h4>
//                </div>
//              ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== 8. THE KNOWLEDGE HUB (Conference & Journal) ===== */}
//       <section className="py-40 bg-zinc-950 border-y border-white/5 relative z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-8">
//             <Link href="/conference" className="group">
//               <motion.div {...fadeIn} className="p-12 rounded-[4rem] bg-gradient-to-br from-cyan-900/40 to-black border border-cyan-500/20 h-[500px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
//                 <Presentation className="absolute -top-10 -right-10 text-white/5 scale-[3]" size={200} />
//                 <div className="relative z-10">
//                   <span className="px-4 py-1.5 rounded-full bg-cyan-500 text-[10px] font-black uppercase tracking-widest">Next Summit</span>
//                   <h3 className="text-5xl font-black mt-8 tracking-tighter uppercase italic italic">Global AI <br /> Conference 2026</h3>
//                 </div>
//                 <div className="relative z-10 flex items-center justify-between">
//                   <p className="text-gray-400 text-sm max-w-[200px] italic font-light italic">Join industry leaders and researchers for the summit.</p>
//                   <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
//                     <ArrowRight className="text-black" />
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>

//             <Link href="/journal" className="group">
//               <motion.div {...fadeIn} className="p-12 rounded-[4rem] bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 h-[500px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
//                 <BookOpen className="absolute -top-10 -right-10 text-white/5 scale-[3]" size={200} />
//                 <div className="relative z-10">
//                   <span className="px-4 py-1.5 rounded-full bg-purple-500 text-[10px] font-black uppercase tracking-widest">Publications</span>
//                   <h3 className="text-5xl font-black mt-8 tracking-tighter uppercase italic italic">Sovereign AI <br /> Research Journal</h3>
//                 </div>
//                 <div className="relative z-10 flex items-center justify-between">
//                   <p className="text-gray-400 text-sm max-w-[200px] italic font-light italic">Peer-reviewed papers on neural engineering.</p>
//                   <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
//                     <ArrowRight className="text-black" />
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ===== 9. TRAINING & PLACEMENT (SRS 4 & 5) ===== */}
//       <section className="py-40 px-6 relative z-10">
//         <div className="max-w-7xl mx-auto p-16 md:p-28 rounded-[6rem] bg-white text-black relative overflow-hidden shadow-2xl transition-all hover:shadow-[0_0_100px_rgba(255,255,255,0.15)]">
//            <Globe size={600} className="absolute -bottom-40 -right-40 text-black/5 rotate-12" />
//            <div className="relative z-10 grid md:grid-cols-2 gap-24 items-center">
//               <div>
//                 <h2 className="text-6xl md:text-[6.5rem] font-black mb-10 leading-[0.85] tracking-tighter italic uppercase">The Talent <br /> Ecosystem.</h2>
//                 <p className="text-zinc-600 text-2xl mb-16 font-medium leading-relaxed italic italic">
//                   Structured mentoring, industry case studies, and placement assistance designed for global scale.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <button className="bg-black text-white px-12 py-5 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Explore Tracks</button>
//                   <button className="border border-black/10 px-12 py-5 rounded-[2rem] font-black text-xl uppercase tracking-widest hover:bg-black/5 transition-all">Placement Portal</button>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                  {[
//                    { t: "Live Projects", d: "Real-world industrial exposure." },
//                    { t: "Mock Interviews", d: "Rigorous technical & aptitude prep." },
//                    { t: "Resume Design", d: "Optimization for global standards." },
//                    { t: "Certification", d: "Industry recognized validation." }
//                  ].map((item, i) => (
//                    <div key={i} className="p-8 rounded-[2.5rem] bg-black/5 border border-black/5 flex items-start gap-5 hover:bg-black hover:text-white transition-all group/box">
//                       <CheckCircle2 size={24} className="shrink-0 group-hover/box:text-white transition-colors" />
//                       <div>
//                         <h4 className="font-black text-xl uppercase italic mb-1">{item.t}</h4>
//                         <p className="text-sm font-medium opacity-60 italic">{item.d}</p>
//                       </div>
//                    </div>
//                  ))}
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* ===== 10. WHY CHOOSE US & CAREERS (SRS 8 & 9) ===== */}
//       <section className="py-40 text-center max-w-7xl mx-auto px-6 relative z-10">
//         <h2 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter uppercase italic">Why Partners <br /> <span className="text-gray-500 italic">Trust Stealth.</span></h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
//           {[
//             { val: "15+", lab: "AI Systems Built", col: "text-cyan-400" },
//             { val: "200+", lab: "Developers Trained", col: "text-purple-400" },
//             { val: "98%", lab: "Placement Rate", col: "text-emerald-400" },
//             { val: "10+", lab: "Hiring Partners", col: "text-white" }
//           ].map((stat, i) => (
//             <div key={i} className="space-y-2">
//               <h4 className={`text-6xl md:text-[5rem] font-black tracking-tighter ${stat.col}`}>{stat.val}</h4>
//               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">{stat.lab}</p>
//             </div>
//           ))}
//         </div>
//         <Link href="/careers">
//           <motion.div whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-6 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-2xl">
//             <Briefcase size={24} className="text-cyan-400" />
//             <span className="font-black uppercase tracking-widest text-xl italic">Join our Research & Dev Domain</span>
//             <ArrowRight size={24} />
//           </motion.div>
//         </Link>
//       </section>

//       {/* ===== 11. LEAD CONTACT ENGINE (SRS 10) ===== */}
//       <section className="py-40 px-6 relative z-10 bg-white/[0.01]">
//         <div className="max-w-4xl mx-auto rounded-[3rem] border border-white/10 bg-zinc-950 p-8 md:p-16 shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
//             <Zap size={300} className="text-cyan-400" />
//           </div>
          
//           <div className="relative z-10 text-center mb-16">
//             <motion.h2 {...fadeIn} className="text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic">Start a <br /> <span className="text-cyan-500 not-italic">Conversation</span></motion.h2>
//             <p className="text-gray-500 mt-6 uppercase text-[10px] font-bold tracking-[0.5em]">Architecting Digital Sovereignty Together</p>
//           </div>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
//             <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-20" />
//             <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-20" />
//             <div className="col-span-2 space-y-2">
//               <select className="w-full bg-zinc-900 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all font-bold text-xs uppercase tracking-widest text-gray-400 appearance-none">
//                 <option>SOFTWARE ARCHITECTURE & DEV</option>
//                 <option>GEN-AI & NEURAL RESEARCH</option>
//                 <option>TRAINING & PLACEMENT</option>
//                 <option>STRATEGIC PARTNERSHIP</option>
//               </select>
//             </div>
//             <textarea rows={4} placeholder="HOW CAN WE HELP?" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all font-bold text-xs uppercase tracking-widest col-span-2 text-white placeholder:opacity-20"></textarea>
//             <button className="col-span-2 bg-white text-black py-7 rounded-2xl font-[1000] uppercase tracking-[0.4em] hover:bg-cyan-500 transition-all shadow-[0_20px_50px_rgba(6,182,212,0.2)] mt-4">Initialize Sync</button>
//           </form>
//         </div>
//       </section>

//       {/* ===== 12. GLOBAL CTA (Final Impression) ===== */}
//       <section className="py-60 text-center relative overflow-hidden border-t border-white/5 z-10">
//         <div className="absolute inset-0 bg-cyan-500/5 blur-[150px] rounded-full" />
//         <motion.div {...fadeIn} className="relative z-10 px-6">
//           <Sparkles className="mx-auto mb-12 text-yellow-500 animate-pulse" size={64} />
//           <h2 className="text-7xl md:text-[14rem] font-black mb-12 tracking-tighter leading-[0.8] italic uppercase">The Future <br /> is Stealth.</h2>
//           <p className="text-gray-400 text-2xl md:text-3xl max-w-3xl mx-auto mb-20 font-light italic leading-relaxed px-4">Innovating ideas into intelligent software. Build India's sovereign tech stack with us.</p>
//           <div className="flex flex-wrap justify-center gap-10 items-center">
//              <button className="bg-white text-black px-24 py-8 rounded-[2.5rem] font-black text-2xl uppercase tracking-widest hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] transition-all">Start Project</button>
//              <Link href="/contact" className="text-white font-black text-xl border-b-2 border-white/20 hover:border-white transition-all uppercase tracking-[0.3em] italic">Contact Us</Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* ===== 13. THE SOVEREIGN FOOTER (SRS 10 & 11) ===== */}
//       <footer className="py-24 border-t border-white/5 px-10 bg-zinc-950/20 relative z-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-20 items-start">
//           <div className="col-span-2 space-y-10">
//             <h3 className="text-6xl font-black tracking-tighter leading-none italic uppercase">STEALTH <br /> <span className="text-gray-700">Technologies</span></h3>
//             <p className="text-gray-600 text-xs max-w-xs leading-relaxed uppercase tracking-[0.4em] font-black italic">Indore • Bengaluru • Singapore <br /> Nurturing skilled professionals for the global ecosystem.</p>
//             <div className="space-y-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
//               <p className="flex items-center gap-3 italic"><Zap size={14} className="text-cyan-500" /> info@stealthai.com</p>
//               <p className="flex items-center gap-3 italic"><Activity size={14} className="text-purple-500" /> +91-XXXXXXXXXX</p>
//               <p className="opacity-50 italic">Monday – Saturday • Indore Office</p>
//             </div>
//           </div>
          
//           {[
//             { title: "Core Labs", links: ["Neural Systems", "Agri-Vision", "Healthcare NLP", "IoT Smart Systems"] },
//             { title: "Ecosystem", links: ["Training", "Internships", "Placement Portal", "Research Forum"] },
//             { title: "Governance", links: ["Privacy Policy", "Refund Policy", "Support Policy", "Terms of Use"] }
//           ].map((section, i) => (
//             <div key={i}>
//               <h5 className="text-[11px] font-black text-white uppercase tracking-[0.5em] mb-12 italic opacity-50">/ {section.title}</h5>
//               <ul className="text-gray-500 text-sm space-y-5 font-black uppercase tracking-widest">
//                 {section.links.map(link => (
//                   <li key={link} className="hover:text-cyan-400 cursor-pointer transition-colors text-[10px] tracking-[0.2em]">{link}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className="max-w-7xl mx-auto mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-gray-800 tracking-[0.6em] uppercase">
//           <p>© 2026 STEALTH Technologies (PVT) LTD • Build v4.5.0</p>
//           <div className="flex gap-10 italic">
//             <span className="flex items-center gap-2 text-cyan-900 font-black"><ShieldCheck size={12}/> Sovereign Node</span>
//             <span className="text-purple-900 font-black">Unicorn Build</span>
//           </div>
//         </div>
//       </footer>

//     </main>
//   );
// }




// "use client";

// import { 
//   Code2, BrainCircuit, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2, 
//   Microscope, Globe, Zap, Network, Terminal, Activity, Target, Landmark, 
//   Award, Building2, SearchCheck, Fingerprint, Mail, Phone, BookOpen, Presentation,
//   ShieldAlert, Database, Scale, Users2, ChevronRight, School, Briefcase, Laptop, Cpu, Quote, FileText, MapPin
// } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden font-sans min-h-screen">
      
//       {/* 1. TOP ANNOUNCEMENT STRIP */}
//       <div className="bg-blue-900 text-white py-2.5 border-b border-blue-800 text-center px-4">
//         <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase opacity-90">
//           Broadcast: Global AI Conference 2026 Node is Active • Sovereign Research Journal Published
//         </p>
//       </div>

//       {/* 2. ELITE HERO SECTION */}
//       <section className="relative px-6 py-32 bg-white border-b border-slate-100 text-center overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
//         <div className="max-w-5xl mx-auto relative z-10">
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
//             <Fingerprint size={14} className="text-blue-600" />
//             <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">StealthAI Sovereign Node v4.5.2</span>
//           </div>
//           <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic text-stroke">
//             STEALTH AI <br/> <span className="text-blue-700">Technology</span>
//           </h1>
//           <p className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed mb-16 max-w-3xl mx-auto italic">
//             "Architecting the future where industrial reliability meets artificial intuition for a self-reliant digital ecosystem."
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <Link href="/services">
//               <button className="bg-slate-900 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl">Initialize Project</button>
//             </Link>
//             <Link href="/training">
//               <button className="bg-white text-slate-700 border border-slate-200 px-12 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">Training Academy</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 3. IMPACT METRICS */}
//       <section className="py-16 bg-slate-50 border-b border-slate-100 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { v: "3000+", l: "Learners Trained" },
//             { v: "25+", l: "Industrial Nodes" },
//             { v: "98%", l: "Placement Rate" },
//             { v: "15+", l: "Research Labs" }
//           ].map((s, i) => (
//             <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
//               <div className="text-4xl font-black text-slate-900 italic tracking-tighter">{s.v}</div>
//               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.l}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 4. THE KNOWLEDGE HUB (Conference & Journal) */}
//       <section className="py-32 bg-white px-6">
//         <div className="max-w-7xl mx-auto">
//            <div className="text-center mb-24">
//               <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-6 text-slate-900">Knowledge Hub.</h2>
//               <div className="h-0.5 w-24 bg-blue-600 mx-auto" />
//            </div>
//            <div className="grid md:grid-cols-2 gap-12">
//               <Link href="/conference" className="p-12 rounded-[3.5rem] bg-blue-700 text-white shadow-xl relative overflow-hidden group cursor-pointer border border-transparent hover:border-blue-400 transition-all">
//                  <Presentation className="absolute -top-10 -right-10 opacity-10" size={300} />
//                  <span className="bg-blue-500 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">Summit 2026</span>
//                  <h3 className="text-5xl font-black mt-10 mb-6 italic tracking-tighter uppercase leading-none">Global AI <br /> Conference.</h3>
//                  <p className="text-blue-100 text-lg mb-10 italic font-medium leading-relaxed opacity-80">Join industry leaders, researchers, and scholars for the 2026 Indore Summit.</p>
//                  <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
//               </Link>
//               <Link href="/journal" className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group cursor-pointer border border-white/10 hover:border-blue-600 transition-all">
//                  <BookOpen className="absolute -top-10 -right-10 opacity-10" size={300} />
//                  <span className="bg-slate-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">Scientific Press</span>
//                  <h3 className="text-5xl font-black mt-10 mb-6 italic tracking-tighter uppercase leading-none">Sovereign <br /> Research Journal.</h3>
//                  <p className="text-slate-400 text-lg mb-10 italic font-medium leading-relaxed opacity-80">Peer-reviewed papers on neural engineering and autonomous system architectures.</p>
//                  <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform text-blue-500" />
//               </Link>
//            </div>
//         </div>
//       </section>

//       {/* 5. INDUSTRIAL SOLUTIONS (Material Safe) */}
//       <section className="py-24 bg-slate-50 border-y border-slate-200 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase italic text-center text-slate-900">Industrial Units.</h2>
//           <div className="grid md:grid-cols-2 gap-10">
//               <Link href="/services" className="p-16 rounded-[4rem] bg-white border border-slate-200 flex flex-col justify-between h-[500px] shadow-sm group hover:border-blue-600 transition-all">
//                 <Terminal size={64} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
//                 <div>
//                   <h3 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">Software & Web</h3>
//                   <p className="text-slate-500 mb-10 leading-relaxed text-xl font-medium">ERP Systems, E-commerce Platforms, MIS, and Enterprise Automation Software Nodes.</p>
//                   <div className="flex flex-wrap gap-3">
//                     {["Audit", "Architecture", "DevOps", "Validation"].map(tag => (
//                       <span key={tag} className="text-[10px] font-black uppercase px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-400">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//               <Link href="/services" className="p-16 rounded-[4rem] bg-slate-900 text-white shadow-2xl flex flex-col justify-between h-[500px] group border border-transparent hover:border-blue-600 transition-all">
//                 <BrainCircuit size={64} className="text-blue-500 group-hover:scale-110 transition-transform" />
//                 <div>
//                   <h3 className="text-4xl font-black mb-6 italic tracking-tighter text-blue-400 uppercase">AI & Deep Tech</h3>
//                   <p className="text-slate-400 mb-10 leading-relaxed text-xl italic opacity-80">Autonomous agents, predictive analytics dashboards, and neural network applications.</p>
//                   <div className="flex flex-wrap gap-3">
//                     {["NLP", "Vision", "MLOps", "Modeling"].map(tag => (
//                       <span key={tag} className="text-[10px] font-black uppercase px-5 py-2 bg-white/5 border border-white/10 rounded-full text-slate-500">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//           </div>
//         </div>
//       </section>

//       {/* 6. ACADEMY & FELLOWSHIP */}
//       <section className="py-32 bg-white px-6 border-b border-slate-100">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
//            <div className="space-y-10">
//               <Quote size={64} className="text-blue-600 opacity-20" />
//               <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]">Academy <br/> Hub.</h2>
//               <p className="text-slate-600 text-xl leading-relaxed italic font-medium">Structured mentoring, industry case studies, and placement assistance designed for global scale.</p>
//               <div className="grid grid-cols-2 gap-4">
//                  {["Live Projects", "Mock Interviews", "Resume Node", "Certifications"].map(item => (
//                    <div key={item} className="flex items-center gap-3 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
//                       <CheckCircle2 size={18} className="text-emerald-500" />
//                       <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
//                    </div>
//                  ))}
//               </div>
//            </div>
//            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12"><GraduationCap size={200}/></div>
//               <h4 className="text-2xl font-black mb-8 uppercase italic tracking-tighter text-slate-900 border-b pb-4 border-slate-100">Fellowship Node 2026</h4>
//               <div className="space-y-6 relative z-10">
//                  {[
//                    { t: "Full Stack Development", o: "08 Nodes", link: "/training" },
//                    { t: "AI Research scholar", o: "04 Nodes", link: "/research" },
//                    { t: "System Security Node", o: "02 Nodes", link: "/services" }
//                  ].map((node, i) => (
//                    <Link href={node.link} key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-4 rounded-xl cursor-pointer group transition-all">
//                       <span className="font-bold text-sm uppercase tracking-wide group-hover:text-blue-600">{node.t}</span>
//                       <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase">{node.o}</span>
//                    </Link>
//                  ))}
//               </div>
//               <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs mt-10 hover:bg-blue-700 transition-colors shadow-lg">Apply Node</button>
//            </div>
//         </div>
//       </section>

// {/* 7. CORPORATE TRUST BLOCK - Updated Locations */}
// <section className="py-32 bg-slate-50 border-y border-slate-200 px-6">
//   <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
    
//     {/* Office Nodes - Fixed & Professional */}
//     <div className="space-y-8">
//       <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 border-l-4 border-blue-600 pl-4">Global Presence</h4>
//       <div className="space-y-6 text-sm text-slate-600 italic font-medium leading-relaxed">
        
//         {/* Indore HQ */}
//         <div className="group">
//           <p className="flex items-start gap-3 text-slate-900 not-italic font-bold">
//             <MapPin size={18} className="text-blue-600 shrink-0"/> Indore HQ
//           </p>
//           <p className="ml-7 text-xs text-slate-500">Corporate Park, Vijay Nagar, Madhya Pradesh, India</p>
//           <span className="ml-7 text-[9px] font-black text-blue-600/50 uppercase tracking-widest mt-1 block">Main Operational Node</span>
//         </div>

//         {/* Bhopal Hub */}
//         <div className="group">
//           <p className="flex items-start gap-3 text-slate-900 not-italic font-bold">
//             <MapPin size={18} className="text-slate-400 shrink-0"/> Bhopal Hub
//           </p>
//           <p className="ml-7 text-xs text-slate-500">Arera Colony, MP Nagar Zone-II, Bhopal, India</p>
//           <span className="ml-7 text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 block">Industrial Training Unit</span>
//         </div>

//         {/* Dubai Hub */}
//         <div className="group">
//           <p className="flex items-start gap-3 text-slate-900 not-italic font-bold">
//             <MapPin size={18} className="text-slate-400 shrink-0"/> Dubai Hub
//           </p>
//           <p className="ml-7 text-xs text-slate-500">AI & Robotics Park, Dubai Internet City, UAE</p>
//           <span className="ml-7 text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 block">Global Strategy & AI Node</span>
//         </div>

//         {/* Mumbai Hub */}
//         <div className="group">
//           <p className="flex items-start gap-3 text-slate-900 not-italic font-bold">
//             <MapPin size={18} className="text-slate-400 shrink-0"/> Mumbai Hub
//           </p>
//           <p className="ml-7 text-xs text-slate-500">Bandra Kurla Complex (BKC), Mumbai, India</p>
//           <span className="ml-7 text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 block">Data Governance Unit</span>
//         </div>
//       </div>
//     </div>

//           {/* Legal Identity */}
//           <div className="space-y-8">
//             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 border-l-4 border-blue-600 pl-4">Legal Identity</h4>
//             <div className="space-y-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
//               <p className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">CIN: U72900MP2026PTC0XXXXXX</p>
//               <p className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">GSTIN: 23AAFCSXXXXX1Z0</p>
//               <div className="pt-4 flex flex-wrap gap-2">
//                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">MCA REGISTERED</span>
//                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-200">MSME CERTIFIED</span>
//                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg border border-purple-200">STARTUP INDIA</span>
//               </div>
//             </div>
//           </div>

//           {/* Knowledge Assets */}
//           <div className="space-y-8">
//             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 border-l-4 border-blue-600 pl-4">Knowledge Assets</h4>
//             <div className="space-y-4">
//                <div className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer group shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <FileText size={20} className="text-blue-600"/>
//                     <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Company Brochure 2026</span>
//                   </div>
//                   <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600" />
//                </div>
//                <div className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer group shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <FileText size={20} className="text-blue-600"/>
//                     <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Academy Syllabus v4.5</span>
//                   </div>
//                   <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600" />
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }






"use client";

import { 
  Code2, BrainCircuit, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2, 
  Microscope, Globe, Zap, Network, Terminal, Activity, Target, Landmark, 
  Award, Building2, SearchCheck, Fingerprint, Mail, Phone, BookOpen, Presentation,
  ShieldAlert, Database, Scale, Users2, ChevronRight, School, Briefcase, Laptop, Cpu, Quote, FileText, MapPin
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden font-sans min-h-screen">
      
      {/* 1. TOP ANNOUNCEMENT STRIP */}
      <div className="bg-blue-900 text-white py-2.5 border-b border-blue-800 text-center px-4">
        <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase opacity-90">
          Broadcast: Global AI Conference 2026 Node is Active • Sovereign Research Journal Published
        </p>
      </div>

      {/* 2. ELITE HERO SECTION */}
      <section className="relative px-6 py-32 bg-white border-b border-slate-100 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">StealthAI Sovereign Node v4.5.2</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic text-stroke">
            STEALTH AI <br/> <span className="text-blue-700">Technology</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed mb-16 max-w-3xl mx-auto italic">
            "Architecting the future where industrial reliability meets artificial intuition for a self-reliant digital ecosystem."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/services">
              <button className="bg-slate-900 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl">Initialize Project</button>
            </Link>
            <Link href="/training">
              <button className="bg-white text-slate-700 border border-slate-200 px-12 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">Training Academy</button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC & IMPACT METRICS (SRS 8 & 9 Combined) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "15+", l: "AI Systems Built", c: "text-blue-700" },
            { v: "3000+", l: "Professionals Trained", c: "text-slate-900" },
            { v: "98%", l: "Placement Rate", c: "text-emerald-600" },
            { v: "25+", l: "Industrial Nodes", c: "text-slate-900" }
          ].map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-transform hover:scale-105">
              <div className={`text-5xl font-black italic tracking-tighter ${s.c}`}>{s.v}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APPLIED RESEARCH LABS (SRS 6) */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <div className="flex items-center gap-3 text-blue-600 font-black text-xs mb-8 uppercase tracking-[0.4em]">
              <Microscope size={24} /> R&D Deep-Tech Labs
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter italic uppercase">Deep Tech <br /> Research.</h2>
            <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed italic">
              Technical guidance in <span className="text-blue-700 font-bold underline underline-offset-8 decoration-blue-600/30">Image Processing</span>, 
              Model Implementation, and Performance Evaluation.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                  <Activity size={24} className="mb-4 text-blue-600" />
                  <h4 className="font-black text-lg mb-2 uppercase italic tracking-tighter">Healthcare</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Diagnostic Vision</p>
               </div>
               <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                  <Zap size={24} className="mb-4 text-blue-600" />
                  <h4 className="font-black text-lg mb-2 uppercase italic tracking-tighter">Agri-Tech</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Predictive Yield</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
             {["Computer Vision", "NLP Pipelines", "IoT Smart Systems", "Data Analytics"].map((area, i) => (
                <div key={i} className="flex items-center gap-10 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-slate-900 transition-all cursor-default shadow-sm">
                   <span className="text-xs font-black text-slate-300 italic group-hover:text-blue-500 transition-colors">/ NODE_0{i+1}</span>
                   <h4 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-slate-800 group-hover:text-white transition-all">{area}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. KNOWLEDGE HUB (Conference & Journal) */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-6 text-slate-900">Knowledge Hub.</h2>
              <p className="text-slate-400 uppercase tracking-widest font-bold text-xs">Scientific Publications & Global Events</p>
           </div>
           <div className="grid md:grid-cols-2 gap-12">
              <Link href="/conference" className="p-12 rounded-[3.5rem] bg-blue-700 text-white shadow-xl relative overflow-hidden group border border-transparent hover:border-blue-400 transition-all">
                 <Presentation className="absolute -top-10 -right-10 opacity-10" size={300} />
                 <span className="bg-blue-500 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">Summit 2026</span>
                 <h3 className="text-5xl font-black mt-10 mb-6 italic tracking-tighter uppercase leading-none">Global AI <br /> Conference.</h3>
                 <p className="text-blue-100 text-lg mb-10 italic font-medium leading-relaxed opacity-80">Join industry leaders, researchers, and scholars for the 2026 Indore Summit.</p>
                 <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
              </Link>
              <Link href="/journal" className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group border border-white/10 hover:border-blue-600 transition-all">
                 <BookOpen className="absolute -top-10 -right-10 opacity-10" size={300} />
                 <span className="bg-slate-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">Scientific Press</span>
                 <h3 className="text-5xl font-black mt-10 mb-6 italic tracking-tighter uppercase leading-none text-white">Sovereign <br /> Journal.</h3>
                 <p className="text-slate-400 text-lg mb-10 italic font-medium leading-relaxed opacity-80">Peer-reviewed papers on neural engineering and autonomous system architectures.</p>
                 <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform text-blue-500" />
              </Link>
           </div>
        </div>
      </section>

      {/* 6. INDUSTRIAL SOLUTIONS & DELIVERY (SRS 3 & 7 Combined) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase italic text-center text-slate-900">Industrial Units.</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
            <Link href="/services" className="p-16 rounded-[4rem] bg-white border border-slate-200 flex flex-col justify-between h-[500px] shadow-sm group hover:border-blue-600 transition-all">
              <Terminal size={64} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
              <div>
                <h3 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">Software & Web</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-xl font-medium">ERP Systems, E-commerce Platforms, MIS, and Enterprise Automation Software Nodes.</p>
                <div className="flex flex-wrap gap-3">
                  {["Architecture", "DevOps", "Validation"].map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-400">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
            <Link href="/services" className="p-16 rounded-[4rem] bg-slate-900 text-white shadow-2xl flex flex-col justify-between h-[500px] group border border-transparent hover:border-blue-600 transition-all">
              <BrainCircuit size={64} className="text-blue-500 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-4xl font-black mb-6 italic tracking-tighter text-blue-400 uppercase">AI & Deep Tech</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-xl italic opacity-80">Autonomous agents, predictive analytics dashboards, and neural network applications.</p>
                <div className="flex flex-wrap gap-3">
                  {["NLP", "Vision", "MLOps"].map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase px-5 py-2 bg-white/5 border border-white/10 rounded-full text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Consultation", "Architecture", "Engineering", "Validation", "Deployment"].map((step, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:bg-blue-600 hover:text-white transition-all group">
              <span className="text-[9px] font-black opacity-50 uppercase tracking-widest block mb-4">Step_0{i+1}</span>
              <h4 className="font-black text-sm uppercase italic">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE TALENT ECOSYSTEM (SRS 4 & 5 Combined) */}
      <section className="py-32 bg-white px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
              <Quote size={64} className="text-blue-600 opacity-20" />
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]">Academy <br/> Ecosystem.</h2>
              <p className="text-slate-600 text-xl leading-relaxed italic font-medium">Structured mentoring, industry case studies, and placement assistance designed for global scale.</p>
              <div className="grid grid-cols-2 gap-4">
                 {["Live Projects", "Mock Interviews", "Resume Node", "Certifications"].map(item => (
                   <div key={item} className="flex items-center gap-3 p-6 bg-slate-50 border border-slate-100 rounded-[2rem]">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="font-bold text-[10px] uppercase tracking-widest text-slate-700">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12"><GraduationCap size={200}/></div>
              <h4 className="text-2xl font-black mb-8 uppercase italic tracking-tighter text-slate-900 border-b pb-4 border-slate-100">Fellowship Node 2026</h4>
              <div className="space-y-6 relative z-10">
                 {[
                   { t: "Full Stack Development", o: "08 Nodes", link: "/training" },
                   { t: "AI Research scholar", o: "04 Nodes", link: "/research" },
                   { t: "System Security Node", o: "02 Nodes", link: "/services" }
                 ].map((node, i) => (
                   <Link href={node.link} key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-4 rounded-xl cursor-pointer group transition-all">
                      <span className="font-bold text-sm uppercase tracking-wide group-hover:text-blue-600">{node.t}</span>
                      <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase">{node.o}</span>
                   </Link>
                 ))}
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs mt-10 hover:bg-blue-700 transition-all shadow-lg">Apply node for sync</button>
           </div>
        </div>
      </section>

      {/* 8. LEAD CONTACT ENGINE (SRS 10) */}
      <section className="py-40 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-white border border-slate-200 p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none"><Zap size={400} className="text-blue-600" /></div>
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-5xl md:text-[5.5rem] font-black tracking-tighter uppercase italic text-slate-900">Start a <br/> <span className="text-blue-600">Conversation</span></h2>
            <p className="text-slate-400 mt-6 uppercase text-[10px] font-black tracking-[0.5em]">Architecting Digital Sovereignty Together</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <input type="text" placeholder="FULL NAME" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-xs uppercase tracking-widest" />
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-xs uppercase tracking-widest" />
            <select className="col-span-2 w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-[10px] uppercase tracking-widest text-slate-500 appearance-none">
              <option>SOFTWARE ARCHITECTURE & DEV</option>
              <option>GEN-AI & NEURAL RESEARCH</option>
              <option>STRATEGIC PARTNERSHIP</option>
            </select>
            <textarea rows={4} placeholder="HOW CAN WE HELP?" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-xs uppercase tracking-widest col-span-2"></textarea>
            <button className="col-span-2 bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:bg-blue-700 transition-all shadow-xl">Initialize Sync Node</button>
          </form>
        </div>
      </section>

      {/* 9. CORPORATE TRUST & LOCATIONS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-8 text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 border-l-4 border-blue-600 pl-4">Global Presence</h4>
            <div className="space-y-6">
              {[
                { c: "Indore HQ", a: "Corporate Park, Vijay Nagar, MP", s: "Main Node" },
                { c: "Dubai Hub", a: "Internet City, UAE", s: "Global Strategy" },
                { c: "Mumbai Hub", a: "BKC, Mumbai, India", s: "Data Governance" },
                { c: "Bhopal Node", a: "MP Nagar, Bhopal, India", s: "Training Unit" }
              ].map((loc, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-sm font-black uppercase italic text-slate-900 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" /> {loc.c}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 pl-6">{loc.a}</p>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest pl-6 mt-1 block group-hover:text-blue-400 transition-colors">{loc.s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 border-l-4 border-blue-600 pl-4">Legal Identity</h4>
            <div className="space-y-4">
               <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Corporate ID (CIN)</p>
                  <p className="text-xs font-bold text-slate-900 tracking-wider">U72900MP2026PTC0XXXXXX</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">GST Identification</p>
                  <p className="text-xs font-bold text-slate-900 tracking-wider">23AAFCSXXXXX1Z0</p>
               </div>
               <div className="flex gap-2">
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-100 text-[9px] font-black uppercase">MCA Verified</span>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100 text-[9px] font-black uppercase">MSME Certified</span>
               </div>
            </div>
          </div>
          <div className="space-y-8 text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 border-l-4 border-blue-600 pl-4">Knowledge Assets</h4>
            <div className="space-y-4">
               <div className="p-6 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:border-blue-600 transition-all shadow-sm">
                  <div className="flex items-center gap-4 text-blue-600"><FileText size={24}/> <span className="text-xs font-black uppercase tracking-widest text-slate-900">Brochure 2026</span></div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 transition-all"/>
               </div>
               <div className="p-6 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:border-blue-600 transition-all shadow-sm">
                  <div className="flex items-center gap-4 text-blue-600"><Database size={24}/> <span className="text-xs font-black uppercase tracking-widest text-slate-900">Research Node</span></div>
                  <ArrowRight size={16} className="text-slate-200 group-hover:text-blue-600 transition-all"/>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}