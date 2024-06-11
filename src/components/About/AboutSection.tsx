"use client";
import Image from "next/image";
import aboutImage from "../../../public/assets/about-image.png";

import { useState, useTransition } from "react";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  return (
    <section id="about" className="text-white scroll-mt-16">
      <h2 className="font-bold text-center p-6 md:p-8 text-neutral-300 sm:text-3xl text-xl md:text-4xl">
        About Me
      </h2>
      <div className="max-w-screen-lg w-full overflow-x-hidden mx-auto p-8 sm:p-4">
        <div className="flex flex-wrap ">
          <p className="text-wrap text-start  sm:text-center  text-base md:text-lg ">
            I am a Mern Stack developer with a passion for creating interactive
            and responsive websites.I have worked with
            javaScript,TypeScript,React,Redux,Next.js,Node.js,Express and
            Mongodb.I am always looking to expand my knowledge and skills.I am
            determined to enter deep in any technology in this field.So, I am
            very excited to work with others to create amazing websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
