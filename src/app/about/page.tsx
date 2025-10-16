import Image from "next/image";
import React from "react";
import AboutBg from "@public/images/aboutbg.jpg";
import Pic1 from "@public/images/aboutbg.jpeg";
import Pic2 from "@public/images/about1.jpg";
import WordStaggerAnimation from "../components/animations/WordStaggerAnimation";
import CardAnimation from "../components/animations/CardAnimation";

const page = () => {
    
  return (
    
    <div className="">
      <div className="w-full h-[55dvh] md:h-[70dvh] relative flex justify-center">
        <Image src={AboutBg} alt="" className="h-full w-full object-cover" />
      <div className="absolute items-center  inset-0 flex justify-center font-serif font-bold ~text-[1.375rem]/[2.75rem] ~leading-[1.5rem]/[3rem]">
  <WordStaggerAnimation text="ABOUT" className="text-[#d5942d] mr-1" />
  <WordStaggerAnimation text="US" className="text-[#14213d]" />
</div>

      </div> 
      <div className="~py-[2rem]/[5rem] ~px-[1.5rem]/[10rem]">
        <WordStaggerAnimation
          text="Who We Are"
          className="~text-h13/h10 font-bold text-[#0B2A67]   font-serif  ~pb-[1rem]/[2rem] "
        ></WordStaggerAnimation>
        <div className="~text-h5/h4 font-serif flex flex-col ~gap-[0.5rem]/[1rem] ~pb-[1rem]/[2rem]">
          <p>
            Malbriz Ventures offers a wide range of daily essentials including
            premium grains, varieties of rice, quality flours, pulses, lentils,
            dry fruits, and pantry staples. All products are sourced with care
            to ensure freshness, purity, and long shelf life. Our supermarket is
            designed to serve households and bulk buyers with trusted,
            affordable everyday goods.
          </p>
          <p>
            Malbriz Ventures is a modern retail and export company built on
            trust, quality, and service. From supplying essential groceries and
            perfumes locally to exporting curated products globally, we focus on
            delivering excellence at every step. Our mission is to make everyday
            essentials accessible, reliable, and world-class.
          </p>
          Malbriz Ventures plays a key role in connecting Indian quality to the
          global market. We specialize in the export of grains, rice, flours,
          dry fruits, and perfumes — products known for their authenticity,
          purity, and shelf life. Every export batch is processed with strict
          adherence to international standards, ensuring compliance with food
          safety and packaging regulations. Our export network spans across
          countries including Portugal, France, Spain, Belgium, Netherlands, and
          more. We work closely with distributors, supermarkets, and wholesalers
          to deliver both retail and bulk quantities. From documentation to
          delivery, our logistics team handles everything end-to-end with speed
          and accuracy. In addition to exports, Malbriz Ventures imports a
          selective range of global products that complement our existing
          offerings. We ensure smooth import processes, partnering with trusted
          suppliers across borders. Our aim is to build strong, long-term trade
          relationships and make Malbriz a trusted global link in the food and
          lifestyle supply chain.
        </div>
        <div className="grid md:grid-cols-2 ~gap-[1rem]/[2rem] ~py-[1rem]/[2rem]">
          <CardAnimation delay={0.1} index={0}>
            <Image src={Pic1} alt="" className="rounded-2xl " />
          </CardAnimation>
          <CardAnimation delay={0.1} index={0}>
            <Image src={Pic2} alt="" className="rounded-2xl " />
          </CardAnimation>
        </div>
      </div>
    </div>
  );
};

export default page;
