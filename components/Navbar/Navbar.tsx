"use client";
import React, { useState } from "react";
import Link from "next/link";
import Mlogo from "@/public/Mlogo.png";
import Image from "next/image";
const Navbar = () => {
  const [selected, isSelected] = useState("Home");

  return (
    <div className="relative z-10 flex w-full items-center mt-4 p-2">
      <Image src={Mlogo} alt="Logo" width={50} height={50} className="ml-10" />
      <p className="font-roboto text-white">Majed Shmait</p>
      <div className="flex items-center gap-16 ml-[16vw]">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <Link href={`/${item.toLowerCase()}`} key={item}>
            <p
              className={`font-roboto cursor-pointer px-2 py-1 text-white ${
                selected === item
                  ? " border-b-2 border-[rgba(0,0,150,0.7)]"
                  : ""
              }`}
              onClick={() => isSelected(item)}
            >
              {item}
            </p>
          </Link>
        ))}
      </div>
      <a
        href="/pdf/Majed_Shmait_Resume.pdf"
        className="ml-auto text-black mr-[5vw]"
        download="Majed_Shmait_Resume.pdf"
      >
        <button
          className="border-none bg-white font-roboto rounded-md p-2 
          transition-transform duration-200 ease-in-out hover:scale-105"
        >
          CV Download
        </button>
      </a>

    </div>
  );
};

export default Navbar;