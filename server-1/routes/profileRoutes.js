// routes/profileRoutes.js
import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { name, bio } = req.body;
  console.log("Profile data received:", name, bio);
  res.status(200).json({ success: true, message: "Profile saved" });
});

export default router;
