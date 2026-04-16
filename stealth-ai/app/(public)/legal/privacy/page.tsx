"use client";

import { ShieldCheck, EyeOff, Lock, Fingerprint, Landmark } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#fcfcfd] text-slate-900 min-h-screen pt-40 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
            <Lock size={12} className="text-blue-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-700">Data Integrity Node</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-slate-900 leading-none">
            Privacy <br /> <span className="text-blue-700">Protocol.</span>
          </h1>
        </div>

        <div className="p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] grayscale"><ShieldCheck size={200} /></div>
          
          <div className="space-y-12 relative z-10">
            {[
              { 
                h: "Data Minimization", 
                p: "We respect your privacy. STEALTHAI collects only necessary data packets—identity identifier, communication uplink (email), and deployment progress—required for platform functionality." 
              },
              { 
                h: "Zero-Sell Policy", 
                p: "Your data is never monetized, sold, or shared with third-party aggregators. Information is shared with hiring partners only upon your explicit clearance during the placement cycle." 
              },
              { 
                h: "Secure Storage", 
                p: "All user data is encrypted and used exclusively for platform improvement, certification logic verification, and essential system communications." 
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-blue-700">{item.h}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed italic font-medium">
                  {item.p}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-10 opacity-30 grayscale">
            <Landmark size={24} />
            <Fingerprint size={24} />
            <ShieldCheck size={24} />
        </div>
      </div>
    </main>
  );
}