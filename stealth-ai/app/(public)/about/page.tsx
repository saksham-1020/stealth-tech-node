"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { PageHeader } from "@/components/common/PageHeader";
import { Target, Eye, ShieldCheck, Rocket, Landmark, Cpu, Globe } from "lucide-react";

const compliance = [
  { label: "MSME Registered", status: "Operational Node", icon: <Landmark size={18} /> },
  { label: "Startup India", status: "Under Process", icon: <Rocket size={18} /> },
  { label: "ISO Certification", status: "Planned v2.0", icon: <ShieldCheck size={18} /> },
  { label: "Digital India", status: "Compliant Hub", icon: <Cpu size={18} /> },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-40 pb-24 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <FadeIn>
          <PageHeader 
            title="Our DNA" 
            subtitle="Architecting the future of AI research and industrial-grade software engineering." 
          />
          <p className="text-zinc-500 text-sm md:text-lg italic font-medium max-w-3xl leading-relaxed uppercase tracking-wide mb-20">
            STEALTH AI is a technology-driven organization focused on sovereign Artificial Intelligence,
            enterprise software development, and real-world project-based learning.
            Our mission is to build industry-ready professionals through hands-on
            development experience and deep-tech research.
          </p>
        </FadeIn>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <FadeIn direction="left">
            <GlassCard className="h-full border-purple-500/10 group">
              <div className="space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-black transition-all">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">The Mission</h2>
                <p className="text-zinc-400 text-sm leading-relaxed italic uppercase">
                  To provide real project experience and build skilled developers 
                  ready for the global workforce through intense practical innovation 
                  and proprietary research workflows.
                </p>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn direction="right">
            <GlassCard className="h-full border-cyan-500/10 group">
              <div className="space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <Eye size={28} />
                </div>
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Global Vision</h2>
                <p className="text-zinc-400 text-sm leading-relaxed italic uppercase">
                  To become a global AI engineering powerhouse delivering 
                  high-fidelity solutions and industry-ready talent nodes 
                  to the world's leading technology clusters.
                </p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>

        {/* COMPLIANCE SECTION */}
        <FadeIn delay={0.2}>
          <div className="p-12 rounded-[3rem] bg-zinc-950/50 border border-white/5 backdrop-blur-md">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-12">Regulatory Compliance & Alignment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-zinc-700 group-hover:text-cyan-500 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white">{item.label}</p>
                    <p className="text-[8px] font-mono text-zinc-600 uppercase italic tracking-tighter">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}