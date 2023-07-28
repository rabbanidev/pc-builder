import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

const SingleCategory = ({ categoryProducts }) => {
  const { query } = useRouter();

  return (
    <section className="max-w-7xl mx-auto py-10 px-5 lg:px-10">
      <h4 className="text-2xl font-medium lg:text-3xl">
        {query.categoryTitle}
      </h4>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {categoryProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SingleCategory;

SingleCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();

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
    `http://localhost:5000/products?category=${params.categoryTitle}`
  );
  const data = await res.json();

  return {
    props: {
      categoryProducts: data,
    },
    revalidate: 20,
  };
};
