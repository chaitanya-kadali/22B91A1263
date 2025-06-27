import express from 'express';
const router = express.Router();
import { createShortUrl, getStats, redirectToOriginal } from '../controllers/urlController.js';


router.post('/shorturls', createShortUrl);
router.get('/shorturls/:shortcode', getStats);
router.get('/:shortcode', redirectToOriginal);

export default router;
