import express from "express";
import multer from "multer";
import { createFlower, getFlowers, deleteFlower } from "../controllers/flowerControllers.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// GET to show all flowers
router.get("/", getFlowers);

// POST to add new flower (with image upload)
router.post("/", upload.single("image"), createFlower);

// DELETE, to delete flower by ID
router.delete("/:id", deleteFlower);

export default router;

