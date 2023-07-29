import BreadCrumb from "@/components/UI/BreadCrumb";
import BuilderCard from "@/components/UI/BuilderCard";
import RootLayout from "@/components/layouts/RootLayout";
import { categories } from "@/data/categories";
import categorizeComponents from "@/utils/categorizeComponents";
import matchedComponent from "@/utils/matchedComponent";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const { pcComponents } = useSelector((state) => state.pcBuilder);

  const breadCrumbItems = [
    { label: "Pc Builder", value: "pc-builder", isClick: false },
  ];

  const categorizedComponentsArray = categorizeComponents(
    categories.map((category) => category.title),
    pcComponents
  );

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 border p-5 rounded w-full mx-auto lg:w-4/5">
        <div className="flex justify-between items-center">
          <p className="text-lg">
            <span className="font-medium text-red-500">PC Builder</span> - Build
            Your Own Computer
          </p>
          <div className="px-7 py-1 flex flex-col bg-yellow-600 text-white hover:bg-yellow-700 rounded cursor-none text-center">
            <span>BDT: 0.00</span>
            <span className="text-[12px] lowercase">0 items</span>
          </div>
        </div>
        <div className="mt-5">
          {categories.map((category) => (
            <BuilderCard
              key={category.title}
              category={category}
              matchedComponents={matchedComponent(
                categorizedComponentsArray,
                category.title
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
