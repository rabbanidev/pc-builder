import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://i.ibb.co/QPHwDy1/banner.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Build A Custom PC
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            We build custom PCs around your budget, optimized for the games you
            love, all protected by a 2-year warranty.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-center justify-center">
            <Link
              href="/pc-builder"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Start Your PC Build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
