import React from "react";
import Image from "next/image";
import Logo from "@public/images/Malbriz Logo File/Malbriz Ventures Logo-white text.png";
import Linkedin from "@public/svg/linkdin.svg";
import Twitter from "@public/svg/twitter.svg";
import Facebook from "@public/svg/facebook.svg";
import Instagram from "@public/svg/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#14213d]  " id="contact">
      <div className="relative z-10 ~px-[1.5rem]/[4.5rem] ~pt-[2rem]/[4.5rem] ~pb-[1rem]/[4.625rem]">
        <div className="flex flex-col items-center md:items-end">
          <div className="md:flex-row flex flex-col-reverse md:justify-between mb-[2rem] w-full">
            <p className="text-white  ~text-h3/h2 ~leading-[1.5rem]/[2.5rem]">
              +971 042585144 <br />
              feedback@malbriz.com
            </p>
            <div className="relative ~w-[11.5rem]/[14.375rem]  h-auto pb-[1.5625rem]">
              <Image src={Logo} alt="Skedara" className="fill object-cover" />
            </div>
          </div>
          {/* <p className="max-w-[400px] text-[#D4D0CC] md:block hidden text-[1.125rem] leading-[1.6875rem]">
            Rose Flower General Trading L.L.C Corp. <br /> Ofﬁce Al Qusais. Ind. Area
            3, Dubai, UAE
          </p> */}

          <div className="flex flex-wrap justify-between md:justify-center ~gap-x-[0.5rem]/[2.5rem] text-[1rem] text-[#FAFAFA] ~leading-[2rem]/[3rem] font-medium uppercase mb-[1rem] border-b border-[#FAFAFA]/30 ~pb-[0.75rem]/[1.5rem] w-full md:w-fit">
            <a href={"/"} className="hover:text-[#0CBA4C]">
              Home
            </a>
            <a href={"/about"} className="hover:text-[#0CBA4C]">
              About
            </a>

            <a href={"/contact"} className="hover:text-[#0CBA4C]">
              Contact
            </a>
           
          </div>

          <div className="flex items-center gap-6 mt-[1rem]">
            <a href="#">
              <Image
                src={Linkedin}
                alt="LinkedIn"
                className="size-[1.125rem]"
              />
            </a>
            <a href="#">
              <Image src={Twitter} alt="Twitter" className="size-[1.125rem]" />
            </a>
            <a href="#">
              <Image
                src={Facebook}
                alt="Facebook"
                className="size-[1.125rem]"
              />
            </a>
            <a href="#">
              <Image
                src={Instagram}
                alt="Instagram"
                className="size-[1.125rem]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[2rem] ~px-[1.5rem]/[4.5rem] ">
        <h2 className="text-center font-poppins ~text-h5/h4 leading-[1.3rem] text-white md:text-desktop-body">
          © 2025 Malbriz Ventures. | Crafted by{" "}
          <Link className="font-semibold" target="_blank" href={""}>
            Malbriz Infotech
          </Link>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
