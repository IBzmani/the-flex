import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reviewsRouter from './routes/reviews.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/reviews', reviewsRouter);

// Serve static files in production
const distPath = new URL('../dist', import.meta.url).pathname;
app.use(express.static(distPath));

// Catch-all for client-side routing
app.get('(.*)', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
