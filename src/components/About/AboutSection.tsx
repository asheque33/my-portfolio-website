"use client";
import Image from "next/image";
import aboutImage from "../../../public/assets/about-image.png";
import TabButton from "../TabButton";
import { useState, useTransition } from "react";
const dataTab = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc ml-2">
        <li>React</li>
        <li>Redux</li>
        <li>Next</li>
        <li>TypeScript</li>
        <li>Mongodb</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc ml-2">
        <li>Graduate in Mathematics</li>
        <li>University of Dhaka</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white scroll-mt-24">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src={aboutImage} alt="aboutImage" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a Mern Stack developer with a passion for creating interactive
            and responsive websites.I have worked with
            javaScript,TypeScript,React,Redux,Next.js,Node.js,Express and
            Mongodb.I am always looking to expand my knowledge and skills.I am
            determined to enter deep in any technology in this field.So, I am
            very excited to work with others to create amazing websites.
          </p>
          <div className="flex flex-row gap-2 mt-8">
            <TabButton
              selectedTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectedTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-6">
            {dataTab.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
