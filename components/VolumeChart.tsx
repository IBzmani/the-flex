import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DailyStat } from '../types';

interface VolumeChartProps {
  data: DailyStat[];
}

const VolumeChart: React.FC<VolumeChartProps> = ({ data }) => {
  return (
    <div className="xl:col-span-3 bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Review Volume & Rating Trends</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Daily review volume over the last 14 days.</p>
        </div>
        <button className="text-primary text-sm font-semibold hover:underline">View Full Report</button>
      </div>
      
      <div className="flex-1 w-full h-[300px] min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#94a3b8' }} 
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as DailyStat;
                  return (
                    <div className="bg-slate-900 text-white text-xs py-1 px-2 rounded shadow-xl">
                      <p className="font-semibold">{data.rating} Rating ({data.reviews} Reviews)</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="reviews" 
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            >
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#1D3B39" 
                  className="opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeChart;