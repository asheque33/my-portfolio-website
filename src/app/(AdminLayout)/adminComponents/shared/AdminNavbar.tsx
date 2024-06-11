"use client";
import Link from "next/link";
import Image from "next/image";
import adminImg from "../../../../../public/assets/images/banner.png";

const AdminNavbar = () => {
  return (
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
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <Image src={adminImg} alt="adminImg" width={48} height={48} />
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
