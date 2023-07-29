import products from "@/data/products";
import dbConnect from "@/utils/dbConnected";

dbConnect();

const productsHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        return res.status(400).json({ status: "success", data: products });
      } catch (error) {
        return res
          .status(500)
          .json({ status: "failed", message: error.message });
      }

    default:
      return res.status(400).json({ message: "This method is not supported" });
  }
};

export default productsHandler;
