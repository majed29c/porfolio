"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import profile from "@/public/majedpic.png";

const Hero = () => {
  const aboutMe = [
    {
      base: "I'm Majed Shmait",
      variations: [
        " a Full Stack Developer",
        " a Problem Solver",
        " a Tech Enthusiast"
      ]
    },
    {
      base: "I turn ideas into",
      variations: [
        " powerful, user-friendly websites",
        " innovative digital solutions",
        " reality through code"
      ]
    },
    {
      base: "Others build sites in",
      variations: [
        " weeks — I build them in days",
      ]
    }
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [variationIndex, setVariationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentItem = aboutMe[textIndex];
    const fullText = currentItem.base + currentItem.variations[variationIndex];

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentIndex > currentItem.base.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, 30);
      } else {
        if (variationIndex < currentItem.variations.length - 1) {
          setVariationIndex(prev => prev + 1);
          setIsDeleting(false);
        } else {
          setVariationIndex(0);
          setTextIndex(prev => (prev + 1) % aboutMe.length);
          setCurrentText('');
          setCurrentIndex(0);
          setIsDeleting(false);
        }
      }
    } else {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 80);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, textIndex, variationIndex, aboutMe]);

  return (
    <div className='relative z-10 flex flex-col md:flex-row justify-between items-center w-full mt-12 md:mt-24 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 gap-8 md:gap-12'>
      <div className='flex flex-col justify-center order-2 md:order-1 basis-1/2 w-full md:w-auto text-center md:text-left'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto text-white mb-4 max-w-[600px] mx-auto md:mx-0 leading-tight'>
          {currentText}
          <span className='animate-blink'>|</span>
        </h1>
      </div>
      <div className='order-1 md:order-2 basis-1/2 flex justify-center md:justify-end'>
        <Image 
          src={profile} 
          alt='profile' 
          className='h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[20rem] md:w-[20rem] lg:h-[22rem] lg:w-[22rem] xl:h-[24rem] xl:w-[24rem] rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300'
          priority
        />
      </div>
    </div>
  )
}

export default Hero;