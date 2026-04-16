// "use client";

// import { motion } from "framer-motion";
// import FadeIn from "@/components/animations/FadeIn";
// import GlassCard from "@/components/ui/GlassCard";
// import { StatCard } from "@/components/common/StatCard";
// import { 
//   Rocket, ShieldCheck, Terminal, Cpu, 
//   Workflow, Database, Server, Layers 
// } from "lucide-react";

// export default function PlatformPage() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-20 selection:bg-cyan-500/30">
      
//       {/* 1. ARCHITECTURAL GLOWS */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER SECTION */}
//         <FadeIn>
//           <div className="text-center space-y-6 mb-24">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
//               <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Integrated Ecosystem v1.0</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-tight">
//               Project-Based <br /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
//                 Intelligence Platform.
//               </span>
//             </h1>

//             <p className="text-zinc-500 text-sm md:text-lg italic font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
//               A professional AI-powered ecosystem where students gain real-world 
//               project experience and receive structured placement assistance 
//               based on verified performance nodes.
//             </p>
//           </div>
//         </FadeIn>

//         {/* 2. PLATFORM TELEMETRY (QUICK STATS) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
//            <StatCard title="Training Nodes" value="500+" icon={<Terminal size={20}/>} description="Active Student Instances" />
//            <StatCard title="Research Papers" value="120+" icon={<Layers size={20}/>} description="Verified Journal Submissions" />
//            <StatCard title="Placement Flow" value="94%" icon={<Rocket size={20}/>} description="Success Rate // Career Uplink" />
//         </div>

//         {/* 3. CORE FEATURES BENTO GRID */}
//         <div className="grid md:grid-cols-2 gap-8 mb-32">
          
//           <FadeIn direction="left">
//             <GlassCard className="h-full border-purple-500/10">
//                <div className="flex flex-col h-full gap-6">
//                  <div className="h-14 w-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
//                     <Workflow size={28} />
//                  </div>
//                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">Real-World Projects</h2>
//                  <p className="text-zinc-500 text-sm leading-relaxed italic">
//                     Students work on industry-level real projects, building verified experience through 
//                     git-based workflows and peer-review systems. No placeholders, only production code.
//                  </p>
//                  <div className="mt-auto pt-6 border-t border-white/5 flex gap-4 text-[10px] font-mono text-zinc-700">
//                     <span>#Deployment</span> <span>#CI/CD</span> <span>#Architecture</span>
//                  </div>
//                </div>
//             </GlassCard>
//           </FadeIn>

//           <FadeIn direction="right">
//             <GlassCard className="h-full border-cyan-500/10">
//                <div className="flex flex-col h-full gap-6">
//                  <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
//                     <Cpu size={28} />
//                  </div>
//                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">AI Assistant Node</h2>
//                  <p className="text-zinc-500 text-sm leading-relaxed italic">
//                     Integrated Copilot guidance for project debugging, automated resume parsing, 
//                     and simulated interview preparation using local LLM architecture.
//                  </p>
//                  <div className="mt-auto pt-6 border-t border-white/5 flex gap-4 text-[10px] font-mono text-zinc-700">
//                     <span>#GenAI</span> <span>#LocalLLM</span> <span>#Mentorship</span>
//                  </div>
//                </div>
//             </GlassCard>
//           </FadeIn>

//           <FadeIn direction="left" delay={0.2}>
//             <GlassCard className="h-full border-emerald-500/10">
//                <div className="flex flex-col h-full gap-6">
//                  <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
//                     <Rocket size={28} />
//                  </div>
//                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">Placement System</h2>
//                  <p className="text-zinc-500 text-sm leading-relaxed italic">
//                     Performance-based eligibility tracking. Companies can verify your skills directly 
//                     through your project deployment history and lab activity logs.
//                  </p>
//                  <div className="mt-auto pt-6 border-t border-white/5 flex gap-4 text-[10px] font-mono text-zinc-700">
//                     <span>#Hiring Pipeline</span> <span>#SkillVerification</span>
//                  </div>
//                </div>
//             </GlassCard>
//           </FadeIn>

//           <FadeIn direction="right" delay={0.2}>
//             <GlassCard className="h-full border-amber-500/10">
//                <div className="flex flex-col h-full gap-6">
//                  <div className="h-14 w-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
//                     <ShieldCheck size={28} />
//                  </div>
//                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">Certificate Node</h2>
//                  <p className="text-zinc-500 text-sm leading-relaxed italic">
//                     Tamper-proof digital certificates with unique cryptographic IDs. Verified credentials 
//                     that speak for your architectural mastery and research contributions.
//                  </p>
//                  <div className="mt-auto pt-6 border-t border-white/5 flex gap-4 text-[10px] font-mono text-zinc-700">
//                     <span>#Cryptography</span> <span>#Verification</span>
//                  </div>
//                </div>
//             </GlassCard>
//           </FadeIn>

//         </div>

//         {/* 4. TECH STACK TELEMETRY */}
//         <FadeIn>
//           <div className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 text-center relative overflow-hidden">
//              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-50" />
//              <div className="relative z-10">
//                 <h2 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-600 mb-8">Infrastructure Tech-Stack</h2>
//                 <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
//                    {[
//                      { name: "Next.js 16", icon: <Layers size={16}/> },
//                      { name: "FastAPI", icon: <Zap size={16}/> },
//                      { name: "PostgreSQL", icon: <Database size={16}/> },
//                      { name: "Local AI", icon: <Cpu size={16}/> },
//                      { name: "Docker", icon: <Server size={16}/> }
//                    ].map((tech) => (
//                      <div key={tech.name} className="flex items-center gap-3 group cursor-crosshair">
//                         <span className="text-zinc-500 group-hover:text-cyan-500 transition-colors">{tech.icon}</span>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">{tech.name}</span>
//                      </div>
//                    ))}
//                 </div>
//              </div>
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// }

// const Zap = ({size}: {size: number}) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
// )









"use client";

import { 
  Rocket, ShieldCheck, Terminal, Cpu, 
  Workflow, Database, Server, Layers,
  ChevronRight, Search, Fingerprint, Lock,
  Code2, Zap, Network, Activity, FileCheck, CheckCircle,
  BrainCircuit
} from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden font-sans min-h-screen pt-32 pb-20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. HEADER SECTION (Sober & Direct) */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Project Intelligence Node v1.0</span>
          </div>
          
          <h1 className="text-5xl md:text-[6rem] font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
            Project-Based <br /> 
            <span className="text-blue-700">Learning Node.</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl italic font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">
            A professional deep-tech ecosystem for real-world execution, 
            verified performance tracking, and structured career uuplinks.
          </p>
        </div>

        {/* 2. PLATFORM TELEMETRY (Your Original Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
           <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <Terminal size={24} className="text-blue-600" />
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active Instances</span>
              </div>
              <div className="text-5xl font-black italic mb-2 group-hover:text-blue-700 transition-colors">500+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Training Nodes active</div>
           </div>

           <div className="p-8 bg-slate-900 text-white border border-slate-800 rounded-[2.5rem] shadow-2xl scale-105">
              <div className="flex justify-between items-start mb-6">
                <Layers size={24} className="text-blue-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Journal Uplinks</span>
              </div>
              <div className="text-5xl font-black italic mb-2 text-blue-400">120+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Verified Research Papers</div>
           </div>

           <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <Rocket size={24} className="text-blue-600" />
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Success Flow</span>
              </div>
              <div className="text-5xl font-black italic mb-2 group-hover:text-blue-700 transition-colors">94%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Hiring Rate // Uplink active</div>
           </div>
        </div>

        {/* 3. CORE INTERFACE FEATURES (Bento Grid Style) */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          
          <div className="p-12 bg-white border border-slate-200 rounded-[3.5rem] flex flex-col justify-between h-[450px] shadow-sm hover:border-blue-600 transition-all group">
             <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Workflow size={32} />
             </div>
             <div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Industrial Pipelines</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic font-medium">
                   Students execute industry-level projects via Git-based workflows and Stage-wise validation. No placeholders—only production-ready engineering.
                </p>
             </div>
             <div className="pt-6 border-t border-slate-100 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <span>#CI/CD</span> <span>#CodeReview</span> <span>#Scale</span>
             </div>
          </div>

          <div className="p-12 bg-white border border-slate-200 rounded-[3.5rem] flex flex-col justify-between h-[450px] shadow-sm hover:border-blue-600 transition-all group">
             <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cpu size={32} />
             </div>
             <div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4 text-blue-700">AI Assistant Node</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic font-medium">
                   Integrated Copilot node for logic debugging, simulated interview loops, and automated architectural optimization based on local LLM nodes.
                </p>
             </div>
             <div className="pt-6 border-t border-slate-100 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <span>#GenAI Node</span> <span>#DeepResearch</span>
             </div>
          </div>

          <div className="p-12 bg-white border border-slate-200 rounded-[3.5rem] flex flex-col justify-between h-[450px] shadow-sm hover:border-blue-600 transition-all group">
             <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Rocket size={32} />
             </div>
             <div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Placement Sync</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic font-medium">
                   Direct verification for hiring partners. Companies can audit your skills through project deployment logs and research activity timelines.
                </p>
             </div>
             <div className="pt-6 border-t border-slate-100 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <span>#HiringSync</span> <span>#CredentialCheck</span>
             </div>
          </div>

          <div className="p-12 bg-white border border-slate-200 rounded-[3.5rem] flex flex-col justify-between h-[450px] shadow-sm hover:border-blue-600 transition-all group">
             <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Verification Node</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic font-medium">
                   Cryptographic, tamper-proof digital credentials linked to your project contributions. Secured by the StealthAI Sovereign Protocol.
                </p>
             </div>
             <div className="pt-6 border-t border-slate-100 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <span>#SecuredNode</span> <span>#MCA-Aligned</span>
             </div>
          </div>

        </div>

        {/* 4. NEW: VERIFIED LEARNING TRACKS (Institutional Addition) */}
        <section className="py-24 border-y border-slate-100 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600">Verification Protocol</h2>
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mt-4">Verified Skill Matrix</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Logic Validation", d: "Algorithm performance audit", i: <Code2 /> },
              { t: "System Architecture", d: "Scalability node evaluation", i: <Network /> },
              { t: "Neural Modeling", d: "Weights & Bias verification", i: <BrainCircuit /> },
              { t: "Audit Readiness", d: "Govt. standard compliance", i: <FileCheck /> }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                 <div className="w-12 h-12 text-slate-300 mb-4">{node.i}</div>
                 <h4 className="font-bold text-xs uppercase tracking-widest mb-1">{node.t}</h4>
                 <p className="text-[10px] font-bold text-slate-400 uppercase italic">{node.d}</p>
                 <CheckCircle size={14} className="mt-4 text-emerald-500 opacity-30" />
              </div>
            ))}
          </div>
        </section>

        {/* 5. INFRASTRUCTURE TECH-STACK (Your Original Material) */}
        <div className="p-16 rounded-[4rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden mb-32">
           <div className="absolute inset-0 bg-blue-600/[0.02] opacity-50" />
           <div className="relative z-10">
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12 italic">Infrastructure Architecture Nodes</h2>
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                 {[
                   { name: "Next.js 16", icon: <Layers size={20}/> },
                   { name: "FastAPI Node", icon: <Zap size={20}/> },
                   { name: "PostgreSQL Hub", icon: <Database size={20}/> },
                   { name: "Local LLM", icon: <Cpu size={20}/> },
                   { name: "Docker Core", icon: <Server size={20}/> }
                 ].map((tech) => (
                   <div key={tech.name} className="flex items-center gap-4 group cursor-help">
                      <span className="text-slate-300 group-hover:text-blue-600 transition-colors">{tech.icon}</span>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{tech.name}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 6. PLATFORM ACCESS CTA */}
        <div className="p-16 rounded-[4rem] bg-slate-900 text-white text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
           <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-widest italic">Initialize Platform Session</h2>
              <p className="text-slate-400 max-w-xl mx-auto italic font-medium">Access your training nodes, project repositories, and research journal archives from one secure sovereign portal.</p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Platform Login</button>
                <button className="border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all italic">Node Documentation</button>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}