import mongoose from "mongoose";

// Defining the Flower Schema
const flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String, // Here we will save the image path on the server
    required: true
  }
}, {
  timestamps: true // To save creation and update dates
});

// Creating the Flower Model
const Flower = mongoose.model("Flower", flowerSchema);

export default Flower;
