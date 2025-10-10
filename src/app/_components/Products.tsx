"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Category = [
  {
    name: "Fruits & Vegetables",
    image: "/images/fruitsandveg.jpg",
  },
  {
    name: "Pulses & Seeds",
    image: "/images/pulsesandseeds.jpg",
  },
  {
    name: "Diary & Eggs",
    image: "/images/dairyandeggs.jpg",
  },
  {
    name: "Fish & Meat",
    image: "/images/fish.jpg",
  },
  {
    name: "Rice & Flours",
    image: "/images/riceflours.jpg",
  },
  {
    name: "Direct Powders",
    image: "/images/powders.jpg",
  },
];

function Products() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdUp(window.innerWidth >= 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="~px-[1rem]/[6.875rem] ~py-[1.5rem]/[3.5rem]  bg-green-50 ">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="~text-h2/h7 font-bold text-[#0B2A67] leading-[1.4rem]  ~pb-[1.25rem]/[3rem]  text-start lg:shrink-0 "
        >
          Malbriz Essentials
        </motion.h1>

        <div className="lg:flex-row flex flex-col ~gap-[1.5rem]/[0.5625rem] border-b border-[#0B2A67] pt-[1.5rem] ~pb-[2.5rem]/[4rem]">
          {Category.map((item, i) => {
            const isSelected = isMdUp ? selectedIndex === i : true;

            return (
              <div
                key={i}
                className={`relative w-full ~h-[14.5rem]/[21.375rem] transition-all duration-1000 overflow-hidden ${
                  isMdUp ? (isSelected ? "basis-2/6" : "basis-1/6") : ""
                }`}
                onMouseEnter={() => isMdUp && setSelectedIndex(i)}
                onClick={() => isMdUp && setSelectedIndex(i)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-[1.25rem]"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isSelected ? "selected" : "unselected"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.45, delay: 0.5 }}
                    className={`absolute ${
                      isSelected
                        ? "~left-[0.7331rem]/[2.125rem] rotate-0 bottom-[0.875rem] w-auto"
                        : "left-1/2 -translate-x-1/2 -rotate-90 bottom-[12.4375rem] w-[33ch] mx-auto"
                    } pr-[2.75rem] text-white z-20`}
                  >
                    <p
                      className={`${
                        isSelected
                          ? " ~text-h2/h7 font-bold text-white ~leading-[1.4381rem]/[2.25rem] ~pb-[0.5356rem]/[1.375rem]"
                          : "font-semibold text-h2 min-h-[72px] flex items-center"
                      }`}
                    >
                      {item.name}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
