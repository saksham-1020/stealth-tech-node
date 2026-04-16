// "use client";

// import { cn } from "@/lib/utils"; // Jo humne pehle banaya tha classes merge karne ke liye

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "outline" | "ghost" | "cyan";
//   size?: "sm" | "md" | "lg";
// }

// export default function Button({ 
//   children, 
//   variant = "primary", 
//   size = "md", 
//   className, 
//   ...props 
// }: ButtonProps) {
  
//   const variants = {
//     primary: "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-purple-500/20 hover:shadow-cyan-500/40",
//     outline: "border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 text-white",
//     ghost: "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border-transparent",
//     cyan: "bg-cyan-500 text-black font-black hover:bg-white transition-colors"
//   };

//   const sizes = {
//     sm: "px-4 py-2 text-[10px]",
//     md: "px-6 py-3 text-xs",
//     lg: "px-10 py-4 text-sm"
//   };

//   return (
//     <button 
//       className={cn(`
//         rounded-xl font-black uppercase tracking-[0.2em] italic
//         transition-all duration-300 active:scale-95 disabled:opacity-50
//         flex items-center justify-center gap-2
//         ${variants[variant]} ${sizes[size]}
//       `, className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }





"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark" | "blue";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}: ButtonProps) {
  
  const variants = {
    // Primary ab pure Blue aur White hai (Sober)
    primary: "bg-blue-600 text-white shadow-xl shadow-blue-500/10 hover:bg-blue-700 hover:shadow-blue-500/20",
    
    // Outline ab Institutional Grey/Slate border ke saath hai
    outline: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-blue-600 shadow-sm",
    
    // Ghost ekdum subtle hai
    ghost: "bg-transparent hover:bg-blue-50 text-slate-400 hover:text-blue-600 border-transparent",
    
    // Dark variant for contrast sections
    dark: "bg-slate-900 text-white hover:bg-blue-700 shadow-xl",

    // Blue variant for soft UI
    blue: "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-[9px]",
    md: "px-6 py-3 text-[10px]",
    lg: "px-10 py-4 text-[11px]",
    xl: "px-12 py-5 text-xs" // Professional big button
  };

  return (
    <button 
      className={cn(`
        rounded-2xl font-black uppercase tracking-[0.3em] italic
        transition-all duration-500 active:scale-[0.98] disabled:opacity-50
        flex items-center justify-center gap-3
        ${variants[variant]} ${sizes[size]}
      `, className)}
      {...props}
    >
      {children}
    </button>
  );
}