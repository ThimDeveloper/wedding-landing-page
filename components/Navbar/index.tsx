import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="fixed w-full z-50 flex items-center flex-wrap p-3 bg-pale-pink">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-3xl text-white font-thin tracking-wide">
              Simon x Marie
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-stone-500 outline-none"
          onClick={handleClick}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white" />
            <span className="block w-8 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </div>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto text-2xl">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center hover:bg-rose-50 hover:text-stone-500 ">
                Our Story
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center hover:bg-rose-50 hover:text-stone-500">
                The Wedding
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center hover:bg-rose-50 hover:text-stone-500">
                Wish List
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center hover:bg-rose-50 hover:text-stone-500">
                Register a Toast
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
