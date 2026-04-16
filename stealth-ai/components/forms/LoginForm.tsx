// "use client";

// import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { motion } from "framer-motion";
// import { Loader2, ShieldAlert, Mail, ArrowRight, Lock } from "lucide-react";
// import Button from "../ui/Button";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, isLoading } = useAuth();
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // 🔥 Backend API Call Simulation (Replace with actual fetch later)
//       // For now, let's simulate a successful login as 'student'
//       if(email && password) {
//         login("fake-jwt-token", "student"); 
//       } else {
//         setError("Invalid Credentials Sequence.");
//       }
//     } catch (err) {
//       setError("Uplink Failed. Check Terminal Logs.");
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }} 
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-md space-y-8 p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 shadow-2xl relative overflow-hidden"
//     >
//       {/* Visual Accent */}
//       <div className="absolute -top-10 -right-10 h-32 w-32 bg-cyan-500/10 blur-[50px] rounded-full" />

//       <div className="text-center space-y-2">
//         <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
//           <ShieldAlert className="text-cyan-500" size={28} />
//         </div>
//         <h2 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white">Access Node</h2>
//         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Enter Cryptographic Credentials</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Email Input */}
//         <div className="space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Identifier (Email)</label>
//           <div className="relative group">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-cyan-500 transition-colors" size={16} />
//             <input 
//               type="email" 
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="NAME@DOMAIN.COM"
//               className="w-full bg-black border border-white/10 p-4 pl-12 rounded-2xl text-xs font-bold tracking-widest focus:border-cyan-500/50 outline-none transition-all placeholder:opacity-20 uppercase"
//             />
//           </div>
//         </div>

//         {/* Password Input */}
//         <div className="space-y-2">
//           <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 ml-2">Security Key</label>
//           <input 
//             type="password" 
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//             className="w-full bg-black border border-white/10 p-4 rounded-2xl text-xs font-bold tracking-widest focus:border-cyan-500/50 outline-none transition-all placeholder:opacity-20"
//           />
//         </div>

//         {error && (
//           <p className="text-[10px] font-black text-red-500 uppercase tracking-widest text-center animate-pulse">
//             {error}
//           </p>
//         )}

//         <Button 
//           type="submit" 
//           variant="primary" 
//           className="w-full py-5 rounded-2xl text-[11px]"
//           disabled={isLoading}
//         >
//           {isLoading ? <Loader2 className="animate-spin" size={18} /> : <>Initialize Uplink <ArrowRight size={16} /></>}
//         </Button>
//       </form>

//       <div className="text-center">
//         <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">
//           Forget security key? <span className="text-cyan-500 cursor-pointer hover:underline">Contact Admin</span>
//         </p>
//       </div>
//     </motion.div>
//   );
// }







"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck, Mail, ArrowRight, Lock, UserCircle2 } from "lucide-react";
import Button from "../ui/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Logic same as before, simplified alerts
      if(email && password) {
        login("fake-jwt-token", "student"); 
      } else {
        setError("Please enter your details correctly.");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md space-y-10 p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden font-sans"
    >
      {/* Subtle Institutional Accent */}
      <div className="absolute -top-10 -right-10 h-40 w-40 bg-blue-50 blur-[60px] rounded-full opacity-50" />

      <div className="text-center space-y-3 relative z-10">
        <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-inner">
          <ShieldCheck className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Sign In</h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 italic">Secure User Authentication</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 italic">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-4">
             <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Password</label>
             <span className="text-[9px] font-bold text-blue-600 hover:underline cursor-pointer italic">Recovery?</span>
          </div>
          <div className="relative group">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={16} />
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 p-5 pl-14 rounded-2xl text-xs font-bold tracking-[0.3em] text-slate-900 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {error && (
          <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-center italic bg-red-50 py-2 rounded-xl border border-red-100">
            {error}
          </p>
        )}

        <Button 
          type="submit" 
          variant="dark" 
          className="w-full py-6 rounded-3xl text-xs shadow-xl shadow-blue-500/10 group"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <span className="flex items-center gap-3 italic">Sign In to Dashboard <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></span>
          )}
        </Button>
      </form>

      <div className="text-center pt-4 border-t border-slate-100 relative z-10">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
          Need an account? <span className="text-blue-600 cursor-pointer hover:underline">Request Invite</span>
        </p>
      </div>

      {/* Bottom Visual Node */}
      <div className="flex justify-center gap-4 opacity-10 grayscale pb-2">
         <UserCircle2 size={16} />
         <ShieldCheck size={16} />
      </div>
    </motion.div>
  );
}