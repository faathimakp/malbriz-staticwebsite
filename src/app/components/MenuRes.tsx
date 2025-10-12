"use client";
import React from "react";
import Link from "next/link";
import CrossMenu from "./svg/CrossMenu";


type Props = { setIsOpen: (value: boolean) => void };

const MenuRes = ({ setIsOpen }: Props) => {
  return (
    <div className="h-[90vh] w-[17.75rem] no-scrollbar overflow-y-scroll px-[1.188rem] relative">
      <button
        onClick={() => setIsOpen(false)}
        className="text-gray-500 absolute hover:text-gray-700 right-[1.984rem] top-[2rem]"
      >
        <CrossMenu className="w-[1.125rem] h-[1rem] text-greenmedium" />
      </button>
      <div className="flex flex-col h-full justify-between pt-[6rem]">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between">
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                <p className="font-medium text-h6 leading-[1.8rem] text-greenmedium pb-[1.5rem]">
                  HOME
                </p>
              </Link>
            </div>
            <div className="flex justify-between">
              <Link href={"/about"} onClick={() => setIsOpen(false)}>
                <p className="font-medium text-h6 leading-[1.8rem] text-greenmedium pb-[1.5rem]">
                  ABOUT
                </p>
              </Link>
            </div>
            <div className="flex justify-between">
              <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                <p className="font-medium text-h6 leading-[1.8rem] text-greenmedium pb-[1.5rem]">
                  CONTACT
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRes;
