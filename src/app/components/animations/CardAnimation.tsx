'use client';
import { motion } from "motion/react";
import { type ReactNode } from 'react';

type Props = {
    children: ReactNode;
    index: number;
    delay: number;
    className?:string;
};

const CardAnimation = ({ children,className ,index,delay}: Props) => {

    return (
        <motion.div
            variants={{
                initial: {
                    opacity: 0,
                    y: 20,
                },
                animate:()=>({
                    opacity: 1,
                    y: 0,
                    transition: { delay: delay * index , ease: 'easeInOut' },
                })
            }}
            initial='initial'
            whileInView="animate"
            viewport={{ once: true }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
};
export default CardAnimation;