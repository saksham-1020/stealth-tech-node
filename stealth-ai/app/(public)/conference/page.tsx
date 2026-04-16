// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowLeft, TerminalSquare, Activity, ShieldCheck, ExternalLink, Globe } from "lucide-react";

// export default function ConferenceGateway() {
//   // TypeScript strictly requires "as const" for these specific string values
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
//     <main className="bg-[#020202] text-white min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      
//       {/* 1. RADAR BACKGROUND */}
//       <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
//         <motion.div 
//           initial={pulseAnimation.initial}
//           animate={pulseAnimation.animate}
//           transition={pulseAnimation.transition}
//           className="absolute w-[600px] h-[600px] border border-cyan-500/10 rounded-full"
//         />
//         <motion.div 
//           initial={pulseAnimation.initial}
//           animate={pulseAnimation.animate}
//           transition={{ ...pulseAnimation.transition, delay: 0.5 }}
//           className="absolute w-[800px] h-[800px] border border-cyan-500/5 rounded-full"
//         />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-soft-light" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full" />
//       </div>

//       {/* 2. THE GATEWAY TERMINAL */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-10 max-w-3xl w-full p-10 md:p-16 rounded-[3rem] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl text-center overflow-hidden"
//       >
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

//         {/* Global Icon */}
//         <div className="mx-auto h-24 w-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
//           <Globe size={40} className="text-cyan-500" />
//         </div>

//         <div className="flex items-center justify-center gap-3 mb-6">
//           <TerminalSquare className="text-cyan-500" size={16} />
//           <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">External Node: Active</span>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic mb-6">
//           IEEE <br /> <span className="text-zinc-600">Summit.</span>
//         </h1>

//         <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto italic">
//           The <span className="text-white font-medium">IEEE Stealth Conference</span> portal is live. You are about to be securely redirected to our dedicated summit infrastructure.
//         </p>

//         {/* Status Indicators */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-white/5 py-8 bg-white/[0.01]">
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Connection</span>
//              <span className="text-sm font-bold text-emerald-500 flex items-center gap-2"><Activity size={14}/> STABLE</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Host Server</span>
//              <span className="text-sm font-mono text-gray-300">Vercel Edge</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Protocol</span>
//              <span className="text-sm font-mono text-gray-300">HTTPS / SSL</span>
//            </div>
//            <div className="flex flex-col items-center gap-2">
//              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Verification</span>
//              <span className="text-sm font-bold text-cyan-500 flex items-center gap-2"><ShieldCheck size={14}/> SECURE</span>
//            </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//           <Link href="/">
//             <button className="flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
//               <ArrowLeft size={16} /> Return to Base
//             </button>
//           </Link>
          
//           <a href="https://ieee-stealth-conference.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <button className="flex items-center gap-3 bg-cyan-500 text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] group">
//                 Launch Portal <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </a>
//         </div>

//       </motion.div>

//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-30 select-none">
//         <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
//         <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Routing to External Infrastructure</span>
//       </div>

//     </main>
//   );
// }








"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, ShieldCheck, Activity } from "lucide-react";

export default function ConferenceGateway() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen flex flex-col items-center justify-center px-6 font-sans">
      <div className="max-w-xl w-full p-12 rounded-[3rem] bg-white border border-slate-200 shadow-2xl text-center">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
          <Globe size={32} className="text-blue-600" />
        </div>
        
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">IEEE Summit Node</h1>
        <p className="text-slate-500 text-sm font-medium italic mb-10 leading-relaxed">
          You are being redirected to the official <span className="text-slate-900 font-bold">IEEE Stealth Conference</span> portal hosted on a dedicated summit infrastructure.
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Security Status</span>
            <span className="text-[10px] font-black uppercase text-emerald-600 flex items-center gap-2 italic"><ShieldCheck size={14}/> Verified</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a href="https://ieee-stealth-conference.vercel.app/" target="_blank" rel="noopener noreferrer" 
             className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
            Launch External Portal <ExternalLink size={14} />
          </a>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-blue-600 transition-colors">
            ← Return to Base Node
          </Link>
        </div>
      </div>
    </main>
  );
}