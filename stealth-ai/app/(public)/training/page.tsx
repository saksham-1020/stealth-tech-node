// // "use client";

// // import { motion, useScroll, useSpring } from "framer-motion";
// // import { useRef } from "react";
// // import { 
// //   GraduationCap, BrainCircuit, Code2, Database, ShieldCheck, 
// //   Terminal, Users, CheckCircle2, ArrowRight, Zap, Fingerprint,
// //   Target, Award, Briefcase, Microscope, Activity, Cpu
// // } from "lucide-react";
// // import Link from "next/link";

// // const courses = [
// //   {
// //     id: "01",
// //     title: "AI & Neural Engineering",
// //     subtitle: "Advanced Deep Learning",
// //     desc: "Master the architecture of modern intelligence. From Transformer models to fine-tuning LLMs on domestic datasets for sovereign applications.",
// //     syllabus: ["Neural Architecture Search", "NLP & LLM Fine-tuning", "Computer Vision Pipelines", "Model Quantization"],
// //     stats: "Top 1% Skills",
// //     icon: <BrainCircuit className="text-purple-500" />
// //   },
// //   {
// //     id: "02",
// //     title: "Full Stack Systems",
// //     subtitle: "Enterprise Architecture",
// //     desc: "Building the skeleton of the internet. Scalable, high-concurrency web systems using the Next.js 16 and Rust/Go backend ecosystem.",
// //     syllabus: ["Microservices Design", "Distributed Databases", "System Orchestration", "Real-time Syncing"],
// //     stats: "Ind. Ready v4",
// //     icon: <Code2 className="text-cyan-500" />
// //   },
// //   {
// //     id: "03",
// //     title: "Data Intelligence",
// //     subtitle: "Science & Engineering",
// //     desc: "Turning chaotic data into strategic nodes. Mastering predictive modeling, dataset preparation, and large-scale data analytics dashboards.",
// //     syllabus: ["Predictive Analytics", "Data Pipeline ETL", "Feature Engineering", "Statistical Modeling"],
// //     stats: "Expert Grade",
// //     icon: <Database className="text-emerald-500" />
// //   },
// //   {
// //     id: "04",
// //     title: "Cybersecurity Ops",
// //     subtitle: "Defensive Sovereignty",
// //     desc: "Protecting the digital borders. Intensive training on infrastructure hardening, threat intelligence, and secure software testing.",
// //     syllabus: ["Network Hardening", "Penetration Testing", "Security Audits", "Encrypted Protocols"],
// //     stats: "Def. Certified",
// //     icon: <ShieldCheck className="text-red-500" />
// //   }
// // ];

// // export default function TrainingPage() {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
// //   const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

// //   const fadeIn = {
// //     initial: { opacity: 0, y: 40 },
// //     whileInView: { opacity: 1, y: 0 },
// //     viewport: { once: true, margin: "-100px" },
// //     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
// //   };

// //   return (
// //     <main ref={containerRef} className="bg-[#020202] text-white min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans">
      
// //       {/* 1. ACADEMY BACKGROUND (Deep Mesh) */}
// //       <div className="fixed inset-0 z-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-purple-600/5 blur-[250px] rounded-full animate-pulse" />
// //         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[200px] rounded-full" />
// //         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
// //       </div>

// //       {/* 2. DYNAMIC NAVIGATION LINE */}
// //       <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent origin-top hidden lg:block z-50 opacity-50" />

// //       <section className="max-w-7xl mx-auto relative z-10">
        
// //         {/* 3. HERO: THE ARCHITECT ACADEMY */}
// //         <div className="mb-60">
// //           <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
// //             <GraduationCap className="text-purple-500" size={24} />
// //             <span className="text-[10px] font-black uppercase tracking-[1em] text-purple-500/80">Talent Orchestration</span>
// //           </motion.div>
          
// //           <motion.h1 
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             className="text-7xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
// //           >
// //             Forge <br /> 
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">Architects.</span>
// //           </motion.h1>
          
// //           <div className="grid md:grid-cols-2 gap-20 items-end">
// //             <p className="text-gray-500 text-xl md:text-3xl font-light leading-tight italic">
// //               We bridge the gap between academic theory and high-stakes industrial practice. 
// //               <span className="text-white"> Mastery</span> is the only outcome.
// //             </p>
// //             <div className="flex gap-12 border-l border-white/10 pl-12">
// //                <div>
// //                   <h4 className="text-6xl font-black italic tracking-tighter">98%</h4>
// //                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Placement Rate</p>
// //                </div>
// //                <div>
// //                   <h4 className="text-6xl font-black italic tracking-tighter">200+</h4>
// //                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Global Alumni</p>
// //                </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 4. PROGRAM ARCHITECTURE GRID */}
// //         <div className="space-y-60">
// //           {courses.map((course) => (
// //             <motion.div key={course.id} {...fadeIn} className="group relative">
// //               <span className="absolute -left-20 -top-10 text-[20rem] font-black text-white/[0.01] select-none hidden lg:block tracking-tighter uppercase italic">{course.id}</span>

// //               <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
// //                 {/* Content */}
// //                 <div className="lg:col-span-5 space-y-12">
// //                   <div className="space-y-4">
// //                     <div className="flex items-center gap-3">
// //                        <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_purple]" />
// //                        <p className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase">{course.subtitle}</p>
// //                     </div>
// //                     <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-purple-400 transition-colors duration-700">{course.title}</h2>
// //                   </div>
                  
// //                   <p className="text-gray-400 text-2xl font-light leading-relaxed italic border-l border-purple-500/20 pl-8">{course.desc}</p>

// //                   <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 bg-white/[0.01] px-8 rounded-[2rem]">
// //                     <div>
// //                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Skill Rating</h5>
// //                       <p className="text-2xl font-bold text-white tracking-tighter italic">{course.stats}</p>
// //                     </div>
// //                     <div>
// //                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Sync Mode</h5>
// //                       <p className="text-2xl font-bold text-cyan-500 tracking-tighter italic flex items-center gap-2">
// //                         <Activity size={20} className="animate-pulse" /> HYBRID_OK
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Syllabus Bento Grid */}
// //                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                   {course.syllabus.map((subject, idx) => (
// //                     <motion.div 
// //                       key={subject}
// //                       whileHover={{ y: -5, scale: 1.02 }}
// //                       className="p-10 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-purple-500/20 hover:bg-zinc-900/50 transition-all duration-500 flex flex-col justify-between h-64"
// //                     >
// //                       <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-purple-400">
// //                         {idx % 2 === 0 ? <Terminal size={24} /> : <Microscope size={24} />}
// //                       </div>
// //                       <div>
// //                         <h4 className="text-xl font-black uppercase italic tracking-tight text-gray-300 mb-2">{subject}</h4>
// //                         <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Technical Module v1.2</p>
// //                       </div>
// //                     </motion.div>
// //                   ))}
                  
// //                   <Link href="/contact" className="sm:col-span-2 group/btn block">
// //                     <div className="p-10 rounded-[3rem] bg-white text-black flex justify-between items-center hover:bg-purple-500 hover:text-white transition-all duration-700 shadow-2xl">
// //                        <span className="text-3xl font-[1000] uppercase italic tracking-tighter italic">Apply for synchronization</span>
// //                        <div className="h-16 w-16 rounded-full border-2 border-black/10 flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-500">
// //                           <ArrowRight size={32} />
// //                        </div>
// //                     </div>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* 5. CAREER HUB SECTION (SRS 5: Placement Preparation) */}
// //       <section className="py-80 relative z-10 border-t border-white/5">
// //         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
// //           <motion.div {...fadeIn}>
// //             <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none mb-10">Placement <br /> <span className="text-zinc-700">Infrastructure.</span></h2>
// //             <div className="space-y-12">
// //                {[
// //                  { t: "Technical Sync", d: "Mock technical rounds with industry veterans.", icon: <Cpu className="text-cyan-500" /> },
// //                  { t: "Resume Optimization", d: "Professional profile engineering for ATS bypass.", icon: <Award className="text-purple-500" /> },
// //                  { t: "Hiring Network", d: "Access to 10+ active hiring partners globally.", icon: <Users className="text-emerald-500" /> },
// //                  { t: "Live Projects", d: "Immersion in industrial codebases and research labs.", icon: <Briefcase className="text-blue-500" /> }
// //                ].map((item, i) => (
// //                  <div key={i} className="flex gap-8 group/item">
// //                     <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover/item:border-white transition-colors">{item.icon}</div>
// //                     <div>
// //                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-gray-200">{item.t}</h4>
// //                        <p className="text-gray-500 text-lg font-light mt-2">{item.d}</p>
// //                     </div>
// //                  </div>
// //                ))}
// //             </div>
// //           </motion.div>
          
// //           <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[5rem] overflow-hidden group shadow-2xl">
// //              <div className="p-20 rounded-[4.9rem] bg-zinc-950 flex flex-col items-center text-center">
// //                 <Fingerprint size={120} className="text-cyan-500 mb-12 opacity-50 group-hover:opacity-100 transition-all" />
// //                 <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-8">98% Deployment <br /> Success.</h3>
// //                 <p className="text-gray-500 font-light mb-12">Candidates are prepared for top-tier tech rounds including aptitude, technical sync, and communication skills development.</p>
// //                 <div className="grid grid-cols-2 gap-10 w-full">
// //                    <div><h4 className="text-4xl font-black">10+</h4><p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Global Partners</p></div>
// //                    <div><h4 className="text-4xl font-black">200+</h4><p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Alumni Synced</p></div>
// //                 </div>
// //              </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 6. FINAL ACADEMY CTA */}
// //       <section className="py-60 relative z-10 overflow-hidden text-center">
// //         <motion.div {...fadeIn} className="space-y-16">
// //           <h2 className="text-8xl md:text-[16rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mix-blend-difference">
// //             Start <br /> <span className="text-gray-800">Scaling.</span>
// //           </h2>
// //           <p className="text-zinc-500 text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-[0.3em] uppercase italic border-y border-white/5 py-10">Nurturing skilled professionals for the global technology ecosystem.</p>
// //           <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
// //              <button className="bg-purple-600 text-white px-20 py-8 rounded-full font-[1000] text-3xl uppercase tracking-widest shadow-[0_0_60px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95 transition-all">
// //                Launch Application
// //              </button>
// //           </div>
// //         </motion.div>
        
// //         <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
// //           <h3 className="text-[35rem] font-black tracking-[-0.05em] uppercase leading-none">Academy</h3>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // }












// "use client";

// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { 
//   GraduationCap, BrainCircuit, Code2, Database, ShieldCheck, 
//   Terminal, Users, CheckCircle2, ArrowRight, Zap, Fingerprint,
//   Target, Award, Briefcase, Microscope, Activity, Cpu, 
//   Network, Globe, Rocket, Sparkles, Server, Laptop
// } from "lucide-react";
// import Link from "next/link";

// const courses = [
//   {
//     id: "01",
//     title: "AI & Neural Engineering",
//     subtitle: "Advanced Deep Learning",
//     desc: "Master the architecture of modern intelligence. From Transformer models to fine-tuning LLMs on domestic datasets for sovereign applications.",
//     syllabus: ["Neural Architecture Search", "NLP & LLM Fine-tuning", "Computer Vision Pipelines", "Model Quantization"],
//     stats: "Top 1% Skills",
//     icon: <BrainCircuit className="text-purple-500" />
//   },
//   {
//     id: "02",
//     title: "Full Stack Systems",
//     subtitle: "Enterprise Architecture",
//     desc: "Building the skeleton of the internet. Scalable, high-concurrency web systems using the Next.js 16 and Rust/Go backend ecosystem.",
//     syllabus: ["Microservices Design", "Distributed Databases", "System Orchestration", "Real-time Syncing"],
//     stats: "Ind. Ready v4",
//     icon: <Code2 className="text-cyan-500" />
//   },
//   {
//     id: "03",
//     title: "Data Intelligence",
//     subtitle: "Science & Engineering",
//     desc: "Turning chaotic data into strategic nodes. Mastering predictive modeling, dataset preparation, and large-scale data analytics dashboards.",
//     syllabus: ["Predictive Analytics", "Data Pipeline ETL", "Feature Engineering", "Statistical Modeling"],
//     stats: "Expert Grade",
//     icon: <Database className="text-emerald-500" />
//   },
//   {
//     id: "04",
//     title: "Cybersecurity Ops",
//     subtitle: "Defensive Sovereignty",
//     desc: "Protecting the digital borders. Intensive training on infrastructure hardening, threat intelligence, and secure software testing.",
//     syllabus: ["Network Hardening", "Penetration Testing", "Security Audits", "Encrypted Protocols"],
//     stats: "Def. Certified",
//     icon: <ShieldCheck className="text-red-500" />
//   }
// ];

// export default function TrainingPage() {
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
      
//       {/* 1. ACADEMY BACKGROUND (Deep Mesh) */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-purple-600/5 blur-[250px] rounded-full animate-pulse" />
//         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
//       </div>

//       {/* 2. DYNAMIC NAVIGATION LINE */}
//       <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent origin-top hidden lg:block z-50 opacity-50" />

//       <section className="max-w-7xl mx-auto relative z-10">
        
//         {/* 3. HERO: THE ARCHITECT ACADEMY */}
//         <div className="mb-60">
//           <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
//             <GraduationCap className="text-purple-500" size={24} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-purple-500/80">Talent Orchestration</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-7xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
//           >
//             Forge <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">Architects.</span>
//           </motion.h1>
          
//           <div className="grid md:grid-cols-2 gap-20 items-end">
//             <p className="text-gray-400 text-xl md:text-3xl font-light leading-tight italic">
//               We bridge the gap between academic theory and high-stakes industrial practice. 
//               <span className="text-white"> Mastery</span> is the only outcome.
//             </p>
//             <div className="flex gap-12 border-l border-white/10 pl-12">
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">98%</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Placement Rate</p>
//                </div>
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">200+</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Global Alumni</p>
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* 4. PROGRAM ARCHITECTURE GRID */}
//         <div className="space-y-60">
//           {courses.map((course) => (
//             <motion.div key={course.id} {...fadeIn} className="group relative">
//               <span className="absolute -left-20 -top-10 text-[20rem] font-black text-white/[0.01] select-none hidden lg:block tracking-tighter uppercase italic">{course.id}</span>

//               <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
//                 <div className="lg:col-span-5 space-y-12">
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                         <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_purple]" />
//                         <p className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase">{course.subtitle}</p>
//                     </div>
//                     <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-purple-400 transition-colors duration-700">{course.title}</h2>
//                   </div>
                  
//                   <p className="text-gray-400 text-2xl font-light leading-relaxed italic border-l border-purple-500/20 pl-8">{course.desc}</p>

//                   <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 bg-white/[0.01] px-8 rounded-[2rem]">
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Skill Rating</h5>
//                       <p className="text-2xl font-bold text-white tracking-tighter italic">{course.stats}</p>
//                     </div>
//                     <div>
//                       <h5 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Sync Mode</h5>
//                       <p className="text-2xl font-bold text-cyan-500 tracking-tighter italic flex items-center gap-2">
//                         <Activity size={20} className="animate-pulse" /> HYBRID_OK
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {course.syllabus.map((subject, idx) => (
//                     <motion.div 
//                       key={subject}
//                       whileHover={{ y: -5, scale: 1.02 }}
//                       className="p-10 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-purple-500/20 hover:bg-zinc-900/50 transition-all duration-500 flex flex-col justify-between h-64"
//                     >
//                       <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-purple-400">
//                         {idx % 2 === 0 ? <Terminal size={24} /> : <Microscope size={24} />}
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-black uppercase italic tracking-tight text-gray-300 mb-2">{subject}</h4>
//                         <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Technical Module v1.2</p>
//                       </div>
//                     </motion.div>
//                   ))}
                  
//                   <Link href="/contact" className="sm:col-span-2 group/btn block">
//                     <div className="p-10 rounded-[3rem] bg-white text-black flex justify-between items-center hover:bg-purple-500 hover:text-white transition-all duration-700 shadow-2xl">
//                         <span className="text-3xl font-[1000] uppercase italic tracking-tighter">Apply for synchronization</span>
//                         <div className="h-16 w-16 rounded-full border-2 border-black/10 flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-500">
//                           <ArrowRight size={32} />
//                         </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- NEW SECTION 5: THE PIPELINE (Process) --- */}
//         <section className="py-60 relative z-10">
//             <div className="text-center mb-40">
//                 <h2 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-none mb-10">The <br /> <span className="text-zinc-800">Pipeline.</span></h2>
//                 <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-bold">Standard Operating Procedure for Career Deployment</p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-4">
//                 {[
//                     { step: "01", t: "Neural Assessment", d: "Rigorous diagnostic to map your cognitive and technical baseline.", icon: <Zap /> },
//                     { step: "02", t: "Core Hardening", d: "Intensive labs focusing on low-level fundamentals and systems.", icon: <Cpu /> },
//                     { step: "03", t: "Industrial Sync", d: "Contributing to live Stealth R&D projects and enterprise codebases.", icon: <Rocket /> },
//                     { step: "04", t: "Deployment", d: "Elite placement sync with global partners and domestic startups.", icon: <Globe /> }
//                 ].map((item, i) => (
//                     <motion.div key={i} {...fadeIn} className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:bg-white hover:text-black transition-all duration-700 group">
//                         <span className="text-xs font-mono opacity-30 mb-10 block group-hover:opacity-100">NODE_{item.step}</span>
//                         <div className="mb-10 text-purple-500 group-hover:text-purple-600 transition-colors">{item.icon}</div>
//                         <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4">{item.t}</h4>
//                         <p className="text-zinc-500 group-hover:text-zinc-800 font-light leading-relaxed text-sm italic">{item.d}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>

//         {/* 6. CAREER HUB SECTION (Updated) */}
//         <section className="py-80 relative z-10 border-t border-white/5">
//           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
//             <motion.div {...fadeIn}>
//               <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none mb-10">Placement <br /> <span className="text-zinc-700">Infrastructure.</span></h2>
//               <div className="space-y-12">
//                  {[
//                    { t: "Technical Sync", d: "Mock technical rounds with industry veterans.", icon: <Cpu className="text-cyan-500" /> },
//                    { t: "Resume Optimization", d: "Professional profile engineering for ATS bypass.", icon: <Award className="text-purple-500" /> },
//                    { t: "Hiring Network", d: "Access to 10+ active hiring partners globally.", icon: <Users className="text-emerald-500" /> },
//                    { t: "Live Projects", d: "Immersion in industrial codebases and research labs.", icon: <Briefcase className="text-blue-500" /> }
//                  ].map((item, i) => (
//                    <div key={i} className="flex gap-8 group/item">
//                       <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover/item:border-white transition-colors">{item.icon}</div>
//                       <div>
//                          <h4 className="text-2xl font-black uppercase italic tracking-tighter text-gray-200">{item.t}</h4>
//                          <p className="text-gray-500 text-lg font-light mt-2">{item.d}</p>
//                       </div>
//                    </div>
//                  ))}
//               </div>
//             </motion.div>
            
//             <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[5rem] overflow-hidden group shadow-2xl">
//                <div className="p-20 rounded-[4.9rem] bg-zinc-950 flex flex-col items-center text-center">
//                   <Fingerprint size={120} className="text-cyan-500 mb-12 opacity-50 group-hover:opacity-100 transition-all" />
//                   <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-8">98% Deployment <br /> Success.</h3>
//                   <p className="text-gray-500 font-light mb-12">Candidates are prepared for top-tier tech rounds including aptitude, technical sync, and communication skills development.</p>
//                   <div className="grid grid-cols-2 gap-10 w-full">
//                      <div><h4 className="text-4xl font-black">10+</h4><p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Global Partners</p></div>
//                      <div><h4 className="text-4xl font-black">200+</h4><p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Alumni Synced</p></div>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </section>

//         {/* --- NEW SECTION 7: LIVE NODE DASHBOARD (Visual Flair) --- */}
//         <section className="py-60 relative z-10 border-y border-white/5 bg-zinc-950/50 backdrop-blur-3xl rounded-[6rem]">
//             <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-20">
//                 <div className="col-span-full mb-20">
//                     <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-4">Academy Status.</h2>
//                     <div className="flex items-center gap-4 text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase">
//                         <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" /> Synchronizing Academy Nodes
//                     </div>
//                 </div>

//                 {[
//                     { label: "Active Learners", value: "84", sub: "Currently Synced", icon: <Users /> },
//                     { label: "Lab Uptime", value: "99.9%", sub: "GPU Clusters", icon: <Server /> },
//                     { label: "Sync Requests", value: "1.2k", sub: "Monthly", icon: <Network /> }
//                 ].map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -10 }} className="p-12 border-l border-white/10 space-y-6">
//                         <div className="text-zinc-600">{stat.icon}</div>
//                         <h4 className="text-7xl font-black italic tracking-tighter">{stat.value}</h4>
//                         <div>
//                             <p className="text-sm font-bold uppercase tracking-widest">{stat.label}</p>
//                             <p className="text-[10px] text-zinc-600 uppercase font-mono">{stat.sub}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>

//         {/* --- NEW SECTION 8: ECOSYSTEM MAP --- */}
//         <section className="py-80 px-6 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-40 items-center">
//                 <div className="relative aspect-video rounded-[4rem] border border-white/5 overflow-hidden group">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10" />
//                     <img 
//                       src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
//                       className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
//                       alt="Lab" 
//                     />
//                     <div className="absolute bottom-12 left-12 z-20">
//                         <p className="text-[10px] font-black text-purple-400 uppercase tracking-[0.5em] mb-4">Stealth_Indore_Node</p>
//                         <h4 className="text-4xl font-black uppercase italic tracking-tighter">Physical Labs.</h4>
//                     </div>
//                 </div>

//                 <motion.div {...fadeIn} className="space-y-12">
//                     <h2 className="text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.8]">The <br /> <span className="text-zinc-800">Environment.</span></h2>
//                     <p className="text-zinc-500 text-xl font-light italic">More than a classroom. A high-concurrency innovation hub equipped with H100 clusters and collaborative R&D zones.</p>
//                     <div className="grid grid-cols-2 gap-10">
//                         <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
//                             <Laptop className="text-cyan-500 mb-6" />
//                             <h5 className="font-black uppercase italic">High-End Rig</h5>
//                             <p className="text-xs text-zinc-600 mt-2">RTX 4090 Workstations</p>
//                         </div>
//                         <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
//                             <Network className="text-purple-500 mb-6" />
//                             <h5 className="font-black uppercase italic">Low Latency</h5>
//                             <p className="text-xs text-zinc-600 mt-2">Tier-1 Fiber Backbone</p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>

//         {/* 6. FINAL ACADEMY CTA */}
//         <section className="py-60 relative z-10 overflow-hidden text-center">
//           <motion.div {...fadeIn} className="space-y-16">
//             <h2 className="text-8xl md:text-[16rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mix-blend-difference">
//               Start <br /> <span className="text-gray-800">Scaling.</span>
//             </h2>
//             <p className="text-zinc-500 text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-[0.3em] uppercase italic border-y border-white/5 py-10">Nurturing skilled professionals for the global technology ecosystem.</p>
//             <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
//                <button className="bg-purple-600 text-white px-20 py-8 rounded-full font-[1000] text-3xl uppercase tracking-widest shadow-[0_0_60px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95 transition-all">
//                  Launch Application
//                </button>
//             </div>
//           </motion.div>
          
//           <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
//             <h3 className="text-[35rem] font-black tracking-[-0.05em] uppercase leading-none">Academy</h3>
//           </div>
//         </section>

//       </section>
//     </main>
//   );
// }








"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, BrainCircuit, Code2, Database, ShieldCheck, 
  Terminal, Users, CheckCircle2, ArrowRight, Zap, Fingerprint,
  Target, Award, Briefcase, Microscope, Activity, Cpu, 
  Network, Globe, Rocket, Sparkles, Server, Laptop, ChevronRight
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: "01",
    title: "AI & Neural Engineering",
    subtitle: "Advanced Deep Learning",
    desc: "Master the architecture of modern intelligence. From Transformer models to fine-tuning LLMs on domestic datasets for sovereign applications.",
    syllabus: ["Neural Architecture Search", "NLP & LLM Fine-tuning", "Computer Vision Pipelines", "Model Quantization"],
    stats: "Top 1% Skills",
    icon: <BrainCircuit className="text-purple-500" />
  },
  {
    id: "02",
    title: "Full Stack Systems",
    subtitle: "Enterprise Architecture",
    desc: "Building the skeleton of the internet. Scalable, high-concurrency web systems using the Next.js 16 and Rust/Go backend ecosystem.",
    syllabus: ["Microservices Design", "Distributed Databases", "System Orchestration", "Real-time Syncing"],
    stats: "Ind. Ready v4",
    icon: <Code2 className="text-cyan-500" />
  },
  {
    id: "03",
    title: "Data Intelligence",
    subtitle: "Science & Engineering",
    desc: "Turning chaotic data into strategic nodes. Mastering predictive modeling, dataset preparation, and large-scale data analytics dashboards.",
    syllabus: ["Predictive Analytics", "Data Pipeline ETL", "Feature Engineering", "Statistical Modeling"],
    stats: "Expert Grade",
    icon: <Database className="text-emerald-500" />
  },
  {
    id: "04",
    title: "Cybersecurity Ops",
    subtitle: "Defensive Sovereignty",
    desc: "Protecting the digital borders. Intensive training on infrastructure hardening, threat intelligence, and secure software testing.",
    syllabus: ["Network Hardening", "Penetration Testing", "Security Audits", "Encrypted Protocols"],
    stats: "Def. Certified",
    icon: <ShieldCheck className="text-red-500" />
  }
];

export default function TrainingPage() {
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
      
      {/* 1. SOVEREIGN BACKGROUND (Institutional Clean) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px:64px]" />
      </div>

      {/* 2. DYNAMIC NAVIGATION LINE */}
      <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-blue-600 via-purple-500 to-transparent origin-top hidden lg:block z-50 opacity-20" />

      <section className="max-w-7xl mx-auto relative z-10">
        
        {/* 3. HERO: THE ARCHITECT ACADEMY */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-blue-600" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-blue-600/80">Academy Orchestration</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
          >
            Forge <br /> 
            <span className="text-blue-700">Architects.</span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-20 items-end border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-xl md:text-3xl font-light leading-tight italic">
              We bridge the gap between academic theory and high-stakes industrial practice. 
              <span className="text-slate-900 font-bold"> Mastery</span> is our baseline.
            </p>
            <div className="flex gap-16">
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">98%</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Placement Rate</p>
               </div>
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">200+</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Global Alumni</p>
               </div>
            </div>
          </div>
        </div>

        {/* 4. PROGRAM ARCHITECTURE GRID (Your Original material integrated) */}
        <div className="space-y-40">
          {courses.map((course) => (
            <motion.div key={course.id} {...fadeIn} className="group relative border-b border-slate-100 pb-40 last:border-0">
              <span className="absolute -left-20 -top-10 text-[20rem] font-black text-slate-50 select-none hidden lg:block tracking-tighter uppercase italic">{course.id}</span>

              <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_blue]" />
                        <p className="text-blue-600 font-mono text-xs tracking-[0.4em] uppercase">{course.subtitle}</p>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter group-hover:text-blue-700 transition-colors duration-700">{course.title}</h2>
                  </div>
                  
                  <p className="text-slate-500 text-2xl font-light leading-relaxed italic border-l-4 border-blue-600/20 pl-8">{course.desc}</p>

                  <div className="grid grid-cols-2 gap-8 py-10 border-y border-slate-100 bg-slate-50 px-8 rounded-[2rem]">
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Skill Rating</h5>
                      <p className="text-2xl font-black text-slate-900 italic">{course.stats}</p>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Sync Mode</h5>
                      <p className="text-2xl font-black text-emerald-600 tracking-tighter italic flex items-center gap-2">
                        <Activity size={20} className="animate-pulse" /> HYBRID_OK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {course.syllabus.map((subject, idx) => (
                    <motion.div 
                      key={subject}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:border-blue-600 transition-all duration-500 flex flex-col justify-between h-64"
                    >
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                        {idx % 2 === 0 ? <Terminal size={24} /> : <Microscope size={24} />}
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase italic tracking-tight text-slate-900 mb-2">{subject}</h4>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Sovereign Module v1.2</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  <Link href="/contact" className="sm:col-span-2 group/btn block">
                    <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex justify-between items-center hover:bg-blue-700 transition-all duration-700 shadow-2xl">
                        <span className="text-3xl font-black uppercase italic tracking-tighter">Apply for synchronization node</span>
                        <div className="h-16 w-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                           <ArrowRight size={32} />
                        </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 5: THE PIPELINE (Process Integrated) --- */}
        <section className="py-40 relative z-10">
            <div className="text-center mb-40">
                <h2 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-none mb-10 text-slate-900">The <br /> <span className="text-slate-100 text-stroke">Pipeline.</span></h2>
                <p className="text-slate-400 uppercase tracking-[0.5em] text-[10px] font-bold italic">Standard Operating Procedure for Talent Deployment</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { step: "01", t: "Neural Assessment", d: "Rigorous diagnostic to map your cognitive and technical baseline.", icon: <Zap /> },
                    { step: "02", t: "Core Hardening", d: "Intensive labs focusing on low-level fundamentals and systems.", icon: <Cpu /> },
                    { step: "03", t: "Industrial Sync", d: "Contributing to live Stealth R&D projects and enterprise codebases.", icon: <Rocket /> },
                    { step: "04", t: "Deployment", d: "Elite placement sync with global partners and domestic startups.", icon: <Globe /> }
                ].map((item, i) => (
                    <motion.div key={i} {...fadeIn} className="p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-blue-600 transition-all duration-700 group shadow-sm">
                        <span className="text-xs font-black text-slate-200 mb-10 block group-hover:text-blue-600 italic">NODE_{item.step}</span>
                        <div className="mb-10 text-slate-300 group-hover:text-blue-600 transition-colors">{item.icon}</div>
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">{item.t}</h4>
                        <p className="text-slate-500 group-hover:text-slate-700 font-medium leading-relaxed text-sm italic">{item.d}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 6. CAREER HUB SECTION (SRS 5 Integration) */}
        <section className="py-40 relative z-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <motion.div {...fadeIn} className="text-left">
              <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none mb-16 text-slate-900">Placement <br /> <span className="text-blue-600">Infrastructure.</span></h2>
              <div className="space-y-12">
                  {[
                    { t: "Technical Sync", d: "Mock technical rounds with industry veterans.", icon: <Cpu className="text-blue-600" /> },
                    { t: "Profile Architecture", d: "Professional engineering for ATS bypass protocols.", icon: <Award className="text-blue-600" /> },
                    { t: "Hiring Network", d: "Access to 10+ active hiring nodes globally.", icon: <Users className="text-blue-600" /> },
                    { t: "Live Research", d: "Immersion in industrial codebases and Deep-tech labs.", icon: <Briefcase className="text-blue-600" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group/item cursor-default">
                       <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">{item.icon}</div>
                       <div>
                          <h4 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">{item.t}</h4>
                          <p className="text-slate-500 text-lg font-medium mt-2 italic">{item.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
            </motion.div>
            
            <div className="relative p-12 rounded-[5rem] bg-slate-900 text-white overflow-hidden shadow-2xl">
                 <Fingerprint size={120} className="text-blue-500 mb-12 opacity-50" />
                 <h3 className="text-5xl font-black uppercase tracking-tighter italic mb-8">98% Success <br /> Pipeline.</h3>
                 <p className="text-slate-400 font-medium italic mb-12 text-lg">Candidates are prepared for top-tier tech rounds including neural architecture, systems sync, and institutional communication.</p>
                 <div className="grid grid-cols-2 gap-10 w-full border-t border-white/5 pt-10">
                    <div><h4 className="text-4xl font-black italic">10+</h4><p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Partners</p></div>
                    <div><h4 className="text-4xl font-black italic">200+</h4><p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Synced Alumni</p></div>
                 </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 7: LIVE HUB STATUS --- */}
        <section className="py-40 relative z-10 bg-white border-y border-slate-100 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20">
                <div className="col-span-full text-center mb-10">
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-4 text-slate-900">Academy Analytics.</h2>
                    <div className="flex items-center justify-center gap-4 text-emerald-600 font-black text-[10px] tracking-[0.5em] uppercase">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" /> REAL-TIME ACADEMY SYNC ACTIVE
                    </div>
                </div>

                {[
                    { label: "Active Learners", value: "84", sub: "Currently Synced", icon: <Users /> },
                    { label: "Lab Uptime", value: "99.9%", sub: "GPU Clusters", icon: <Server /> },
                    { label: "Sync Requests", value: "1.2k", sub: "Monthly Node Flow", icon: <Network /> }
                ].map((stat, i) => (
                    <div key={i} className="text-center space-y-6 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center text-slate-300">{stat.icon}</div>
                        <h4 className="text-7xl font-black italic tracking-tighter text-slate-900">{stat.value}</h4>
                        <div>
                            <p className="text-sm font-black uppercase tracking-widest text-slate-900">{stat.label}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-bold mt-1 italic">{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* --- SECTION 8: PHYSICAL ENVIRONMENT --- */}
        <section className="py-40 px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-40 items-center">
                <div className="relative aspect-video rounded-[4rem] border border-slate-200 overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                      alt="Institutional Lab" 
                    />
                    <div className="absolute inset-0 bg-blue-900/10" />
                    <div className="absolute bottom-12 left-12">
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-4">Stealth_Indore_Node</p>
                        <h4 className="text-4xl font-black uppercase italic tracking-tighter text-white">Physical Labs.</h4>
                    </div>
                </div>

                <motion.div {...fadeIn} className="space-y-12">
                    <h2 className="text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.8] text-slate-900">The <br /> <span className="text-blue-600">Campus.</span></h2>
                    <p className="text-slate-500 text-xl font-medium italic leading-relaxed">More than a classroom. A high-concurrency innovation hub equipped with H100 clusters and collaborative R&D zones.</p>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <Laptop className="text-blue-600 mb-6" />
                            <h5 className="font-black uppercase italic text-slate-900">Industrial Rig</h5>
                            <p className="text-xs text-slate-400 mt-2 font-bold uppercase">RTX GPU Workstations</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <Network className="text-blue-600 mb-6" />
                            <h5 className="font-black uppercase italic text-slate-900">Backbone Node</h5>
                            <p className="text-xs text-slate-400 mt-2 font-bold uppercase">Tier-1 Fiber Link</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* 6. FINAL ACADEMY CTA (Concise) */}
        <section className="py-60 relative z-10 text-center">
          <motion.div {...fadeIn} className="space-y-16">
            <h2 className="text-8xl md:text-[14rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic text-slate-900">
              Start <br /> <span className="text-blue-700">Scaling.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-bold tracking-[0.3em] uppercase italic border-y border-slate-100 py-10">Nurturing skilled professionals for the global technology ecosystem.</p>
            <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
                <button className="bg-slate-900 text-white px-20 py-8 rounded-3xl font-black text-3xl uppercase tracking-widest shadow-2xl hover:bg-blue-700 transition-all">
                  Apply for node sync
                </button>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-32 left-0 w-full opacity-[0.03] pointer-events-none select-none">
            <h3 className="text-[35rem] font-black tracking-tighter uppercase leading-none text-slate-900">Academy</h3>
          </div>
        </section>

      </section>
    </main>
  );
}