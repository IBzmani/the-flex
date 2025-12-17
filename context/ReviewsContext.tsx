import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Review } from '../types';
import { fetchReviews } from '../services/api';

interface ReviewsContextType {
    reviews: Review[];
    loading: boolean;
    error: string | null;
    togglePublish: (id: string) => void;
    refreshReviews: () => Promise<void>;

    // Filtering
    filters: {
        period: string;
        property: string;
        channel: string;
        rating: string;
    };
    setFilter: (key: keyof ReviewsContextType['filters'], value: string) => void;
    filteredReviews: Review[];
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        period: 'Last 30 Days',
        property: 'All',
        channel: 'All',
        rating: 'All'
    });

    const loadReviews = async () => {
        setLoading(true);
        try {
            const data = await fetchReviews();
            setReviews(data);
            setError(null);
        } catch (err) {
            setError('Failed to load reviews');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadReviews();
    }, []);

    const togglePublish = (id: string) => {
        setReviews(prev => prev.map(review =>
            review.id === id ? { ...review, isPublished: !review.isPublished } : review
        ));
        // In a real app, we would make an API call here to persist the change
    };

    const setFilter = (key: keyof typeof filters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    // Derived state for filtered reviews
    const filteredReviews = reviews.filter(review => {
        // Basic filtering logic
        if (filters.channel !== 'All' && review.channel !== filters.channel) return false;

        // Rating filter (simplified)
        if (filters.rating !== 'All') {
            if (filters.rating === '5 Stars' && review.rating < 5) return false;
            if (filters.rating === '4+ Stars' && review.rating < 4) return false;
            if (filters.rating === 'Under 4 Stars' && review.rating >= 4) return false;
        }

        // Property matching (partial)
        if (filters.property !== 'All' && !review.propertyName.includes(filters.property)) return false;

        return true;
    });

    return (
        <ReviewsContext.Provider value={{
            reviews,
            loading,
            error,
            togglePublish,
            refreshReviews: loadReviews,
            filters,
            setFilter,
            filteredReviews
        }}>
            {children}
        </ReviewsContext.Provider>
    );
};

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (context === undefined) {
        throw new Error('useReviews must be used within a ReviewsProvider');
    }
    return context;
};
