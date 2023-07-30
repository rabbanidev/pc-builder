import BreadCrumb from "@/components/UI/BreadCrumb";
import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const breadCrumbItems = [
    { label: "Products", value: "products", isClick: true },
    { label: product.name, value: product.name, isClick: false },
  ];

  const keysFeatures = Object.entries(product.keyFeatures).map(
    ([key, value]) => ({ key, value })
  );

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10">
      <BreadCrumb items={breadCrumbItems} />
      <div className="mt-10 mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="col-span-1">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            layout="responsive"
            className="w-full h-64 object-cover object-center rounded lg:max-h-[300px]"
          />
        </div>
        <div className="col-span-1">
          <h3 className="text-sm title-font text-gray-500 tracking-widest">
            {product.category}
          </h3>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.name}
          </h1>
          <div className="flex mb-1 mt-4">
            <span className="flex items-center">
              {new Array(Math.floor(product.averageRating))
                .fill(null)
                .map((star, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              {new Array(5 - Math.floor(product.averageRating))
                .fill(null)
                .map((star, i) => (
                  <svg
                    key={i}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}

              <span className="text-gray-600 ml-3">
                {product.averageRating} Stars ( Average )
              </span>
            </span>
          </div>
          <div className="flex mb-4">
            <span className="flex items-center">
              {new Array(Math.floor(product.individualRating))
                .fill(null)
                .map((star, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              {new Array(5 - Math.floor(product.individualRating))
                .fill(null)
                .map((star, i) => (
                  <svg
                    key={i}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}

              <span className="text-gray-600 ml-3">
                {product.individualRating} Stars ( Individual )
              </span>
            </span>
          </div>
          <p className="leading-relaxed">{product.description}</p>

          <div className="mt-3">
            <div className="flex flex-wrap gap-x-5 lg:pr-10">
              {keysFeatures.map((keyFeature) => (
                <p key={keyFeature.key}>
                  <span className="font-medium">{keyFeature.key}</span>:{" "}
                  {keyFeature.value}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-x-2 pt-3 mt-3">
            <span className="title-font font-medium text-2xl text-gray-900">
              BDT {product.price}
            </span>
            <div className="mt-1">
              {product.status === "In Stock" ? (
                <div className="badge bg-green-500 border border-green-500 text-white py-3">
                  {product.status}
                </div>
              ) : (
                <div className="badge bg-red-500 border border-red-500 text-white py-3">
                  {product.status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-3xl mb-3 font-semibold">Reviews</h1>
        {product.reviews.map((review) => (
          <div key={review.id}>
            <a className="inline-flex items-center my-2">
              <Image
                src={review.userProfile}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                alt={review.username}
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  {review.username}
                </span>
                <span className="text-gray-500 text-sm">{review.comment}</span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.CLIENT_URL}/api/products`);
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.CLIENT_URL}/api/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
    revalidate: 20,
  };
};
