// "use client";

// import { motion } from "framer-motion";
// import { Database, Plus, RefreshCcw } from "lucide-react";

// interface EmptyStateProps {
//   title: string;
//   description: string;
//   actionLabel?: string;
//   onAction?: () => void;
// }

// export const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="flex flex-col items-center justify-center p-20 rounded-[3rem] bg-zinc-950/50 border border-white/5 border-dashed text-center"
//     >
//       <div className="h-20 w-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 text-zinc-700">
//         <Database size={40} strokeWidth={1} />
//       </div>
      
//       <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mb-2">{title}</h3>
//       <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest max-w-xs leading-relaxed mb-10">
//         {description}
//       </p>

//       {actionLabel && (
//         <button 
//           onClick={onAction}
//           className="flex items-center gap-3 px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-500 transition-all group"
//         >
//           <Plus size={16} /> {actionLabel}
//         </button>
//       )}
//     </motion.div>
//   );
// };










import { Database, Plus } from "lucide-react";

export const EmptyState = ({ title, description, actionLabel, onAction }: any) => {
  return (
    <div className="flex flex-col items-center justify-center p-20 rounded-[3.5rem] bg-slate-50 border-2 border-dashed border-slate-200 text-center">
      <div className="h-20 w-20 bg-white rounded-[2rem] flex items-center justify-center mb-8 text-slate-300 shadow-sm">
        <Database size={32} />
      </div>
      <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest max-w-xs mb-10 italic">{description}</p>
      {actionLabel && (
        <button onClick={onAction} className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
          <Plus size={16} className="inline mr-2" /> {actionLabel}
        </button>
      )}
    </div>
  );
};