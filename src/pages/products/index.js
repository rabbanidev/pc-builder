import BreadCrumb from "@/components/UI/BreadCrumb";
import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";

const Products = ({ products }) => {
  const breadCrumbItems = [
    { label: "Products", value: "products", isClick: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const products = await res.json();

  return {
    props: {
      products: products.data,
    },
    revalidate: 20,
  };
};
