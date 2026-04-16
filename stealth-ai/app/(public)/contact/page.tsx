// "use client";

// import { motion } from "framer-motion";
// import { 
//   MapPin, Mail, Phone, Zap, Send, 
//   TerminalSquare, Fingerprint, Globe2, Activity 
// } from "lucide-react";

// export default function ContactPage() {
//   const fadeIn = {
//     initial: { opacity: 0, y: 40 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
//   };

//   return (
//     <main className="bg-[#020202] text-white min-h-screen pt-48 pb-20 font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      
//       {/* 1. BACKGROUND MESH */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[250px] rounded-full animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px]" />
//       </div>

//       <section className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* 2. HERO: COMMAND CENTER */}
//         <div className="mb-32">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-4 mb-12"
//           >
//             <Activity className="text-cyan-500" size={24} />
//             <span className="text-[10px] font-black uppercase tracking-[1em] text-cyan-500/80">Command Center</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-6xl md:text-[12rem] font-[1000] tracking-tighter leading-[0.8] uppercase italic mb-12"
//           >
//             Initialize <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-zinc-800">Sync.</span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-500 text-xl md:text-3xl max-w-3xl font-light italic leading-relaxed border-l-2 border-cyan-500/30 pl-8"
//           >
//             Connect with our engineering and research teams. Whether it's a sovereign infrastructure project, technical training, or an academic partnership.
//           </motion.p>
//         </div>

//         {/* 3. CONTACT GRID (Info + Form) */}
//         <div className="grid lg:grid-cols-12 gap-20 items-start">
          
//           {/* LEFT: GLOBAL DIRECTORY */}
//           <motion.div {...fadeIn} className="lg:col-span-5 space-y-20">
            
//             {/* Headquarters */}
//             <div className="space-y-8">
//               <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-4">
//                 <Globe2 className="text-cyan-500" size={32} /> Global Nodes
//               </h3>
              
//               <div className="space-y-6 border-l border-white/10 pl-8 relative">
//                 <div className="absolute top-0 -left-[5px] h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
//                 <div>
//                   <h4 className="text-lg font-bold uppercase tracking-widest text-white mb-2">Indore, IN (HQ)</h4>
//                   <p className="text-zinc-500 text-sm font-light italic">Stealth Technologies Pvt. Ltd.<br/>Central Tech Park, MP 452001</p>
//                 </div>
//               </div>
              
//               <div className="space-y-6 border-l border-white/10 pl-8 relative">
//                 <div className="absolute top-0 -left-[4px] h-2 w-2 rounded-full bg-zinc-700" />
//                 <div>
//                   <h4 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-2">Bengaluru, IN</h4>
//                   <p className="text-zinc-600 text-sm font-light italic">R&D Facility (Opening Soon)</p>
//                 </div>
//               </div>

//               <div className="space-y-6 border-l border-white/10 pl-8 relative">
//                 <div className="absolute top-0 -left-[4px] h-2 w-2 rounded-full bg-zinc-700" />
//                 <div>
//                   <h4 className="text-lg font-bold uppercase tracking-widest text-gray-400 mb-2">Singapore, SG</h4>
//                   <p className="text-zinc-600 text-sm font-light italic">Global Operations</p>
//                 </div>
//               </div>
//             </div>

//             {/* Direct Lines */}
//             <div className="space-y-8">
//               <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-4">
//                 <TerminalSquare className="text-cyan-500" size={32} /> Direct Lines
//               </h3>
//               <div className="space-y-6 p-8 rounded-[2rem] bg-zinc-950 border border-white/5">
//                 <div className="flex items-center gap-6 group cursor-pointer">
//                   <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors"><Mail size={20} /></div>
//                   <div>
//                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">General Inquiry</p>
//                     <p className="text-lg font-bold tracking-tight group-hover:text-cyan-400 transition-colors">info@stealthai.com</p>
//                   </div>
//                 </div>
//                 <div className="w-full h-[1px] bg-white/5" />
//                 <div className="flex items-center gap-6 group cursor-pointer">
//                   <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors"><Phone size={20} /></div>
//                   <div>
//                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">Support Line</p>
//                     <p className="text-lg font-bold tracking-tight group-hover:text-cyan-400 transition-colors">+91-XXXXXXXXXX</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT: THE LEAD ENGINE FORM */}
//           <motion.div {...fadeIn} className="lg:col-span-7">
//             <div className="p-10 md:p-16 rounded-[3rem] bg-zinc-900/50 border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden">
//               <Fingerprint className="absolute -top-10 -right-10 text-white/5 scale-[3]" size={200} />
              
//               <div className="mb-12 relative z-10">
//                 <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Transmission Protocol</h2>
//                 <p className="text-zinc-500 font-light text-sm tracking-widest uppercase">Secure Data Entry // Node 01</p>
//               </div>

//               <form className="space-y-8 relative z-10">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-3">
//                     <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Full Name / Entity</label>
//                     <input type="text" placeholder="ELON MUSK" className="w-full bg-black/50 border border-white/10 p-6 rounded-3xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-20" />
//                   </div>
//                   <div className="space-y-3">
//                     <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Work Email</label>
//                     <input type="email" placeholder="ELON@X.COM" className="w-full bg-black/50 border border-white/10 p-6 rounded-3xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-20" />
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Inquiry Sector</label>
//                   <select className="w-full bg-black/50 border border-white/10 p-6 rounded-3xl focus:outline-none focus:border-cyan-500 transition-all font-bold text-xs uppercase tracking-widest text-gray-400 appearance-none cursor-pointer">
//                     <option>SOFTWARE ARCHITECTURE & DEVELOPMENT</option>
//                     <option>ARTIFICIAL INTELLIGENCE & NEURAL RESEARCH</option>
//                     <option>PROFESSIONAL TRAINING & ACADEMY</option>
//                     <option>CAREERS & HIRING</option>
//                     <option>STRATEGIC PARTNERSHIP</option>
//                   </select>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Secure Message</label>
//                   <textarea rows={5} placeholder="INITIALIZE YOUR REQUEST HERE..." className="w-full bg-black/50 border border-white/10 p-6 rounded-3xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-20 resize-none"></textarea>
//                 </div>
                
//                 <button type="button" className="w-full bg-cyan-500 text-black py-8 rounded-3xl font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(6,182,212,0.2)] flex justify-center items-center gap-4 group">
//                   Transmit Data <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
//                 </button>
//               </form>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//     </main>
//   );
// }







"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Mail, Phone, Zap, Send, 
  TerminalSquare, Fingerprint, Globe, Activity,
  ShieldCheck, Landmark, SearchCheck, ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-20 font-sans selection:bg-blue-100 relative overflow-hidden">
      
      {/* 1. SOVEREIGN BACKGROUND (Subtle Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO: COMMAND CENTER (Sober & Bold) */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Activity className="text-blue-600" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-400">Command Node // v4.5.0</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-10 uppercase italic">
            Initialize <br/> <span className="text-blue-700">Sync.</span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl font-medium italic leading-relaxed border-l-4 border-blue-600 pl-8">
            Connect with our engineering and research teams. Whether it's a sovereign infrastructure project, technical training, or an industrial partnership.
          </p>
        </div>

        {/* 3. CONTACT GRID (Info + Form) */}
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-32">
          
          {/* LEFT: GLOBAL DIRECTORY */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Global Nodes - Fixed & Detailed */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-4 text-slate-900">
                <Globe className="text-blue-600" size={28} /> Global Presence
              </h3>
              
              <div className="space-y-8 border-l border-slate-100 pl-8">
                {[
                  { c: "Indore HQ", a: "Corporate Park, Vijay Nagar, MP, India", s: "Operational Command" },
                  { c: "Dubai Hub", a: "Internet City, Dubai, UAE", s: "Global Strategy Node" },
                  { c: "Mumbai Hub", a: "BKC, Mumbai, Maharashtra, India", s: "Data Governance" },
                  { c: "Bhopal Hub", a: "MP Nagar Zone-II, Bhopal, India", s: "Industrial Training" }
                ].map((loc, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-sm font-black uppercase italic text-slate-900 flex items-center gap-2">
                      <MapPin size={16} className={i === 0 ? "text-blue-600" : "text-slate-300"} /> {loc.c}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 pl-6">{loc.a}</p>
                    <span className="text-[9px] font-bold text-blue-600/40 uppercase tracking-widest pl-6 mt-1 block">{loc.s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Lines */}
            <div className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Electronic Transmission</p>
                  <p className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">info@stealthai.com</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-slate-50" />
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all"><Phone size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Voice Node</p>
                  <p className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE SOBER LEAD ENGINE FORM */}
          <div className="lg:col-span-7">
            <div className="p-12 md:p-16 rounded-[4rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
              <Fingerprint className="absolute -top-10 -right-10 text-slate-50 scale-[3]" size={200} />
              
              <div className="mb-12 relative z-10">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">Transmission Protocol</h2>
                <p className="text-slate-400 font-bold text-xs tracking-widest uppercase italic">Secure Node Entry // 2026.04</p>
              </div>

              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 ml-4 uppercase tracking-widest">Full Name / Entity</label>
                    <input type="text" placeholder="eg: Saksham Tomar" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 ml-4 uppercase tracking-widest">Official Email</label>
                    <input type="email" placeholder="saksham@entity.com" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 ml-4 uppercase tracking-widest">Inquiry Sector</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-xs uppercase tracking-widest text-slate-500 appearance-none cursor-pointer">
                    <option>SOFTWARE ARCHITECTURE & DEVELOPMENT</option>
                    <option>ARTIFICIAL INTELLIGENCE & NEURAL RESEARCH</option>
                    <option>PROFESSIONAL TRAINING & ACADEMY</option>
                    <option>STRATEGIC PARTNERSHIP</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 ml-4 uppercase tracking-widest">Sync Details</label>
                  <textarea rows={5} placeholder="INITIALIZE YOUR REQUEST BRIEF..." className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-bold text-sm resize-none"></textarea>
                </div>
                
                <button type="button" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:bg-blue-700 transition-all shadow-xl flex justify-center items-center gap-4 group">
                  Transmit Node Data <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4. CORPORATE TRUST & COMPLIANCE BAR (Genuinity Booster) */}
        <section className="py-20 border-t border-slate-100">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
              <div className="flex flex-col gap-2">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal Verification</h4>
                 <div className="space-y-1 text-xs font-bold text-slate-900">
                    <p>CIN: U72900MP2026PTC0XXXXXX</p>
                    <p>GSTIN: 23AAFCSXXXXX1Z0</p>
                 </div>
              </div>
              <div className="flex justify-center gap-12 grayscale opacity-40">
                 <div className="flex flex-col items-center gap-2">
                    <Landmark size={24}/>
                    <span className="text-[8px] font-black uppercase tracking-widest">MCA Registered</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <SearchCheck size={24}/>
                    <span className="text-[8px] font-black uppercase tracking-widest">ISO 9001:2015</span>
                 </div>
              </div>
              <div className="text-right">
                 <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all">
                   Return to Command Node <ChevronRight size={14} className="inline ml-2"/>
                 </Link>
              </div>
           </div>
        </section>

      </section>
    </main>
  );
}