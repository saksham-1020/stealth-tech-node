// "use client";

// import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { getDashboardRoute, UserRole } from "@/lib/permissions";

// interface User {
//   role: UserRole | "";
//   email?: string;
//   name?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   login: (token: string, role: UserRole) => void;
//   logout: () => void;
//   isLoading: boolean;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   // Optimized check for authentication
//   const isAuthenticated = useMemo(() => !!token, [token]);

//   useEffect(() => {
//     const initializeAuth = () => {
//       try {
//         const savedToken = localStorage.getItem("token");
//         const savedRole = localStorage.getItem("role") as UserRole;

//         if (savedToken && savedRole) {
//           setToken(savedToken);
//           setUser({ role: savedRole });
//         }
//       } catch (error) {
//         console.error("AUTH_INIT_ERROR:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     initializeAuth();
//   }, []);

//   const login = (newToken: string, role: UserRole) => {
//     localStorage.setItem("token", newToken);
//     localStorage.setItem("role", role);
//     setToken(newToken);
//     setUser({ role });

//     // Role ke hisaab se sahi dashboard par bhejo
//     const targetRoute = getDashboardRoute(role);
//     router.push(targetRoute);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     setToken(null);
//     setUser(null);
//     router.push("/auth/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, isLoading, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };






"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getDashboardRoute, UserRole } from "@/lib/permissions";

interface User {
  role: UserRole | "";
  email?: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, role: UserRole, name?: string) => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Simple Check: Token hai ya nahi?
  const isAuthenticated = useMemo(() => !!token, [token]);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        // Checking if we are on the client side
        if (typeof window !== "undefined") {
          const savedToken = localStorage.getItem("stealth_token"); // Updated Key
          const savedRole = localStorage.getItem("user_role") as UserRole;
          const savedName = localStorage.getItem("user_name");

          if (savedToken && savedRole) {
            setToken(savedToken);
            setUser({ 
              role: savedRole, 
              name: savedName || "User" 
            });
          }
        }
      } catch (error) {
        console.error("INSTITUTIONAL_AUTH_ERROR:", error);
      } finally {
        // Auth check khatam, ab app dikhao
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (newToken: string, role: UserRole, name: string = "Agent") => {
    // Professional storage keys
    localStorage.setItem("stealth_token", newToken);
    localStorage.setItem("user_role", role);
    localStorage.setItem("user_name", name);
    
    setToken(newToken);
    setUser({ role, name });

    // Simple: Go to the right dashboard
    const targetRoute = getDashboardRoute(role);
    window.location.href = targetRoute; // Using window.location for a clean state reset
  };

  const logout = () => {
    localStorage.removeItem("stealth_token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_name");
    
    setToken(null);
    setUser(null);
    
    // Redirect to login
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};