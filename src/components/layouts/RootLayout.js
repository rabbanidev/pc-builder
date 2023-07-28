import React from "react";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
