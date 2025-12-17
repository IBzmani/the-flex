import express from 'express';
import cors from 'cors';
import reviewsRouter from './routes/reviews.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/reviews', reviewsRouter);

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
