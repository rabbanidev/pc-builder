import Product from "@/model/products";
import dbConnect from "@/utils/dbConnected";

dbConnect();

const productsDetailsHandler = async (req, res) => {
  const {
    method,
    query: { productId },
  } = req;

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(productId);

        return res.status(400).json({ status: "success", data: product });
      } catch (error) {
        return res
          .status(500)
          .json({ status: "failed", message: error.message });
      }

    default:
      return res.status(400).json({ message: "This method is not supported" });
  }
};

export default productsDetailsHandler;
