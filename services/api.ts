import { Review } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

export const fetchReviews = async (): Promise<Review[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/reviews/hostaway`);
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();

        // Data is now normalized by the backend
        return data.result;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
};
