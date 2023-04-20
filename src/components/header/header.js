"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";

import headerConfig from "./headerConfig";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  return (
    <header className=" bg-black min-w-full text-white px-10 md:px-20 lg:px-44 sticky top-0">
      <div className="align-middle my-4 flex flex-col w-full justify-center h-full md:flex-row md:justify-between md:items-center">
        <div className=" flex justify-between  items-center">
          <Link
            href="#"
            className="text-white flex justify-center items-center"
          >
            <Logo fill="white" stroke="green" className=" m-auto" />
          </Link>

          <div className="hamburger" onClick={() => toggleNavItems()}>
            <GiHamburgerMenu className=" text-3xl md:hidden" />
          </div>
        </div>
        <nav
          className={`h-full flex items-center  md:flex ${
            showNav ? "" : "hidden"
          }`}
        >
          <ul className={` flex flex-col w-full justify-center md:flex-row `}>
            {headerConfig.navItems.map((item) => {
              return (
                <li
                  className=" md:pl-4 text-2xl text-center py-3 md:text-lg"
                  key={item.itemNumber}
                >
                  <Link href={item.url} className=" hover:text-gray-400">
                    {item.itemName}
                  </Link>
                </li>
              );
            })}

            <li className=" md:pl-12 text-lg flex items-center py-3 md:py-0">
              <ul className=" flex w-full justify-around md:justify-center">
                <li className="md:pl-4 text-3xl">
                  <Link href="#" className=" hover:text-gray-400">
                    <BsTwitter />
                  </Link>
                </li>
                <li className="pl-4 text-3xl">
                  <Link href="#" className=" hover:text-gray-400">
                    <BsLinkedin />
                  </Link>
                </li>
                <li className="pl-4 text-3xl">
                  <Link href="#" className=" hover:text-gray-400">
                    <BsFacebook />
                  </Link>
                </li>
                <li className="pl-4 text-3xl">
                  <Link href="#" className=" hover:text-gray-400">
                    <BsYoutube />
                  </Link>
                </li>
                <li className="pl-4 text-3xl">
                  <Link href="#" className=" hover:text-gray-400">
                    <BsInstagram />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
