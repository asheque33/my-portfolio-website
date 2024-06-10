"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import NavLink from "./NavLink";
import MobileMenuItem from "./MobileMenuItem";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#191A1A] bg-opacity-100">
      <div
        className="flex flex-wrap  
      lg:py-4
      items-center justify-around px-2 md:px-8 py-2"
      >
        <Link
          href="/"
          className="text-base sm:text-lg  text-neutral-400 hover:text-neutral-200 "
        >
          <strong>Asheque</strong>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenuItem links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
