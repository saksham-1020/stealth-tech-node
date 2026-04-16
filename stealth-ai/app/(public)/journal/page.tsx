// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowLeft, TerminalSquare, Activity, ShieldCheck, ExternalLink, Library } from "lucide-react";

// export default function JournalGateway() {
//   // TypeScript Fix: Adding "as const" and explicit object spreading for motion props
//   const pulseAnimation = {
//     initial: { opacity: 0.5, scale: 0.95 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { 
//       duration: 2, 
//       repeat: Infinity, 
//       repeatType: "reverse" as const, 
//       ease: "easeInOut" as const 
//     }
//   };

//   return (
//     <main className="bg-[#020202] text-white min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans selection:bg-purple-500/30">
      
//       {/* 1. RADAR BACKGROUND (Purple Theme) */}
//       <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
//         <motion.div 
//           initial={pulseAnimation.initial}
//           animate={pulseAnimation.animate}
//           transition={pulseAnimation.transition}
//           className="absolute w-[600px] h-[600px] border border-purple-500/10 rounded-full"
//         />
//         <motion.div 
//           initial={pulseAnimation.initial}
//           animate={pulseAnimation.animate}
//           transition={{ ...pulseAnimation.transition, delay: 0.5 }}
//           className="absolute w-[800px] h-[800px] border border-purple-500/5 rounded-full"
//         />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-soft-light" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full" />
//       </div>

//       {/* 2. THE GATEWAY TERMINAL */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-10 max-w-3xl w-full p-10 md:p-16 rounded-[3rem] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl text-center overflow-hidden"
//       >
//         {/* Top Accent Line */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

//         {/* Global Icon */}
//         <div className="mx-auto h-24 w-24 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
//           <Library size={40} className="text-purple-500" />
//         </div>

//         <div className="flex items-center justify-center gap-3 mb-6">
//           <TerminalSquare className="text-purple-500" size={16} />
//           <span className="text-[10px] font-mono text-purple-500 uppercase tracking-[0.4em]">External Node: Active</span>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic mb-6">
//           Research <br /> <span className="text-zinc-600">Journal.</span>
//         </h1>

//         <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto italic">
//           The <span className="text-white font-medium">Sovereign Publications</span> portal is hosted on a dedicated infrastructure. You are about to be securely redirected.
//         </p>

//         {/* Status Indicators */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-white/5 py-8 bg-white/[0.01]">
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Connection</span>
//              <span className="text-sm font-bold text-emerald-500 flex items-center gap-2"><Activity size={14}/> STABLE</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Database</span>
//              <span className="text-sm font-mono text-gray-300">Isolated Node</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Protocol</span>
//              <span className="text-sm font-mono text-gray-300">HTTPS / SSL</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Verification</span>
//              <span className="text-sm font-bold text-purple-500 flex items-center gap-2"><ShieldCheck size={14}/> SECURE</span>
//            </div>
//         </div>

//         {/* Actions */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//           <Link href="/research">
//             <button className="flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
//               <ArrowLeft size={16} /> Return to Labs
//             </button>
//           </Link>
          
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             <button className="flex items-center gap-3 bg-purple-500 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] group">
//                 Access Journal <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </a>
//         </div>

//       </motion.div>

//       {/* Footer Signature */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30 select-none">
//         <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
//         <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Routing to External Infrastructure</span>
//       </div>

//     </main>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity, ShieldCheck, ExternalLink, Library, Globe , Fingerprint, Landmark, FileText } from "lucide-react";

export default function JournalGateway() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* 2. THE GATEWAY INTERFACE (Small & Concise) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full p-12 md:p-16 rounded-[4rem] bg-white border border-slate-200 shadow-2xl text-center overflow-hidden"
      >
        {/* Verification Node Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
            <Fingerprint size={14} className="text-blue-600" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Scientific Node Verification</span>
          </div>
        </div>

        {/* Global Icon */}
        <div className="mx-auto h-20 w-20 rounded-[2rem] bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
          <Library size={32} className="text-blue-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-6 leading-none text-slate-900">
          Research <br /> <span className="text-blue-700">Journal Node.</span>
        </h1>

        <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-12 max-w-md mx-auto italic">
          The <span className="text-slate-900 font-bold">Sovereign Publications</span> portal is hosted on an independent scientific press infrastructure. Redirection is encrypted.
        </p>

        {/* Status Indicators (Concise Style) */}
        <div className="grid grid-cols-2 gap-4 mb-12 border-y border-slate-50 py-8">
           <div className="flex flex-col items-center gap-1">
             <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Protocol</span>
             <span className="text-xs font-bold text-emerald-600 flex items-center gap-2 italic uppercase tracking-wider"><Activity size={12}/> Stable Node</span>
           </div>
           <div className="flex flex-col items-center gap-1 border-l border-slate-50">
             <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Verification</span>
             <span className="text-xs font-bold text-blue-600 flex items-center gap-2 italic uppercase tracking-wider"><ShieldCheck size={12}/> SSL Secure</span>
           </div>
        </div>

        {/* Redirect Actions */}
        <div className="flex flex-col gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-xl shadow-slate-200/50">
                Launch Scientific Press <ExternalLink size={14} />
            </button>
          </a>
          <Link href="/">
            <button className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-600 transition-colors font-black text-[9px] uppercase tracking-widest py-2">
              <ArrowLeft size={12} /> Return to Command Node
            </button>
          </Link>
        </div>

        {/* Corporate Proof Bottom */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-20 grayscale border-t border-slate-50 pt-8">
            <Landmark size={18} />
            <FileText size={18} />
            <Globe size={18} />
        </div>
      </motion.div>

      {/* Institutional Footer Info */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 opacity-30 select-none">
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400 italic">Redirection active via node v4.5.0</span>
        </div>
      </div>

    </main>
  );
}