import Image from "next/image";
import React from "react";
import PortugalLogo from "@public/images/portugal.svg";
import SpainLogo from "@public/images/spain.svg";
import FranceLogo from "@public/images/france.svg";
import IrelandLogo from "@public/images/ireland.svg";
import BelgiumLogo from "@public/images/belgium.svg";
import NetherlandLogo from "@public/images/netherland.svg";
import SwitzerlandLogo from "@public/images/switzerland.svg";
import CroatiaLogo from "@public/images/croatia.svg";
import PolandLogo from "@public/images/poland.svg";
import DenmarkLogo from "@public/images/denmark.svg";
import NorwayLogo from "@public/images/norway.svg";
import UkrainLogo from "@public/images/ukrain.svg";
import FinlandLogo from "@public/images/finland.svg";
import SwedenLogo from "@public/images/sweden.svg";






const Export = () => {
  
  const logos = [
    { src: PortugalLogo, alt: "Malbriz Export Partner Portugal" ,name:"Portugal"},
    { src: SpainLogo, alt: "Malbriz Export Partner Spain", name:"Spain" },
    { src: FranceLogo, alt: "Malbriz Export Partner France", name:"France" },
    { src: IrelandLogo, alt: "Malbriz Export Partner Ireland", name:"Ireland" },
    { src: BelgiumLogo, alt: "Malbriz Export Partner Belgium", name:"Belgium" },
    { src: NetherlandLogo, alt: "Malbriz Export Partner Netherland", name:"Netherland" },
    { src: SwitzerlandLogo, alt: "Malbriz Export Partner Switzerland", name:"Switzerland" },
    { src: CroatiaLogo, alt: "Malbriz Export Partner Croatia", name:"Croatia" },
    { src: PolandLogo, alt: "Malbriz Export Partner Poland", name:"Poland" },
    { src: DenmarkLogo, alt: "Malbriz Export Partner Denmark", name:"Denmark" },
    { src: NorwayLogo, alt: "Malbriz Export Partner Norway", name:"Norway" },
    { src: UkrainLogo, alt: "Malbriz Export Partner Ukrain", name:"Ukrain" },
    { src: FinlandLogo, alt: "Malbriz Export Partner Finland", name:"Finland" },
    { src: SwedenLogo, alt: "Malbriz Export Partner Sweden", name:"Sweden" },

  ];

  return (
    <>
      <div className="~px-[1.5rem]/[6rem] ~pt-[2rem]/[2rem]">
        <div className="text-start mb-12 ">
          <h2 className="~text-h2/h7 font-serif ~leading-[1.75rem]/[2.5rem] font-bold text-[#0B2A67] mb-4">
            Expanding Beyond Borders
          </h2>
          <p className="~text-h3/h4  font-serif leading-[1.45rem]  text-gray-700 max-w-2xl ">
            Malbriz Ventures leads international trade with a strong network of
            import and export operations — ensuring fresh, authentic products
            reach every corner of the globe.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden w-full ~pb-[4rem]/[8rem]">
        <div className="animate-scroll flex ~gap-[1rem]/[2rem] w-max">
          {logos.concat(logos).map((item, index) => (
           <div className="flex flex-col items-center gap-[1rem]" key={index}>
                <div key={index} className="flex items-center  justify-center">
                  <div className="relative ~size-[5rem]/[7rem] rounded-full bg-[#F8F8F8] items-center flex justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                     
                      className="~w-[2.5rem]/[4rem] h-[3rem] items-center flex object-contain"
                    />
                  </div>
                </div>
                <p className="font-serif">{item.name}</p>
           </div >
          ))}
        </div>
      </div>
    </>
  );
};

export default Export;
