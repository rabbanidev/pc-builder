import { connect } from "mongoose";

const url = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await connect(url);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connected failed: ", error);
  }
};

export default dbConnect;
