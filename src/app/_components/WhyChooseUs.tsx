"use client";

import React from "react";
import Image from "next/image";
import GroceryImage from "@public/images/whychoose.jpeg";
import CardAnimation from "../components/animations/CardAnimation";
import TextStaggerAnimation from "../components/animations/TextStaggerAnimation";

const features = [
  {
    title: "Fresh & Organic",
    description:
      "We offer only the freshest produce, sourced daily to ensure quality and taste.",
  },
  {
    title: "Great Value",
    description:
      "Unbeatable prices across groceries, snacks, and essentials you use every day.",
  },
  {
    title: "Safe & Hygienic",
    description:
      "Clean aisles, sanitized carts, and strict food safety standards — always.",
  },
  {
    title: "Friendly Service",
    description:
      "Our staff is trained to assist you with a smile and make shopping stress-free.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white ~py-[2rem]/[4rem]">
      <div className="container mx-auto px-[1.5rem]">
        <div className="text-center ~pb-[2rem]/[3rem]">
          <p className="~text-h2/h7 ~leading-[1.75rem]/[2.5rem] font-bold text-[#fca312] mb-[1rem]">
            Why Choose <span className="text-[#14213d]">Malbriz Ventures</span>?
          </p>

          <TextStaggerAnimation
            text="  At Malbriz Ventures, we go beyond just offering groceries — we bring quality, value, and care to your daily shopping."
            className="~text-h3/h2 ~leading-[1.5rem]/[2.5rem] text-[#14213d] max-w-3xl mx-auto text-center"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 ~gap-[1.5rem]/[2rem]">
          {features.map((feature, idx) => (
            <CardAnimation key={idx} index={idx} delay={0.2}>
              <div
                className="relative bg-cover bg-center bg-no-repeat rounded-xl ~p-[1rem]/[1.5rem] text-center shadow-md hover:shadow-lg transition ~min-h-[11rem]/[13.75rem] flex flex-col justify-center"
                style={{
                  backgroundImage: `url('/images/bgcream.webp')`,
                }}
              >
                <div className="absolute inset-0  rounded-xl z-0" />
                <div className="relative z-10">
                  <p className="text-h6 leading-[1.75rem] font-semibold text-[#0B2A67] pb-[0.75rem]">
                    {feature.title}
                  </p>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              </div>
            </CardAnimation>
          ))}
        </div>

        <div className="~mt-[2rem]/[4rem]">
          <Image
            src={GroceryImage}
            alt="Why Choose Us - Malbriz Ventures"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
