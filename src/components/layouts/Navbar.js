import { categories } from "@/data/categories";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Navbar = () => {
  const { data: session } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar shadow px-5 text-black lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn px-2 py-0.5 h-[2rem] min-h-[2rem] rounded mr-1 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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

        <div className="dropdown dropdown-end text-right navbar-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BiDotsVerticalRounded />
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card rounded card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <Link
                  href="/pc-builder"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                >
                  PC Builder
                </Link>
                {session?.user ? (
                  <button
                    className="block w-full rounded bg-rose-600 px-12 text-center py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full rounded bg-rose-600 px-12 text-center py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
                  >
                    Signin
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:navbar-end">
          <Link
            href="/pc-builder"
            className="py-2 px-3 rounded bg-red-500 text-white hover:bg-red-600"
          >
            PC Builder
          </Link>
          {session?.user ? (
            <button
              className="ml-2 py-2 px-6 rounded bg-red-500 text-white hover:bg-red-600"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="ml-2 py-2 px-6 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Signin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
