"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons";
const AdminSidebar = () => {
  const path = usePathname();
  return (
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
  );
};

export default AdminSidebar;
