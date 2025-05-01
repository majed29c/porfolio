"use client";
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface CardData {
    icon: React.ReactNode;
    description: string;
    color?: string;
}

const Card = ({ icon, description, color = "#ffffff" }: CardData) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative h-[300px] w-[250px] overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
            
            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
                {/* Icon container with hover effect */}
                <div 
                    className="relative h-24 w-24 overflow-hidden rounded-full bg-white/5 p-4 transition-all duration-300 group-hover:scale-110"
                    style={{ color }}
                >
                    {icon}
                </div>

                {/* Description with gradient text */}
                <p className="text-center text-sm text-white/80 transition-all duration-300 group-hover:text-white">
                    {description}
                </p>
            </div>

            {/* Hover effect - subtle glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#18CCFC]/10 via-[#6344F5]/10 to-[#AE48FF]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
};

export default Card;