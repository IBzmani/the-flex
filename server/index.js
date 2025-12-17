import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import reviewsRouter from './routes/reviews.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define the specific URLs allowed to access API
const allowedOrigins = [
  'https://the-flex-s6to.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

// Mount Routes
app.use('/api/reviews', reviewsRouter);

// Serve static files in production
const distPath = new URL('../dist', import.meta.url).pathname;
app.use(express.static(distPath));

// Catch-all for client-side routing
app.get(/^(.*)$/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
