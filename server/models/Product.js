import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    //In real application, following fields should be required
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
