import BreadCrumb from "@/components/UI/BreadCrumb";
import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";

const BuilderCategory = () => {
  const { query } = useRouter();

  const breadCrumbItems = query?.categoryTitle
    ? [
        { label: "Pc Builder", value: "pc-builder", isClick: true },
        {
          label: query.categoryTitle,
          value: query.categoryTitle,
          isClick: false,
        },
      ]
    : [];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 grid grid-cols-1">
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-12 md:gap-y-0 md:gap-x-5">
          <div className="col-span-1 md:col-span-4">
            <Image
              width={200}
              height={200}
              src="https://images.pexels.com/photos/1432680/pexels-photo-1432680.jpeg"
              alt="title"
              className="rounded w-full min-h-[200px] object-cover md:min-h-36"
            />
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="card-body p-2">
              <h2 className="card-title">Product 1</h2>
              <p>
                <span className="font-semibold">Category: </span>
                Processor
              </p>

              <div className="flex gap-x-2">
                <div className="flex">
                  <span className="font-semibold mr-1">Rating: </span>
                  <span className="flex items-center mr-1">
                    4.7
                    <AiFillStar className="ml-1 text-orange-500" />
                  </span>
                </div>

                <div className="badge bg-red-500 border border-red-500 text-white py-3">
                  In Stock
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-center md:col-span-4 md:flex md:flex-col md:items-end">
            <p>22000 BDT</p>
            <button
              type="button"
              className="block w-full mt-5 px-3 py-2 text-xs font-medium text-center text-white rounded bg-red-700 focus:outline-nonemd:px-8 md:py-3 md:w-32"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderCategory;

BuilderCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
