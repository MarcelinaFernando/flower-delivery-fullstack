import express from "express";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();


// USER ROUTES

// Route for user registration
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

export default router;
