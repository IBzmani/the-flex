import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsOverview from './StatsOverview';
import VolumeChart from './VolumeChart';
import RecentReviews from './RecentReviews';
import { useReviews } from '../context/ReviewsContext';
import { KPIStats, DailyStat } from '../types';
import DropdownMenu from './DropdownMenu';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { reviews, filteredReviews, loading, filters, setFilter } = useReviews();

    // Calculate dynamic stats based on filtered reviews
    const stats: KPIStats[] = useMemo(() => {
        const sourceData = filteredReviews.length > 0 ? filteredReviews : (loading ? [] : []);

        if (loading) return [
            { label: 'Average Rating', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'star', colorClass: 'bg-blue-50 dark:bg-blue-900/20', iconColorClass: 'text-primary' },
            { label: 'Total Reviews', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reviews', colorClass: 'bg-purple-50 dark:bg-purple-900/20', iconColorClass: 'text-purple-600' },
            { label: 'NPS Score', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'sentiment_satisfied', colorClass: 'bg-orange-50 dark:bg-orange-900/20', iconColorClass: 'text-orange-600' },
            { label: 'Response Rate', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reply', colorClass: 'bg-teal-50 dark:bg-teal-900/20', iconColorClass: 'text-teal-600' }
        ];

        // Handle case where filters result in no reviews
        if (sourceData.length === 0 && !loading && reviews.length > 0) {
            return [
                { label: 'Average Rating', value: '0.0', change: '-', isPositive: true, period: 'vs last month', icon: 'star', colorClass: 'bg-blue-50 dark:bg-blue-900/20', iconColorClass: 'text-primary' },
                { label: 'Total Reviews', value: '0', change: '-', isPositive: true, period: 'vs last month', icon: 'reviews', colorClass: 'bg-purple-50 dark:bg-purple-900/20', iconColorClass: 'text-purple-600' },
                { label: 'NPS Score', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'sentiment_satisfied', colorClass: 'bg-orange-50 dark:bg-orange-900/20', iconColorClass: 'text-orange-600' },
                { label: 'Response Rate', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reply', colorClass: 'bg-teal-50 dark:bg-teal-900/20', iconColorClass: 'text-teal-600' }
            ];
        } else if (sourceData.length === 0) {
            // Initial load or truly no data
            return [
                { label: 'Average Rating', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'star', colorClass: 'bg-blue-50 dark:bg-blue-900/20', iconColorClass: 'text-primary' },
                { label: 'Total Reviews', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reviews', colorClass: 'bg-purple-50 dark:bg-purple-900/20', iconColorClass: 'text-purple-600' },
                { label: 'NPS Score', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'sentiment_satisfied', colorClass: 'bg-orange-50 dark:bg-orange-900/20', iconColorClass: 'text-orange-600' },
                { label: 'Response Rate', value: '-', change: '-', isPositive: true, period: 'vs last month', icon: 'reply', colorClass: 'bg-teal-50 dark:bg-teal-900/20', iconColorClass: 'text-teal-600' }
            ];
        }

        const avgRating = sourceData.reduce((acc, r) => acc + r.rating, 0) / sourceData.length;
        const totalReviews = sourceData.length;
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
    }, [filteredReviews, reviews, loading]);

    // Calculate Chart Data
    const chartData: DailyStat[] = useMemo(() => {
        return [
            { day: '01', reviews: 12, rating: 4.2 },
            { day: '02', reviews: 18, rating: 4.5 },
            { day: '03', reviews: 8, rating: 3.8 },
            { day: '04', reviews: 22, rating: 4.9 },
            { day: '05', reviews: 14, rating: 4.1 },
        ];
    }, []);

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display">
            <Sidebar onLogoClick={() => navigate('/property')} />
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
                                <DropdownMenu
                                    icon="calendar_today"
                                    label="Period"
                                    value={filters.period}
                                    options={['Last 30 Days', 'Last 3 Months', 'Last 6 Months', 'Year to Date']}
                                    onSelect={(val) => console.log('Period selected:', val)}
                                />
                                <DropdownMenu
                                    icon="home_work"
                                    label="Property"
                                    value={filters.property}
                                    options={['All', 'Shoreditch', 'City Center', 'Park']}
                                    onSelect={(val) => setFilter('property', val)}
                                />
                                <DropdownMenu
                                    icon="filter_list"
                                    label="Channel"
                                    value={filters.channel}
                                    options={['All', 'Airbnb', 'Booking', 'Direct']}
                                    onSelect={(val) => setFilter('channel', val)}
                                />
                                <DropdownMenu
                                    icon="star"
                                    label="Rating"
                                    value={filters.rating}
                                    options={['All', '5 Stars', '4+ Stars', 'Under 4 Stars']}
                                    onSelect={(val) => setFilter('rating', val)}
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

export default Dashboard;

