import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="col-span-1">
      <Link href={`/products/${product.id}`} className="mx-auto">
        <div className="card rounded glass">
          {product.status === "In Stock" && (
            <div className="badge bg-green-500 border border-green-500 text-white py-3 absolute top-3 right-3">
              {product.status}
            </div>
          )}
          {product.status === "Out of stock" && (
            <div className="badge bg-red-500 border border-red-500 text-white py-3 absolute top-3 right-3">
              {product.status}
            </div>
          )}

          <Image
            src={product.image}
            alt={product.image}
            width={300}
            height={200}
            layout="responsive"
            className="object-cover"
            style={{ minHeight: "200px", maxHeight: "200px" }}
          />

          <div className="card-body p-2">
            <h2 className="card-title">{product.name}</h2>
            <p className="flex">
              <span className="font-semibold mr-1">Rating: </span>
              <span className="flex items-center mr-1">
                {product.rating}
                <AiFillStar className="ml-1 text-orange-500" />
              </span>
            </p>
            <p>
              <span className="font-semibold">Category: </span>
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              {product.price} BDT
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
