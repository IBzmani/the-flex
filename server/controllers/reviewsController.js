import { fetchReviews } from '../services/hostawayService.js';

export const getReviews = async (req, res) => {
  try {
    const reviews = await fetchReviews();
    console.log(`[GET] /api/reviews/hostaway - Returning ${reviews.length} reviews`);
    
    res.json({
      status: "success",
      result: reviews
    });
  } catch (error) {
    console.error('[GET] /api/reviews/hostaway - Error:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch reviews"
    });
  }
};
