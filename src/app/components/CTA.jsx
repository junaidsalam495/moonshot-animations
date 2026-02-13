/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function CTA() {
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
    <section className="font-sora relative z-10 flex flex-col items-center justify-start overflow-hidden bg-[#00050A] pb-10 pt-20 lg:pt-36">
      <div className="absolute -left-70 top-80 bottom-0 w-150 pointer-events-none">
        <div
          className="w-2/3 h-1/3"
          style={{
            background:
              "linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
            filter: "blur(150px)",
          }}
        />
      </div>
      <div className="absolute -right-100 top-200 bottom-0 w-150 pointer-events-none">
        <div
          className="w-2/3 h-1/3"
          style={{
            background:
              "linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
            filter: "blur(150px)",
          }}
        />
      </div>
      <div className="text-center relative z-10">
        <p className="text-white/60 text-[clamp(30px,2vw,80px)] lg:text-[clamp(30px,4vw,80px)] mb-4 lg:mb-2 tracking-tight font-sora font-light">
          Let’s start
        </p>
        <h2 className="text-white text-[clamp(60px,6vw,138px)] lg:text-[clamp(60px,8vw,138px)] -mt-8 mb-2 font-medium tracking-tight leading-tight">
          <span
            className="block"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Your{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Project
            </span>
          </span>
        </h2>
      </div>
      <Image
        src="/images/elevate-icon.png"
        alt="Elevate Icon"
        width={100}
        height={100}
        className="w-30 max-1280:w-20 max-1280:pb-3 max-1440:w-25 relative z-10"
      />
      <div
        className="relative py-12 max-1280:min-h-[55vh] max-1366:min-h-[60vh] max-1440:min-h-[65vh] max-1600:min-h-[70vh] min-h-[95vh] max-1440:max-w-[32.5%] max-1600:max-w-[30%] max-w-[35%] max-lg:max-w-[45%] max-sm:max-w-[70%] z-10 -mt-10 flex items-center justify-center gradient-border"
        style={{
          borderRadius: "1333.3px",
          mixBlendMode: "screen",
        }}
      >
        <div className="flex flex-col items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover rounded-full items-center overflow-visible"
          >
            <source src="/videos/cta-video.webm" type="video/webm" />
          </video>

          <p className="font-sora font-normal mt-12 text-center text-lg lg:text-xl 1366:text-2xl 1600:text-3xl text-white/50">
            Ready to{" "}
            <span className="text-white">
              elevate
              <br /> your brand?
            </span>
          </p>
        </div>
      </div>
      <div className="-mt-16 max-1440:-mt-14 max-sm:-mt-13 relative z-10 flex flex-col items-center">
        <Link href="/contact-us">
          <button
            type="button"
            className="hover:cursor-pointer mt-6 h-18 w-18 max-1440:w-16 max-1440:h-16 max-lg:w-12 max-lg:h-12 max-sm:h-12 max-sm:w-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 hover:rotate-90 transition hover:bg-[#d42290] hover:text-white rotate-45"
          >
            <FaArrowUpLong size={24} />
          </button>
        </Link>
      </div>
      <img
        src="/images/cta-unique.png"
        alt="Unique typography"
        className="w-full h-auto object-contain opacity-40 -mt-10 md:-mt-15 lg:-mt-36"
        draggable={false}
      />
      <div className="max-sm:-mt-43 -mt-50 lg:-mt-53 1280:-mt-56 1366:-mt-60 1920:-mt-65 relative w-screen inset-0 flex items-center justify-center pointer-events-none z-50">
        <div
          className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
          style={{
            background:
              "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
            backgroundSize: "200% 100%, 200% 100%",
          }}
        />
      </div>
    </section>
  );
}
