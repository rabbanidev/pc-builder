import { Schema, model, models } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["In Stock", "Out of stock"],
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: {
      type: Object,
      required: true,
    },
    individualRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    averageRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    reviews: [
      {
        username: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5, required: true },
        comment: { type: String, required: true },
        userProfile: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export default models.Product || model("Product", productsSchema);
