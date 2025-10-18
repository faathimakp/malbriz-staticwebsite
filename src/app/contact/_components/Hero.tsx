"use client";
import Image from "next/image";
import React from "react";
import ContactBg from "@public/images/homehero.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Whatsapp from "@public/images/whatsapp.svg";
import Facebook from "@public/svg/facebook.svg";
import Instagram from "@public/svg/instagram.svg";

import WordStaggerAnimation from "@/app/components/animations/WordStaggerAnimation";
import Link from "next/link";

const Hero = () => {
  const mySchema = z.object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .regex(/^[A-Za-z\s]+$/, {
        message: "Only letters and spaces are allowed",
      }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    address: z.string().nonempty({ message: "Address is required" }),
    message: z.string().nonempty({ message: "Address is required" }),

    number: z
      .string()
      .nonempty({ message: "Number is required" })
      .regex(/^\d+$/, { message: "Only digits are allowed" })
      .min(10, { message: "Number must be at least 10 digits" }),
  });
  type TmySchema = z.infer<typeof mySchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TmySchema>({
    resolver: zodResolver(mySchema),
  });
  const onSubmit = (data: TmySchema) => {
    console.log("Form submitted:", data);

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.number}\n` +
        `Address: ${data.address}\n` +
        `Message:\n${data.message}`
    );

   const mailtoLink = `mailto:malbrizventuresltd@gmail.com,Info@malbrizventuresltd.com?subject=${subject}&body=${body}`;


    window.location.href = mailtoLink;

    setTimeout(() => {
      reset();
    }, 500);

    alert("Message sent!");
  };

  return (
    <section className="bg-white ">
      <div className="w-full h-[55dvh] md:h-[70dvh] relative flex justify-center items-center">
        <div className="relative w-full h-full">
          <Image
            src={ContactBg}
            alt="Malbriz Logo"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="absolute items-center  inset-0 flex justify-center font-serif font-bold ~text-[1.375rem]/[2.75rem] ~leading-[1.5rem]/[3rem]">
  <WordStaggerAnimation text="CONTACT US" className="text-white " />
</div>
      </div>
      <div className="max-w-3xl mx-auto ~py-[3rem]/[5rem] px-4" id="getintouch">
        <div className="text-center mb-10">
          <p className="text-sm text-[#F4A300] font-semibold tracking-widest uppercase mb-2">
            Let’s Get In Touch
          </p>
          <h2 className="~text-2xl/4xl font-bold font-serif text-[#0B2A67] mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-500 text-md">
            We’re here to help—contact us anytime for support, questions, or
            feedback.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
              />
              {errors.name && (
                <p className="text-red-600">*{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
              />
              {errors.email && (
                <p className="text-red-600">*{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("number")}
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none ]"
              />
              {errors.number && (
                <p className="text-red-600">*{errors.number.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
              />
              {errors.address && (
                <p className="text-red-600">*{errors.address.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              {...register("message")}
              placeholder="Write a Message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
            ></textarea>
            {errors.message && (
              <p className="text-red-600">*{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0B2A67] text-white text-h3  font-medium ~px-[1rem]/[1.5rem] py-[0.75rem] rounded-md transition duration-200"
          >
            SEND A MESSAGE
          </button>
        </form>

        <div className="~mt-[2.5rem]/[4rem] text-center">
          <div className="flex justify-center flex-wrap ~gap-[0.75rem]/[1.25rem]">
            <Link
              href="https://www.instagram.com/malbrizventuresltd/?igsh=MTd5OGh3aWJnY2ZyYg%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B2A67] border border-gray-300 shadow-md hover:bg-pink-600 hover:text-white transition duration-300 rounded-full p-3 md:p-4 text-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                width={20}
                height={20}
                className="~size-[1.25rem]/[1.5rem] "
              />
            </Link>

            <a
              href="https://www.facebook.com/people/Malbriz-Ventures-Ltd/61565047468684/?mibextid=wwXIfr&rdid=n3igudwwkaDub3tv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16L2UioDJJ%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B2A67] border border-gray-300 shadow-md hover:bg-blue-600 hover:text-white transition duration-300 rounded-full p-3 md:p-4 text-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            >
              <Image
                src={Facebook}
                alt="Facebook"
                width={20}
                height={20}
                className="~size-[1.25rem]/[1.5rem]"
              />
            </a>

            <a
              href="https://wa.me/+35699936017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B2A67] border border-gray-300 shadow-md hover:bg-green-600 hover:text-white transition duration-300 rounded-full p-3 md:p-4 text-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            >
              <Image
                src={Whatsapp}
                alt="WhatsApp"
                width={20}
                height={20}
                className="~size-[1.25rem]/[1.5rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
