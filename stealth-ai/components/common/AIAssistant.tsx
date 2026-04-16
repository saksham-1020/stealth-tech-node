// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Bot, X, Send, Command, Sparkles } from "lucide-react";

// export default function AIAssistant() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
//           >
//             {/* Header */}
//             <div className="p-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
//                   <Bot size={16} className="text-cyan-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs font-black uppercase tracking-widest text-white">Stealth Copilot</h3>
//                   <p className="text-[9px] font-mono text-cyan-500 flex items-center gap-1">
//                     <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full animate-pulse" /> System Online
//                   </p>
//                 </div>
//               </div>
//               <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Chat Body (Placeholder) */}
//             <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4">
//               <div className="self-start max-w-[85%] p-4 rounded-2xl rounded-tl-sm bg-white/5 border border-white/5">
//                 <p className="text-xs font-light leading-relaxed text-gray-300">
//                   Welcome to Stealth Labs. I am your sovereign AI assistant. How can I assist you with your architecture, training, or research queries today?
//                 </p>
//               </div>
              
//               {/* AI Thought Process Anim */}
//               <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
//                 <Sparkles size={12} className="animate-pulse text-cyan-500" /> Waiting for input...
//               </div>
//             </div>

//             {/* Input Area */}
//             <div className="p-4 border-t border-white/5 bg-black">
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="QUERY COPILOT..." 
//                   className="w-full bg-white/5 border border-white/10 py-4 pl-4 pr-12 rounded-xl text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-500 transition-all text-white placeholder:text-zinc-600"
//                 />
//                 <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-cyan-500 text-black flex items-center justify-center hover:scale-105 transition-transform">
//                   <Send size={14} />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating Action Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="h-16 w-16 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] relative"
//       >
//         {isOpen ? <X size={24} /> : <Command size={24} />}
//       </motion.button>
//     </div>
//   );
// }









"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-white border border-slate-200 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg"><Bot size={20} /></div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Stealth AI</h3>
                  <p className="text-[9px] font-bold text-emerald-500 italic">Active Node</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900"><X size={20} /></button>
            </div>
            <div className="flex-1 p-8 space-y-4 overflow-y-auto bg-[#fafafb]">
              <div className="bg-white p-5 rounded-[2rem] rounded-tl-sm border border-slate-100 text-xs font-medium text-slate-600 leading-relaxed shadow-sm italic">
                Welcome. I am your institutional assistant. How can I support your research today?
              </div>
            </div>
            <div className="p-6 bg-white border-t border-slate-100">
              <div className="relative">
                <input placeholder="ENTER QUERY..." className="w-full bg-slate-50 border border-slate-200 py-4 pl-5 pr-14 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-blue-600" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all"><Send size={14} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:bg-blue-600 transition-all"
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </motion.button>
    </div>
  );
}