"use client";

import { COMPANY } from "@/lib/config";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxHero from "@/components/animations/ParallaxHero";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Terminal, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* 1. HERO SECTION WITH PARALLAX */}
      <ParallaxHero image="/hero-bg.jpg">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-cyan-500 mb-6">
              <Terminal size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Initialized v4.0</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter text-white leading-[0.9]">
              {COMPANY.tagline.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-2xl mx-auto text-zinc-500 text-sm md:text-lg italic font-medium uppercase tracking-wide leading-relaxed">
              Architect real-world software nodes. Gain verifiable experience through 
              industrial deployment. <span className="text-white">Placement assistance is earned — not promised.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/dashboard/student">
                <Button variant="primary" size="lg" className="min-w-[240px]">
                  Access Dashboard <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="min-w-[240px]">
                  Explore Projects Hub
                </Button>
              </Link>
            </div>
          </FadeIn>

        </div>
      </ParallaxHero>

      {/* 2. CORE PHILOSOPHY */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <FadeIn delay={0.2} direction="up">
          <div className="space-y-4 text-center md:text-left">
            <Zap className="text-purple-500 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Rapid Deployment</h3>
            <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
              Transition from learning to active project deployment within 72 hours of node clearance.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="space-y-4 text-center md:text-left">
            <ShieldCheck className="text-cyan-500 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Verified Pedigree</h3>
            <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
              Every certificate is a cryptographic proof of work, backed by production-level git commits.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <div className="space-y-4 text-center md:text-left">
            <Terminal className="text-emerald-500 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Elite Pipeline</h3>
            <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
              Direct uplinks to hiring partners for candidates who clear Tier-3 architectural protocols.
            </p>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}