// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Terminal, ShieldAlert, ArrowLeft } from "lucide-react";

// export default function NotFound() {
//   return (
//     <main className="h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      
//       {/* Glitch Effect Background */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
//       <div className="absolute h-[500px] w-[500px] bg-red-600/10 blur-[150px] rounded-full" />

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="relative z-10 space-y-8"
//       >
//         <div className="h-20 w-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
//            <ShieldAlert size={40} className="text-red-500 animate-pulse" />
//         </div>

//         <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
//           404 <br /> <span className="text-zinc-800">LOST.</span>
//         </h1>
        
//         <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.5em] flex items-center justify-center gap-3">
//            <Terminal size={14} /> Connection Terminated / Invalid Node
//         </p>

//         <Link href="/">
//           <button className="mt-10 px-10 py-5 rounded-full bg-white text-black font-[1000] uppercase tracking-widest text-[10px] hover:bg-cyan-500 transition-all flex items-center gap-4 mx-auto group">
//             <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
//             Back to Sovereign Base
//           </button>
//         </Link>
//       </motion.div>

//       <div className="absolute bottom-10 font-mono text-[8px] text-zinc-800 uppercase tracking-[1em]">
//          Stealth AI Security Protocol // Unauthorized Access Detected
//       </div>
//     </main>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowLeft, Fingerprint, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen bg-[#fcfcfd] text-slate-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden font-sans">
      
      {/* 1. SUBTLE BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 space-y-10 max-w-xl"
      >
        {/* ICON NODE */}
        <div className="h-20 w-20 bg-blue-50 border border-blue-100 rounded-[2rem] flex items-center justify-center mx-auto shadow-sm">
           <Search size={32} className="text-blue-600" />
        </div>

        {/* 404 TEXT */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none text-slate-200">
            404.
          </h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight text-slate-900">
            Page Not <span className="text-blue-700">Found.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium italic border-l-4 border-blue-600 pl-6 mx-auto max-w-sm">
            The link you followed might be broken or the page has been moved to a new node.
          </p>
        </div>

        {/* SIMPLE RETURN BUTTON */}
        <Link href="/">
          <button className="px-12 py-5 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-700 transition-all flex items-center gap-4 mx-auto shadow-xl shadow-slate-200/50 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home Node
          </button>
        </Link>
      </motion.div>

      {/* FOOTER INFO (Sober) */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30 select-none">
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-blue-600" />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400 italic">Error Protocol 0x404 // StealthAI Hub</span>
        </div>
      </div>
      
    </main>
  );
}