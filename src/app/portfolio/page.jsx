"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import PortfolioGrid from "../components/PortfolioGrid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import Smoke from "../components/smoke/smoke";
import CTA from "../components/CTA";

export default function Portfolio() {
  return (
    <div className="relative">
      <Smoke />

      {/* <CyberHologramLoader /> */}
      <section className="overflow-x-hidden max-md:bg-[#00050A]">
        <div className="max-md:hidden fixed inset-0 z-9999 pointer-events-none">
          <Ribbons
            baseThickness={6}
            colors={["#D42290"]}
            speedMultiplier={0.4}
            maxAge={500}
            enableFade={true}
          />
        </div>

        <Navbar />

        <section className="lg:flex items-center relative w-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-10">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-service-banner.png"
              style={{ filter: "brightness(1.25)" }}
            />
            <div className="absolute bottom-0 w-full h-64 bg-linear-to-b from-transparent to-[#00050a33]" />
          </div>

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Hero Section */}
          <div className="px-[5em] max-lg:px-[3em] max-md:px-[2em] max-sm:pt-[40%] max-sm:pb-[10%] max-lg:pt-[30%] max-md:py-[30%] lg:pt-[18%] lg:pb-[22%]">
            <div className="relative z-10">
              <div className="mb-8 md:mb-16 flex items-center gap-3 text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-medium font-poppins text-sm lg:text-lg">
                  Portfolio
                </p>
              </div>

              <h1 className="font-normal font-sora uppercase mb-4 text-3xl sm:text-4xl md:text-[clamp(45px,4vw,74px)] lg:text-[clamp(30px,3.5vw,66px)] tracking-tight leading-8 md:leading-15 lg:leading-12 1280:leading-15 1600:leading-18 1920:leading-20.25">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Designing <br /> Dreams Showcasing Our{" "}
                </AuroraText>
                <span className="text-3xl 480:text-4xl md:text-[clamp(60px,4vw,86px)] lg:text-[clamp(50px,5vw,86px)] font-thin lg:text-end block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Creative Journey
                  </AuroraText>
                </span>
              </h1>

              <p className="font-normal font-sora text-white/70 text-[clamp(12px,1.5vw,20px)] md:text-[clamp(13px,1.08vw,20px)] lg:text-[clamp(10px,1.08vw,20px)]">
                From conceptual sketches to digital experiences, here’s how we
                turn imagination into design
              </p>
            </div>

            <div className="hidden lg:block">
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/portfolio-page/portfolio-hero-image.png"
                className="absolute top-50 -right-80 z-20 w-[70%] h-auto rotate-[7.76deg] max-xl:-right-50"
                alt="Portfolio Hero"
              />
            </div>
          </div>

          <div className="max-md:hidden lg:hidden flex items-center justify-center relative z-20">
            <img
              src="/images/portfolio-page/portfolio-hero-tablet.png"
              className="w-3/4 h-auto rotate-[7.76deg]"
              alt="Portfolio Hero"
            />
          </div>
        </section>

        <PortfolioGrid />
        <CTA />

        <Footer />
      </section>
    </div>
  );
}
