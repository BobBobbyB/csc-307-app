import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from './routes/user-routes.js';

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB!");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Base route (optional)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use modularized routes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
