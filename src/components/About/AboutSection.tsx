"use client";
import Image from "next/image";
import aboutImage from "../../../public/assets/about-image.png";

import { useState, useTransition } from "react";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  return (
    <section id="about" className="text-white scroll-mt-24">
      <h2 className="font-bold text-center p-4 sm:p-6 md:p-8 text-neutral-300 sm:text-3xl text-xl md:text-4xl">
        About Me
      </h2>
      <div className="flex flex-col p-8 items-center">
        <div className="my-4   text-center flex flex-col h-full ">
          <p className="text-base lg:text-lg ">
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
