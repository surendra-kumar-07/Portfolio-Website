'use client'
import React from "react";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import TypingAnim from '@/components/TypingAnim'

export default function HeroSection() {
  const textColor =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] to-blue-500";
  return (
    <section className="py-4 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className={`block ${textColor}`}> Hello, I'm</span>
          Surendra Kumar
        <TypingAnim/>
        </h1>
        
        <p className="text-gray-600 dark:text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nobis alias eveniet sint placeat sapiente.
        </p>
        <div>
        <Button size="lg" radius="full" className=" text-white mr-4 bg-gradient-to-r from-[#7e22ce] to-blue-500">
        Hire me
    </Button>
    <Button size="lg" radius="full" color="primary" variant="bordered" className="dark:text-white">
    Download CV
      </Button> 

         
        </div>
        </div>
       
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="">
          <Image
            src="./images/hero444.png"
            alt="hero image"
            width={210}
            height={210}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
