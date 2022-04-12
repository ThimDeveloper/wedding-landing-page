import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full md:h-full m-0 p-0 pt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
