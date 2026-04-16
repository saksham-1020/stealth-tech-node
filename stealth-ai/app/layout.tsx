// import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar"; 
// import { Footer } from "@/components/layout/Footer";
// import { AuthProvider } from "@/context/AuthContext";

// const font = Montserrat({ 
//   subsets: ["latin"],
//   weight: ['300', '400', '500', '700', '900'],
//   display: 'swap' 
// });

// export const metadata: Metadata = {
//   title: "STEALTH AI | India's Sovereign Intelligence Infrastructure",
//   description: "Innovating Ideas into Intelligent Digital Solutions. Specializing in AI Research, Software Development, and Professional IT Training.",
//   keywords: ["AI Research India", "Software Development", "Machine Learning", "IT Training Indore", "Sovereign AI", "NextGen Systems"],
//   authors: [{ name: "Stealth AI Team" }],
//   openGraph: {
//     title: "STEALTH AI Technologies",
//     description: "Building the next generation of Intelligent Software Ecosystems.",
//     url: "https://stealthai.com",
//     siteName: "Stealth AI",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${font.className} bg-black text-white antialiased selection:bg-cyan-500/30 overflow-x-hidden`}>
        
//         {/* AuthProvider ensures user state is available everywhere */}
//         <AuthProvider>
            
//             {/* Global Navigation Hub */}
//             <Navbar />
            
//             {/* Page Content Injection */}
//             <main className="min-h-screen relative">
               
//                {/* Background Glow Effect - Adjusted for better layering */}
//                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none -z-10 animate-pulse" />
//                <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />
               
//                {/* Content Wrapper */}
//                <div className="relative z-10">
//                 {children}
//                </div>

//             </main>

//             {/* Global Footer */}
//             <Footer />

//         </AuthProvider>
//       </body>
//     </html>
//   );
// }







"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

// Font setup stays same, it's premium
const font = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap' 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>STEALTH AI | Industrial Software & AI Research</title>
        <meta name="description" content="Building smart digital solutions and training the next generation of engineers." />
      </head>
      {/* CHANGES MADE:
          1. bg-black -> bg-[#fcfcfd] (Sober White)
          2. text-white -> text-slate-900 (Easy Reading)
          3. selection:bg-cyan-500 -> selection:bg-blue-100 (Professional Highlight)
      */}
      <body className={`${font.className} bg-[#fcfcfd] text-slate-900 antialiased selection:bg-blue-100 overflow-x-hidden`}>
        
        <AuthProvider>
            {/* Navigation Hub */}
            <Navbar />
            
            <main className="min-h-screen relative">
               
               {/* NEW BACKGROUND STRATEGY: 
                   Flashy glows ki jagah ek professional subtle grid aur soft blue hue.
               */}
               <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                  {/* Subtle Blueprint Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
                  
                  {/* Soft Professional Glow (Not Gaming) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/[0.03] blur-[150px] rounded-full" />
               </div>
               
               {/* Content Wrapper */}
               <div className="relative z-10">
                {children}
               </div>

            </main>

            {/* Global Footer */}
            <Footer />

        </AuthProvider>
      </body>
    </html>
  );
}