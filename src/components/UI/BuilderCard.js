import Image from "next/image";
import Link from "next/link";

const BuilderCard = ({ category }) => {
  const { title, image } = category;

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
        <p className="font-medium text-sm text-gray-500">{title}</p>
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
