    "use client";
   
import { cn } from "@/app/lib/utils";
    import {  Variants, motion, useInView } from "motion/react";
    import { useRef } from "react";

    type Props = {
      text: string;
      className?: string;
      splitTextClassName?: string;
      delay?: number;
    };
    const TextStaggerAnimation = ({
      text,
      className,
      splitTextClassName,
      delay,
    }: Props) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "0% 0% -50px 0%" });
      let isItalic = false;
      const words = text
        .replaceAll("<br>", " <br> ")
        .replaceAll("<br/>", " <br> ")
        .replaceAll("<i>", " <i> ")
        .replaceAll("<i/>", " <i/> ")
        .replaceAll("</i>", " </i> ")
        .split(" ")
        .filter(Boolean);
      const variants : Variants ={
        initial: {
          y: 40,
        },
        visible: {
          y: 0,
          transition: {
            delay: delay,
            duration: 1.1,
            ease: [0.19, 1, 0.22, 1],
          },
        },
      };

      return (
        <p ref={ref} className={cn(className)}>
          {words.map((word, i: number) => {
            if (word == "<i>") {
              isItalic = true;
              return "";
            }

            if (word == "<i/>") {
              isItalic = false;
              return "";
            }

            if (word == "</i>") {
              isItalic = false;
              return "";
            }
            if (word == "<br>") {
              return <span className="block" key={i}></span>;
            }
            if (isItalic) {
              return (
                <span key={i} className="inline-block masked-text">
                  <motion.span
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "visible" : "initial"}
                    className={cn(
                      `inline-block  font-ivyPrestoDisplayLight `,
                      splitTextClassName
                    )}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              );
            }
            return (
              <span key={i} className="inline-block masked-text">
                <motion.span
                  variants={variants}
                  initial="initial"
                  animate={isInView ? "visible" : "initial"}
                  className={cn(`inline-block`, splitTextClassName)}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            );
          })}
        </p>
      );
    };

    export default TextStaggerAnimation;
