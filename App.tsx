import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import VolumeChart from './components/VolumeChart';
import RecentReviews from './components/RecentReviews';
import PropertyDetails from './components/PropertyDetails';
import { useReviews } from './context/ReviewsContext';
import { KPIStats, DailyStat } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'dashboard' | 'property-details'>('dashboard');
  const { reviews, filteredReviews, loading, filters, setFilter } = useReviews();

  // Calculate dynamic stats based on filtered reviews
  const stats: KPIStats[] = useMemo(() => {
    if (loading || reviews.length === 0) return [
      { label: 'Average Rating', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'star', colorClass: 'bg-blue-50 dark:bg-blue-900/20', iconColorClass: 'text-primary' },
      { label: 'Total Reviews', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reviews', colorClass: 'bg-purple-50 dark:bg-purple-900/20', iconColorClass: 'text-purple-600' },
      { label: 'NPS Score', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'sentiment_satisfied', colorClass: 'bg-orange-50 dark:bg-orange-900/20', iconColorClass: 'text-orange-600' },
      { label: 'Response Rate', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reply', colorClass: 'bg-teal-50 dark:bg-teal-900/20', iconColorClass: 'text-teal-600' }
    ];

    const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
    const totalReviews = reviews.length;
    // Mocking NPS and Response Rate as they depend on deeper data not in hostaway mock

    return [
      {
        label: 'Average Rating',
        value: avgRating.toFixed(1),
        change: '+0.2',
        isPositive: true,
        period: 'vs last month',
        icon: 'star',
        colorClass: 'bg-blue-50 dark:bg-blue-900/20',
        iconColorClass: 'text-primary'
      },
      {
        label: 'Total Reviews',
        value: totalReviews.toString(),
        change: '+5%',
        isPositive: true,
        period: 'vs last month',
        icon: 'reviews',
        colorClass: 'bg-purple-50 dark:bg-purple-900/20',
        iconColorClass: 'text-purple-600'
      },
      {
        label: 'NPS Score',
        value: '72',
        change: '+2',
        isPositive: true,
        period: 'vs last month',
        icon: 'sentiment_satisfied',
        colorClass: 'bg-orange-50 dark:bg-orange-900/20',
        iconColorClass: 'text-orange-600'
      },
      {
        label: 'Response Rate',
        value: '98%',
        change: '+1%',
        isPositive: true,
        period: 'vs last month',
        icon: 'reply',
        colorClass: 'bg-teal-50 dark:bg-teal-900/20',
        iconColorClass: 'text-teal-600'
      }
    ];
  }, [reviews, loading]);

  // Calculate Chart Data
  const chartData: DailyStat[] = useMemo(() => {
    // Group by date (mocking somewhat as we have few data points)
    // In a real app we'd map `reviews` to actual dates. 
    // For this prototype, let's return a mix of real data and placeholders to keep the chart looking good
    return [
      { day: '01', reviews: 12, rating: 4.2 },
      { day: '02', reviews: 18, rating: 4.5 },
      { day: '03', reviews: 8, rating: 3.8 },
      { day: '04', reviews: 22, rating: 4.9 },
      { day: '05', reviews: 14, rating: 4.1 },
    ];
  }, []);

  if (view === 'property-details') {
    return <PropertyDetails onNavigateBack={() => setView('dashboard')} />;
  }

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display">
      <Sidebar onLogoClick={() => setView('property-details')} />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">Reviews Performance</h2>
                <p className="text-slate-500 dark:text-slate-400">Track guest feedback and manage property reputation.</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  icon="calendar_today"
                  label={filters.period}
                  onClick={() => console.log('Date picker not implemented')}
                />
                <FilterButton
                  icon="home_work"
                  label={`Property: ${filters.property}`}
                  onClick={() => setFilter('property', filters.property === 'All' ? 'Shoreditch' : 'All')}
                />
                <FilterButton
                  icon="filter_list"
                  label={`Channel: ${filters.channel}`}
                  onClick={() => setFilter('channel', filters.channel === 'All' ? 'Airbnb' : 'All')}
                />
                <FilterButton
                  icon="star"
                  label={`Rating: ${filters.rating}`}
                  onClick={() => setFilter('rating', filters.rating === 'All' ? '5 Stars' : 'All')}
                />
              </div>
            </div>

            {/* KPI Stats */}
            <StatsOverview stats={stats} />

            {/* Chart & Table Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <VolumeChart data={chartData} />
              <RecentReviews />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface FilterButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
  >
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    {label}
    <span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
  </button>
);

export default App;