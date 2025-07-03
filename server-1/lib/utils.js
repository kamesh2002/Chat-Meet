import jwt from "jsonwebtoken";

export const generateToken = (userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}

// Format date and time for messages
export const formatMessageTime = (timestamp) => {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return "Invalid Date";

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: 'numeric',
    month: 'short',
  };

  return date.toLocaleString('en-IN', options);
};