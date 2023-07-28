import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/categories" className="link link-hover">
          All Categories
        </Link>
        <Link href="/login" className="link link-hover">
          Signin
        </Link>
        <Link href="/pc-builder" className="link link-hover">
          Pc Builder
        </Link>
      </div>
      <div>
        <p>
          Copyright © 2023 - All right reserved by Pc Builder Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
