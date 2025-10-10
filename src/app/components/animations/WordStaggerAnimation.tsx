"use client";

import { cn } from "@/app/lib/utils";
import { motion, Variants } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  splitTextClassName?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
};

const WordStaggerAnimation = ({
  text,
  className,
  splitTextClassName,
  duration = 1,
  staggerChildren = 0.15,
  delay = 0,
}: Props) => {
  const words = text.split(" ").filter(Boolean);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const wordStagger: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0% 0% -50px 0%" }}
      className={cn("leading-relaxed flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cn("mr-2 whitespace-nowrap", splitTextClassName)}
          variants={wordStagger}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default WordStaggerAnimation;
