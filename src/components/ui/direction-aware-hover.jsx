/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  heading,
  number,
}) => {
  const ref = useRef(null);

  const [direction, setDirection] = useState("left");

  const handleMouseEnter = (
    event
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev,
    obj
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "w-2/4 h-2/4 bg-transparent rounded-[53px] overflow-hidden group/card relative border border-white/20",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div
            className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/90 z-10 transition duration-500"
          />
          <motion.div
            variants={variants}
            className="h-full w-full relative"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <img
              alt="image"
              className={cn("h-full w-full object-cover", imageClassName)}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("absolute top-[10%] left-[10%] z-40 text-[clamp(20px,2vw,30px)] font-semibold font-poppins")}
          >
            {heading}
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("absolute top-1/2 -translate-y-1/2 right-8 max-2xl:right-4 z-40")}
          >
            <img src="/images/images-arrow.png" alt="arrow" className="h-auto max-2xl:w-3/4 w-full opacity-90" />
          </motion.div>
          <motion.div
            variants={numberVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("font-poppins absolute -bottom-[24%] -left-[12%] z-40 text-right text-[clamp(180px,16vw,300px)]")}
          >
            {number}
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn("absolute bottom-12 right-[10%] z-40 text-right", childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 0,
  },
  bottom: {
    y: 0,
  },
  left: {
    x: 0,
  },
  right: {
    x: 0,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: 0,
    opacity: 1,
  },
  bottom: {
    y: 0,
    opacity: 1,
  },
  left: {
    x: 0,
    opacity: 1,
  },
  right: {
    x: 0,
    opacity: 1,
  },
};

const numberVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: 0,
    opacity: 0.1,
  },
  bottom: {
    y: 0,
    opacity: 0.1,
  },
  left: {
    x: 0,
    opacity: 0.1,
  },
  right: {
    x: 0,
    opacity: 0.1,
  },
};
