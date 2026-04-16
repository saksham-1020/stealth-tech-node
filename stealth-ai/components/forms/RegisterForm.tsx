// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2, UserPlus, Mail, ArrowRight, User, GraduationCap } from "lucide-react";
// import Button from "../ui/Button";

// export default function RegisterForm() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // 🔥 Simulation of Backend Registration
//     setTimeout(() => setIsLoading(false), 2000);
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.95 }} 
//       animate={{ opacity: 1, scale: 1 }}
//       className="w-full max-w-lg space-y-8 p-12 rounded-[3rem] bg-zinc-950 border border-white/5 shadow-2xl relative"
//     >
//       <div className="text-center space-y-2">
//         <div className="h-14 w-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
//           <UserPlus className="text-purple-500" size={28} />
//         </div>
//         <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter text-white">New Entity</h2>
//         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Initialize Identity Node</p>
//       </div>

//       <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* Full Name */}
//         <div className="space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Legal Name</label>
//           <div className="relative">
//             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
//             <input type="text" placeholder="EX. RAHUL VERMA" className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-[10px] font-bold tracking-widest focus:border-purple-500 outline-none uppercase" />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email Uplink</label>
//           <div className="relative">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={14} />
//             <input type="email" placeholder="ADMIN@STEALTH.COM" className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-[10px] font-bold tracking-widest focus:border-purple-500 outline-none uppercase" />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="md:col-span-2 space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Security Hash (Password)</label>
//           <input type="password" placeholder="••••••••••••" className="w-full bg-black border border-white/10 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:border-purple-500 outline-none" />
//         </div>

//         {/* Program Selection */}
//         <div className="md:col-span-2 space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Deployment Path</label>
//           <div className="relative">
//             <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
//             <select className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:border-purple-500 outline-none appearance-none cursor-pointer">
//               <option>AI Research Specialist</option>
//               <option>Full Stack Architect</option>
//               <option>Cyber Security Node</option>
//             </select>
//           </div>
//         </div>

//         <div className="md:col-span-2 pt-4">
//           <Button 
//             type="submit" 
//             variant="primary" 
//             className="w-full py-5 rounded-2xl text-[11px] bg-gradient-to-r from-purple-600 to-indigo-600 shadow-purple-500/20"
//             disabled={isLoading}
//           >
//             {isLoading ? <Loader2 className="animate-spin" size={18} /> : <>Create Node Identity <ArrowRight size={16} /></>}
//           </Button>
//         </div>
//       </form>
//     </motion.div>
//   );
// }





"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, UserPlus, Mail, ArrowRight, User, GraduationCap, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg space-y-10 p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-2xl relative font-sans"
    >
      <div className="text-center space-y-3">
        <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-inner">
          <UserPlus className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Create Account</h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 italic">Initialize Student Node</p>
      </div>

      <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Full Name</label>
          <div className="relative group">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
            <input type="text" placeholder="e.g. Rahul Verma" className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
            <input type="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm" />
          </div>
        </div>

        {/* Password */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Create Password</label>
          <input type="password" placeholder="••••••••••••" className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl text-xs font-bold tracking-[0.3em] text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm" />
        </div>

        {/* Program Selection */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Select Program</label>
          <div className="relative group">
            <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
            <select className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold uppercase tracking-widest text-slate-900 focus:border-blue-600 focus:bg-white outline-none appearance-none cursor-pointer transition-all shadow-sm">
              <option>AI Research Specialist</option>
              <option>Full Stack Architect</option>
              <option>Cyber Security Node</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 pt-4">
          <Button 
            type="submit" 
            variant="dark" 
            className="w-full py-6 rounded-2xl text-xs shadow-xl shadow-blue-500/10"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <span className="flex items-center gap-3">Create Student Node <ArrowRight size={18} /></span>}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}