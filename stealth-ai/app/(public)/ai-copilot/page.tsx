// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Send, Bot, Loader2, User, Sparkles, Terminal, Cpu, ShieldCheck } from "lucide-react";
// import { api } from "@/lib/api";

// export default function AICopilot() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { role: "ai", text: "Neural Link Established. System ready for architectural queries." }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const chatRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (chatRef.current) {
//       chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
//     }
//   }, [messages, isLoading]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;
//     const userQuery = input;
//     setMessages(prev => [...prev, { role: "user", text: userQuery }]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem("stealth_token") || undefined;
//       const response = await api.post("/api/v1/ai/ask", { question: userQuery.toLowerCase() }, token);
//       setMessages(prev => [...prev, { role: "ai", text: response.answer || "Uplink success." }]);
//     } catch (err) {
//       setMessages(prev => [...prev, { role: "ai", text: "SYSTEM OFFLINE: Local Llama3 node is not reachable. Ensure Ollama is running on port 11434." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 md:p-12 overflow-hidden relative selection:bg-purple-500/30">
      
//       {/* STEALTH WATERMARK - Subtle & Professional */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//         <h1 className="text-[18vw] font-black italic uppercase tracking-tighter text-white/[0.015] select-none">
//           STEALTH
//         </h1>
//       </div>

//       {/* PROFESSIONAL WIDE INTERFACE */}
//       <motion.div 
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative w-full max-w-6xl h-[85vh] bg-[#0A0A0A] border border-white/5 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col z-10 overflow-hidden"
//       >
        
//         {/* TOP BAR */}
//         <header className="px-8 py-5 border-b border-white/5 bg-black/40 backdrop-blur-xl flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
//               <Cpu size={20} />
//             </div>
//             <div>
//                 <h1 className="text-sm font-black uppercase tracking-[0.2em] text-white">Neural Interface <span className="text-purple-500 font-mono text-[10px] ml-2 font-normal italic">v4.0.1</span></h1>
//                 <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-0.5">Autonomous Intelligence Node</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//              <div className="hidden md:flex items-center gap-2 bg-emerald-500/5 px-4 py-1.5 rounded-full border border-emerald-500/10 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
//                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Nodes Operational
//              </div>
//              <ShieldCheck size={18} className="text-zinc-700" />
//           </div>
//         </header>

//         {/* CHAT AREA (Scrollable) */}
//         <main ref={chatRef} className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 no-scrollbar scroll-smooth">
//           <AnimatePresence mode="popLayout">
//             {messages.map((m, i) => (
//               <motion.div 
//                 key={i}
//                 initial={{ opacity: 0, y: 5 }} 
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div className={`flex gap-6 max-w-[80%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
//                   <div className={`h-10 w-10 rounded-xl flex-shrink-0 flex items-center justify-center border transition-colors ${
//                     m.role === "user" ? "bg-white border-white text-black shadow-xl" : "bg-zinc-900 border-white/10 text-zinc-400"
//                   }`}>
//                     {m.role === "user" ? <User size={18} /> : <Bot size={18} />}
//                   </div>
//                   <div className={`text-[15px] leading-[1.8] py-1 ${
//                     m.role === "user" 
//                     ? "bg-[#1A1A1A] px-6 py-4 rounded-3xl text-white font-medium border border-white/5 shadow-2xl" 
//                     : "text-zinc-300 font-light"
//                   }`}>
//                     {m.text}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//           {isLoading && (
//             <div className="flex justify-start gap-6 items-center px-2">
//                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center">
//                   <Loader2 size={18} className="animate-spin text-purple-500" />
//                </div>
//                <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-zinc-600 animate-pulse">Syncing Node Data...</span>
//             </div>
//           )}
//         </main>

//         {/* TYPE AREA (Stuck & Solid) */}
//         <footer className="p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
//           <div className="max-w-4xl mx-auto relative">
            
//             {/* GLOW EFFECT BEHIND INPUT */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-50 group-focus-within:opacity-100 transition-opacity" />

//             <form 
//                 onSubmit={(e) => { e.preventDefault(); handleSend(); }}
//                 className="relative flex items-center bg-[#0F0F12] border border-indigo-500/30 rounded-2xl md:rounded-[1.2rem] px-6 py-3 transition-all duration-500 group focus-within:border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.1)] overflow-hidden"
//                 style={{
//                     clipPath: "polygon(0% 0%, 95% 0%, 100% 25%, 100% 100%, 5% 100%, 0% 75%)" // Unique Angled Cut Shape
//                 }}
//             >
//                 {/* DECORATIVE CORNER ELEMENT */}
//                 <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-indigo-500 opacity-50" />
                
//                 <Terminal size={22} className="text-indigo-400/50 mr-4 group-focus-within:text-indigo-400 transition-colors" />
                
//                 <input 
//                     className="flex-1 bg-transparent border-none outline-none text-[16px] md:text-[17px] py-4 text-white placeholder:text-zinc-700 font-medium tracking-wide"
//                     placeholder="EXECUTE SYSTEM QUERY..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     disabled={isLoading}
//                 />

//                 {/* UNIQUE SEND BUTTON */}
//                 <button 
//                     type="submit" 
//                     disabled={isLoading || !input.trim()}
//                     className={`relative ml-4 h-12 w-16 flex items-center justify-center transition-all duration-300 ${
//                         input.trim() 
//                         ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95" 
//                         : "bg-zinc-900 text-zinc-700"
//                     }`}
//                     style={{
//                         clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" // Angled button shape
//                     }}
//                 >
//                     {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className="ml-1" />}
//                 </button>
//             </form>

//             {/* STATUS LABELS */}
//             <div className="flex justify-between items-center mt-6 px-4">
//                 <div className="flex items-center gap-4">
//                    <p className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.4em] opacity-60">Stealth Protocol</p>
//                    <div className="h-px w-12 bg-indigo-500/20 hidden md:block" />
//                 </div>
//                 <p className="text-[9px] text-zinc-700 font-mono uppercase tracking-widest italic font-bold">Encrypted Uplink v4.0.1</p>
//             </div>
//           </div>
//         </footer>
//       </motion.div>
//     </div>
//   );
// }









"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, Loader2, User, Sparkles, Terminal, Cpu, ShieldCheck, Fingerprint, Activity, Lock } from "lucide-react";
import { api } from "@/lib/api";

export default function AICopilot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Neural Link Established. Sovereign Node v4.5.0 ready for architectural queries." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userQuery = input;
    setMessages(prev => [...prev, { role: "user", text: userQuery }]);
    setInput("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("stealth_token") || undefined;
      const response = await api.post("/api/v1/ai/ask", { question: userQuery.toLowerCase() }, token);
      setMessages(prev => [...prev, { role: "ai", text: response.answer || "Uplink synchronization success." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", text: "PROTOCOL ERROR: Neural Node unreachable. Ensure local Llama3 instance is active on verified port." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex items-center justify-center p-4 md:p-12 overflow-hidden relative selection:bg-blue-100 font-sans">
      
      {/* 1. INSTITUTIONAL WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
        <h1 className="text-[15vw] font-black italic uppercase tracking-tighter text-slate-900 select-none">
          STEALTH_AI
        </h1>
      </div>

      {/* 2. MAIN TERMINAL INTERFACE */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-6xl h-[85vh] bg-white border border-slate-200 rounded-[3rem] shadow-2xl flex flex-col z-10 overflow-hidden"
      >
        
        {/* TOP BAR (Sober Header) */}
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 shadow-sm border border-slate-800">
              <Cpu size={24} />
            </div>
            <div>
                <h1 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                    Neural Node <span className="text-blue-600 italic font-bold">ALPHA_4</span>
                </h1>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 italic flex items-center gap-2">
                    <Lock size={10} className="text-slate-300" /> End-to-End Encrypted Session
                </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> 
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Sync Active</span>
             </div>
             <ShieldCheck size={20} className="text-slate-300" />
          </div>
        </header>

        {/* CHAT AREA (Clean Paper Look) */}
        <main ref={chatRef} className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 no-scrollbar scroll-smooth bg-[#fafafb]">
          <AnimatePresence mode="popLayout">
            {messages.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-6 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`h-10 w-10 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all ${
                    m.role === "user" 
                    ? "bg-slate-900 border-slate-900 text-white" 
                    : "bg-white border-slate-200 text-blue-600 shadow-sm"
                  }`}>
                    {m.role === "user" ? <User size={18} /> : <Fingerprint size={18} />}
                  </div>
                  <div className={`text-[16px] leading-relaxed py-1 px-2 ${
                    m.role === "user" 
                    ? "bg-white px-8 py-5 rounded-[2rem] text-slate-900 font-medium border border-slate-100 shadow-xl shadow-slate-200/50" 
                    : "text-slate-600 font-medium italic"
                  }`}>
                    {m.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <div className="flex justify-start gap-6 items-center px-2">
               <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Loader2 size={18} className="animate-spin text-blue-600" />
               </div>
               <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 animate-pulse">Syncing Lab Repository...</span>
            </div>
          )}
        </main>

        {/* INPUT AREA (Technical & Professional) */}
        <footer className="p-8 md:p-12 bg-white border-t border-slate-50">
          <div className="max-w-4xl mx-auto">
            <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-4 transition-all duration-500 group focus-within:border-blue-600 focus-within:bg-white shadow-inner"
            >
                <Terminal size={20} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                
                <input 
                    className="flex-1 bg-transparent border-none outline-none text-[17px] py-3 px-6 text-slate-900 placeholder:text-slate-300 font-medium tracking-tight"
                    placeholder="ENTER ARCHITECTURAL QUERY OR NODE COMMAND..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                />

                <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className={`h-14 w-24 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        input.trim() 
                        ? "bg-slate-900 text-white shadow-lg hover:bg-blue-700 active:scale-95" 
                        : "bg-slate-200 text-slate-400"
                    }`}
                >
                    {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
            </form>

            {/* STATUS LABELS */}
            <div className="flex justify-between items-center mt-8 px-4">
                <div className="flex items-center gap-4">
                   <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em]">Proprietary Sync Node</p>
                   <div className="h-[1px] w-12 bg-slate-100 hidden md:block" />
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest italic">Encryption Mode: active</p>
                    <p className="text-[9px] text-slate-900 font-black uppercase tracking-widest underline decoration-blue-600 underline-offset-4">Node_v4.5.1</p>
                </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}