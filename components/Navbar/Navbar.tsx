"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Mlogo from "@/public/Mlogo.png";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation"; // Import usePathname for current route detection

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [selected]);

  useEffect(() => {
    const pathToSection: { [key: string]: string } = {
      "/": "Home",
      "/about": "About",
      "/projects": "Projects",
      "/contact": "Contact",
    };

    setSelected(pathToSection[pathname] || "Home");
  }, [pathname]);

  const clickMenuHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="relative z-10 flex w-full items-center justify-between mt-4 p-2">
        <p className="font-roboto text-white ml-6">Majed Shmait</p>
        <div className="items-center gap-10 hidden md:flex lg:gap-16">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              href={`${item === "Home" ? "/" : "/".concat(item.toLowerCase())}`}
              key={item}
            >
              <p
                className={`font-roboto cursor-pointer px-2 py-1 text-white ${
                  selected === item
                    ? "border-b-2 border-blue-600"
                    : "hover:border-b-2 hover:border-gray-400"
                }`}
                onClick={() => setSelected(item)}
              >
                {item}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center mr-6">
          <FiMenu
            className={`text-white text-3xl md:hidden cursor-pointer`}
            onClick={clickMenuHandler}
          />
          <a
            href="/pdf/Majed_Shmait_Resume.pdf"
            className="text-black hidden md:flex"
            download="Majed_Shmait_Resume.pdf"
          >
            <button
              className="border-none bg-white font-roboto rounded-md p-2
            transition-transform duration-200 ease-in-out hover:scale-105 items-center flex gap-2"
            >
              <FiDownload />
              CV Download
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;