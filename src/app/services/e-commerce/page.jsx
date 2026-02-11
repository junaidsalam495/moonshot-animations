"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import DecorativeLines from "@/app/components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScroll from "@/app/components/HorizontalScroll";
import HorizontalContainerAnimation from "@/app/components/HorizontalScroll";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";
import Smoke from "@/app/components/smoke/smoke";
import Button from "@/app/components/button/button";

const data = [
  {
    src: "/images/services/e-commerce/success-stories/image-1.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-2.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-3.png",
  },

  {
    src: "/images/services/e-commerce/success-stories/image-1.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-2.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-3.png",
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

export default function Ecommerce() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/e-commerce/layout-grid/video-1.mp4",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/e-commerce/layout-grid/video-2.mp4",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/e-commerce/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Mobile Compatibility",
      description:
        "Make your e-commerce website mobile-, tablet- and desktop-friendly. Our team fabricates new or existing e-commerce websites that are responsive and user-friendly.",
    },
    {
      id: 2,
      title: "Logistics Integration",
      description:
        "Our e-commerce website allows businesses to integrate logistics operations making you focus on your sales without wasting time on integration complexity.",
    },
    {
      id: 3,
      title: "Check-out Features",
      description:
        "Our team offers you effective check-out options. Our easy-to-use and responsive technology allow your customer check-out without hassle.",
    },
    {
      id: 4,
      title: "Payment Gateway",
      description:
        "Our e-commerce website designers deploy highly secure payment gateways using unbreakable payment modules to reach maximum customers.",
    },
    {
      id: 5,
      title: "Robust Product Showcasing",
      description:
        "Showcase your unlimited range of products with our e-commerce website without getting help from developers.",
    },
    {
      id: 6,
      title: "Shopping <br /> Cart",
      description:
        "Our shopping cart feature is backed by the most sophisticated technology that makes it easier for customers to shop online.",
    },
  ];

  const WebDevCard = ({ card }) => {
    return (
      <div key={card.id} className="space-y-8">
        <p
          className="text-[clamp(16px,1.3vw,24px)] uppercase text-white"
          dangerouslySetInnerHTML={{ __html: card.title }}
        ></p>
        <p
          className="text-[clamp(10px,0.9vw,16px)] font-light text-white"
          dangerouslySetInnerHTML={{ __html: card.description }}
        />
      </div>
    );
  };

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <div
        className="relative bg-black overflow-x-hidden"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
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
          {/* Dither Background */}
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

          <DecorativeLines />

          {/* Hero Section */}
          <div className="flex px-[5em] max-lg:px-[3em] max-md:px-[2em] max-sm:pt-[40%] max-sm:pb-[10%] max-lg:pt-[30%] lg:pt-[25%] lg:pb-[20%] 1366:pt-[22%] 1366:pb-[19%] 1920:py-[18%]">
            <div className="relative z-10">
              <div className="mb-8 md:mb-16 flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium">E-commerce</p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[clamp(50px,4vw,74px)] lg:text-[clamp(40px,4vw,82px)] font-normal max-lg:text-start max-lg:items-start blockfont-thin font-sora uppercase mb-4 tracking-tight leading-8 md:leading-15 lg:leading-12 1280:leading-15 1600:leading-18 1920:leading-20.25 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Building E-commerce <br /> That Powers Your{" "}
                </AuroraText>
                <span className="text-4xl md:text-[clamp(60px,4vw,86px)] lg:text-[clamp(50px,4.5vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Brand & Growth
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(12px,1.5vw,20px)] md:text-[clamp(14px,1.08vw,20px)] lg:text-[clamp(10px,1.1vw,22px)]">
                From first idea to live launch, we design and build websites
                that fuel your growth online
              </p>
            </div>

            <div className="hidden lg:block">
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/services/e-commerce/hero.png"
                className="absolute w-1/2 top-50 1366:top-40 1920:top-20 right-10 z-10 h-auto"
                alt="E-commerce Hero"
              />
            </div>
          </div>

          <div className="max-md:hidden lg:hidden relative z-20">
            <img
              src="/images/services/e-commerce/hero.png"
              className="w-3/4 mx-auto h-auto"
              alt="Animations Hero"
            />
          </div>
        </section>

        <div className="relative px-[5em] max-lg:px-[3em] max-md:px-[2em] z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-[34.137px] object-contain opacity-90"
          >
            <source
              src="/images/services/e-commerce/section-2.mp4"
              type="video/mp4"
            />
          </video>
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

          <section className="relative z-10 py-16 md:py-24 1440:py-40 1920:py-52 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36">
            <div className="flex justify-end max-lg:justify-center">
              <h2 className="hidden lg:block text-[clamp(36px,3.5vw,63px)] font-sora font-light uppercase tracking-tight leading-snug mb-8 1440:mb-14">
                <TextType
                  text="Customer-focused"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="E-commerce development"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <h2 className="block lg:hidden text-3xl md:text-4xl font-sora font-light uppercase tracking-tight leading-snug mb-8">
                <TextType
                  text="Customer-focused E-commerce development"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image column */}
              <div className="lg:-mt-26 col-span-1">
                <img
                  src="/images/services/e-commerce/section-3.png"
                  alt="Laptop showcasing website design"
                  className="h-full w-full object-cover lg:scale-150 1600:scale-200 max-lg:scale-200"
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
                      developers and back-end developers know how to service
                      your web development request in agile manner.
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

          <section className="relative z-10 1366:h-[125vh]">
            <img
              src="/images/services/e-commerce/section-4.png"
              className="h-full w-full object-cover"
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

          <section
            id="e-commerce"
            className="relative z-10 pt-20 sm:pt-30 lg:pt-50"
          >
            <Smoke />

            <div className="px-[5em] max-lg:px-[3em] max-md:px-[2em]">
              <h2 className="hidden lg:block text-[clamp(40px,3.5vw,63px)] font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Multiple E-commerce"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="Development Platforms"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <h2 className="block lg:hidden text-3xl md:text-4xl font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Multiple E-commerce Development Platforms"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <div className="text-sm sm:text-lg md:text-base lg:text-[clamp(10px,1.1vw,23px)] mt-5 lg:mt-10 text-white/80 leading-relaxed">
                <TextType
                  text="‘Tech With Moonshot’ allows you to choose from multiple e-commerce development platforms. Importantly, our e-commerce consultants recommend you a platform as per your brand requirements and demands."
                  typingSpeed={15}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  loop={true}
                />
              </div>

              <div id="e-commerce-layout" className="relative z-50">
                <LayoutGrid cards={layoutImages} />

                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                        #e-commerce #e-commerce-layout > div.grid {
                            gap: 50px !important;
                            padding: 5rem !important;
                        }
                        #e-commerce #e-commerce-layout img {
                            border-radius: 25.788px !important;
                        }
                        @media (max-width: 1024px) {
                            #e-commerce #e-commerce-layout > div.grid {
                                padding: 25px !important;
                            }
                        }
                        #e-commerce #e-commerce-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                            display: none !important;
                        }
                    `,
                  }}
                />
              </div>
            </div>
          </section>

          <div
            className="relative bg-top bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/images/services/bg-gradient-1.png)",
            }}
          >
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
        </div>

        <Footer />
      </div>
    </>
  );
}
