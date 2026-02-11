"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  icon,
  activeColor = "#D42290",
  className,
}) {
  return (
    <motion.div
      className={cn(
        "relative flex flex-col items-center justify-center text-center",
        "w-full h-75 p-8",
        "rounded-[18px] cursor-pointer overflow-hidden",
        "bg-[#3B1347] transition-colors",
        className
      )}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* Animated Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={{
          initial: { scaleY: 0, originY: 1 }, // Starts from bottom
          hover: { scaleY: 1, originY: 1 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Smooth easing
        style={{ backgroundColor: activeColor }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Icon & Title Group */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={{
            initial: { y: 20, color: "#fff" },
            hover: { y: 0, color: "#fff" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Icon Wrapper */}
          <div className="text-4xl">
            {React.isValidElement(icon)
              ? React.cloneElement(icon, {
                  className: "w-12 h-12 stroke-[1.5]",
                })
              : icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold font-sora">{title}</h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm font-medium leading-relaxed max-w-[90%]"
          variants={{
            initial: { opacity: 0, y: 20, height: 0, color: "#ffffff" },
            hover: { opacity: 1, y: 0, height: "auto", color: "#ffffff" },
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
