"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./carticon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <>
      {/* FIXED MENU BUTTON */}
      <div className="fixed top-6 right-6 z-[1000]">
        <button onClick={() => setOpen(!open)}>
          <Image
            src={open ? "/close.png" : "/open.png"}
            alt="Toggle menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* FULLSCREEN MENU */}
      {open && (
        <div className="fixed left-0 top-24 w-full h-[calc(100vh-6rem)] bg-red-500 text-white flex flex-col gap-8 items-center justify-center text-3xl z-[999]">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 transition"
            >
              Order
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
