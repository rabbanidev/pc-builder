import { useDispatch } from "react-redux";
import CategoryCard from "@/components/UI/CategoryCard";
import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { setCategoriesList } from "@/rtk/features/categories/categoriesSlice";

const Home = ({ featuredProducts, categories }) => {
  const dispatch = useDispatch();

  if (categories?.length > 0) {
    dispatch(setCategoriesList(categories));
  }

  return (
    <section className="max-w-7xl mx-auto py-10 px-5 lg:px-10">
      <div className="featured-products">
        <h4 className="text-2xl font-medium lg:text-3xl">Featured Products</h4>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-10 featured-products">
        <h4 className="text-2xl font-medium lg:text-3xl">
          Featured Categories
        </h4>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const categoriesRes = await fetch("http://localhost:5000/categories");
  const categories = await categoriesRes.json();

  return {
    props: {
      featuredProducts: products,
      categories: categories,
    },
    revalidate: 20,
  };
};
