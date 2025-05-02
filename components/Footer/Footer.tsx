"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { useSelected } from "@/context/SelectedContext";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { setSelected } = useSelected();
  return (
    <footer className="relative mt-32 py-16 bg-gradient-to-b from-transparent to-black/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="flex items-center space-x-4 text-white/70 hover:text-white transition-colors">
              <SiGmail className="w-5 h-5" />
              <a
                href="mailto:majedshmaitlu@email@example.com"
                className="text-sm"
                onClick={scrollToTop}
              >
                majedshmaitlu@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span className="text-sm">+961 81 026 380</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                onClick={() => {
                  setSelected("About");
                  scrollToTop();
                }}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-white/70 hover:text-white transition-colors text-sm"
                onClick={() => {
                  setSelected("Projects");
                  scrollToTop();
                }}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-white/70 hover:text-white transition-colors text-sm"
                onClick={() => {
                  setSelected("Contact");
                  scrollToTop();
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/majed29c"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white/70 hover:text-white transition-colors"
                onClick={scrollToTop}
              >
                <SiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/majed-shmait"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white/70 hover:text-white transition-colors"
                onClick={scrollToTop}
              >
                <SiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/majedshmait"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white/70 hover:text-white transition-colors"
                onClick={scrollToTop}
              >
                <SiInstagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Majed Shmait. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-white/50 text-sm">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.div>
              <span className="text-white/50 text-sm">using Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
