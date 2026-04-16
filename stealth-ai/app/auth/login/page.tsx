// "use client";

// import { motion } from "framer-motion";
// import { api } from "@/lib/api";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { 
//   Fingerprint, Lock, Mail, ArrowRight, 
//   ShieldCheck, Command, Activity, Eye, EyeOff, Loader2, Cpu
// } from "lucide-react";

// export default function LoginPage() {
//   const router = useRouter();

//   // State Management
//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
//   };

//   // 2. handleLogin function ke andar ye logic dalo
// const handleLogin = async (e: React.FormEvent) => {
//   e.preventDefault();
  
//   if (!email || !password) {
//     return alert("Please provide valid credentials.");
//   }
  
//   setIsLoading(true);

//   try {
//     // 🛰️ Sending credentials to our Professional V6 Backend
//     const data = await api.post("/api/v1/auth/login", { 
//       email: email, 
//       password: password 
//     });

//     console.log("Login Response:", data);

//     // handleLogin function ke andar ka IF block update karo
// if (data.token) {
//   // ✅ STEP 1: Save Token & Role
//   localStorage.setItem("stealth_token", data.token);
//   localStorage.setItem("user_role", data.role);
//   localStorage.setItem("user_name", data.full_name || "Agent");
  

//   // ✅ STEP 2: Alert (Optional, but good for confirmation)
//   alert("Uplink Successful! 🔑 Redirecting...");

//   // ✅ STEP 3: Professional Redirect (More reliable than router.push for Auth)
//   if (data.role === "admin") {
//     window.location.href = "/dashboard/admin";
//   } else {
//     window.location.href = "/dashboard/student";
//   }
// } else {
//   alert(data.detail || "Access Denied: Invalid Node Signature.");
// }
//   } catch (err) {
//     console.error("Login Error:", err);
//     alert("Connection Failed: Authentication Node is Offline.");
//   } finally {
//     setIsLoading(false);
//   }
// };

//   return (
//     <main className="bg-[#020202] text-white min-h-screen flex font-sans selection:bg-cyan-500/30 overflow-hidden">
      
//       {/* LEFT SIDE: STEALTH BRANDING */}
//       <div className="hidden lg:flex w-1/2 relative bg-[#050505] items-center justify-center p-20 overflow-hidden border-r border-white/5">
//         {/* Elite HUD Background */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full animate-pulse" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        
//         <div className="relative z-10 w-full max-w-lg space-y-12">
//           <Link href="/" className="h-20 w-20 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:rotate-6 transition-all duration-500 group">
//              <span className="text-black font-black text-4xl italic">S</span>
//           </Link>
          
//           <div className="space-y-6">
//             <h1 className="text-7xl font-[1000] uppercase tracking-tighter italic leading-none">
//               Neural <br /> <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Access.</span>
//             </h1>
//             <p className="text-zinc-500 text-lg font-medium italic leading-relaxed border-l-2 border-cyan-500/30 pl-8 max-w-md">
//               Secure uplink to the central research infrastructure and deployment clusters.
//             </p>
//           </div>

//           <div className="flex gap-10 pt-10 border-t border-white/5">
//             <div className="flex items-center gap-3">
//                <ShieldCheck className="text-emerald-500" size={20} />
//                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">AES-256 Secure</span>
//             </div>
//             <div className="flex items-center gap-3">
//                <Activity className="text-cyan-500" size={20} />
//                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Uptime: 99.9%</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE: AUTH TERMINAL */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
//         <motion.div {...fadeIn} className="w-full max-w-md space-y-12 relative z-10">
          
//           <div className="space-y-4">
//             <div className="flex items-center gap-3 text-cyan-500 opacity-50">
//                <Cpu size={18} />
//                <span className="text-[9px] font-black uppercase tracking-[0.5em]">Auth Node: 0x77AF</span>
//             </div>
//             <h2 className="text-4xl font-[1000] uppercase italic tracking-tighter leading-tight">Initialize <br/> Session.</h2>
//           </div>

//           <form onSubmit={handleLogin} className="space-y-8">
//             <div className="space-y-3">
//               <label className="text-[10px] font-black text-zinc-600 ml-2 uppercase tracking-[0.2em]">Credential ID</label>
//               <div className="relative group">
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-cyan-500 transition-colors"><Mail size={18} /></div>
//                 <input 
//                   type="email" 
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="ENGINEER@STEALTHAI.IO" 
//                   className="w-full bg-zinc-950/50 border border-white/5 py-6 pl-16 pr-6 rounded-[2rem] focus:outline-none focus:border-cyan-500 focus:bg-black/80 transition-all font-bold text-xs uppercase tracking-widest text-white shadow-inner" 
//                 />
//               </div>
//             </div>

//             <div className="space-y-3">
//               <div className="flex justify-between items-center ml-2">
//                 <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Access Key</label>
//                 <Link href="#" className="text-[10px] font-bold text-cyan-500/50 hover:text-cyan-400 transition-colors uppercase tracking-widest">Forgot?</Link>
//               </div>
//               <div className="relative group">
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-cyan-500 transition-colors"><Lock size={18} /></div>
//                 <input 
//                   type={show ? "text" : "password"} 
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••" 
//                   className="w-full bg-zinc-950/50 border border-white/5 py-6 pl-16 pr-14 rounded-[2rem] focus:outline-none focus:border-cyan-500 focus:bg-black/80 transition-all font-bold text-xl tracking-[0.3em] text-white shadow-inner" 
//                 />
//                 <button 
//                   type="button" 
//                   onClick={() => setShow(!show)}
//                   className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 hover:text-cyan-400 transition-colors"
//                 >
//                   {show ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               disabled={isLoading}
//               className="w-full bg-white text-black py-6 rounded-[2rem] font-[1000] uppercase tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-2xl flex justify-center items-center gap-4 group disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <><Loader2 className="animate-spin" size={20} /> Syncing...</>
//               ) : (
//                 <>Authenticate <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" /></>
//               )}
//             </button>
//           </form>

//           <div className="pt-10 border-t border-white/5 text-center space-y-6">
//             <button type="button" className="w-full bg-transparent border border-white/5 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-cyan-400 hover:border-cyan-500/20 transition-all flex justify-center items-center gap-3">
//                 <Fingerprint size={18} /> Hardware Passkey
//             </button>
//             <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
//               No node? <Link href="/auth/register" className="text-white hover:text-cyan-400 ml-2 border-b border-zinc-800 pb-0.5">Request Access</Link>
//             </p>
//           </div>

//         </motion.div>
//       </div>

//     </main>
//   );
// }








"use client";

import { motion } from "framer-motion";
import { api } from "@/lib/api";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Lock, Mail, ArrowRight, 
  ShieldCheck, Activity, Eye, EyeOff, Loader2, Cpu, Landmark, UserCircle2
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  // State Management
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter your email and password.");
    
    setIsLoading(true);
    try {
      const data = await api.post("/api/v1/auth/login", { 
        email: email, 
        password: password 
      });

      if (data.token) {
        localStorage.setItem("stealth_token", data.token);
        localStorage.setItem("user_role", data.role);
        localStorage.setItem("user_name", data.full_name || "User");

        // Simple alert
        alert("Success! Opening your dashboard...");
        
        if (data.role === "admin") {
          window.location.href = "/dashboard/admin";
        } else {
          window.location.href = "/dashboard/student";
        }
      } else {
        alert(data.detail || "We couldn't find an account with these details.");
      }
    } catch (err) {
      alert("Something went wrong with the connection. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen flex font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* LEFT SIDE: FRIENDLY BRANDING */}
      <div className="hidden lg:flex w-1/2 relative bg-white items-center justify-center p-20 border-r border-slate-100">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="relative z-10 w-full max-w-lg space-y-10">
          <Link href="/" className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all">
             <span className="text-white font-bold text-3xl">S</span>
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-6xl font-black tracking-tight text-slate-900">
              Welcome <br /> <span className="text-blue-600 italic">Back.</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
              Sign in to access your projects, courses, and research data.
            </p>
          </div>

          <div className="flex gap-8 pt-8">
            <div className="flex items-center gap-2 text-slate-400">
               <ShieldCheck size={18} className="text-blue-600" />
               <span className="text-xs font-bold uppercase tracking-widest">Secure Login</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               <Activity size={18} className="text-blue-600" />
               <span className="text-xs font-bold uppercase tracking-widest">System Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: SIMPLE LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative bg-[#fafafb]">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-10 relative z-10"
        >
          
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900">Sign In</h2>
            <p className="text-slate-400 font-medium italic">Enter your details to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-4 uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"><Mail size={18} /></div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-white border border-slate-200 py-5 pl-16 pr-6 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900 shadow-sm" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors italic">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"><Lock size={18} /></div>
                <input 
                  type={show ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-white border border-slate-200 py-5 pl-16 pr-14 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900 shadow-sm" 
                />
                <button 
                  type="button" 
                  onClick={() => setShow(!show)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-600 transition-colors"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-lg flex justify-center items-center gap-3 disabled:opacity-50"
            >
              {isLoading ? (
                <><Loader2 className="animate-spin" size={20} /> Loading...</>
              ) : (
                <>Sign In Now <ArrowRight size={20} /></>
              )}
            </button>
          </form>

          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm font-medium text-slate-400">
              Don't have an account? <Link href="/auth/register" className="text-blue-600 font-bold hover:underline ml-1">Register Here</Link>
            </p>
          </div>

          {/* Clean Trust Icons */}
          <div className="flex justify-center gap-6 opacity-30 grayscale pb-4">
             <Landmark size={20} />
             <ShieldCheck size={20} />
             <UserCircle2 size={20} />
          </div>

        </motion.div>
      </div>

    </main>
  );
}