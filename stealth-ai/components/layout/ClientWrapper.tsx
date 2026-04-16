// "use client";

// import { usePathname } from "next/navigation";
// import { Header } from "./Header";
// import AIAssistant from "../common/AIAssistant";
// import { AuthProvider } from "@/context/AuthContext";

// export default function ClientWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   const isRestrictedRoute = 
//     pathname.startsWith("/auth") || 
//     pathname.startsWith("/dashboard") || 
//     pathname.startsWith("/journal") || 
//     pathname.startsWith("/conference");

//   return (
//     <AuthProvider>
//         {!isRestrictedRoute && <Header />}
//         <main className="min-h-screen">
//           {children}
//         </main>
//         {!isRestrictedRoute && <AIAssistant />}
//     </AuthProvider>
//   );
// }



"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import AIAssistant from "../common/AIAssistant";
import { AuthProvider } from "@/context/AuthContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Dashboard aur Auth pages par hum clean interface rakhte hain
  const isRestrictedRoute = 
    pathname.startsWith("/auth") || 
    pathname.startsWith("/dashboard");

  return (
    <AuthProvider>
        {/* Sober Header: Only on main site */}
        {!isRestrictedRoute && <Header />}
        
        <main className="min-h-screen bg-[#fcfcfd]">
          {children}
        </main>

        {/* AI Assistant: Only on main site, Dashboard has its own sidebar tools */}
        {!isRestrictedRoute && <AIAssistant />}
    </AuthProvider>
  );
}