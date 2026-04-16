// "use client";

// import FadeIn from "@/components/animations/FadeIn";
// import { PageHeader } from "@/components/common/PageHeader";
// import { FileText, Terminal, Gavel } from "lucide-react";

// export default function Terms() {
//   return (
//     <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-purple-500/30">
//       <div className="max-w-4xl mx-auto px-6">
        
//         <FadeIn>
//           <div className="flex items-center gap-3 mb-4 text-purple-500">
//             <Gavel size={18} />
//             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Engagement Terms</span>
//           </div>
//           <PageHeader title="Terms of Service" subtitle="Rules of engagement for accessing the Stealth AI operational framework." />
//         </FadeIn>

//         <div className="mt-16 space-y-4">
//           {[
//             { title: "Node Access", text: "By accessing the STEALTH AI platform, you agree to adhere to all system protocols, ethical development practices, and sovereign node rules." },
//             { title: "Proof of Work", text: "Certificates are cryptographic assets issued only after verified project completion. Fabricated submissions will lead to immediate and permanent node deactivation." },
//             { title: "Service Evolution", text: "STEALTH AI reserves the right to update platform features, pricing nodes, and internal policies at any timestamp to maintain system integrity." },
//           ].map((term, i) => (
//             <FadeIn key={i} delay={i * 0.1}>
//               <div className="flex items-start gap-6 p-8 rounded-3xl bg-zinc-950/50 border border-white/5 group hover:border-purple-500/20 transition-all">
//                 <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-zinc-600 group-hover:text-purple-500 transition-colors">
//                   <Terminal size={18} />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">{term.title}</h3>
//                   <p className="text-zinc-500 text-[13px] leading-relaxed italic font-medium uppercase">{term.text}</p>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







"use client";

import { FileText, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full">
            <Scale size={12} className="text-slate-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Service Governance Node</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-slate-900">Terms of <span className="text-blue-700">Sync.</span></h1>
        </div>

        <div className="space-y-6">
          {[
            { 
              t: "01. Acceptance", 
              d: "By initializing a session with the STEALTHAI portal, you agree to comply with our industrial deployment standards and code of conduct." 
            },
            { 
              t: "02. Academic Integrity", 
              d: "Project nodes must be unique. Any plagiarism, use of unauthorized automated tools for project logic, or spoofing performance metrics results in node termination." 
            },
            { 
              t: "03. Intellectual Property", 
              d: "All proprietary research, neural model weights, and architectural codebases provided during training remain the exclusive property of STEALTHAI Technologies." 
            },
            { 
              t: "04. Refund Policy", 
              d: "Service fees once processed for node access or academy enrollment are non-refundable, as they cover allocated GPU clusters and instructional resources." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
               <h4 className="text-sm font-black uppercase tracking-widest text-blue-700 mb-3">{item.t}</h4>
               <p className="text-sm text-slate-500 italic font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex items-start gap-6">
           <ShieldAlert className="text-blue-600 shrink-0" size={24} />
           <p className="text-[10px] font-bold text-blue-800 uppercase leading-relaxed tracking-wider">
             Legal Note: STEALTHAI reserves the right to modify system protocols at any time to maintain ecosystem security.
           </p>
        </div>

        <div className="mt-24 text-center">
           <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 hover:text-blue-600 transition-all">
              Return to Command Node
           </Link>
        </div>
      </div>
    </main>
  );
}