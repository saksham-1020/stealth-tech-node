// // lib/utils.ts
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// // Tailwind classes merge karne ke liye (v4 optimization)
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export const fetcher = async (url: string, options: RequestInit = {}) => {
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   const defaultHeaders = {
//     "Content-Type": "application/json",
//     ...(token && { Authorization: `Bearer ${token}` }),
//   };

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}${url}`, {
//       ...options,
//       headers: {
//         ...defaultHeaders,
//         ...options.headers,
//       },
//     });

//     if (response.status === 401) {
//       // Unauthorized -> Logout logic
//       if (typeof window !== "undefined") {
//         localStorage.clear();
//         window.location.href = "/auth/login";
//       }
//     }

//     const data = await response.json();
//     if (!response.ok) throw new Error(data.message || "Uplink Failed");
//     return data;
//   } catch (error: any) {
//     console.error("TELEMETRY_ERROR:", error.message);
//     throw error;
//   }
// };







import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONFIG } from "./config";

// Tailwind classes merge (v4 optimization)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const token = typeof window !== "undefined" ? localStorage.getItem(CONFIG.TOKEN_KEY) : null;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  try {
    const response = await fetch(`${CONFIG.API_URL}${url}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    // Simple Session Expiry Handling
    if (response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.clear();
        window.location.href = "/auth/login";
      }
    }

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Uplink Failed");
    return data;
  } catch (error: any) {
    console.error("SYSTEM_FETCH_ERROR:", error.message);
    throw error;
  }
};