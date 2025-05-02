"use client";
import React, { useState } from 'react';
import Hero from '@/components/Hero/Hero';
import Card from '@/components/Card/Card';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { 
  SiReact, SiTypescript, SiJavascript, SiPython, SiNextdotjs, 
  SiC, SiCss3, SiHtml5, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiPhp, SiSupabase, SiFirebase, SiMysql, SiPostgresql,
  SiGithub, SiLinkedin, SiGmail, SiGit, SiNetlify, SiVercel
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const frontendSkills = [
    { icon: <SiReact className="h-full w-full" />, description: "React - A JavaScript library for building user interfaces", color: "#61DAFB" },
    { icon: <SiNextdotjs className="h-full w-full" />, description: "Next.js - The React framework for production", color: "#000000" },
    { icon: <SiTypescript className="h-full w-full" />, description: "TypeScript - Typed JavaScript for better development", color: "#3178C6" },
    { icon: <SiJavascript className="h-full w-full" />, description: "JavaScript - The language of the web", color: "#F7DF1E" },
    { icon: <SiHtml5 className="h-full w-full" />, description: "HTML5 - The standard markup language", color: "#E34F26" },
    { icon: <SiCss3 className="h-full w-full" />, description: "CSS3 - Style sheet language", color: "#1572B6" },
    { icon: <SiTailwindcss className="h-full w-full" />, description: "Tailwind CSS - Utility-first CSS framework", color: "#06B6D4" },
  ];

  const backendSkills = [
    { icon: <SiNodedotjs className="h-full w-full" />, description: "Node.js - JavaScript runtime environment", color: "#339933" },
    { icon: <SiExpress className="h-full w-full" />, description: "Express.js - Web application framework for Node.js", color: "#000000" },
    { icon: <SiPython className="h-full w-full" />, description: "Python - Simple yet powerful programming language", color: "#3776AB" },
    { icon: <SiPhp className="h-full w-full" />, description: "PHP - Server-side scripting language", color: "#777BB4" },
    { icon: <FaJava className="h-full w-full" />, description: "Java - Object-oriented programming language", color: "#007396" },
    { icon: <SiC className="h-full w-full" />, description: "C - Low-level programming language", color: "#A8B9CC" },
  ];

  const otherSkills = [
    { icon: <SiGit className="h-full w-full" />, description: "Git - Distributed version control system", color: "#F05032" },
    { icon: <SiGithub className="h-full w-full" />, description: "GitHub - Code hosting platform", color: "#181717" },
    { icon: <SiSupabase className="h-full w-full" />, description: "Supabase - Open source Firebase alternative", color: "#3ECF8E" },
    { icon: <SiFirebase className="h-full w-full" />, description: "Firebase - Google's mobile platform", color: "#FFCA28" },
    { icon: <SiMysql className="h-full w-full" />, description: "MySQL - Popular open-source database", color: "#4479A1" },
    { icon: <SiPostgresql className="h-full w-full" />, description: "PostgreSQL - Advanced open-source database", color: "#4169E1" },
    { icon: <SiNetlify className="h-full w-full" />, description: "Deployment on Netlify", color: "#4169E1" },
    { icon: <SiVercel className="h-full w-full" />, description: "Deployment on Vercel", color: "#4169E1" },
    
    
  ];

  const softSkills = [
    { 
      title: "Leadership",
      description: "Experienced in leading teams and managing projects effectively",
      icon: "👥"
    },
    { 
      title: "Communication",
      description: "Strong verbal and written communication skills",
      icon: "💬"
    },
    { 
      title: "Team Player",
      description: "Collaborative mindset with strong teamwork abilities",
      icon: "🤝"
    },
    { 
      title: "Problem Solving",
      description: "Analytical thinker with creative solutions",
      icon: "🧩"
    },
    { 
      title: "Time Management",
      description: "Efficient in managing multiple tasks and deadlines",
      icon: "⏱️"
    }
  ];

  return (
    <div>
      <Hero/>
      <div className="flex flex-col items-center py-16">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">My Programming Skills</h2>
        
        {/* Frontend Skills */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Frontend Development</h3>
            <button
              onClick={() => setShowFrontend(!showFrontend)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              {showFrontend ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {frontendSkills.slice(0, showFrontend ? frontendSkills.length : 3).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="ext-xl sm:text-2xl  font-semibold text-white">Backend Development</h3>
            <button
              onClick={() => setShowBackend(!showBackend)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              {showBackend ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {backendSkills.slice(0, showBackend ? backendSkills.length : 3).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="ext-xl sm:text-2xl  font-semibold text-white">Other Technologies</h3>
            <button
              onClick={() => setShowOther(!showOther)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              {showOther ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {otherSkills.slice(0, showOther ? otherSkills.length : 3).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="flex flex-col items-center py-16">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Soft Skills & Experience</h2>
          
          {/* GDG Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-16"
          >
            <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-[#4285F4] to-[#34A853] p-1">
              <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
              <div className="relative h-full w-full flex flex-col items-center justify-center p-6">
                <div className="relative w-24 h-24 mb-4">
                  <Image 
                    src="/GDGLogo.png"
                    alt="GDG Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Google Developer Groups</h3>
                <p className="text-white/80 text-center">Core Team Member - Web Team</p>
                <div className="absolute bottom-4 right-4 text-white/60 text-sm">Since 2024</div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
