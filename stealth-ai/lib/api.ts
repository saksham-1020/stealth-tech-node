// // lib/api.ts
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

// export const api = {
//   // GET Request Wrapper
//   async get(endpoint: string, token?: string) {
//     const res = await fetch(`${BASE_URL}${endpoint}`, {
//       method: "GET",
//       headers: {
//         "Authorization": token ? `Bearer ${token}` : "",
//         "Content-Type": "application/json",
//       },
//     });
//     return res.json();
//   },

//   // POST Request Wrapper
//   async post(endpoint: string, body: any, token?: string) {
//     const res = await fetch(`${BASE_URL}${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Authorization": token ? `Bearer ${token}` : "",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   },
// };










import { CONFIG } from "./config";

// Base URL configuration from our central config
const BASE_URL = CONFIG.API_URL;

export const api = {
  /**
   * Helper to get auth headers automatically
   */
  getHeaders(token?: string) {
    // Agar token pass nahi kiya, toh localStorage se khud uthao
    const authToken = token || (typeof window !== "undefined" ? localStorage.getItem(CONFIG.TOKEN_KEY) : null);
    
    return {
      "Authorization": authToken ? `Bearer ${authToken}` : "",
      "Content-Type": "application/json",
    };
  },

  /**
   * GET Request Wrapper
   * Usage: const data = await api.get("/api/v1/projects");
   */
  async get(endpoint: string, token?: string) {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: this.getHeaders(token),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || data.message || "API_GET_ERROR");
      }

      return data;
    } catch (error: any) {
      console.error(`[API GET] ${endpoint}:`, error.message);
      return { error: true, message: error.message };
    }
  },

  /**
   * POST Request Wrapper
   * Usage: await api.post("/api/v1/auth/login", { email, password });
   */
  async post(endpoint: string, body: any, token?: string) {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(body),
      });

      const data = await res.json();

      // Handling Unauthorized or Token Expired
      if (res.status === 401 && typeof window !== "undefined") {
        localStorage.clear();
        window.location.href = "/auth/login";
        return;
      }

      if (!res.ok) {
        throw new Error(data.detail || data.message || "API_POST_ERROR");
      }

      return data;
    } catch (error: any) {
      console.error(`[API POST] ${endpoint}:`, error.message);
      return { error: true, message: error.message };
    }
  },

  /**
   * DELETE Request Wrapper (Added for Project Management)
   */
  async delete(endpoint: string, token?: string) {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: this.getHeaders(token),
      });
      return await res.json();
    } catch (error: any) {
      console.error(`[API DELETE] ${endpoint}:`, error.message);
      throw error;
    }
  }
};