/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import ScrollReveal from "@/components/lightswind/scroll-reveal";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AboutUsCards from "../AboutUsCards";
import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import Smoke from "../smoke/smoke";

const AboutUs = () => {
  const smokeRef = useRef(null);

  useEffect(() => {
    const container = smokeRef.current;
    if (!container) return;

    function spawn(x, y) {
      const el = document.createElement("div");
      el.className = "elem";
      el.style.left = `${x - 25}px`;
      el.style.top = `${y - 25}px`;
      container.appendChild(el);
      el.addEventListener("animationend", () => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    }

    const interval = setInterval(() => {
      const rect = container.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      spawn(x, y);
      while (container.children.length > 30) {
        container.removeChild(container.firstChild);
      }
    }, 700);

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawn(x, y);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="about-us"
      className="relative isolate w-full bg-[#00060b] -mt-15 pt-15 z-10 overflow-hidden"
    >
      <Smoke />

      <div className="mx-auto max-w-[90%] px-6 pt-16 1600:pt-24 pb-20 1280:pb-30 1366:pb-40 1600:pb-56">
        <div className="pb-10 1366:pb-16 1600:pb-24 lg:flex lg:items-start">
          {/* Small "About Us" label */}
          <div className="lg:mr-30 1366:mr-40 1600:mr-50 flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl">
            <img src="/images/about-us/icon.png" />
            <p className="font-poppins font-normal text-nowrap">
              About Us
            </p>
          </div>

          <div>
            <h2
              id="about-us-index-scroll-reveal"
              className="tracking-[-0.05em] font-normal -mt-5"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <ScrollReveal enableBlur={false}>
                Tech With Moonshot delivers smart digital <br /> design and
                strategy, navigating trends and metrics <br /> to craft
                powerful, tailored solutions for your brand.
              </ScrollReveal>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media screen and (min-width: 1600px) and (max-width: 1600px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 40px;
                        }
                    }
                    @media screen and (min-width: 1440px) and (max-width: 1440px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 35px;
                        }
                    }
                    @media screen and (min-width: 1280px) and (max-width: 1366px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 33px;
                        }
                    }
                    @media screen and (min-width: 1024px) and (max-width: 1024px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 25px;
                        }
                    }
                  `,
                }}
              />
            </h2>
            <div className="1440:mt-8">
              <Button text="Learn More About" href="/about-us" />
            </div>
          </div>
        </div>

        <AboutUsCards />
      </div>
      <div className="relative">
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[90%] h-[40px] rounded-t-full blur-[80px] bg-center bg-cover"
            style={{
              backgroundImage: `url('/images/about-us/image.png')`,
            }}
          />
        </div> */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[80%] h-30 rounded-t-full blur-[80px] in-out"
            style={{
              background:
                "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
              backgroundSize: "200% 100%, 200% 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
