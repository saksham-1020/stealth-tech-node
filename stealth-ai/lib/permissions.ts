// export type UserRole = "student" | "admin" | "reviewer" | "conference_admin";

// export const PERMISSIONS = {
//   CAN_REVIEW_PAPERS: ["admin", "reviewer"],
//   CAN_MANAGE_USERS: ["admin"],
//   CAN_SUBMIT_PROJECTS: ["student"],
//   CAN_MANAGE_CONFERENCE: ["admin", "conference_admin"],
//   CAN_ACCESS_ANALYTICS: ["admin"],
// };

// export function hasPermission(role: UserRole, permission: keyof typeof PERMISSIONS) {
//   return PERMISSIONS[permission].includes(role);
// }

// export function getDashboardRoute(role: UserRole) {
//   const routes: Record<UserRole, string> = {
//     admin: "/dashboard/admin",
//     student: "/dashboard/student",
//     reviewer: "/journal/dashboard/reviewer",
//     conference_admin: "/conference/dashboard/admin",
//   };
//   return routes[role] || "/";
// }






export type UserRole = "student" | "admin" | "reviewer" | "conference_admin";

export const PERMISSIONS = {
  CAN_REVIEW_PAPERS: ["admin", "reviewer"],
  CAN_MANAGE_USERS: ["admin"],
  CAN_SUBMIT_PROJECTS: ["student"],
  CAN_MANAGE_CONFERENCE: ["admin", "conference_admin"],
  CAN_ACCESS_ANALYTICS: ["admin"],
};

export function hasPermission(role: UserRole, permission: keyof typeof PERMISSIONS) {
  return PERMISSIONS[permission].includes(role);
}

export function getDashboardRoute(role: UserRole) {
  const routes: Record<UserRole, string> = {
    admin: "/dashboard/admin",
    student: "/dashboard/student",
    reviewer: "/dashboard/reviewer", // Simplified Path
    conference_admin: "/dashboard/conference", // Simplified Path
  };
  return routes[role] || "/";
}