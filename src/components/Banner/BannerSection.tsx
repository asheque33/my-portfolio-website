"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import bannerImg from "../../../public/assets/programmer.gif";
import profileImg from "../../../public/assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="lg:my-16 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center justify-self-start text-center sm:text-left">
          <h1
            className="text-white mb-4 text-2xl sm:text-4xl lg:text-6xl 
          lg:leading-normal
          font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {" "}
              Hi,I&apos;m{""}
            </span>
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
            maiores facilis ab, animi molestiae fugiat exercitationem sit
            officia nesciunt?
          </p>
          <div>
            <Link
              id="#contact"
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 
            bg-gradient-to-br to-primary-500 from-secondary-500 text-white
            hover:bg-slate-200"
            >
              Hire Me
            </Link>
            <Link href="https://drive.google.com/file/d/1yD5ZgBj6jTplxzgB4oh-1P1R8TluvgA6/view?usp=drive_link">
              <button
                className="px-1 py-1 w-full sm:w-fit rounded-full 
            bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white border border-white mt-3"
              >
                <span
                  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2
              "
                >
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-color2 bg-opacity-20 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden">
            <Image
              priority
              quality={95}
              src={profileImg}
              className="relative pt-6 transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  "
              alt="bannerImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
