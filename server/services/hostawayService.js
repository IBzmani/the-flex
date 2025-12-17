import { normalizeReview } from '../utils/normalizer.js';

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

export const fetchReviews = async () => {
  // Simulate network delay for realism
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedReviews = REVIEWS.map(normalizeReview);
      resolve(normalizedReviews);
    }, 400);
  });
};
