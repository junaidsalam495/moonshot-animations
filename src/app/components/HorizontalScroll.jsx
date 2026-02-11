"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollCards({ cards }) {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const strip = stripRef.current;

      if (!section || !strip) return;

      const stripWidth = strip.scrollWidth;
      const viewportWidth = window.innerWidth;

      if (stripWidth <= viewportWidth) return;

      const getScrollAmount = () => -(stripWidth - viewportWidth);

      const tween = gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${stripWidth - viewportWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [cards] }
  );

  const formatTitle = (title) => {
    if (!title) return title;
    if (/<br\s*\/?>/i.test(title)) {
      return title;
    }
    const words = title.trim().split(/\s+/);
    if (words.length === 2) {
      return `${words[0]}<br />${words[1]}`;
    }
    return title;
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="relative w-full overflow-hidden items-center hidden lg:flex"
      >
        <div
          ref={stripRef}
          className="flex flex-nowrap w-max px-10 lg:px-20 mx-auto"
        >
          {cards.map((card, index) => (
            <div
              key={card.id || index}
              className="w-[85vw] md:w-[45vw] lg:w-[23vw] shrink-0 box-border"
            >
              <div className="flex flex-col h-full justify-start space-y-6 border-l-2 border-white/20 pl-8 transition-colors duration-300 hover:border-[#D42290]">
                <div className="text-[#D42290] font-mono text-xl">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div
                  className="w-[85%] min-h-18 text-[clamp(16px,1.25vw,30px)] uppercase text-white leading-[1.1] font-sora"
                  dangerouslySetInnerHTML={{
                    __html: formatTitle(card.title),
                  }}
                />
                <div
                  className="w-[92.5%] text-[clamp(10px,1vw,16px)] font-light text-white/70 leading-[1.8] font-sora"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[1.5em] lg:hidden grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card, index) => (
          <div
            key={card.id || index}
            className="w-full box-border"
          >
            <div className="flex flex-col h-full justify-start space-y-6 border-l-2 border-white/20 pl-8 transition-colors duration-300 hover:border-[#D42290]">
              <div className="text-[#D42290] font-mono text-xl">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div
                className="w-[85%] text-[clamp(18px,1.25vw,30px)] uppercase text-white leading-[1.1] font-sora"
                dangerouslySetInnerHTML={{
                  __html: formatTitle(card.title),
                }}
              />
              <div
                className="w-[92.5%] text-[clamp(12px,1vw,16px)] font-light text-white/70 leading-[1.8] font-sora"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
