import React from "react";
import { Navbar } from "../Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-pale-pink w-full md:h-full m-0 p-0 pt-12 md:pt-0">
        <main>{children}</main>
      </div>
    </>
  );
};
