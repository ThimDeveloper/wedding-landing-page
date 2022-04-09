import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const close = () => {
    setActive(false);
  };

  const NavItems = () => (
    <>
      <Link href="/our-story">
        <a
          onClick={close}
          className="transition ease-in lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center md:hover:scale-105 hover:bg-rose-50 hover:text-stone-500 duration-200"
        >
          Vår Berättelse
        </a>
      </Link>
      <Link href="/the-wedding">
        <a
          onClick={close}
          className="transition ease-in lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center md:hover:scale-105 hover:bg-rose-50 hover:text-stone-500 duration-200"
        >
          Bröllopet
        </a>
      </Link>
      <Link href="/gifts">
        <a
          onClick={close}
          className="transition ease-in lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center md:hover:scale-105 hover:bg-rose-50 hover:text-stone-500 duration-200"
        >
          Gåvor
        </a>
      </Link>
      <Link href="/toast">
        <a
          onClick={close}
          className="transition ease-in lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-thin items-center justify-center md:hover:scale-105 hover:bg-rose-50 hover:text-stone-500 duration-200"
        >
          Anmäl ett tal
        </a>
      </Link>
    </>
  );

  return (
    <>
      <nav className="fixed w-full z-50 flex items-center flex-wrap p-3 bg-slate-50 shadow-md">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4" onClick={close}>
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
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto md:space-x-2 text-2xl">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
};
