"use client";
import Link from "next/link";
import WordStaggerAnimation from "../components/animations/WordStaggerAnimation";
import Image from "next/image";
import Logo from "@public/images/Malbriz Logo File/Malbriz Ventures Logo-black.png";

const ContactUs = () => {
  return (
      <div className=" bg-[#d5942d] ~py-[2rem]/[2.5rem] ~px-[1.5rem]/[6rem]">
        <div className="  text-start relative z-10">
          <div className="flex ~gap-[2rem]/[0rem] md:justify-between md:items-center items-start flex-col md:flex-row">
            <div>
              <WordStaggerAnimation
                text=" Need help or more info? 
                             Reach out now!"
                className="~text-h2/h1 font-serif leading-[2rem] font-bold text-[#0B2A67]  mb-4"
                duration={1.1}
                staggerChildren={0.25}
              />

              <Link href={"/contact"}>
                <button className="text-white font-serif bg-[#0B2A67] font-semibold ~text-h8/h3 rounded-[1rem] ~px-[1rem]/[1.5rem] py-[0.5rem] shadow-md transition ~mt-[1rem]/[2rem]">
                  Contact Us
                </button>
              </Link>
            </div>
            <div>
              <Image
                src={Logo}
                alt="Contact Us"
                className="~w-[8rem]/[10.375rem]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
