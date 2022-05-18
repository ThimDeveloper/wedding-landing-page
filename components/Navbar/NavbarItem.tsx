import Link from "next/link";
import { MouseEvent, useState } from "react";

interface NavbarItemProps {
  href: string;
  text: string;
  onClick?: () => void;
  activeTab?: string;
}
export const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  text,
  onClick,
  activeTab,
}) => {
  const active = activeTab == href;
  const [hover, setHover] = useState(false);
  const mouseMotionHandler = (evt: MouseEvent<HTMLDivElement>) => {
    switch (evt.type) {
      case "mouseenter": {
        setHover(true);
        break;
      }
      case "mouseleave": {
        setHover(false);
        break;
      }
      default: {
        setHover(false);
        break;
      }
    }
  };

  return (
    <>
      <div
        className={`flex flex-col`}
        onMouseEnter={mouseMotionHandler}
        onMouseLeave={mouseMotionHandler}
      >
        <Link href={href}>
          <a
            onClick={onClick || (() => {})}
            className={`lg:inline-flex lg:w-auto w-full px-3 py-2 text-black font-thin items-center justify-center focus:outline-none`}
          >
            {text}
          </a>
        </Link>
        <div
          className={
            active
              ? "border-b-4 ease-in border-pink-300 scale-x-75"
              : hover
              ? "transition border-b-4 duration-200 ease-in border-pink-300 scale-x-75"
              : "transition border-b-4 duration-200 ease-out border-white scale-x-0"
          }
        />
      </div>
    </>
  );
};
