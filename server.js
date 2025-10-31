import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import flowerRoutes from "./routes/flowerRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // Import user routes
import multer from "multer";
import fs from "fs";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Create 'uploads' folder if it doesn't exist
const uploadFolder = "uploads";
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Configure Multer to save files in 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });

// Serve static files from 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/flowers", flowerRoutes(upload)); // Flowers routes
app.use("/api/users", userRoutes); // User routes

// Function to connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // Espera até 10s para conectar
    });
    console.log("✅ MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
};

startServer();

