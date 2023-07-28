import BreadCrumb from "@/components/UI/BreadCrumb";
import CategoryCard from "@/components/UI/CategoryCard";
import RootLayout from "@/components/layouts/RootLayout";
import { categories } from "@/data/categories";

const Categories = () => {
  const breadCrumbItems = [
    { label: "Categories", value: "categories", isClick: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

Categories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
