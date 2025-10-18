import React from "react";
import WordStaggerAnimation from "../components/animations/WordStaggerAnimation";
import TextStaggerAnimation from "../components/animations/TextStaggerAnimation";
import Link from "next/link";

const About = () => {
  return (
    <div className=" h-[90vh] md:h-[80vh]  ">
              <div className=" w-full h-full flex flex-col justify-center items-center text-center px-[1.25rem]">
          <WordStaggerAnimation
            text="About Malbriz Ventures"
            className="~text-h6/h7 font-serif shrink-0 whitespace-nowrap font-bold text-[#0B2A67] mb-[1.25rem]  "
            duration={1.1}
            staggerChildren={0.25}
          /> 
          <TextStaggerAnimation
            text={`At Malbriz Ventures, we are more than just a supermarket — we are a trusted part of your community. Our mission is to provide high-quality groceries, fresh produce, and everyday essentials at prices that make sense. From local goods to global brands. 
         With a commitment to cleanliness, customer satisfaction, and convenience, we strive to make every shopping experience seamless and enjoyable. Whether you are shopping for a quick dinner, stocking up on household essentials, or exploring new products, Malbriz Ventures is here to serve you better — every day.`}
            className="~text-h3/h2 ~leading-[1.5rem]/[2.5rem] font-serif  max-w-5xl mb-4 "
          />
          <Link href={"/about"}>
            <button className="bg-[#0B2A67] font-serif hover:bg-[#0b2457] text-white font-semibold text-h3 rounded-[1rem] px-[1.5rem] py-[0.5rem] shadow-md transition mt-[2rem]">
              Know More
            </button>
          </Link>
        </div>

      <div>
      </div>
    </div>
  );
};

export default About;
