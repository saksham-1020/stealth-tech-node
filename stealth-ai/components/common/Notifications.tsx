// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { Bell, X, CheckCircle2, AlertCircle, Info } from "lucide-react";
// import { useState, useEffect } from "react";

// export const NotificationToast = ({ message, type = "info", onClose }: any) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, x: 50, scale: 0.9 }}
//       animate={{ opacity: 1, x: 0, scale: 1 }}
//       exit={{ opacity: 0, x: 20, scale: 0.95 }}
//       className={`fixed top-24 right-6 z-[150] w-80 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-start gap-4 ${
//         type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
//         type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
//         'bg-zinc-900/80 border-white/10 text-white'
//       }`}
//     >
//       <div className="mt-1">
//         {type === 'success' ? <CheckCircle2 size={18} /> : 
//          type === 'error' ? <AlertCircle size={18} /> : <Info size={18} />}
//       </div>
//       <div className="flex-1">
//         <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">System Alert</p>
//         <p className="text-xs font-bold leading-relaxed">{message}</p>
//       </div>
//       <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
//         <X size={16} />
//       </button>
//     </motion.div>
//   );
// };







"use client";
import { motion } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

export const NotificationToast = ({ message, type = "info", onClose }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className={`fixed bottom-8 right-8 z-[200] w-80 p-5 rounded-3xl border shadow-2xl flex items-start gap-4 bg-white ${
        type === 'success' ? 'border-emerald-100' : type === 'error' ? 'border-red-100' : 'border-slate-100'
      }`}
    >
      <div className={type === 'success' ? 'text-emerald-500' : type === 'error' ? 'text-red-500' : 'text-blue-500'}>
        {type === 'success' ? <CheckCircle2 size={20} /> : type === 'error' ? <AlertCircle size={20} /> : <Info size={20} />}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 italic">System Notification</p>
        <p className="text-xs font-bold text-slate-700 leading-tight">{message}</p>
      </div>
      <button onClick={onClose} className="text-slate-300 hover:text-slate-900 transition-colors"><X size={16} /></button>
    </motion.div>
  );
};