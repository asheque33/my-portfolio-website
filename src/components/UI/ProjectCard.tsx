"use client";
import { EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ singleProject }: any) => {
  return (
    // <div className="w-[35dvh] sm:w-[40dvh] mx-auto md:w-[35dvh] lg:w-[45dvh]    flex flex-col justify-center p-4 mr-6  md:mr-0 border border-gray-700 rounded-lg shadow-2xl">
    <div className="w-[80dvh] sm:w-[75dvh] mx-auto md:w-[60dvh] h-[550px] flex flex-col justify-center p-4  border border-gray-700 rounded-lg shadow-2xl">
      <div className="">
        <Image
          src={singleProject.image || "Unavailable"}
          height={300}
          alt="Image"
          className="w-full h-60 rounded-md overflow-hidden object-cover object-center"
          width={300}
        />
      </div>
      <p className="text-2xl uppercase  font-semibold tracking-[0.10em] text-transparent  py-3  bg-clip-text  bg-color6 ">
        {singleProject.title.length > 15
          ? singleProject.title.substring(0, 15)
          : singleProject.title}
      </p>
      <div className="pb-3">
        <p className="text-lg font-light text-white">
          {singleProject.description.length > 200
            ? singleProject.description.substring(0, 200)
            : singleProject.description}
          ...
        </p>
      </div>
      <div className="flex justify-start items-start flex-wrap gap-2 pb-3">
        {singleProject?.technology.map((tech: string, index: number) => {
          return (
            <span
              className="text-[#F86D45] bg-[#3c3d37] text-xs md:text-sm py-0.5 px-1 rounded "
              key={index}
            >
              {tech}
            </span>
          );
        })}
      </div>

      <div className="flex p-2 w-full justify-center  ">
        <Link
          href={singleProject.liveLink}
          rel=""
          target="_blank"
          className="z-[1]"
        >
          <button className="  h-10 border border-gray-700 px-4 py-2 rounded-l-full  font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
            <p className="flex justify-between items-center gap-2 text-transparent bg-clip-text bg-color6">
              <span>
                <EyeIcon className="size-4   text-color6" />
              </span>
              <span>Live</span>
            </p>
          </button>
        </Link>

        <Link
          href={singleProject.clientLink}
          rel=""
          target="_blank"
          className="z-[1]"
        >
          <button className="min-w-auto  h-10  p-2 border border-gray-700 rounded-none text-transparent bg-clip-text bg-color6  font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
            Client
          </button>
        </Link>
        <Link
          href={singleProject.serverLink}
          rel=""
          target="_blank"
          className="z-[1]"
        >
          <button className="min-w-auto  h-10  p-2 border border-gray-700 rounded-r-full  text-transparent bg-clip-text bg-color6 font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
            Server
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
