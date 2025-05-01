"use client";
import React from 'react';
import { X } from 'lucide-react';
import { useState } from 'react';
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [isClosed,setIsClosed]  = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500); 
  };
  return (
    <div
      className={`fixed top-0 right-0 flex flex-col h-screen w-[65vw] md:w-[50vw] px-6 py-6 space-y-6 bg-white text-black font-roboto opacity-95 z-20 
        transition-all ease-in-out duration-500 transform ${isOpen ? 'animate-slideLeft' : ''} ${isClosed? 'animate-slideRight': ''}`}
    >
      <button 
        className="absolute top-2 right-2 z-20 text-black hover:text-gray-300 transition-colors" 
        onClick={handleClose}
      >
        <X size={24} />
      </button>
      
      <div className="flex flex-col space-y-4 mt-12">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`${item === 'Home' ? '/' : '/'.concat(item.toLowerCase())}`}
            className="text-lg hover:text-gray-300 transition-colors"
            onClick={handleClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;