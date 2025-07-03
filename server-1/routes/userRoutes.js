// userRoutes.js
import express from 'express';

const router = express.Router();

// Example auth routes (add your real logic)
router.post('/register', (req, res) => {
  res.json({ message: 'User registered (placeholder)' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'User logged in (placeholder)' });
});

router.get('/profile', (req, res) => {
  res.json({ message: 'User profile info (placeholder)' });
});

// Export the router as default
export default router;
