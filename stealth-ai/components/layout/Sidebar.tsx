// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   LayoutDashboard, BookOpen, Code2, Database, 
//   Settings, LogOut, Menu, X, ChevronRight, 
//   User, ShieldCheck, Activity, GraduationCap
// } from "lucide-react";

// interface SidebarProps {
//   role: "student" | "admin" | "reviewer";
// }

// export default function Sidebar({ role }: SidebarProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Navigation Logic based on Role
//   const menuConfig = {
//     student: [
//       { name: "Overview", href: "/dashboard/student", icon: <LayoutDashboard size={18} /> },
//       { name: "Projects", href: "/dashboard/student/projects", icon: <Code2 size={18} /> },
//       { name: "Placement", href: "/dashboard/student/placement", icon: <GraduationCap size={18} /> },
//       { name: "Submissions", href: "/dashboard/student/submissions", icon: <Database size={18} /> },
//       { name: "Credentials", href: "/dashboard/student/experience", icon: <ShieldCheck size={18} /> },
//     ],
//     admin: [
//       { name: "Master Console", href: "/dashboard/admin", icon: <LayoutDashboard size={18} /> },
//       { name: "Student Nodes", href: "/dashboard/admin/students", icon: <User size={18} /> },
//       { name: "Review Queue", href: "/dashboard/admin/reviews", icon: <Activity size={18} /> },
//       { name: "Analytics", href: "/dashboard/admin/analytics", icon: <Database size={18} /> },
//     ],
//     reviewer: [
//       { name: "Manuscripts", href: "/dashboard/reviewer", icon: <BookOpen size={18} /> },
//       { name: "Evaluation", href: "/dashboard/reviewer/evaluate", icon: <ShieldCheck size={18} /> },
//     ]
//   };

//   const links = menuConfig[role] || [];

//   return (
//     <>
//       {/* MOBILE TRIGGER */}
//       <div className="lg:hidden fixed top-6 left-6 z-[200]">
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="p-3 bg-white text-black rounded-xl shadow-2xl"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* SIDEBAR CONTAINER */}
//       <AnimatePresence>
//         {(isOpen || typeof window !== 'undefined' && window.innerWidth > 1024) && (
//           <>
//             {/* Overlay for Mobile */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[180] lg:hidden"
//             />

//             <motion.aside 
//               initial={{ x: -300 }}
//               animate={{ x: 0 }}
//               exit={{ x: -300 }}
//               className="fixed lg:static inset-y-0 left-0 w-72 bg-[#050505] border-r border-white/5 z-[190] flex flex-col justify-between p-6 overflow-y-auto"
//             >
//               <div>
//                 {/* Brand Section */}
//                 <div className="flex items-center gap-4 mb-16 px-2">
//                   <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center font-black text-black italic text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">S</div>
//                   <div>
//                     <h2 className="text-xs font-black uppercase tracking-widest text-white">Stealth Labs</h2>
//                     <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">{role} node</p>
//                   </div>
//                 </div>

//                 {/* Nav Links */}
//                 <nav className="space-y-1">
//                   {links.map((link) => {
//                     const isActive = pathname === link.href;
//                     return (
//                       <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
//                         <div className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-white/5 text-white border border-white/10' : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'}`}>
//                           <div className="flex items-center gap-3">
//                             <span className={isActive ? "text-cyan-500" : "group-hover:text-cyan-400 transition-colors"}>{link.icon}</span>
//                             <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
//                           </div>
//                           {isActive && <ChevronRight size={14} className="text-cyan-500" />}
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </nav>
//               </div>

//               {/* Bottom Actions */}
//               <div className="space-y-4 pt-10 border-t border-white/5">
//                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center text-[10px] font-bold uppercase">JD</div>
//                     <div className="flex-1 overflow-hidden">
//                        <p className="text-[10px] font-bold text-white truncate uppercase">John Doe</p>
//                        <p className="text-[8px] font-mono text-zinc-600 truncate">ST-8894@STEALTH</p>
//                     </div>
//                  </div>
//                  <button className="w-full py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-red-500/60 hover:text-red-400 hover:bg-red-500/5 transition-all flex items-center justify-center gap-2">
//                    <LogOut size={14} /> Terminate
//                  </button>
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, BookOpen, Code2, Database, 
  LogOut, Menu, X, ChevronRight, 
  User, ShieldCheck, Activity, GraduationCap,
  Fingerprint, Settings
} from "lucide-react";

interface SidebarProps {
  role: "student" | "admin" | "reviewer";
}

export default function Sidebar({ role }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuConfig = {
    student: [
      { name: "Overview", href: "/dashboard/student", icon: <LayoutDashboard size={18} /> },
      { name: "My Projects", href: "/dashboard/student/projects", icon: <Code2 size={18} /> },
      { name: "Placement", href: "/dashboard/student/placement", icon: <GraduationCap size={18} /> },
      { name: "Submissions", href: "/dashboard/student/submissions", icon: <Database size={18} /> },
      { name: "My Certificates", href: "/dashboard/student/experience", icon: <ShieldCheck size={18} /> },
    ],
    admin: [
      { name: "Dashboard", href: "/dashboard/admin", icon: <LayoutDashboard size={18} /> },
      { name: "All Students", href: "/dashboard/admin/students", icon: <User size={18} /> },
      { name: "Review Queue", href: "/dashboard/admin/reviews", icon: <Activity size={18} /> },
      { name: "System Stats", href: "/dashboard/admin/analytics", icon: <Database size={18} /> },
    ],
    reviewer: [
      { name: "Manuscripts", href: "/dashboard/reviewer", icon: <BookOpen size={18} /> },
      { name: "Evaluation", href: "/dashboard/reviewer/evaluate", icon: <ShieldCheck size={18} /> },
    ]
  };

  const links = menuConfig[role] || [];

  return (
    <>
      {/* MOBILE TRIGGER */}
      <div className="lg:hidden fixed top-6 left-6 z-[200]">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-3 bg-slate-900 text-white rounded-2xl shadow-xl"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {(isOpen || (typeof window !== 'undefined' && window.innerWidth > 1024)) && (
          <>
            {/* Overlay for Mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[180] lg:hidden"
            />

            <motion.aside 
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-slate-100 z-[190] flex flex-col justify-between p-8 overflow-y-auto font-sans"
            >
              <div>
                {/* 1. BRAND SECTION (Clean White) */}
                <div className="flex items-center gap-4 mb-16 px-2">
                  <div className="h-12 w-12 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-white italic text-2xl shadow-lg">S</div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-tighter text-slate-900">Stealth Labs</h2>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest italic">{role} Node</p>
                  </div>
                </div>

                {/* 2. NAV LINKS (Sober Style) */}
                <nav className="space-y-2">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        <div className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                          isActive 
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                          : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                        }`}>
                          <div className="flex items-center gap-4">
                            <span className={isActive ? "text-blue-600" : "group-hover:text-blue-600 transition-colors"}>
                              {link.icon}
                            </span>
                            <span className="text-[11px] font-black uppercase tracking-widest italic">{link.name}</span>
                          </div>
                          {isActive && <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />}
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* 3. USER PROFILE & LOGOUT */}
              <div className="space-y-6 pt-10 border-t border-slate-50">
                 <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                       <Fingerprint size={20} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                       <p className="text-[11px] font-black text-slate-900 truncate uppercase italic">Agent John</p>
                       <p className="text-[9px] font-bold text-slate-400 truncate tracking-widest uppercase">ST-ACTIVE</p>
                    </div>
                 </div>
                 
                 <button className="w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all flex items-center justify-center gap-3 italic">
                    <LogOut size={16} /> Sign Out
                 </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}