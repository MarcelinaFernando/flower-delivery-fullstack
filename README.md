# Flower Delivery Website – Backend API

## Description

This project is part of **Module 4** of the **ElevateHer Program**.  
It consists of building the backend of a flower delivery website, focusing on a **secure, scalable backend API**.

The project was developed in two main milestones:

---

## Milestone 1 – Basic Flower Management

###  Overview
The first version focused on the core backend structure for managing flowers and uploading images.

###  Features Implemented
- Create, list, and delete flowers  
- **GET /api/flowers** → list all flowers  
- **POST /api/flowers** → add a new flower (with image upload)  
- **DELETE /api/flowers/:id** → delete a flower by ID  
- Image upload with **Multer**, stored in the `/uploads` folder  
- **MongoDB Atlas** integration using environment variables  
- Express middlewares: `CORS`, `express.json`, and `dotenv`  
- Code versioning with **Git & GitHub**  
- Deployment on **Render.com**

### Technologies Used
- **Node.js** – JavaScript runtime environment  
- **Express.js** – API framework  
- **MongoDB Atlas** – cloud NoSQL database  
- **Multer** – for handling image uploads  
- **dotenv** – environment variable management  
- **CORS** – control of external requests  
- **Render.com** – hosting platform  

### 🔗 Links
- **Live API:** [Click here to view the API online](https://flower-delivery-api.onrender.com)  
- **Walkthrough Video (Loom):** 🎥 [Click here to watch on Loom](https://www.loom.com/share/1672d4b27c574e089a9ff26086d0e82d?sid=156060f5-c311-42ba-9cdf-9cdbbbb6b980)

---

## Milestone 2 – User Authentication & Authorization

###  Overview
In this second version, the backend was expanded and improved with user management and JWT authentication, ensuring secure access to protected routes.

###  New Features Added
- User **registration and login** using **JWT** and **bcrypt**  
- Added new files: `userModel.js`, `userRoutes.js`, and `userController.js`  
- Validation for user data (name, email, password)  
- Password encryption using **bcrypt**  
- JWT token generation for secure authentication  
- Support for user cart data (`cartData` field in schema)  
- Database integration verified and tested via **MongoDB Atlas**  
- API tested via **POSTMAN** for signup and login endpoints  
- Code organized into modular structure (**Models**, **Routes**, **Controllers**)

### Technologies Added in Version 2
- **bcryptjs** – password encryption  
- **jsonwebtoken (JWT)** – authentication and token generation  
- **validator** – input validation  

### 🔗 Links
- **Live API (Render):** [Click here to view the API online](https://flower-delivery-api-v2.onrender.com)  
- **Walkthrough Video (Milestone 2):** 🎥 [Click here to watch on Loom](https://www.loom.com/share/e9287d0d92ff420cb6fe6a4477e96449)

---

## 👩🏽‍💻 Author
- **Name:** Marcelina Fernando  
- **Email:** marcelinafernanda235@gmail.com