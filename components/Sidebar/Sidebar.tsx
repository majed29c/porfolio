"use client";
import React from 'react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { FiHome, FiUser, FiFolder, FiMail, FiDownload } from 'react-icons/fi'; // Import FiDownload
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const menuItems = [
    { name: "Home", icon: <FiHome size={20} />, path: "/" },
    { name: "About", icon: <FiUser size={20} />, path: "/about" },
    { name: "Projects", icon: <FiFolder size={20} />, path: "/projects" },
    { name: "Contact", icon: <FiMail size={20} />, path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 flex flex-col h-screen w-[50vw] md:w-[50vw] px-6 py-6 space-y-6 bg-white/85 text-black font-roboto opacity-98 z-20 
        transition-all ease-in-out duration-500 transform ${isOpen ? 'animate-slideLeft' : ''} ${isClosed ? 'animate-slideRight' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        willChange: 'transform',
      }}
    >
      <button
        className="absolute top-2 right-2 z-20 text-black hover:text-gray-300 transition-colors"
        onClick={handleClose}
      >
        <X size={24} />
      </button>

      <div className="flex flex-col space-y-4 mt-12">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
            onClick={handleClose}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

        {/* CV Download Button */}
        <a
          href="/pdf/Majed_Shmait_Resume.pdf"
          className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors"
          download="Majed_Shmait_Resume.pdf"
        >
          <FiDownload size={20} /> {/* Icon */}
          CV Download
        </a>
      </div>
    </div>
  );
};

export default Sidebar;