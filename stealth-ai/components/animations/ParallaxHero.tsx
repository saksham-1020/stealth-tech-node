// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// interface ParallaxProps {
//   image: string;
//   children: React.ReactNode;
//   height?: string;
// }

// export default function ParallaxHero({ image, children, height = "650px" }: ParallaxProps) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Background movements
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

//   return (
//     <div ref={ref} style={{ height }} className="relative w-full overflow-hidden bg-black">
      
//       {/* 1. THE PARALLAX LAYER */}
//       <motion.div style={{ y, opacity, scale }} className="absolute inset-0">
//         <img 
//           src={image} 
//           alt="Stealth Node Background" 
//           className="w-full h-full object-cover grayscale brightness-50"
//         />
//         {/* Subtle Noise Texture Overlay */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
//       </motion.div>

//       {/* 2. GRADIENT VIGNETTE (Elite Transition) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />

//       {/* 3. CONTENT NODE */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "circOut" }}
//         >
//           {children}
//         </motion.div>
//       </div>

//       {/* 4. BOTTOM SCANLINE DECORATION */}
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
//     </div>
//   );
// }











"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  image: string;
  children: React.ReactNode;
  height?: string;
}

export default function ParallaxHero({ image, children, height = "650px" }: ParallaxProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background movements: Subtly elegant
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <div ref={ref} style={{ height }} className="relative w-full overflow-hidden bg-white">
      
      {/* 1. THE PARALLAX LAYER (Clean Grayscale) */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0">
        <img 
          src={image} 
          alt="Institutional Research Hub" 
          className="w-full h-full object-cover grayscale opacity-40 brightness-110"
        />
        {/* Subtle Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light" />
      </motion.div>

      {/* 2. INSTITUTIONAL GRADIENT (Paper-White Transition) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-[#fcfcfd]" />
      
      {/* 3. SUBTLE BLUEPRINT GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* 4. CONTENT NODE */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>

      {/* 5. BOTTOM BORDER (Stealth Blue) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
    </div>
  );
}