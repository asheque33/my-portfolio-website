"use client";
import eduImage from "../../../public/assets/programmer-bg-remove.png";
import Image from "next/image";
import { useState, useTransition } from "react";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  return (
    <section id="about" className="text-white scroll-mt-16">
      <h2 className="font-bold text-center mt-4 p-6 md:p-8 text-neutral-300 sm:text-3xl text-xl md:text-4xl">
        About Me
      </h2>
      <div className="max-w-screen-lg w-full overflow-x-scroll sm:overflow-x-hidden mx-auto p-2 sm:p-4">
        <div className="flex flex-col flex-wrap ">
          <p className="text-wrap text-start  sm:text-center  text-base md:text-lg ">
            I am a Frontend developer with a passion for creating interactive
            and responsive websites.I have worked with
            javaScript,TypeScript,React,Redux,Next.js,Node.js,Express and
            Mongodb.I am always looking to expand my knowledge and skills.I am
            determined to enter deep in any technology in this field.So, I am
            very excited to work with others to create amazing websites.
          </p>
        </div>
      </div>
      <section id="education" className="grid grid-cols-12 co">
        <div
          id="education-text"
          className="col-span-12 sm:col-span-6 w-4/5 sm:w-3/4 mx-auto  mb-6 sm:mb-0 text-wrap text-start "
        >
          <h2 className="font-medium text-center mt-4 p-6 md:p-8 text-neutral-300 sm:text-3xl text-xl md:text-4xl">
            Education
          </h2>

          <div id="education-text" className="text-white">
            <p className="tracking-wide font-medium md:text-lg">
              Bachelor Of Science
            </p>
            <h2 className="text-lg font-medium md:text-xl  tracking-wider">
              Mathematics
            </h2>
            <h4 className="tracking-wide text-lg md:text-xl">
              University Of Dhaka
            </h4>
            <div>
              I am a bachelor student studying under a University is
              Mathematics.During the journey, I was recognized by Programming
              specially the past last 2 years.In that time, I have suffered a
              lot specially facing so many errors which I had to solve.Then, I
              realized that that sufferings teach me how keep align with
              something which I will be benefited in the long run including soft
              skills.
            </div>
          </div>
        </div>
        <div
          id="education-image"
          className="col-span-12 sm:col-span-6 w-4/5 sm:w-3/4 mx-auto md:mx-0"
        >
          <Image
            src={eduImage}
            height={300}
            width={400}
            className="object-cover h-full w-full shadow-md"
            alt="education"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
