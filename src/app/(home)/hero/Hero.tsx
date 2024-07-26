import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-32">
      <div
        className=" container h-72 flex justify-between items-center
             bg-secondary-500"
      >
        <div
          className=" flex-1 md:flex-none justify-between md:justify-start
        text-white gap-40 md:gap-8 flex items-center"
        >
          <Image
            width={100}
            height={200}
            src="/assets/homeGraphic1.png"
            alt="Banner yellow image"
          />
          <p className=" text-xl md:text-3xl">
            <span className=" text-pink-600">HOT</span>
            SALES <br /> WEEK
          </p>
        </div>

        <div
          className=" relative h-52 w-52 bg-white hidden rounded-full md:flex
             justify-center items-center before:content-[''] before:absolute before:top-[8px]
              before:right-[8px] before:bottom-[8px] before:left-[8px] before:rounded-full before:border-4
               before:border-dashed before:border-black"
        >
          <p
            className="text-black text-3xl
                     font-bold opacity-80"
          >
            50% <br /> OFF
          </p>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <p className=" text-white hidden Lg:block  text-xl md:text-3xl">
            A NEW <span className=" text-pink-500">GREAT LOOK</span>
          </p>
          <p className=" text-[#867EBC] text-xl md:text-3xl">FOR NEW SEASON</p>
        </div>
        <Image
          width={100}
          height={200}
          src="/assets/homeGraphic3.png"
          alt="Banner black image"
        />
      </div>
    </section>
  );
};

export default Hero;