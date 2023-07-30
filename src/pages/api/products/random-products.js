import Product from "@/model/products";
import dbConnect from "@/utils/dbConnected";
import randomProducts from "@/utils/randomProducts";

dbConnect();

const randomProductsHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        const uniqueProducts = randomProducts(products);

        return res
          .status(400)
          .json({ status: "success", data: uniqueProducts });
      } catch (error) {
        return res
          .status(500)
          .json({ status: "failed", message: error.message });
      }

    default:
      return res.status(400).json({ message: "This method is not supported" });
  }
};

export default randomProductsHandler;
