import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { NavItemsContainer } from "./NavItemsContainer";
import { Burger, Drawer } from "@mantine/core";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleClick = () => {
    setActive(!active);
  };
  const close = () => {
    setActive(false);
  };

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router]);

  const NavItems = () => (
    <>
      {!session ? (
        <NavbarItem
          href="/sign-in"
          text="Logga in"
          onClick={() => {
            close();
            signIn();
          }}
          activeTab={activeTab}
        />
      ) : (
        <>
          <NavbarItem
            href="/our-story"
            text="Vår berättelse"
            onClick={close}
            activeTab={activeTab}
          />
          {/* <NavbarItem
        href="/the-wedding"
        text="Information om bröllopet"
        onClick={close}
        activeTab={activeTab}
      />
      <NavbarItem
        href="/gifts"
        text="Gåvor"
        onClick={close}
        activeTab={activeTab}
      /> */}
          <NavbarItem
            href="/toast"
            text="Anmäl ett tal"
            onClick={close}
            activeTab={activeTab}
          />
          <NavbarItem
            href="/sign-out"
            text="Logga ut"
            onClick={() => {
              close();
              signOut({ callbackUrl: "/" });
            }}
            activeTab={activeTab}
          />
        </>
      )}
    </>
  );

  return (
    <>
      <nav className="fixed w-full lg:px-12 z-50 flex flex-wrap items-center p-3 bg-white shadow-lg">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4" onClick={close}>
            <span className="text-3xl font-thin text-black tracking-wide">
              Simon x Marie
            </span>
          </a>
        </Link>

        <div className="inline ml-auto px-8 lg:hidden">
          <Burger opened={active} onClick={handleClick} />
        </div>

        <NavItemsContainer extraStyles={["hidden"]}>
          <NavItems />
        </NavItemsContainer>

        <Drawer
          opened={active}
          onClose={() => close()}
          padding="md"
          size="xl"
          position="right"
          className="pr-12 pt-6"
        >
          <NavItemsContainer>
            <NavItems />
          </NavItemsContainer>
        </Drawer>
      </nav>
    </>
  );
};
