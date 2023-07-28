import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="col-span-1">
      <Link href={`/categories/${category.title}`} className="mx-auto">
        <div className="card rounded glass">
          <Image
            src={category.image}
            alt={category.image}
            width={300}
            height={200}
            layout="responsive"
            className="object-cover"
            style={{ minHeight: "200px", maxHeight: "200px" }}
          />

          <div className="card-body p-2">
            <h2 className="card-title">{category.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
