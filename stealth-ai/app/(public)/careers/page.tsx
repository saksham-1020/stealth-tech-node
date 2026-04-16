// "use client";

// import { motion, useScroll, useSpring } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Briefcase, BrainCircuit, Code2, GraduationCap, 
//   ArrowRight, MapPin, Clock, Zap, Globe2, 
//   Terminal, ShieldCheck, Fingerprint, Activity
// } from "lucide-react";
// import Link from "next/link";

// const openPositions = [
//   {
//     id: "REQ-001",
//     title: "Senior AI Researcher",
//     dept: "R&D Labs",
//     type: "Full-Time",
//     location: "Indore, IN / Hybrid",
//     desc: "Lead the development of sovereign LLMs and Computer Vision pipelines. Experience with PyTorch and CUDA required.",
//     icon: <BrainCircuit className="text-blue-500" />
//   },
//   {
//     id: "REQ-002",
//     title: "Full Stack Architect",
//     dept: "Engineering",
//     type: "Full-Time",
//     location: "Bengaluru, IN / Remote",
//     desc: "Architect scalable enterprise systems using Next.js 16, Rust, and distributed PostgreSQL databases.",
//     icon: <Code2 className="text-indigo-500" />
//   },
//   {
//     id: "REQ-003",
//     title: "Lead Technical Trainer",
//     dept: "Academy",
//     type: "Full-Time",
//     location: "Indore, IN",
//     desc: "Mentor the next generation of engineers in Data Science, Full Stack, and DevOps methodologies.",
//     icon: <GraduationCap className="text-cyan-500" />
//   },
//   {
//     id: "REQ-004",
//     title: "DevSecOps Engineer",
//     dept: "Infrastructure",
//     type: "Contract",
//     location: "Remote (Global)",
//     desc: "Harden our cloud infrastructure. Experience with Kubernetes, Terraform, and zero-trust architectures.",
//     icon: <ShieldCheck className="text-emerald-500" />
//   }
// ];

// export default function CareersPage() {
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
//     <main ref={containerRef} className="bg-[#020202] text-white min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans selection:bg-blue-500/30">
      
//       {/* 1. ARCHITECTURAL BACKGROUND */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[250px] rounded-full animate-pulse" />
//         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px]" />
//       </div>

//       {/* 2. DYNAMIC NAVIGATION LINE */}
//       <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent origin-top hidden lg:block z-50 opacity-50" />

//       <section className="max-w-7xl mx-auto relative z-10">
        
//         {/* 3. HERO: JOIN THE CORE */}
//         <div className="mb-40">
//           <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
//             <Terminal className="text-blue-500" size={24} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-blue-500/80">Talent Acquisition Node</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-7xl md:text-[13rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mb-16"
//           >
//             Build <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">The Future.</span>
//           </motion.h1>
          
//           <div className="grid md:grid-cols-2 gap-20 items-end">
//             <p className="text-gray-500 text-xl md:text-3xl font-light leading-tight italic">
//               We are seeking extreme ownership. Join a sovereign collective of <span className="text-white">Engineers, Researchers, and Mentors</span> redefining the tech ecosystem.
//             </p>
//             <div className="flex gap-12 border-l border-white/10 pl-12">
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">04</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Active Roles</p>
//                </div>
//                <div>
//                   <h4 className="text-6xl font-black italic tracking-tighter">Global</h4>
//                   <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Remote Nodes</p>
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* 4. CULTURE & PERKS BENTO */}
//         <div className="grid md:grid-cols-3 gap-6 mb-60">
//           <motion.div {...fadeIn} className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 flex flex-col justify-between h-80 group hover:border-blue-500/30 transition-colors">
//             <Globe2 className="text-zinc-700 group-hover:text-blue-500 transition-colors" size={40} />
//             <div>
//               <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Remote First</h3>
//               <p className="text-zinc-500 font-light text-sm">Work from anywhere. We value code output over office hours.</p>
//             </div>
//           </motion.div>
//           <motion.div {...fadeIn} className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 flex flex-col justify-between h-80 group hover:border-indigo-500/30 transition-colors">
//             <Activity className="text-zinc-700 group-hover:text-indigo-500 transition-colors" size={40} />
//             <div>
//               <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">R&D Freedom</h3>
//               <p className="text-zinc-500 font-light text-sm">Dedicated time for research, open-source contributions, and publishing.</p>
//             </div>
//           </motion.div>
//           <motion.div {...fadeIn} className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 flex flex-col justify-between h-80 group hover:border-cyan-500/30 transition-colors">
//             <Zap className="text-zinc-700 group-hover:text-cyan-500 transition-colors" size={40} />
//             <div>
//               <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">High Impact</h3>
//               <p className="text-zinc-500 font-light text-sm">Deploy systems that handle millions of requests and train future leaders.</p>
//             </div>
//           </motion.div>
//         </div>

//         {/* 5. OPEN POSITIONS (The Job Board) */}
//         <div className="space-y-16">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-10">
//              <div>
//                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Open <br /> Requisitions.</h2>
//                <p className="text-blue-500 uppercase text-[10px] font-bold tracking-[1em] mt-6">Current Hiring Cycles</p>
//              </div>
//              <p className="text-zinc-500 max-w-sm font-light italic">Don't see a fit? Send an open application. We always have room for exceptional talent.</p>
//           </div>

//           <div className="flex flex-col gap-6">
//             {openPositions.map((job) => (
//               <motion.div 
//                 key={job.id} 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group w-full flex flex-col lg:flex-row items-start lg:items-center justify-between p-10 md:p-12 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:bg-white/[0.03] hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
//               >
//                 <div className="flex flex-col md:flex-row items-start md:items-center gap-10 w-full lg:w-auto mb-8 lg:mb-0">
//                   <div className="hidden md:flex h-20 w-20 rounded-2xl bg-white/5 items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
//                     {job.icon}
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex flex-wrap items-center gap-3 mb-2">
//                       <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">{job.dept}</span>
//                       <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{job.id}</span>
//                     </div>
//                     <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
//                     <p className="text-sm font-light text-zinc-400 max-w-xl">{job.desc}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full lg:w-auto border-t border-white/5 pt-8 lg:pt-0 lg:border-t-0">
//                   <div className="flex flex-col gap-3">
//                     <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500"><MapPin size={12} /> {job.location}</span>
//                     <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500"><Clock size={12} /> {job.type}</span>
//                   </div>
//                   <button className="h-16 w-16 shrink-0 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white group-hover:-rotate-45 transition-all shadow-xl">
//                     <ArrowRight size={24} />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. FINAL APPLICATION CTA */}
//       <section className="py-60 relative z-10 overflow-hidden text-center mt-40 border-t border-white/5">
//         <motion.div {...fadeIn} className="space-y-16">
//           <Fingerprint className="mx-auto text-blue-500 opacity-20 scale-[2]" size={80} />
//           <h2 className="text-7xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic mix-blend-difference">
//             Submit <br /> <span className="text-gray-800">Profile.</span>
//           </h2>
//           <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto font-light tracking-[0.3em] uppercase italic border-y border-white/5 py-10">
//             Attach your GitHub, Research Papers, or Portfolio.
//           </p>
//           <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
//              <Link href="/contact">
//                <button className="bg-blue-600 text-white px-20 py-8 rounded-full font-[1000] text-2xl md:text-3xl uppercase tracking-widest shadow-[0_0_60px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 transition-all">
//                  Initialize Application
//                </button>
//              </Link>
//           </div>
//         </motion.div>
        
//         <div className="absolute -bottom-20 left-0 w-full opacity-[0.02] pointer-events-none select-none">
//           <h3 className="text-[35rem] font-black tracking-[-0.05em] uppercase leading-none">Careers</h3>
//         </div>
//       </section>

//     </main>
//   );
// }








"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, BrainCircuit, Code2, GraduationCap, 
  ArrowRight, MapPin, Clock, Zap, Globe, 
  Terminal, ShieldCheck, Fingerprint, Activity, ChevronRight
} from "lucide-react";
import Link from "next/link";

const openPositions = [
  {
    id: "REQ-001",
    title: "Senior AI Researcher",
    dept: "R&D Labs",
    type: "Full-Time",
    location: "Indore, IN / Hybrid",
    desc: "Lead the development of sovereign LLMs and Computer Vision pipelines. Experience with PyTorch and CUDA required for industrial neural nodes.",
    icon: <BrainCircuit size={24} />
  },
  {
    id: "REQ-002",
    title: "Full Stack Architect",
    dept: "Engineering",
    type: "Full-Time",
    location: "Bengaluru, IN / Remote",
    desc: "Architect scalable enterprise systems using Next.js 16, Rust, and distributed PostgreSQL databases for high-concurrency environments.",
    icon: <Code2 size={24} />
  },
  {
    id: "REQ-003",
    title: "Lead Technical Trainer",
    dept: "Academy",
    type: "Full-Time",
    location: "Indore, IN",
    desc: "Mentor the next generation of engineers in Data Science, Full Stack, and DevOps methodologies within the StealthAI ecosystem.",
    icon: <GraduationCap size={24} />
  },
  {
    id: "REQ-004",
    title: "DevSecOps Engineer",
    dept: "Infrastructure",
    type: "Contract",
    location: "Remote (Global)",
    desc: "Harden our cloud infrastructure. Experience with Kubernetes, Terraform, and zero-trust architectures for sovereign data nodes.",
    icon: <ShieldCheck size={24} />
  }
];

export default function CareersPage() {
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
    <main ref={containerRef} className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-48 pb-20 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* 2. DYNAMIC NAVIGATION LINE */}
      <motion.div style={{ scaleY }} className="fixed left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-blue-600 via-slate-300 to-transparent origin-top hidden lg:block z-50 opacity-30" />

      <section className="max-w-7xl mx-auto relative z-10">
        
        {/* 3. HERO: JOIN THE CORE */}
        <div className="mb-40">
          <motion.div {...fadeIn} className="flex items-center gap-4 mb-12">
            <Terminal className="text-blue-600" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-400">Talent Acquisition Node</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[13rem] font-black tracking-tighter text-slate-900 leading-[0.75] uppercase italic mb-16">
            Build <br/> <span className="text-blue-700">The Future.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-20 items-end border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-xl md:text-3xl font-medium leading-tight italic">
              We are seeking extreme ownership. Join a sovereign collective of <span className="text-slate-900 font-bold">Engineers and Researchers</span> redefining the tech ecosystem.
            </p>
            <div className="flex gap-16">
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">04</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Active Requisitions</p>
               </div>
               <div>
                  <h4 className="text-6xl font-black italic tracking-tighter text-slate-900">Global</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">Hybrid Nodes</p>
               </div>
            </div>
          </div>
        </div>

        {/* 4. CULTURE & PERKS (Institutional Bento) */}
        <div className="grid md:grid-cols-3 gap-8 mb-60">
          {[
            { t: "Remote First", d: "Work from anywhere. We value industrial output over physical presence.", i: <Globe />, c: "blue" },
            { t: "R&D Freedom", d: "Dedicated time for research, open-source sync, and journal publishing.", i: <Activity />, c: "slate" },
            { t: "High Impact", d: "Deploy systems handle massive requests and train future tech leaders.", i: <Zap />, c: "blue" }
          ].map((perk, i) => (
            <motion.div key={i} {...fadeIn} className="p-12 rounded-[3.5rem] bg-white border border-slate-200 flex flex-col justify-between h-80 group hover:border-blue-600 transition-all shadow-sm">
              <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                {perk.i}
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-slate-900">{perk.t}</h3>
                <p className="text-slate-500 font-medium text-sm italic">{perk.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. OPEN POSITIONS (The Job Board) */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-12">
             <div>
               <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-slate-900">Open <br /> Requisitions.</h2>
               <p className="text-blue-600 uppercase text-[10px] font-bold tracking-[1em] mt-8 italic">Current Hiring Cycles // 2026.04</p>
             </div>
             <p className="text-slate-400 max-w-sm font-medium italic text-lg leading-relaxed">
               Don't see a perfect fit? Initialize an open application to our core talent node.
             </p>
          </div>

          <div className="flex flex-col gap-6">
            {openPositions.map((job) => (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group w-full flex flex-col lg:flex-row items-start lg:items-center justify-between p-10 md:p-12 rounded-[3rem] bg-white border border-slate-200 hover:border-blue-600 transition-all duration-500 cursor-pointer shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 w-full lg:w-auto mb-8 lg:mb-0 relative z-10">
                  <div className="hidden md:flex h-20 w-20 rounded-3xl bg-slate-50 items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                    {job.icon}
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{job.dept}</span>
                      <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest italic">{job.id}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-900 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                    <p className="text-base font-medium text-slate-500 italic max-w-xl">{job.desc}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 w-full lg:w-auto border-t border-slate-50 pt-8 lg:pt-0 lg:border-t-0 relative z-10">
                  <div className="flex flex-col gap-3">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 italic"><MapPin size={14} className="text-blue-600" /> {job.location}</span>
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 italic"><Clock size={14} className="text-blue-600" /> {job.type}</span>
                  </div>
                  <button className="h-16 w-16 shrink-0 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:-rotate-45 transition-all shadow-xl">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL APPLICATION CTA */}
      <section className="py-60 relative z-10 overflow-hidden text-center mt-40 border-t border-slate-100 bg-white">
        <motion.div {...fadeIn} className="space-y-16">
          <Fingerprint className="mx-auto text-blue-600 opacity-20 scale-[2]" size={80} />
          <h2 className="text-7xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.75] uppercase italic text-slate-900">
            Submit <br/> <span className="text-blue-700">Profile.</span>
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-bold tracking-[0.3em] uppercase italic border-y border-slate-100 py-10">
            Attach your GitHub, Research Papers, or Technical Portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-10 items-center pt-10">
              <Link href="/contact">
                <button className="bg-slate-900 text-white px-20 py-8 rounded-3xl font-black text-2xl md:text-3xl uppercase tracking-widest shadow-2xl hover:bg-blue-700 transition-all">
                  Initialize Application Node
                </button>
              </Link>
          </div>
        </motion.div>
        
        <div className="absolute -bottom-20 left-0 w-full opacity-[0.03] pointer-events-none select-none">
          <h3 className="text-[35rem] font-black tracking-tighter uppercase leading-none text-slate-900 italic">Talent</h3>
        </div>
      </section>

    </main>
  );
}