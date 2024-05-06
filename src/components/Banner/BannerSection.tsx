"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import Image from "next/image";
import bannerImg from "../../../public/assets/banner.png";

const BannerSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Hi,I&apos;m{""}
          <br />
          <TypeAnimation
            sequence={["Asheque", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum
          maiores facilis ab, animi molestiae fugiat exercitationem sit officia
          nesciunt?
        </p>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-black bg-white hover:bg-slate-200">
            Hire Me
          </button>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
            Download CV
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
          <Image
            src={bannerImg}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 w-[180px] h-[180px] lg:w-[300px] lg:h-[300px]"
            alt="bannerImg"
            width={180}
            height={180}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
