// interface StatusBadgeProps {
//   status: "active" | "pending" | "suspended" | "completed";
// }

// export function StatusBadge({ status }: StatusBadgeProps) {
//   const styles = {
//     active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
//     pending: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
//     suspended: "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
//     completed: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
//   };

//   return (
//     <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest ${styles[status]}`}>
//       <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${
//         status === 'active' ? 'bg-emerald-500' : 
//         status === 'pending' ? 'bg-amber-500' : 
//         status === 'suspended' ? 'bg-red-500' : 'bg-cyan-500'
//       }`} />
//       {status}
//     </div>
//   );
// }






interface StatusBadgeProps {
  status: "active" | "pending" | "suspended" | "completed";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-100",
    pending: "bg-amber-50 text-amber-700 border-amber-100",
    suspended: "bg-red-50 text-red-700 border-red-100",
    completed: "bg-blue-50 text-blue-700 border-blue-100",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest italic ${styles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-current opacity-50'}`} />
      {status}
    </div>
  );
}