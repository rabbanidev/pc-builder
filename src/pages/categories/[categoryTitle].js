import BreadCrumb from "@/components/UI/BreadCrumb";
import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { categories } from "@/data/categories";
import { useRouter } from "next/router";

const CategoryItem = ({ categoryProducts }) => {
  const { query } = useRouter();

  const breadCrumbItems = [
    { label: "Categories", value: "categories", isClick: true },
    { label: query.categoryTitle, value: query.categoryTitle, isClick: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {categoryProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryItem;

CategoryItem.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: { categoryTitle: category.title },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.categoryTitle}`
  );
  const data = await res.json();

  return {
    props: {
      categoryProducts: data.data,
    },
    revalidate: 20,
  };
};
