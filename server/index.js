import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock Data sourced from requirements
const REVIEWS = [
  {
    "id": 7453,
    "type": "host-to-guest",
    "status": "published",
    "rating": null,
    "publicReview": "Shane and family are wonderful! Would definitely host again :)",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 10 },
      { "category": "communication", "rating": 10 },
      { "category": "respect_house_rules", "rating": 10 }
    ],
    "submittedAt": "2020-08-21 22:45:14",
    "guestName": "Shane Finkelstein",
    "listingName": "2B N1 A - 29 Shoreditch Heights"
  },
  {
    "id": 7454,
    "type": "host-to-guest",
    "status": "new",
    "rating": 9,
    "publicReview": "Great location and very clean. The host was responsive.",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 10 },
      { "category": "communication", "rating": 9 },
      { "category": "respect_house_rules", "rating": 8 }
    ],
    "submittedAt": "2023-11-15 10:30:00",
    "guestName": "Alice Morris",
    "listingName": "Modern Studio in City Center"
  },
  {
    "id": 7455,
    "type": "host-to-guest",
    "status": "published",
    "rating": 4,
    "publicReview": "A bit noisy at night, but otherwise okay.",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 8 },
      { "category": "communication", "rating": 7 },
      { "category": "respect_house_rules", "rating": 9 }
    ],
    "submittedAt": "2023-10-20 14:15:00",
    "guestName": "John Doe",
    "listingName": "Cozy Apartment near Park"
  },
  {
    "id": 7456,
    "type": "host-to-guest",
    "status": "new",
    "rating": 8,
    "publicReview": "Lovely place. We enjoyed our stay.",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 9 },
      { "category": "communication", "rating": 8 },
      { "category": "respect_house_rules", "rating": 9 }
    ],
    "submittedAt": "2023-11-01 09:00:00",
    "guestName": "Emily Clark",
    "listingName": "2B N1 A - 29 Shoreditch Heights"
  }
];

// Helper functions for normalization
const calculateAverageRating = (categories) => {
  if (!categories || categories.length === 0) return 0;
  // Hostaway is 1-10, we want 1-5 scale
  const sum = categories.reduce((acc, cat) => acc + cat.rating, 0);
  return Number((sum / categories.length / 2).toFixed(1)); 
};

const generateTags = (categories) => {
  if (!categories) return [];
  return categories.map(cat => ({
    label: cat.category.replace(/_/g, ' '), 
    type: cat.rating >= 8 ? 'positive' : cat.rating <= 4 ? 'negative' : 'neutral'
  }));
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

app.get('/api/reviews/hostaway', (req, res) => {
  // Simulate network delay for realism
  setTimeout(() => {
    console.log(`[GET] /api/reviews/hostaway - Returning ${REVIEWS.length} reviews`);
    
    // Normalize data specific to our frontend needs
    const normalizedReviews = REVIEWS.map(item => ({
      id: item.id.toString(),
      guestName: item.guestName,
      // Use consistent placeholders based on ID for demo stability
      guestImage: `https://i.pravatar.cc/150?u=${item.id}`, 
      propertyName: item.listingName,
      date: formatDate(item.submittedAt),
      rating: item.rating ? item.rating / 2 : calculateAverageRating(item.reviewCategory),
      comment: item.publicReview,
      tags: generateTags(item.reviewCategory),
      channel: 'Direct', // Default as API doesn't provide channel
      isPublished: item.status === 'published'
    }));

    res.json({
      status: "success",
      result: normalizedReviews
    });
  }, 400); 
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
