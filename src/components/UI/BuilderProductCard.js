import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const BuilderProductCard = ({ product }) => {
  const { id, name, image, category, price, status, rating } = product || {};

  return (
    <div className="px-5 py-5 grid grid-cols-1 gap-y-5 shadow md:grid-cols-12 md:gap-y-0">
      <div className="col-span-1 md:col-span-2">
        <Image
          width={150}
          height={150}
          src={image}
          alt={name}
          className="rounded w-full min-h-[150px] object-cover md:min-h-[110px]"
        />
      </div>
      <div className="col-span-1 md:col-span-6 md:ml-5">
        <div className="card-body p-0">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-semibold">Category: </span>
            {category}
          </p>

          <div className="flex gap-x-2">
            <div className="flex">
              <span className="font-semibold mr-1">Rating: </span>
              <span className="flex items-center mr-1">
                {rating}
                <AiFillStar className="ml-1 text-orange-500" />
              </span>
            </div>

            {status === "In Stock" ? (
              <div className="badge bg-green-500 border border-green-500 text-white py-3">
                In Stock
              </div>
            ) : (
              <div className="badge bg-red-500 border border-red-500 text-white py-3">
                Out of Stock
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1 text-center md:col-span-4 md:flex md:flex-col md:items-end">
        <p>{price} BDT</p>
        <button
          type="button"
          className="block w-full mt-5 px-3 py-2 text-xs font-medium text-center text-white rounded bg-red-700 focus:outline-none md:py-3 md:w-32"
          disabled={status === "Out of stock"}
        >
          Add To Builder
        </button>
      </div>
    </div>
  );
};

export default BuilderProductCard;
