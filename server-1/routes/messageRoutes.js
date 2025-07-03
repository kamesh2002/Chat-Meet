import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage
} from "../controllers/messageController.js";

const messageRouter = express.Router();

// 🧠 This should return users in sidebar
messageRouter.get("/users", protectRoute, getUsersForSidebar);

// 🧠 Fetch messages from a conversation
messageRouter.get("/:id", protectRoute, getMessages); // id = chatId or userId

// 🧠 Mark a message as seen
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen); // id = messageId

// 🧠 Send a message to a user or chat
messageRouter.post("/send/:id", protectRoute, sendMessage); // id = receiverId or chatId

export default messageRouter;
