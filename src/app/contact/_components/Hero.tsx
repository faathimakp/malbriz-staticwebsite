"use client";
import Image from "next/image";
import React from "react";
import AboutBg from "@public/images/contact.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import WordStaggerAnimation from "@/app/components/animations/WordStaggerAnimation";

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

    const mailtoLink = `mailto:mishkathbk@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      reset();
    }, 500);

    alert("Message sent!");
  };

  return (
    <section className="bg-white ">
      <div className="w-full h-[55dvh] md:h-[70dvh] relative flex justify-center items-center">
        <Image src={AboutBg} alt="" className="h-full w-full object-cover" />
        <WordStaggerAnimation
          text="CONTACT US"
          className="absolute  text-white font-bold ~text-[1.375rem]/[3.5rem] font-poppins ~leading-[1.5rem]/[3.5rem]"
        ></WordStaggerAnimation>
      </div>
      <div className="max-w-3xl mx-auto ~py-[3rem]/[5rem] px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-[#F4A300] font-semibold tracking-widest uppercase mb-2">
            Let’s Get In Touch
          </p>
          <h2 className="~text-2xl/4xl font-bold text-[#0B2A67] mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-500 text-md">
            We’re here to help—contact us anytime for support, questions, or
            feedback.
          </p>
        </div>

        {/* Form */}
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
            className="bg-[#0B2A67] text-white font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            SEND A MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
