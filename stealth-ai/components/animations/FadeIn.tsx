// "use client";

// import { motion } from "framer-motion";

// interface FadeInProps {
//   children: React.ReactNode;
//   delay?: number;
//   direction?: "up" | "down" | "left" | "right";
//   fullWidth?: boolean;
// }

// export default function FadeIn({ children, delay = 0, direction = "up", fullWidth = false }: FadeInProps) {
//   const directions = {
//     up: { y: 40 },
//     down: { y: -40 },
//     left: { x: 40 },
//     right: { x: -40 },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, ...directions[direction] }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ 
//         duration: 0.8, 
//         delay: delay,
//         type: "spring",
//         damping: 25,
//         stiffness: 100 
//       }}
//       className={fullWidth ? "w-full" : ""}
//     >
//       {children}
//     </motion.div>
//   );
// }












"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
}

export default function FadeIn({ children, delay = 0, direction = "up", fullWidth = false }: FadeInProps) {
  // Sober Movement: Small Y offsets (20px instead of 40px) feel more premium
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1, 
        delay: delay,
        // Using quintic easing for a "luxurious" slow-down effect
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={fullWidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}