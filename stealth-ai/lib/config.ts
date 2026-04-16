// // lib/config.ts

// export const COMPANY = {
//   name: "STEALTH AI",
//   fullName: "STEALTH AI Technologies India",
//   tagline: "Sovereign Intelligence Infrastructure",
//   email: "safdar.cse@gmail.com",
// };

// export const CONFIG = {
//   API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
//   TOKEN_KEY: "stealth_auth_node",
//   ROLE_KEY: "stealth_clearance_level",
//   SYSTEM_VERSION: "v1.0.4-Alpha",
// };

// // Console Branding
// if (typeof window !== "undefined") {
//   console.log(
//     `%c STEALTH AI OS %c ${CONFIG.SYSTEM_VERSION} %c`,
//     "background:#fff; color:#000; font-weight:900; padding:4px 8px; border-radius:4px 0 0 4px;",
//     "background:#06b6d4; color:#fff; font-weight:900; padding:4px 8px; border-radius:0 4px 4px 0;",
//     "background:transparent"
//   );
// }




export const COMPANY = {
  name: "STEALTH AI",
  fullName: "StealthAI Technologies India",
  tagline: "Industrial Software & AI Research Hub", // Sober Tagline
  email: "safdar.cse@gmail.com",
};

export const CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  TOKEN_KEY: "stealth_token",
  ROLE_KEY: "user_role",
  NAME_KEY: "user_name",
  SYSTEM_VERSION: "v4.5.2-Institutional",
};

// Console Branding (Minimalist & Professional)
if (typeof window !== "undefined") {
  console.log(
    `%c STEALTHAI %c ${CONFIG.SYSTEM_VERSION} `,
    "background:#0f172a; color:#fff; font-weight:900; padding:4px 12px; border-radius:4px 0 0 4px;",
    "background:#2563eb; color:#fff; font-weight:900; padding:4px 12px; border-radius:0 4px 4px 0;"
  );
}