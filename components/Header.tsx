import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500 dark:text-slate-400">Dashboard</span>
        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
        <span className="font-semibold text-slate-900 dark:text-white">Reviews Overview</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            search
          </span>
          <input
            className="h-10 pl-10 pr-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-none text-sm w-64 focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none"
            placeholder="Search reviews..."
            type="text"
          />
        </div>
        <button className="size-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 relative transition-colors">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <button className="h-10 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export Report
        </button>
      </div>
    </header>
  );
};

export default Header;