"use client";

import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Laptop,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  User,
} from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import DecorativeLines from "@/app/components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import ServiceCard from "@/app/components/ServiceCard";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";
import Smoke from "@/app/components/smoke/smoke";
import Button from "@/app/components/button/button";

const data = [
  {
    src: "/images/services/web-development/success-stories/image-1.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-2.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-3.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-4.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-1.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-2.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-3.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-4.png",
  },
];

export function SuccessStories() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

export default function WebDevelopment() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/web-development/layout-grid/image-1.png",
      className: "md:col-span-3 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/web-development/layout-grid/image-2.png",
      className: "md:col-span-2",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/web-development/layout-grid/image-3.png",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Web Portal <br /> Development",
      description:
        "Our expert programmers develop customer-focused web portals comprising all the necessary functionalities and characteristics to make your business effective and efficient.",
    },
    {
      id: 2,
      title: "Custom Web <br /> Development",
      description:
        "Tech With Moonshot fabricate tailor-made websites to transform your ideas into workable reality.",
    },
    {
      id: 3,
      title: "E-Commerce Web <br /> Development",
      description:
        "Our expert team develops economical and affordable e-commerce websites for you.",
    },
    {
      id: 4,
      title: "Enterprise <br /> Web Development",
      description:
        "We use best practices, testing, and analytics to improve speed, stability, and conversions, so your website keeps getting better with real data over time.",
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <Navbar />

      <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
        <Ribbons
          baseThickness={6}
          colors={["#D42290"]}
          speedMultiplier={0.4}
          maxAge={500}
          enableFade={true}
        />
      </div>

      <section>
        {/* <div className="absolute inset-0 w-full h-[125vh] opacity-20">
            <Dither
              waveColor={[0.01, 0.29, 0.62]}
              backgroundColor={[0.84, 0.13, 0.69]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div> */}

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="linear-gradient-bg"
            width={1920}
            height={1080}
            src="/images/services/bg-service-banner.png"
            style={{ filter: "brightness(1.25)" }}
          />
        </div>

        {/* Decorative Lines */}
        <DecorativeLines />

        {/* Hero Section */}
        <div className="flex px-[5em] max-lg:px-[3em] max-md:px-[2em] max-sm:pt-[40%] max-sm:pb-[10%] max-lg:pt-[30%] lg:pt-[25%] lg:pb-[16%] 1366:pt-[22%] 1366:pb-[19%] 1920:py-[18%]">
          <div className="relative z-10">
            <div className="mb-8 md:mb-16 flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl">
              <img src="/images/about-us/icon.png" />
              <p className="font-poppins font-medium">Website Development</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[clamp(50px,4vw,74px)] lg:text-[clamp(30px,4vw,74px)] font-normal font-sora uppercase mb-4 tracking-tight leading-8 md:leading-15 lg:leading-12 1280:leading-15 1600:leading-18 1920:leading-20.25 text-white">
              <AuroraText colors={["#ffffff", "#d1bd73"]}>
                Building <br /> Sites That Shape Your{" "}
              </AuroraText>
              <span className="text-4xl md:text-[clamp(60px,4vw,86px)] lg:text-[clamp(40px,4.5vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                  Brand & Profile
                </AuroraText>
              </span>
            </h1>

            <p className="font-sora font-normal text-white/70 text-[clamp(12px,1.5vw,20px)] md:text-[clamp(14px,1.08vw,20px)] lg:text-[clamp(10px,0.95vw,20px)]">
              From first ideas to final code, we design and build websites that
              show who you are online
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              className="absolute inset-0 w-full h-auto"
              src="/images/services/bg-service-banner.png"
              alt="Hero Background Gradient"
            />
            <img
              src="/images/services/web-development/hero-cropped.png"
              className="absolute -top-10 max-1600:top-15 right-0 z-10 w-[90%] h-auto"
              alt="Astronaut"
            />
          </div>
        </div>

        <div className="max-md:hidden lg:hidden relative z-20">
          <img
            src="/images/services/web-development/hero-cropped.png"
            className="w-full h-auto"
            alt="Animations Hero"
          />
        </div>
      </section>

      <div className="relative px-[5em] max-lg:px-[3em] max-md:px-[2em] z-10">
        <img
          src="/images/services/web-development/sec-2.png"
          className="h-auto w-full object-cover rounded-[34.137px]"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-0 z-0 -mt-[30%]">
          <Image
            alt="linear-gradient-bg"
            width={1920}
            height={1080}
            src="/images/services/bg-gradient-1.png"
          />
        </div>

        <section className="relative z-10 pt-16 md:pt-24 1440:pt-40 1920:pt-52 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36">
          <div className="flex justify-end max-lg:justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[clamp(40px,3.5vw,63px)] font-sora font-light uppercase tracking-tight leading-snug mb-8 1440:mb-14">
              <TextType
                text="Human-centered"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="web development Studio"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 1366:gap-36 gap-12">
            {/* Image column */}
            <div className="hidden 1280:block -mt-10 relative z-10">
              <img
                src="/images/services/web-development/section-3.png"
                alt="Laptop showcasing website design"
                className="h-auto w-full scale-125"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <div className="block 1280:hidden mt-10 relative z-10">
              <img
                src="/images/services/web-development/section-3-laptop.png"
                alt="Laptop showcasing website design"
                className="h-auto w-full"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Text column */}
            <div className="col-span-1 text-white space-y-12">
              <div className="flex gap-16 max-1366:gap-8">
                <div className="w-4 bg-white self-stretch mt-7 mb-8.5" />
                <div className="sec-3-para tracking-[-0.03em] font-normal font-sora">
                  <ScrollReveal size="sm" enableBlur={false}>
                    Tech With Moonshot makes use of collaborative efforts to
                    give you a good website development services. <br />{" "}
                    Additionally, our professional website developers give you
                    exclusive insights how to make user friendly, interactive,
                    secure and speedy websites. Moreover, our front-end
                    developers and back-end developers know how to service your
                    web development request in agile manner.
                  </ScrollReveal>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                      .sec-3-para p {
                        width: 90% !important;
                      }
                    `,
                    }}
                  />
                </div>
              </div>
              <Button text="Get in Touch" href="/contact-us" />
            </div>
          </div>
        </section>

        <section className="relative z-10">
          <img
            src="/images/services/web-development/section-4.png"
            className="max-h-[110vh] w-full object-cover object-center"
          />
        </section>
      </div>

      <div className="relative">
        <div className="absolute inset-0 z-0 -mt-[10%]">
          <Image
            alt="linear-gradient-bg"
            width={1920}
            height={1080}
            src="/images/services/bg-gradient-1.png"
          />
        </div>

        <div id="web-dev" className="relative z-10 pt-20 sm:pt-30 lg:pt-50">
          <Smoke />
          <div className="px-[5em] max-lg:px-[3em] max-md:px-[2em]">
            <h2 className="text-3xl md:text-4xl lg:text-[clamp(40px,3.5vw,63px)] font-sora font-light uppercase tracking-tight leading-tight">
              <TextType
                text="Multifaceted Web"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="Development Services"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
            <div className="text-sm sm:text-lg md:text-base lg:text-[clamp(10px,1.1vw,23px)] mt-5 lg:mt-10 text-white/80 leading-relaxed">
              <TextType
                text="‘Tech With Moonshot’ allows a range of software development services. Interestingly, our professional programmers work with you to deliver customized and meaningful web development services."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>
          </div>

          <div id="web-dev-layout" className="relative z-50">
            <LayoutGrid cards={layoutImages} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                    #web-dev #web-dev-layout > div.grid {
                        gap: 50px !important;
                        padding: 5rem !important;
                    }
                    #web-dev #web-dev-layout img {
                        border-radius: 25.788px !important;
                    }
                    @media (max-width: 1024px) {
                        #web-dev #web-dev-layout > div.grid {
                            padding: 25px !important;
                            gap: 20px !important;
                        }
                    }
                    @media (min-width: 48rem) { 
                        #web-dev #web-dev-layout .grid {
                            grid-template-columns: repeat(5, minmax(0, 1fr));
                        }
                    }
                    #web-dev #web-dev-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                        display: none !important;
                    }
                `,
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <Smoke />

        <section className="relative">
          <HorizontalScrollCards cards={webDevInfo} />
        </section>

        <div className="max-w-[90%] min-w-[90%] max-xl:max-w-[95%] max-xl:min-w-[95%] max-lg:max-w-[90%] max-lg:min-w-[90%] mx-auto my-15 sm:my-20 md:my-25 lg:my-30 1366:my-35 text-white/30 w-px h-px bg-white/30"></div>

        {/* Success Stories Section */}
        <h2 className="relative z-20 max-w-[90%] mx-auto text-3xl md:text-4xl lg:text-[clamp(40px,3.5vw,63px)] font-sora uppercase font-light tracking-tight leading-snug">
          <TextType
            text="200+"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            startOnVisible={true}
            loop={true}
          />
          <br />
          <TextType
            text="Success Stories"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            startOnVisible={true}
            loop={true}
          />
        </h2>

        <section className="relative mt-8 lg:-mt-16 xl:-mt-20 z-50">
          <SuccessStories />
        </section>

        <div
          className="w-full h-130 -mt-150 relative z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #00050A 50%)",
          }}
        />

        <FormCTA />
      </div>

      <Footer />
    </>
  );
}
