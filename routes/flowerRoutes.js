import express from "express";
import { createFlower, getFlowers, deleteFlower, upload } from "../controllers/flowerControllers.js";

const router = express.Router();

// GET all flowers
router.get("/", getFlowers);

// POST new flower (with image upload)
router.post("/", upload.single("image"), createFlower);

// DELETE flower by ID
router.delete("/:id", deleteFlower);

export default router;
