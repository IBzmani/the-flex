import React from 'react';
import { KPIStats } from '../types';

interface StatsOverviewProps {
  stats: KPIStats[];
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group"
        >
          <div className="flex justify-between items-start z-10">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
            <div className={`size-10 rounded-full flex items-center justify-center ${stat.colorClass} ${stat.iconColorClass}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-auto z-10">
            <span className={`text-xs font-bold flex items-center px-1.5 py-0.5 rounded ${stat.isPositive ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30' : 'text-red-600 bg-red-100'}`}>
              <span className="material-symbols-outlined text-[14px]">
                {stat.isPositive ? 'trending_up' : 'trending_down'}
              </span>
              {stat.change}
            </span>
            <span className="text-xs text-slate-400 ml-1">{stat.period}</span>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;