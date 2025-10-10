"use client";
import React, { useState, useEffect } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@public/images/herobg.jpg";

function Hero() {
  const titles = [
    "Where Quality Meets Value — Every Aisle, Every Day",
    "Your One-Stop Shop for Everything Fresh & Affordable",
    "Super Savings, Super You",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      transition: { when: "afterChildren", duration: 0.5 },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      y: `-0.25em`,
      transition: { duration: 0.5, ease: [0.42, 0, 1, 1] },
    },
  };
  const words = titles[currentIndex].split(" ");

  return (
    <div className="relative  h-screen flex justify-center  ">
      <div className=" w-full relative  ">
        
        <Image
          src={Logo}
          alt="Malbriz Logo"
          className="size-full object-cover"
        />

        <div className="absolute  inset-0 flex flex-col items-center justify-center w-full ~gap-[1.505rem]/[2.688rem] z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-white font-bold ~text-[1.375rem]/[3.5rem] text-center lg:px-[18.563rem] px-[1rem] font-montserrat ~leading-[1.5rem]/[3.5rem]"
              variants={sentenceVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariant}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Hero;
