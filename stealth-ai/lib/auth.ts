// import { getDashboardRoute, UserRole } from "./permissions";

// export interface UserSession {
//   id: string;
//   email: string;
//   role: UserRole;
//   name: string;
// }

// // Token decode karke user info nikalne ke liye (Example logic)
// export function getSessionData(): UserSession | null {
//   if (typeof window === "undefined") return null;
  
//   const token = localStorage.getItem("stealth_token");
//   if (!token) return null;

//   try {
//     // Ideally use 'jwt-decode' library here
//     const payload = JSON.parse(atob(token.split(".")[1])); 
//     return {
//       id: payload.sub,
//       email: payload.email,
//       role: payload.role as UserRole,
//       name: payload.name,
//     };
//   } catch (e) {
//     return null;
//   }
// }










import { UserRole } from "./permissions";
import { CONFIG } from "./config";

export interface UserSession {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export function getSessionData(): UserSession | null {
  if (typeof window === "undefined") return null;
  
  const token = localStorage.getItem(CONFIG.TOKEN_KEY);
  if (!token) return null;

  try {
    // Decoding JWT Payload safely
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(window.atob(base64)); 
    
    return {
      id: payload.sub || payload.id,
      email: payload.email,
      role: payload.role as UserRole,
      name: payload.name || "Agent",
    };
  } catch (e) {
    console.error("SESSION_DECODE_ERROR");
    return null;
  }
}