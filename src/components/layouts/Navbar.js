import { categories } from "@/data/categories";
import Menu from "@/icons/Menu";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar shadow px-5 text-black lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Categories</a>
                <ul className="p-2 w-48 z-50">
                  {categories.map((category) => (
                    <li
                      key={category.title}
                      className="rounded border-b last:border-b-0"
                    >
                      <Link
                        href={`/categories/${category.title}`}
                        className="rounded"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-2xl font-medium text-yellow-700">
            <span className="font-bold text-red-500 tracking-wider">PC</span>
            Builder
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            <li tabIndex={0} className="border rounded">
              <details>
                <summary className="hover:rounded">All Categories</summary>
                <ul className="p-2 w-48 z-50 rounded shadow">
                  {categories.map((category) => (
                    <li
                      key={category.title}
                      className="rounded border-b last:border-b-0"
                    >
                      <Link
                        href={`/categories/${category.title}`}
                        className="rounded"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </div>
        </div>
        <div className="navbar-end">
          <Link href="/pc-builder">
            <button className="py-2 px-3 rounded bg-red-500 text-white hover:bg-red-600">
              PC Builder
            </button>
          </Link>
          <Link href="/login">
            <button className="ml-2 py-2 px-6 rounded bg-red-500 text-white hover:bg-red-600">
              Signin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
