// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import GlassCard from "@/components/ui/GlassCard";
// import { PageHeader } from "@/components/common/PageHeader";
// import { StatusBadge } from "@/components/common/StatusBadge";
// import { Code2, Cpu, MessageSquare, Terminal, ExternalLink, Github } from "lucide-react";

// const liveProjects = [
//   {
//     title: "AI Resume Analyzer",
//     desc: "Neural-based scoring system for automated candidate screening and semantic job matching.",
//     stack: ["Python", "PyTorch", "NLP"],
//     status: "active",
//     icon: <Cpu size={24} />,
//     color: "text-purple-400"
//   },
//   {
//     title: "Placement Master Node",
//     desc: "End-to-end backend architecture for tracking hiring pipelines and candidate telemetry.",
//     stack: ["FastAPI", "PostgreSQL", "Next.js"],
//     status: "completed",
//     icon: <Terminal size={24} />,
//     color: "text-cyan-400"
//   },
//   {
//     title: "Stealth Copilot (LLM)",
//     desc: "Privacy-focused local LLM assistant for real-time coding guidance and architectural review.",
//     stack: ["Llama 3", "LangChain", "VectorDB"],
//     status: "active",
//     icon: <MessageSquare size={24} />,
//     color: "text-emerald-400"
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-purple-500/30">
      
//       {/* 1. BACKGROUND GLOWS */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER SECTION */}
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-purple-500">
//             <Code2 size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Active Repositories</span>
//           </div>
//           <PageHeader 
//             title="Live Projects" 
//             subtitle="Explore our active architectural nodes and verified software deployments." 
//           />
//         </FadeIn>

//         {/* PROJECTS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//           {liveProjects.map((project, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <GlassCard className="h-full group border-white/5 hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden">
//                 <div className="space-y-8 flex flex-col h-full">
                  
//                   {/* TOP ROW: ICON & STATUS */}
//                   <div className="flex justify-between items-start">
//                     <div className={`h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center ${project.color} group-hover:bg-white group-hover:text-black transition-all duration-500`}>
//                       {project.icon}
//                     </div>
//                     <StatusBadge status={project.status as any} />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="space-y-3">
//                     <h3 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white">
//                       {project.title}
//                     </h3>
//                     <p className="text-zinc-500 text-sm leading-relaxed font-medium italic uppercase tracking-wide">
//                       {project.desc}
//                     </p>
//                   </div>

//                   {/* TECH STACK TAGS */}
//                   <div className="flex flex-wrap gap-2 pt-6">
//                     {project.stack.map(tech => (
//                       <span key={tech} className="text-[9px] font-mono font-black uppercase tracking-widest text-zinc-600 px-2 py-1 bg-white/5 rounded-md border border-white/5">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* ACTIONS */}
//                   <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
//                     <div className="flex gap-4">
//                       <Github size={18} className="text-zinc-700 hover:text-white cursor-pointer transition-colors" />
//                       <ExternalLink size={18} className="text-zinc-700 hover:text-white cursor-pointer transition-colors" />
//                     </div>
//                     <span className="text-[8px] font-black uppercase tracking-widest text-zinc-800">System v4.0.1</span>
//                   </div>
//                 </div>
//               </GlassCard>
//             </FadeIn>
//           ))}
//         </div>

//         {/* CONTRIBUTION CTA */}
//         <FadeIn delay={0.4}>
//           <div className="mt-24 p-10 rounded-[3rem] bg-zinc-950 border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
//              <div className="space-y-2">
//                 <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Want to build with us?</h3>
//                 <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Submit your architectural proposal to our core dev node.</p>
//              </div>
//              <button className="px-10 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all">
//                 Access Lab Node
//              </button>
//           </div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// }








"use client";

import { 
  Code2, Cpu, MessageSquare, Terminal, ExternalLink, Github, 
  Fingerprint, ShieldCheck, Database, Layers, Search, CheckCircle2 , ArrowRight
} from "lucide-react";
import Link from "next/link";

const liveProjects = [
  {
    id: "NODE_01",
    title: "AI Resume Analyzer",
    desc: "Neural-based scoring system for automated candidate screening and semantic job matching logic.",
    stack: ["Python", "PyTorch", "NLP"],
    status: "Active Deployment",
    icon: <Cpu size={24} />,
    color: "text-blue-600"
  },
  {
    id: "NODE_02",
    title: "Placement Master Hub",
    desc: "End-to-end backend architecture for tracking hiring pipelines and candidate telemetry analytics.",
    stack: ["FastAPI", "PostgreSQL", "Next.js"],
    status: "Production Ready",
    icon: <Terminal size={24} />,
    color: "text-slate-900"
  },
  {
    id: "NODE_03",
    title: "Stealth Copilot (LLM)",
    desc: "Privacy-focused local LLM assistant for real-time coding guidance and automated architectural review.",
    stack: ["Llama 3", "LangChain", "VectorDB"],
    status: "Active Deployment",
    icon: <MessageSquare size={24} />,
    color: "text-blue-600"
  }
];

export default function Projects() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden font-sans min-h-screen pt-32 pb-24 px-6">
      
      {/* 1. ARCHITECTURAL BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER SECTION (Concise & Institutional) */}
        <div className="mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Project Repositories v4.5.0</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-8 uppercase italic">
            Live <br/> <span className="text-blue-700">Deployments.</span>
          </h1>

          <p className="text-slate-500 text-xl max-w-2xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            Explore our active architectural nodes and verified software deployments designed for industrial scale.
          </p>
        </div>

        {/* 3. REPOSITORY SEARCH & STATUS (Added for Professionalism) */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 items-center justify-between border-b border-slate-100 pb-10">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                type="text" 
                placeholder="Search Project Nodes..." 
                className="w-full bg-white border border-slate-200 p-4 pl-12 rounded-2xl focus:outline-none focus:border-blue-600 transition-all text-xs font-bold uppercase tracking-widest"
              />
           </div>
           <div className="flex gap-10 items-center">
              <div className="flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Global Sync: OK</span>
              </div>
              <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-blue-600" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Encrypted Nodes</span>
              </div>
           </div>
        </div>

        {/* 4. PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm hover:border-blue-600 transition-all flex flex-col h-[550px] relative overflow-hidden">
               {/* Background ID Marker */}
               <span className="absolute -right-4 top-4 text-7xl font-black text-slate-50 italic select-none opacity-50 group-hover:text-blue-50 transition-colors">
                  {project.id}
               </span>

               <div className="space-y-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center ${project.color} group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm`}>
                      {project.icon}
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400 italic">
                       {project.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-base font-medium italic leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ACTION ROW */}
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
                    <div className="flex gap-6">
                      <Github size={20} className="text-slate-300 hover:text-blue-600 cursor-pointer transition-all" />
                      <ExternalLink size={20} className="text-slate-300 hover:text-blue-600 cursor-pointer transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                       <CheckCircle2 size={14} />
                       <span className="text-[8px] font-black uppercase tracking-widest">Verified node</span>
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* 5. PROJECT PROPOSAL CTA */}
        <div className="mt-32 p-12 md:p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-4 text-center md:text-left">
                 <h3 className="text-4xl font-black uppercase italic tracking-tighter">Want to build with us?</h3>
                 <p className="text-slate-400 max-w-lg font-medium italic">Submit your architectural proposal to our core dev node. We collaborate with elite engineers on sovereign tech modules.</p>
              </div>
              <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-500/20">
                 Access Lab Node
              </button>
           </div>
        </div>

        {/* 6. RETURN FOOTNOTE */}
        <div className="mt-24 text-center">
           <Link href="/">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all flex items-center gap-3 mx-auto">
                 <ArrowRight size={14} className="rotate-180" /> Return to command center
              </button>
           </Link>
        </div>

      </div>
    </main>
  );
}