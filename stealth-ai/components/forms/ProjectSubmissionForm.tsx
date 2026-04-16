// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Upload, Github, Link as LinkIcon, 
//   Send, FileCode, Cpu, Globe, 
//   CheckCircle2, Loader2, AlertTriangle 
// } from "lucide-react";
// import Button from "../ui/Button";

// export default function ProjectSubmissionForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // 🔥 Backend API Uplink Simulation
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setStatus("success");
//     }, 2500);
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-4xl mx-auto"
//     >
//       <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-950/50 p-10 rounded-[3rem] border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
        
//         {/* Background Glow */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

//         {/* 1. HEADER */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
//           <div className="space-y-1">
//             <h2 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white">
//               Initialize <span className="text-cyan-500">Deployment.</span>
//             </h2>
//             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Node Submission Protocol v1.0.4</p>
//           </div>
//           <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
//             <Cpu size={14} className="text-cyan-500 animate-pulse" />
//             <span className="text-[10px] font-mono text-zinc-400 uppercase">System: Secure</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           {/* 2. PROJECT METADATA */}
//           <div className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Project Title</label>
//               <input 
//                 type="text" 
//                 placeholder="EX: NEURAL GATEWAY ARCHITECTURE" 
//                 className="w-full bg-black border border-white/10 p-4 rounded-2xl text-[11px] font-bold tracking-widest focus:border-cyan-500 outline-none uppercase placeholder:opacity-20"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Deployment Link (Live Demo)</label>
//               <div className="relative">
//                 <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
//                 <input 
//                   type="url" 
//                   placeholder="HTTPS://PROJECT.STEALTHAI.COM" 
//                   className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-[11px] font-bold tracking-widest focus:border-cyan-500 outline-none placeholder:opacity-20"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Repository Node (GitHub)</label>
//               <div className="relative">
//                 <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
//                 <input 
//                   type="url" 
//                   placeholder="HTTPS://GITHUB.COM/USER/REPO" 
//                   className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-[11px] font-bold tracking-widest focus:border-cyan-500 outline-none placeholder:opacity-20"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* 3. DOCUMENTATION UPLOAD */}
//           <div className="space-y-2">
//             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Architectural Documentation (PDF/ZIP)</label>
//             <div className="h-[254px] border-2 border-dashed border-white/5 rounded-[2rem] bg-black/40 flex flex-col items-center justify-center gap-4 group hover:border-cyan-500/30 transition-all cursor-pointer">
//               <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center text-zinc-600 group-hover:text-cyan-500 group-hover:scale-110 transition-all">
//                 <Upload size={24} />
//               </div>
//               <div className="text-center">
//                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">Drag source files or browse</p>
//                 <p className="text-[8px] font-mono text-zinc-700 uppercase mt-2">Max payload: 50MB</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 4. TECH STACK TAGS */}
//         <div className="space-y-4">
//           <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Core Tech Stack</label>
//           <div className="flex flex-wrap gap-3">
//             {["Next.js 15", "FastAPI", "PostgreSQL", "Tailwind v4", "PyTorch"].map((tech) => (
//               <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 cursor-pointer transition-all">
//                 {tech}
//               </span >
//             ))}
//           </div>
//         </div>

//         {/* 5. SUBMISSION ACTION */}
//         <div className="pt-6">
//           <Button 
//             type="submit" 
//             variant="cyan" 
//             className="w-full py-6 rounded-2xl text-[12px] shadow-[0_0_40px_rgba(6,182,212,0.1)] group"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               <Loader2 className="animate-spin" size={20} />
//             ) : (
//               <>Initialize Submission Protocol <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
//             )}
//           </Button>
//         </div>

//         {/* SUCCESS MESSAGE */}
//         {status === "success" && (
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }} 
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]"
//           >
//             <CheckCircle2 size={16} /> Deployment Initialized. Awaiting Peer Review.
//           </motion.div>
//         )}
//       </form>

//       {/* FOOTER ADVISORY */}
//       <div className="mt-8 flex items-start gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
//         <AlertTriangle className="text-amber-500 shrink-0" size={18} />
//         <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold tracking-tight">
//           Advisory: Ensure all proprietary code is obfuscated or documented. Once the deployment node is initialized, changes require manual intervention from the Stealth Labs Admin.
//         </p>
//       </div>
//     </motion.div>
//   );
// }













"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, Github, Link as LinkIcon, 
  Send, FileCode, Cpu, Globe, 
  CheckCircle2, Loader2, AlertTriangle, Fingerprint
} from "lucide-react";
import Button from "../ui/Button";

export default function ProjectSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
    }, 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto font-sans"
    >
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 md:p-16 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Branding */}
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] grayscale pointer-events-none">
           <Fingerprint size={200} />
        </div>

        {/* 1. HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-10 relative z-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
              Project <span className="text-blue-600">Submission.</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Institutional Audit Protocol v4.5</p>
          </div>
          <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner">
            <Cpu size={16} className="text-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Verification: Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          
          {/* 2. PROJECT METADATA */}
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Project Title</label>
              <input 
                type="text" 
                placeholder="e.g. Neural Gateway Architecture" 
                className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none shadow-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Deployment URL</label>
              <div className="relative group">
                <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                <input 
                  type="url" 
                  placeholder="https://project.example.com" 
                  className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">GitHub Repository</label>
              <div className="relative group">
                <Github className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
                <input 
                  type="url" 
                  placeholder="https://github.com/user/repo" 
                  className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* 3. DOCUMENTATION UPLOAD */}
          <div className="space-y-2 flex flex-col h-full">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Technical Documentation (PDF/ZIP)</label>
            <div className="flex-1 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50 flex flex-col items-center justify-center gap-6 group hover:border-blue-600 hover:bg-white transition-all cursor-pointer shadow-inner p-8">
              <div className="h-20 w-20 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
                <Upload size={32} />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors italic">Attach source files or browse</p>
                <p className="text-[8px] font-bold text-slate-300 uppercase mt-2">Max payload: 50MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SUBMISSION ACTION */}
        <div className="pt-6 relative z-10">
          <Button 
            type="submit" 
            variant="dark" 
            className="w-full py-6 rounded-3xl text-xs shadow-2xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <span className="flex items-center gap-4">Submit for Peer Review <Send size={18} /></span>
            )}
          </Button>
        </div>

        {/* SUCCESS MESSAGE */}
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 rounded-3xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest italic"
          >
            <CheckCircle2 size={20} /> Project Synced. Awaiting Review Cycle.
          </motion.div>
        )}
      </form>

      {/* FOOTER ADVISORY */}
      <div className="mt-10 flex items-start gap-5 p-8 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 border-dashed">
        <AlertTriangle className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold tracking-tight italic">
          Institutional Advisory: Ensure all proprietary logic is documented. Post-initialization, modification requests require manual node clearance from StealthAI Administrators.
        </p>
      </div>
    </motion.div>
  );
}