'use client';

import Image from 'next/image';

const Page = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16">
      <div className=" relative z-10 max-w-6xl mx-auto flex xs:flex-col md:flex-row gap-16 items-center">

        {/* Image */}
        <div className="overflow-hidden shadow-2xl basis-1/2 flex justify-center">
          <div className="w-[20rem] h-[20rem] relative">
            <Image
              src="/majedpic.png" // Make sure this file is in /public
              alt="Majed Shmait"
              className="rounded-full object-cover w-full h-full"
              priority
              fill
            />
          </div>
        </div>

        {/* Content */}
        <div className="basis-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 xs:text-center md:text-left">
            Meet <span className="text-blue-600">Majed Shmait</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 xs:text-center md:text-left">
            I’m a <span className="font-medium text-blue-600">Full Stack Developer</span> who brings digital ideas to life — fast. While many take months to build products, I deliver high-quality web apps in just <span className="text-green-600 font-semibold">2 days</span>.
          </p>

          <p className="text-md text-gray-600 dark:text-gray-400 mb-4 xs:text-center md:text-left">
            Skilled in <strong>React, Express, Supabase</strong>, I merge sleek design with powerful backend logic. My focus is performance, clean code, and delivering scalable apps — quickly.
          </p>

          <p className="text-md text-gray-600 dark:text-gray-400 mb-6 xs:text-center md:text-left">
            Beyond full stack work, I explore AI, prioritize user experience, and thrive on solving real-world challenges with technology.
          </p>
          <div className='w-full flex justify-center md:justify-start'>
            <a
              href="https://www.linkedin.com/in/majed-shmait/" target="_blank" rel="noopener noreferrer"
              className="xs:text-center md:text-left inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-medium shadow transition duration-200"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
