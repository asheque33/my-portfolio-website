"use client";
import React from "react";
import Link from "next/link";
import { HomeIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <div className="w-[90%] mx-auto">
      <nav className="w-full">
        <ul className="flex justify-around items-center bg-slate-400 rounded-t-md py-1 gap-x-96">
          <Link href="/" className="text-white text-xl btn btn-ghost">
            ASHEQUE
          </Link>
          <div className="flex justify-around gap-x-8 text-white">
            <div className="flex flex-col gap-y-1 ">
              <p>Belal Assad</p>
              <p className="text-end">Admin</p>
            </div>
            <div className="avatar py-1">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </ul>
      </nav>

      <div className="grid grid-cols-12 w-full ">
        <div className="border-r border-gray-300 col-span-2  h-screen sticky top-0 left-0 bg-white">
          <ul className=" mt-4">
            <li className="mb-2 ">
              <Link
                href={"/admin"}
                className={`${
                  path === "/admin" ? "bg-gray-100" : ""
                } hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}
              >
                <HomeIcon />
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={"/admin/projects"}
                className={`${
                  path === "/admin/projects" ? "bg-gray-100" : ""
                } hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}
              >
                <RocketIcon />
                Projects
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={"/admin/skills"}
                className={`${
                  path === "/admin/skills" ? "bg-gray-100" : ""
                } hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}
              >
                <RocketIcon />
                Skills
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={"/admin/blogs"}
                className={`${
                  path === "/admin/blogs" ? "bg-gray-100" : ""
                } hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}
              >
                <ReaderIcon />
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 my-4 mx-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
