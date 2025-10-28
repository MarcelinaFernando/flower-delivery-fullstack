import Flower from "../models/flowerModel.js";

// Function to create a new flower
export const createFlower = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.path : null; // Path of the image saved by Multer

    const newFlower = new Flower({ name, description, price, category, image });
    await newFlower.save();
    res.status(201).json(newFlower);
  } catch (error) {
    console.error("Error creating flower:", error);
    res.status(500).json({ message: "Error creating flower", error });
  }
};

// Function to list all flowers
export const getFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flowers", error });
  }
};

// Function to delete a flower
export const deleteFlower = async (req, res) => {
  try {
    const { id } = req.params;
    await Flower.findByIdAndDelete(id);
    res.status(200).json({ message: "Flower deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting flower", error });
  }
};
