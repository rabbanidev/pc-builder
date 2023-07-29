import { deleteComponent } from "@/rtk/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const BuilderCard = ({ category, matchedComponents }) => {
  const dispatch = useDispatch();
  const { title, image } = category;

  const deleteComponentHandler = (category) => {
    dispatch(deleteComponent(category));
  };

  return (
    <div className="flex justify-between items-center border-b py-3 last:border-b-0">
      <div className="flex gap-x-2 md:gap-x-4">
        <Image
          width={60}
          height={60}
          src={image}
          alt={title}
          className="rounded h-[50px] w-[50px] md:w-16 md:h-16"
        />
        <div>
          <p className="font-medium text-sm text-gray-500">{title}</p>
          {matchedComponents?.length > 0 &&
            matchedComponents.map((component) => (
              <div className="mt-1 flex gap-x-3" key={component?.id}>
                <p className="font-medium text-sm">{component?.name}</p>
                <p className="font-medium text-sm">BDT {component?.price}</p>
                <button
                  className="hover:text-red-500 -mt-0.5"
                  onClick={() => deleteComponentHandler(component.category)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>
      </div>
      <Link
        href={`/pc-builder/${title}`}
        className="px-3 py-2 text-xs font-medium text-center text-black border border-red-500 rounded hover:bg-red-700 focus:outline-none hover:text-white md:px-8 md:py-3"
      >
        Choose
      </Link>
    </div>
  );
};

export default BuilderCard;
