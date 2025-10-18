"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@public/images/Malbriz Logo File/Malbriz Ventures Logo-Primary colour.png";
import Link from "next/link";
import MenuIcon from "../components/svg/MenuIcon";
import MenuRes from "../components/MenuRes";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full ~px-[1.5rem]/[4.5rem] py-4 shadow-md bg-white sticky top-0 z-[500]">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Skedara Logo"
            className="~w-[9rem]/[12.375rem]  object-cover"
          />
        </div>
      </Link>
      <div className="flex justify-end items-end lg:hidden">
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="w-[1.125rem] h-[1rem] text-greenmedium"
        />
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-[99]"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="bg-white rounded-[1rem] shadow-[0_4px_10px_rgba(0,0,0,0.15)] fixed right-[1.5rem] top-[3rem] z-[100]">
              {" "}
              <MenuRes setIsOpen={setIsOpen} />
            </div>
          </>
        )}
      </div>
      <nav className="hidden lg:flex ~gap-[1rem]/[2.5rem] items-center">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className={`text-h3  font-serif transition ${
                  isActive
                    ? "text-[#37474F] font-bold"
                    : "text-[#37474F] hover:text-black"
                }`}
              >
                {item.name}
              </Link>
              {isActive && (
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 h-[2px] w-full bg-[#fca312] rounded-md" />
              )}
            </div>
          );
        })}

        <Link
          href="/contact/#getintouch"
          className="bg-[#fca312] font-serif text-black font-semibold text-sm rounded-md px-6 py-2 shadow-md transition"
        >
          GET IN TOUCH
        </Link>
      </nav>
    </header>
  );
};

export default Header;
