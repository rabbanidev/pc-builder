import BreadCrumb from "@/components/UI/BreadCrumb";
import BuilderProductCard from "@/components/UI/BuilderProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

const BuilderCategory = ({ categoryProducts }) => {
  const { query } = useRouter();

  const breadCrumbItems = query?.categoryTitle && [
    { label: "Pc Builder", value: "pc-builder", isClick: true },
    {
      label: query.categoryTitle,
      value: query.categoryTitle,
      isClick: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems || []} />
      <div className="mt-10 grid grid-cols-1 gap-y-10 lg:w-4/5 lg:mx-auto">
        {categoryProducts.map((product) => (
          <BuilderProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BuilderCategory;

BuilderCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// SSR
export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `http://localhost:3000/api//products?category=${query.categoryTitle}`
  );
  const data = await res.json();

  return {
    props: {
      categoryProducts: data.data,
    },
  };
};
