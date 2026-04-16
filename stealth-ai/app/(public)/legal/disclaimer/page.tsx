// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import { PageHeader } from "@/components/common/PageHeader";
// import { AlertTriangle, ShieldAlert } from "lucide-react";

// export default function Disclaimer() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
//       <div className="max-w-4xl mx-auto px-6">
        
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-amber-500">
//             <AlertTriangle size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">System Advisory</span>
//           </div>
//           <PageHeader title="Legal Disclaimer" subtitle="Operational boundaries and liability limitations of the Stealth AI ecosystem." />
//         </FadeIn>

//         <div className="mt-16 space-y-8">
//           {[
//             { 
//               title: "Operational Scope", 
//               text: "STEALTH AI provides advanced AI tools, architectural software development services, and project-based learning programs for educational and professional growth nodes." 
//             },
//             { 
//               title: "Placement Zero-Guarantee", 
//               text: "We do not guarantee job placement. Placement assistance is an elective protocol provided based on real-time performance analytics, verified project completion, and external hiring demands." 
//             },
//             { 
//               title: "Verification Protocol", 
//               text: "All certificates are cryptographic assets issued only after verified project completion. Any misuse, logic-faking, or false representation will result in immediate and permanent node removal from the platform." 
//             },
//             { 
//               title: "Third-Party Neutrality", 
//               text: "STEALTH AI remains a neutral infrastructure provider and is not responsible for third-party hiring decisions, salary negotiations, or external corporate selection processes." 
//             }
//           ].map((item, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group">
//                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-amber-500 mb-4 transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm font-medium leading-relaxed italic uppercase tracking-wide text-zinc-400">
//                   {item.text}
//                 </p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { AlertTriangle, ShieldAlert, Fingerprint, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 font-sans selection:bg-blue-100">
      <div className="max-w-4xl mx-auto relative">
        
        {/* HEADER */}
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full">
            <AlertTriangle size={12} className="text-amber-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-amber-700">System Advisory Node</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-slate-900">
            Legal <br /> <span className="text-blue-700">Disclaimer.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium italic border-l-4 border-amber-500 pl-6">
            Operational boundaries and liability limitations of the StealthAI ecosystem.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="space-y-4">
          {[
            { 
              title: "Operational Scope", 
              text: "STEALTHAI provides advanced AI tools, architectural software development services, and project-based learning programs for educational and professional growth nodes." 
            },
            { 
              title: "Placement Zero-Guarantee", 
              text: "Job placement is not guaranteed. Placement assistance is an elective protocol provided based on real-time performance analytics, verified project completion, and external hiring demands." 
            },
            { 
              title: "Verification Protocol", 
              text: "All certificates are cryptographic assets issued only after verified project completion. Any logic-faking or false representation results in immediate node removal." 
            },
            { 
              title: "Third-Party Neutrality", 
              text: "STEALTHAI remains a neutral infrastructure provider and is not responsible for third-party hiring decisions, salary negotiations, or external corporate selections." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:border-blue-600 transition-all">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 italic underline decoration-blue-600/30 underline-offset-4">
                {item.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 italic">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all">
              ← Return to Command Node
           </Link>
        </div>
      </div>
    </main>
  );
}