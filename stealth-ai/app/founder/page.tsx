// "use client";

// import { motion } from "framer-motion";
// import { 
//   BrainCircuit, Target, Eye, Mail, 
//   Microscope, TerminalSquare, Sparkles, ChevronRight
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function FounderPage() {
//   const fadeUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
//   };

//   return (
//     <main className="bg-[#020202] text-white min-h-screen pt-40 pb-20 px-6 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      
//       {/* 1. ARCHITECTURAL BACKGROUND */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[200px] rounded-full" />
//         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[250px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
//       </div>

//       <section className="max-w-7xl mx-auto relative z-10">
        
//         {/* 2. HEADER: VISIONARY TITLE */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1 }}
//           className="mb-32"
//         >
//           <div className="flex items-center gap-4 mb-8">
//             <Sparkles className="text-cyan-500" size={20} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-cyan-500">Founder & Vision</span>
//           </div>
          
//           <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-[1000] tracking-tighter leading-[0.85] uppercase italic mb-10">
//             Dr. Safdar <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-zinc-800">Sardar Khan.</span>
//           </h1>
          
//           <p className="text-gray-400 text-xl md:text-3xl font-light leading-relaxed border-l-2 border-purple-500/30 pl-8 italic max-w-4xl">
//             "Leadership driven by innovation, research excellence, and a strong vision to build advanced Artificial Intelligence and software systems for the future."
//           </p>
//         </motion.div>

//         {/* 3. THE IDENTITY & STORY (Split Layout) */}
//         <div className="grid lg:grid-cols-12 gap-16 items-start mb-40">
          
//           {/* Left Column: Image & Contact */}
//           <motion.div {...fadeUp} className="lg:col-span-5 space-y-8">
//             <div className="aspect-[4/5] w-full rounded-[3rem] bg-zinc-900 border border-white/5 overflow-hidden relative group">
//                {/* 💡 NOTE: Yahan apni actual image ka path daalna */}
//                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-800 space-y-6 group-hover:scale-105 transition-transform duration-700">
//                  <TerminalSquare size={80} strokeWidth={1} />
//                  <span className="text-xs font-mono uppercase tracking-[0.5em]">Identity Profile View</span>
//                </div>
//                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
//                <div className="absolute bottom-8 left-8">
//                   <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">Chief AI Mentor</h3>
//                   <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mt-1">Stealth AI Core</p>
//                </div>
//             </div>

//             {/* Official Contact Terminal */}
//             <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-colors group">
//                <div className="flex items-center gap-4 mb-4">
//                  <Mail className="text-zinc-500 group-hover:text-cyan-500 transition-colors" size={20} />
//                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Official Communication Node</span>
//                </div>
//                <a href="mailto:safdar.cse@gmail.com" className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
//                  safdar.cse@gmail.com
//                </a>
//             </div>
//           </motion.div>

//           {/* Right Column: The Narrative */}
//           <motion.div {...fadeUp} className="lg:col-span-7 space-y-12 lg:pt-10">
//             <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
//               <p>
//                 <strong className="text-white font-bold">Dr. Safdar Sardar Khan</strong> is a distinguished academician, researcher, and technology mentor with extensive experience in Artificial Intelligence, Machine Learning, and Data Science. He is widely recognized for his dedication to advancing technology-driven education and building strong foundations in modern intelligent systems.
//               </p>
//               <p>
//                 With a strong focus on innovation and real-world implementation, he has guided numerous students and developers toward practical problem solving and advanced technical excellence. His work emphasizes research-driven learning, industry-oriented development, and future-ready AI solutions designed for global impact.
//               </p>
//               <p>
//                 Through continuous engagement in research, collaborative projects, and emerging technology initiatives, he aims to build a next-generation innovation ecosystem that empowers developers, researchers, and startups to create meaningful technological advancements.
//               </p>
//             </div>

//             <div className="pt-8 border-t border-white/10">
//                <Link href="/research" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-cyan-500 hover:text-white transition-colors group">
//                  Explore Research Initiatives <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                </Link>
//             </div>
//           </motion.div>
//         </div>

//         {/* 4. THE MANIFESTO (Bento Grid) */}
//         <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
          
//           {/* Vision */}
//           <div className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-purple-500/30 transition-all group shadow-2xl relative overflow-hidden">
//             <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-10 transition-opacity scale-150"><Eye size={120} className="text-purple-500" /></div>
//             <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8">
//               <Eye size={20} />
//             </div>
//             <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white">The Vision</h3>
//             <p className="text-sm font-light text-zinc-400 leading-relaxed">
//               Build a global AI innovation ecosystem focused on real-world intelligent systems and scalable technology solutions.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all group shadow-2xl relative overflow-hidden">
//             <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-10 transition-opacity scale-150"><Target size={120} className="text-cyan-500" /></div>
//             <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8">
//               <Target size={20} />
//             </div>
//             <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white">The Mission</h3>
//             <p className="text-sm font-light text-zinc-400 leading-relaxed">
//               Empower developers and researchers through practical AI learning, real project experience, and advanced innovation.
//             </p>
//           </div>

//           {/* Focus Areas */}
//           <div className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-emerald-500/30 transition-all group shadow-2xl relative overflow-hidden">
//             <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-10 transition-opacity scale-150"><BrainCircuit size={120} className="text-emerald-500" /></div>
//             <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8">
//               <BrainCircuit size={20} />
//             </div>
//             <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white">Focus Areas</h3>
//             <ul className="text-sm font-bold text-zinc-400 space-y-3">
//               <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"/> Artificial Intelligence</li>
//               <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"/> Machine Learning</li>
//               <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"/> Data Science</li>
//               <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"/> Intelligent Software Systems</li>
//             </ul>
//           </div>

//         </motion.div>

//       </section>
//     </main>
//   );
// }







"use client";

import { 
  BrainCircuit, Target, Eye, Mail, 
  Microscope, TerminalSquare, Sparkles, ChevronRight,
  ShieldCheck, Landmark, Fingerprint, Award, Briefcase, Cpu, Network, BarChart3, Quote,
  Globe, Zap, Scale
} from "lucide-react";
import Link from "next/link";

const leadership = [
  {
    name: "Dr. Safdar Sardar Khan",
    degree: "B.Tech, M.Tech, Ph.D. (CSE)",
    position: "Chief Executive Officer / Founder",
    focus: "Institutional Strategy & Neural Research Leadership.",
    brief: "A visionary architect of intelligent systems with over a decade of research excellence. Dr. Khan directs the high-level neural integration and sovereign growth of the organization, bridging the gap between theoretical ML and industrial automation.",
    icon: <Landmark className="text-blue-600" />,
    tag: "NODE_CEO_01",
    philosophy: "Sovereign intelligence is the foundation of national digital independence."
  },
  {
    name: "Er. Sadaf Akhtar",
    degree: "B.Tech (CSE)",
    position: "Chief Operating Officer",
    focus: "Industrial Operations & Resource Orchestration.",
    brief: "Specializing in the operational excellence of deep-tech nodes. Er. Akhtar ensures that our industrial units and financial frameworks are optimized for high-availability and scalable global delivery protocols.",
    icon: <Briefcase className="text-blue-600" />,
    tag: "NODE_COO_02",
    philosophy: "Reliability in execution is as critical as innovation in code."
  },
  {
    name: "Er. Saksham Tomar",
    degree: "B.Tech (CSE)",
    position: "Chief Technology Officer",
    focus: "System Engineering & Full-Stack Deep-Tech Labs.",
    brief: "An elite technical lead focused on low-latency architectures and enterprise-grade software builds. Er. Saksham pioneers the technological roadmap, overseeing the implementation of proprietary AI models and secure backend nodes.",
    icon: <Cpu className="text-blue-600" />,
    tag: "NODE_CTO_03",
    philosophy: "Architecture must be resilient enough to outlast the hype cycles."
  },
  {
    name: "Er. Yazdan Saif Qureshi",
    degree: "B.Tech, M.Tech (CSE)",
    position: "Chief Marketing Officer",
    focus: "Strategic Growth & Global Business Expansion.",
    brief: "Driving the brand's technical authority in the global market. Er. Yazdan orchestrates strategic partnerships and business development, ensuring our sovereign tech stack reaches the industries that need it most.",
    icon: <BarChart3 className="text-blue-600" />,
    tag: "NODE_CMO_04",
    philosophy: "Strategic expansion is about solving real bottlenecks, not just scaling noise."
  }
];

export default function FounderPage() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-20 px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. ARCHITECTURAL BACKGROUND (Subtle Sovereign Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <section className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER: LEADERSHIP AUTHORITY */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <Fingerprint className="text-blue-600" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-400">The Executive Council</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic">
            Council <br/> <span className="text-blue-700">Visionaries.</span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-3xl font-medium leading-relaxed border-l-4 border-blue-600 pl-8 italic max-w-4xl">
            "Directing the future through research excellence and a sovereign mission to build autonomous software systems that empower the global tech ecosystem."
          </p>
        </div>

        {/* 3. FOUNDER'S DETAILED NARRATIVE (Institutional) */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-40 border-b border-slate-100 pb-40">
          <div className="lg:col-span-5">
            <div className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Scale size={150}/></div>
               <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-4 italic">The Founder Node</span>
               <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Dr. Safdar <br/> Sardar Khan</h2>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">B.Tech, M.Tech, Ph.D. (CSE)</p>
               
               <div className="space-y-6 text-sm text-slate-400 font-medium italic border-t border-white/5 pt-10">
                  <p>A distinguished academician and technology mentor with extensive research in Artificial Intelligence and Machine Learning.</p>
                  <p>Dr. Khan has pioneered numerous collaborative projects and emerging technology initiatives with a focus on practical industrial problem-solving.</p>
               </div>
               <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <Quote size={20} className="text-blue-500 mb-4" />
                  <p className="text-xs font-bold leading-relaxed text-slate-300">"Our objective is to build an innovation ecosystem that empowers researchers to create meaningful technological advancements for India and the world."</p>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-12 lg:pt-4">
             <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                   <div className="text-4xl font-black italic text-slate-900">Ph.D.</div>
                   <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-2">Doctorate in CSE</div>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                   <div className="text-4xl font-black italic text-slate-900">AI/ML</div>
                   <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-2">Core Specialization</div>
                </div>
             </div>
             
             <div className="space-y-8 text-slate-500 text-lg leading-relaxed italic">
                <p>Dr. Safdar Sardar Khan is recognized for his dedication to building strong foundations in modern intelligent systems. His leadership at StealthAI focuses on ensuring that every neural model and software architecture we deploy is benchmarked against international research standards.</p>
                <p>Through the Academy and R&D units, he oversees the technical growth of over 3000+ professionals, ensuring that the talent we produce is ready for the high-concurrency demands of modern industries.</p>
             </div>

             <div className="pt-8 border-t border-slate-100 flex gap-10">
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Channel</span>
                   <a href="mailto:safdar.cse@gmail.com" className="text-sm font-bold text-blue-600 underline underline-offset-4">safdar.cse@gmail.com</a>
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Node Status</span>
                   <span className="text-xs font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2 italic"><Zap size={14}/> Active Council Head</span>
                </div>
             </div>
          </div>
        </div>

        {/* 4. THE CORE LEADERSHIP (Professional Briefs - No Photos) */}
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-4 text-slate-900">Council Members.</h2>
           <p className="text-slate-400 uppercase tracking-widest font-bold text-xs italic">Architecting the StealthAI Ecosystem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {leadership.slice(1).map((member, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:border-blue-600 transition-all flex flex-col h-[650px] relative overflow-hidden">
               <span className="absolute -right-6 top-6 text-7xl font-black text-slate-50 italic select-none">{member.tag}</span>
               
               <div className="space-y-8 flex flex-col h-full relative z-10">
                  <div className="h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {member.icon}
                  </div>

                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{member.degree}</p>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-[9px] font-black uppercase tracking-widest">
                       {member.position}
                    </div>
                  </div>

                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Core Briefing</p>
                     <p className="text-slate-500 text-sm font-medium italic leading-relaxed">
                        {member.brief}
                     </p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-50">
                     <p className="text-[11px] font-bold text-slate-900 leading-relaxed italic">
                        <Quote size={12} className="inline mr-2 text-blue-500" />
                        {member.philosophy}
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* 5. THE MANIFESTO (Visual Integrity) */}
        <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24 border border-slate-200 grid md:grid-cols-3 gap-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
           <div className="space-y-6">
              <Eye className="text-blue-600" size={32} />
              <h4 className="text-2xl font-black uppercase italic tracking-tighter">The Vision</h4>
              <p className="text-sm font-medium text-slate-500 italic leading-relaxed">Build a global AI innovation ecosystem focused on real-world intelligent systems and scalable sovereign solutions.</p>
           </div>
           <div className="space-y-6 border-x border-slate-200 px-8">
              <Target className="text-blue-600" size={32} />
              <h4 className="text-2xl font-black uppercase italic tracking-tighter">The Mission</h4>
              <p className="text-sm font-medium text-slate-500 italic leading-relaxed">Empower developers and researchers through practical industrial sync, real projects, and technical excellence.</p>
           </div>
           <div className="space-y-6">
              <Network className="text-blue-600" size={32} />
              <h4 className="text-2xl font-black uppercase italic tracking-tighter">Global Node</h4>
              <p className="text-sm font-medium text-slate-500 italic leading-relaxed">Establishing sovereign digital infrastructure centers in Indore, Dubai, Mumbai, and Bhopal.</p>
           </div>
        </div>

      </section>
    </main>
  );
}