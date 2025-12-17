import express from 'express';
import { getReviews } from '../controllers/reviewsController.js';

const router = express.Router();

router.get('/hostaway', getReviews);

export default router;
