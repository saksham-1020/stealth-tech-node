// "use client";

// import { motion } from "framer-motion";
// import { api } from "@/lib/api"; // Make sure path is correct
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { 
//   Lock, Mail, ArrowRight, ShieldCheck, 
//   Command, Network, Eye, EyeOff, Loader2, User 
// } from "lucide-react";

// export default function RegisterPage() {
//   const router = useRouter();

//   // Your State Management + UI States
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
//   };

//   // Your Exact Backend Logic merged with UI loading states
//  const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault(); 
    
//     if (!name || !email || !password) {
//       return alert("Please fill all required data nodes.");
//     }
    
//     setIsLoading(true);

//     try {
//       // ✅ Change 1: Query params ki jagah proper api.post use kiya
//       // ✅ Change 2: Backend ke naye path (/api/v1/auth/register) ko hit kiya
//       const data = await api.post("/api/v1/auth/register", { 
//         full_name: name, // Backend 'full_name' mangta hai
//         email: email, 
//         password: password 
//       });

//       console.log("Server Response:", data);

//       // ✅ Change 3: Hamare naye backend ka success message check kiya
//       if (data.message === "Node Initialized") {
//         alert("Registration success 🚀 Redirecting to login...");
//         router.push("/auth/login");
//       } else {
//         alert(data.detail || "Registration failed. Please check details.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Transmission failed. Backend might be offline.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#020202] text-white min-h-screen flex font-sans selection:bg-cyan-500/30">
      
//       {/* LEFT SIDE: BRANDING & SECURITY (Hidden on Mobile) */}
//       <div className="hidden lg:flex w-1/2 relative bg-zinc-950 items-center justify-center p-20 overflow-hidden border-r border-white/5">
        
//         {/* Background Mesh */}
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 blur-[200px] rounded-full animate-pulse" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

//         <div className="relative z-10 w-full max-w-lg space-y-12">
//           <Link href="/" className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-pointer">
//              <span className="text-black font-black text-3xl italic">S</span>
//           </Link>
          
//           <div>
//             <h1 className="text-6xl font-black uppercase tracking-tighter italic mb-6">
//               Request <br /> <span className="text-cyan-500">Clearance.</span>
//             </h1>
//             <p className="text-zinc-400 text-xl font-light italic leading-relaxed border-l-2 border-cyan-500/30 pl-6">
//               Join the sovereign ecosystem. Get access to industrial training, research clusters, and deployment APIs.
//             </p>
//           </div>

//           <div className="space-y-6 pt-10 border-t border-white/10">
//             <div className="flex items-center gap-4">
//               <Network className="text-cyan-500" size={24} />
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-widest text-white">Global Tech Network</p>
//                 <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Connect with elite engineers and researchers</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <ShieldCheck className="text-emerald-500" size={24} />
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-widest text-white">Data Sovereignty</p>
//                 <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Your identity is cryptographically secured</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE: THE REGISTRATION FORM */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 relative overflow-y-auto">
//         <motion.div {...fadeIn} className="w-full max-w-md space-y-8 relative z-10 py-10">
          
//           <div className="text-center lg:text-left space-y-4">
//             <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
//                <Command className="text-cyan-500" size={20} />
//                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">Identity Creation</span>
//             </div>
//             <h2 className="text-4xl font-black uppercase italic tracking-tighter">Generate <br className="hidden lg:block"/> Node.</h2>
//             <p className="text-zinc-500 font-light text-sm italic">Establish your credentials to enter the academy.</p>
//           </div>

//           <form onSubmit={handleRegister} className="space-y-5">
            
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Full Entity Name</label>
//               <div className="relative">
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"><User size={18} /></div>
//                 <input 
//                   type="text" 
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="JOHN DOE" 
//                   className="w-full bg-zinc-950 border border-white/10 py-5 pl-16 pr-6 rounded-2xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-30" 
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Communication Node (Email)</label>
//               <div className="relative">
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"><Mail size={18} /></div>
//                 <input 
//                   type="email" 
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="STUDENT@DOMAIN.COM" 
//                   className="w-full bg-zinc-950 border border-white/10 py-5 pl-16 pr-6 rounded-2xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest text-white placeholder:opacity-30" 
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-widest">Cryptographic Passkey</label>
//               <div className="relative">
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"><Lock size={18} /></div>
//                 <input 
//                   type={show ? "text" : "password"} 
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••" 
//                   className="w-full bg-zinc-950 border border-white/10 py-5 pl-16 pr-14 rounded-2xl focus:outline-none focus:border-cyan-500 focus:bg-white/5 transition-all font-bold text-xl tracking-widest text-white placeholder:opacity-30" 
//                 />
//                 <button 
//                   type="button" 
//                   onClick={() => setShow(!show)}
//                   className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-400 transition-colors"
//                 >
//                   {show ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               disabled={isLoading}
//               className="w-full bg-white text-black py-6 rounded-2xl font-[1000] uppercase tracking-[0.4em] hover:bg-cyan-500 transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] flex justify-center items-center gap-4 group mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <><Loader2 className="animate-spin" size={18} /> REGISTERING...</>
//               ) : (
//                 <>Establish Node <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
//               )}
//             </button>
//           </form>

//           {/* Login Redirect */}
//           <div className="text-center pt-6 border-t border-white/10">
//              <p className="text-xs font-light text-zinc-500">
//                Already have a node? <Link href="/auth/login" className="text-white font-bold hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] ml-2">Authenticate</Link>
//              </p>
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
  Lock, Mail, ArrowRight, ShieldCheck, 
  Eye, EyeOff, Loader2, User, Landmark, CheckCircle2
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  // State Management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!name || !email || !password) return alert("Please fill in all details.");
    
    setIsLoading(true);
    try {
      const data = await api.post("/api/v1/auth/register", { 
        full_name: name, 
        email: email, 
        password: password 
      });

      if (data.message === "Node Initialized") {
        alert("Account created successfully! Please log in.");
        router.push("/auth/login");
      } else {
        alert(data.detail || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("We couldn't connect to the server. Please check your internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen flex font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* LEFT SIDE: SIMPLE WELCOME (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-white items-center justify-center p-20 border-r border-slate-100">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:25px_25px]" />
        </div>

        <div className="relative z-10 w-full max-w-lg space-y-12">
          <Link href="/" className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all">
             <span className="text-white font-bold text-3xl">S</span>
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-6xl font-black tracking-tight text-slate-900 leading-none">
              Start Your <br /> <span className="text-blue-600 italic">Journey.</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8">
              Join our community of learners and builders. Get access to industrial projects, mentors, and tools.
            </p>
          </div>

          <div className="space-y-6 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-4 text-slate-400">
              <CheckCircle2 className="text-blue-600" size={24} />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-900">Real Projects</p>
                <p className="text-xs font-medium">Work on things that actually matter</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <ShieldCheck className="text-blue-600" size={24} />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-900">Secure & Safe</p>
                <p className="text-xs font-medium">Your data and privacy are our priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: EASY REGISTRATION FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative bg-[#fafafb] overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-10 relative z-10 py-10"
        >
          
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">Create Account</h2>
            <p className="text-slate-400 font-medium italic">Sign up today to join the StealthAI Academy</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-4 uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"><User size={18} /></div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe" 
                  className="w-full bg-white border border-slate-200 py-5 pl-16 pr-6 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900 shadow-sm" 
                />
              </div>
            </div>

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
              <label className="text-xs font-bold text-slate-500 ml-4 uppercase tracking-widest">Create Password</label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"><Lock size={18} /></div>
                <input 
                  type={show ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-white border border-slate-200 py-5 pl-16 pr-14 rounded-2xl focus:outline-none focus:border-blue-600 transition-all font-medium text-lg tracking-widest text-slate-900 shadow-sm" 
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
              className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-lg flex justify-center items-center gap-4 group mt-4 disabled:opacity-50"
            >
              {isLoading ? (
                <><Loader2 className="animate-spin" size={20} /> CREATING...</>
              ) : (
                <>Join Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></>
              )}
            </button>
          </form>

          {/* Simple Link to Login */}
          <div className="text-center pt-8 border-t border-slate-200">
             <p className="text-sm font-medium text-slate-400">
               Already have an account? <Link href="/auth/login" className="text-blue-600 font-bold hover:underline ml-1 italic">Sign In</Link>
             </p>
          </div>

          <div className="flex justify-center gap-6 opacity-20 grayscale pb-4">
             <Landmark size={20} />
             <ShieldCheck size={20} />
          </div>

        </motion.div>
      </div>

    </main>
  );
}