// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { Loader2 } from "lucide-react";

// export default function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) {
//   const { user, isLoading, token } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading) {
//       if (!token) {
//         router.push("/auth/login");
//       } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
//         router.push("/"); // Unauthorized redirect
//       }
//     }
//   }, [token, user, isLoading, router, allowedRoles]);

//   if (isLoading) return (
//     <div className="h-screen w-full flex items-center justify-center bg-black">
//       <Loader2 className="animate-spin text-cyan-500" size={40} />
//     </div>
//   );

//   return token ? <>{children}</> : null;
// }










"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2, ShieldCheck } from "lucide-react";

export default function ProtectedRoute({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode, 
  allowedRoles?: string[] 
}) {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!token) {
        // Simple: No login? Go to login page.
        router.push("/auth/login");
      } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        // Simple: Not allowed? Go to home.
        router.push("/");
      }
    }
  }, [token, user, isLoading, router, allowedRoles]);

  // SOBER LOADING STATE
  if (isLoading) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fcfcfd] font-sans">
      <div className="relative flex items-center justify-center">
        {/* Institutional Loader */}
        <Loader2 className="animate-spin text-blue-600 opacity-20" size={80} strokeWidth={1} />
        <div className="absolute flex flex-col items-center gap-2">
           <ShieldCheck className="text-blue-600" size={32} />
        </div>
      </div>
      <div className="mt-8 space-y-2 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">
          Verifying Identity Node
        </p>
        <div className="h-1 w-32 bg-slate-100 rounded-full mx-auto overflow-hidden">
           <div className="h-full bg-blue-600 w-1/2 animate-shimmer" style={{
             backgroundSize: '200% 100%',
             backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
           }} />
        </div>
      </div>
    </div>
  );

  return token ? <>{children}</> : null;
}