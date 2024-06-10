import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ singleProject }) => {
  return (
    <div className="">
      <div className="  w-[30dvh] sm:w-[40dvh] mx-auto md:w-[50dvh]    flex flex-col justify-center p-4 border border-gray-700 rounded-lg shadow-2xl">
        <p className="text-2xl uppercase text-gray-900 font-semibold tracking-[0.5em] text-transparent  pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          {singleProject.title.length > 15
            ? singleProject.title.substring(0, 15)
            : singleProject.title}
        </p>

        <div className="">
          <Image
            src={singleProject.image || "Unavailable"}
            height={300}
            alt="Image"
            className="w-full h-60 rounded-md overflow-hidden object-cover object-center"
            width={300}
          />
        </div>

        <div className="flex p-2 w-full justify-center  ">
          <Link
            href={singleProject.liveLink}
            rel=""
            target="_blank"
            className="z-[1]"
          >
            <button className="min-w-auto  h-10 border border-gray-700 px-4 py-2 rounded-l-full hover:bg-gray-500 text-neutral-600  hover:text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
              Live
            </button>
          </Link>

          <Link
            href={singleProject.clientLink}
            rel=""
            target="_blank"
            className="z-[1]"
          >
            <button className="min-w-auto  h-10  p-2 border border-gray-700 rounded-none  hover:bg-gray-500 text-neutral-600  hover:text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
              Client
            </button>
          </Link>
          <Link
            href={singleProject.serverLink}
            rel=""
            target="_blank"
            className="z-[1]"
          >
            <button className="min-w-auto  h-10  p-2 border border-gray-700 rounded-r-full  hover:bg-gray-500 text-neutral-600 hover:text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
              Server
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
