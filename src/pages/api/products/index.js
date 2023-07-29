import { categories } from "@/data/categories";
import Product from "@/model/products";
import dbConnect from "@/utils/dbConnected";

dbConnect();

const productsHandler = async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET":
      try {
        let andConditions = [];
        if (query?.category === "Others") {
          andConditions.push({
            $and: [
              {
                category: {
                  $nin: categories.map((category) => category.title),
                },
              },
            ],
          });
        } else if (Object.keys(query).length) {
          andConditions.push({
            $and: Object.entries(query).map(([field, value]) => ({
              [field]: value,
            })),
          });
        }

        const whereCondition =
          andConditions.length > 0 ? { $and: andConditions } : {};

        const products = await Product.find(whereCondition).sort({
          createdAt: -1,
        });

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
