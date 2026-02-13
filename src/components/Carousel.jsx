/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'motion/react';

const DEFAULT_ITEMS = [
  {
    title: 'UNIT MOVE',
    description: 'The co-founders of Unit Move, Jaye and Claire, had faced digital marketing complications until they met our digital performance gurus.',
    stats: [
      { value: '68%', label: 'Sixty Eight per cent increase in lead conversions.' },
      { value: '50%', label: 'Fifty per cent increase in lead conversions.' },
      { value: '72%', label: 'Seventy Two per cent increase in lead conversions.' }
    ],
    badge: 'PASSION IN BUSINESS',
    image: '/images/proficients/laptop1.png',
    id: 1
  },
  {
    title: 'MARKING',
    description: 'The co-founders of Marking, Jaye and Claire, had faced digital marketing complications until they met our digital performance gurus.',
    stats: [
      { value: '55%', label: 'Sixty Eight per cent increase in lead conversions.' },
      { value: '80%', label: 'Fifty per cent increase in lead conversions.' },
      { value: '65%', label: 'Seventy Two per cent increase in lead conversions.' }
    ],
    badge: 'PASSION IN BUSINESS',
    image: '/images/proficients/laptop2.png',
    id: 2
  },
  {
    title: 'UNIT MOVE',
    description: 'The co-founders of Unit Move, Jaye and Claire, had faced digital marketing complications until they met our digital performance gurus.',
    stats: [
      { value: '68%', label: 'Sixty Eight per cent increase in lead conversions.' },
      { value: '50%', label: 'Fifty per cent increase in lead conversions.' },
      { value: '72%', label: 'Seventy Two per cent increase in lead conversions.' }
    ],
    badge: 'PASSION IN BUSINESS',
    image: '/images/proficients/laptop1.png',
    id: 3
  },
  {
    title: 'MARKING',
    description: 'The co-founders of Marking, Jaye and Claire, had faced digital marketing complications until they met our digital performance gurus.',
    stats: [
      { value: '55%', label: 'Sixty Eight per cent increase in lead conversions.' },
      { value: '80%', label: 'Fifty per cent increase in lead conversions.' },
      { value: '65%', label: 'Seventy Two per cent increase in lead conversions.' }
    ],
    badge: 'PASSION IN BUSINESS',
    image: '/images/proficients/laptop2.png',
    id: 4
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = '100%',
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const itemWidth = containerWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const carouselItems = loop ? [...items, items[0]] : items;

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0
      }
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4'
        }`}
      style={{
        width: baseWidth,
        ...(round && containerWidth && { height: `${containerWidth}px` })
      }}>
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}>
        {carouselItems.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${round
                ? 'items-center justify-center text-center bg-[#060010] border-0'
                : 'items-start justify-between rounded-[40px] border border-white/10'
                } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                backgroundColor: 'rgba(3, 3, 3, 1)',
                ...(round && { borderRadius: '50%' })
              }}
              transition={effectiveTransition}>

              {/* Gradient - Bottom Left */}
              <div
                className="absolute -left-32 -bottom-32 w-100 h-150 rounded-full blur-[100px] opacity-60 pointer-events-none"
                style={{
                  background: 'linear-gradient(150deg, rgba(255, 198, 40, 0.80) 39.93%, rgba(250, 40, 137, 0.80) 60.8%, rgba(62, 95, 249, 0.80) 91.46%)'
                }}
              />

              {/* Gradient - Top Right */}
              <div
                className="absolute -top-2 -right-2 w-100 h-96 rounded-full blur-[100px] opacity-100 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, #03499F 0.07%, #D722AF 99.93%)'
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Section */}
                <div className="flex flex-col justify-between space-y-6 col-span-1">
                  <h3 className="text-3xl lg:text-6xl font-semibold text-white" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-md lg:text-[22px] max-w-lg font-light" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                    {item.description}
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-x-4 gap-y-12">
                    {item.stats?.map((stat, idx) => (
                      <div key={idx} className={`space-y-4 ${idx === 2 ? 'col-span-1' : ''}`}>
                        <div className="text-5xl md:text-7xl text-white" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                          {stat.value}
                        </div>
                        <p className="text-white/60 text-sm md:text-lg" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section - Laptop Image & Badge */}
                <div className="col-span-1 flex flex-col justify-between">
                  <div className="hidden md:flex items-start justify-end gap-2 text-white/70 text-md font-inter
                  absolute right-10">
                    <div className="text-right flex">
                      <p className="text-white">PASSION<span className="text-white/50">{" "} IN <br /> {item.badge?.split(' ')[2] || 'BUSINESS'}</span></p>
                    </div>
                  </div>

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover pointer-events-none select-none"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`mt-10 flex w-full justify-center items-center gap-6 ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className='flex border border-white/20 rounded-full'>
          {/* Previous Button */}
          <button
            onClick={() => {
              if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
              } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
              }
            }}
            disabled={!loop && currentIndex === 0}
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="mt-4 flex w-37.5 justify-center gap-6">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                  ? 'bg-white'
                  : 'bg-white/40'
                  }`}
                animate={{
                  scale: currentIndex % items.length === index ? 1.2 : 1
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => {
              if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
              }
            }}
            disabled={!loop && currentIndex === items.length - 1}
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
