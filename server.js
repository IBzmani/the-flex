
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock Data based on the provided example
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
  // Adding more mock data to better test the dashboard
  {
    "id": 7454,
    "type": "host-to-guest",
    "status": "new",
    "rating": null,
    "publicReview": "Great guest, very clean and communicative. Highly recommended!",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 9 },
      { "category": "communication", "rating": 10 },
      { "category": "respect_house_rules", "rating": 9 }
    ],
    "submittedAt": "2023-10-05 14:30:22",
    "guestName": "Alice Morris",
    "listingName": "Modern Studio in City Center"
  },
  {
    "id": 7455,
    "type": "host-to-guest",
    "status": "published",
    "rating": null,
    "publicReview": "Left the place in a bit of a mess, but was otherwise polite.",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 4 },
      { "category": "communication", "rating": 8 },
      { "category": "respect_house_rules", "rating": 6 }
    ],
    "submittedAt": "2023-09-12 09:15:00",
    "guestName": "John Doe",
    "listingName": "Cozy Apartment near Park"
  },
  {
    "id": 7456,
    "type": "host-to-guest",
    "status": "new",
    "rating": null,
    "publicReview": "Fantastic stay, would love to host again.",
    "reviewCategory": [
      { "category": "cleanliness", "rating": 10 },
      { "category": "communication", "rating": 10 },
      { "category": "respect_house_rules", "rating": 10 }
    ],
    "submittedAt": "2023-11-01 10:00:00",
    "guestName": "Emily Clark",
    "listingName": "2B N1 A - 29 Shoreditch Heights"
  }
];

app.get('/api/reviews/hostaway', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json({
      status: "success",
      result: REVIEWS
    });
  }, 500);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
