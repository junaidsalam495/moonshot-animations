/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuroraText } from "@/components/ui/aurora-text";
import Partners from "../components/UI/Partners";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cards = [
    {
      id: 1,
      title: "Problem <br /> discovery",
      description:
        "Usability Studies <br /> User Interviews <br /> Stakeholder Interviews <br /> Competitive Research <br /> Insights Report <br /> User Journey",
    },
    {
      id: 2,
      title: "Design <br /> system ready",
      description:
        "Thinking Workshops <br /> Sitemaps <br /> Concepts <br /> Designs <br /> Prototypes <br /> Usability Studies",
    },
    {
      id: 3,
      title: "Design <br /> implementation",
      description:
        "Design <br /> Use Cases <br /> User Flows <br /> Various User Types <br /> Annotations <br /> Interactions",
    },
    {
      id: 4,
      title: "Development <br /> phase",
      description:
        "Frontend Development <br /> Backend Development <br /> API Integration <br /> Database Setup <br /> Code Reviews <br /> Version Control",
    },
    {
      id: 5,
      title: "Quality <br /> assurance",
      description:
        "Unit Testing <br /> Integration Testing <br /> System Testing <br /> User Acceptance Testing <br /> Bug Fixing <br /> Performance Optimization",
    },
    {
      id: 6,
      title: "Deployment <br /> and Testing",
      description:
        "Test Plans <br /> Functional Testing <br /> Usability Testing <br /> Performance Testing <br /> Security Testing <br /> Bug Tracking",
    },
  ];

  const Card = ({ card }) => {
    return (
      <>
        <div
          key={card.id}
          className="group relative w-62.5 overflow-hidden"
          style={{ height: "350px" }}
        >
          <div className="absolute inset-0 z-10 grid place-content-start">
            <p
              className="mb-10 text-[clamp(10px,1.5vw,24px)] uppercase"
              dangerouslySetInnerHTML={{ __html: card.title }}
            ></p>
            <p
              className="text-[clamp(10px,1.1vw,17px)] font-light leading-loose"
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
          </div>
        </div>
        {card.id !== cards.length && (
          <div className="w-62.5">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="-mt-35 h-auto w-full"
            />
          </div>
        )}
      </>
    );
  };

  const HorizontalScrollCarousel = () => {
    const carouselRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => { }, { scope: carouselRef });

    useLayoutEffect(() => {
      const carouselEl = carouselRef.current;
      const contentEl = contentRef.current;
      if (!carouselEl || !contentEl) return;

      const totalWidth = contentEl.scrollWidth;
      const viewportWidth = window.innerWidth;

      if (totalWidth <= viewportWidth) return;

      const getScrollAmount = () =>
        -(contentEl.scrollWidth - window.innerWidth);

      const tween = gsap.to(contentEl, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: carouselEl,
          start: "center center",
          end: () => `+=${contentEl.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const ro = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      ro.observe(contentEl);

      return () => {
        tween.kill();
        ro.disconnect();
      };
    }, []);

    return (
      <section ref={carouselRef} className="relative h-[75vh]">
        <div
          ref={contentRef}
          className="flex gap-4 absolute left-0 top-0 h-full items-center pr-[50vw]"
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    );
  };

  const logos = [
    {
      id: "1",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-1.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "2",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-2.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "3",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-3.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "4",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-4.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "5",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-5.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "6",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-6.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "7",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-7.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
    {
      id: "8",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-8.png"
          width={200}
          height={200}
          alt="Logo"
        />
      ),
    },
  ];

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
    <>
      {/* <CyberHologramLoader /> */}
      <section
        className="relative bg-[#00050A] overflow-x-hidden"
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

        <div className="flex items-center relative w-full overflow-visible">
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
          <section className="px-[5em] max-lg:px-[3em] max-md:px-[2em] max-sm:pt-[40%] max-sm:pb-[10%] max-lg:pt-[30%] lg:pt-[18%] lg:pb-[22%]">
            <div className="relative z-10">
              <div className="mb-8 md:mb-16 flex items-center gap-3">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-sm 1366:text-base 1440:text-lg 1600:text-xl">
                  About Us
                </p>
              </div>

              <h1 className="font-normal font-sora uppercase mb-4 text-2xl sm:text-4xl md:text-[clamp(45px,4vw,74px)] tracking-tight leading-8 sm:leading-13 1366:leading-15 1600:leading-18">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Shaping <br /> Ideas That Define Our{" "}
                </AuroraText>
                <span className="text-3xl md:text-[clamp(50px,4vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Purpose & Vision
                  </AuroraText>
                </span>
              </h1>

              <p className="font-normal font-sora text-white/70 text-[clamp(12px,1.5vw,20px)] md:text-[clamp(12px,1.08vw,20px)]">
                From our values to our craft, this is how we shape stories that
                define who we are with care
              </p>
            </div>

            <div>
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/about-us-bg.png"
                className="hidden lg:block lg:absolute z-10 w-1/2 h-auto top-50 -right-40 max-1440:-right-30"
                alt="Astronaut"
              />
            </div>

            <div className="py-10 max-md:hidden lg:hidden relative z-20">
              <img
                src="/images/about-us-bg.png"
                className="w-3/4 h-auto"
                alt="City"
              />
            </div>
          </section>
        </div>

        <div className="relative z-10 px-[5em] max-lg:px-[3em] max-md:px-[2em]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-auto object-cover rounded-[34.137px] items-center"
          >
            <source src="/videos/about-us-video.webm" type="video/mp4" />
          </video>
        </div>

        <div
          className="bg-top overflow-hidden brightness-[1.2]"
          style={{ backgroundImage: "url(/images/services/bg-gradient.png)" }}
        >
          {/* Who We Are Section */}
          <div>
            <div className="relative z-10 max-w-[90%] mx-auto py-10 md:py-24 lg:py-36 1440:py-48">
              <div className="space-y-10">
                <div className="flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl text-[#808080]">
                  <span className="text-nowrap font-poppins font-normal">
                    01 — Who We Are
                  </span>
                </div>

                <div className="uppercase font-sora">
                  <ScrollReveal size="md">
                    ‘Tech With Moonshot’ is a competent digital design and
                    strategic development agency specializing in digital
                    performance across numerous channels viz. SEO, Google ad
                    words, social media marketing, website design and
                    development, digital advertising, and remarketing.
                  </ScrollReveal>
                </div>

                <div className="w-full lg:max-w-[90%] flex max-lg:flex-col justify-between gap-6">
                  <div className="text-[17px] max-1440:text-[14px] max-1280:text-[12px] lg:mt-10 text-[#808080]">
                    <TextType
                      text="Our business pursuit seeks to cement long term relationship with our consumers. Essentially speaking, our digital strategists make use of data analytics to complement our partners’ brand image and ROI."
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      startOnVisible={true}
                      loop={true}
                    />
                  </div>

                  <div className="flex gap-16 max-lg:gap-8">
                    <div>
                      <p className="text-[clamp(30px,6vw,60px)] sm:text-[clamp(40px,6vw,80px)] lg:text-[clamp(50px,6vw,110px)]">
                        <CountingNumber
                          number={400}
                          inView={true}
                          transition={{ stiffness: 100, damping: 30 }}
                        />
                        +
                      </p>
                      <span className="text-base xl:text-lg 1440:text-xl">
                        Successful Projects <br /> Delivered
                      </span>
                    </div>
                    <div>
                      <p className="text-[clamp(30px,6vw,60px)] sm:text-[clamp(40px,6vw,80px)] lg:text-[clamp(50px,6vw,110px)]">
                        {">"}
                        <CountingNumber
                          number={95}
                          inView={true}
                          transition={{ stiffness: 100, damping: 30 }}
                        />
                        %
                      </p>
                      <span className="text-base xl:text-lg 1440:text-xl">
                        Projects Success <br /> Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                {/* <Gallery3D images={images} /> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-6">
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-1.png"
                      width={400}
                      height={400}
                      alt="Image 1"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-2.png"
                      width={400}
                      height={400}
                      alt="Image 2"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-3.png"
                      width={400}
                      height={400}
                      alt="Image 3"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-4.png"
                      width={400}
                      height={400}
                      alt="Image 4"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <div className="px-[5em] max-lg:px-[3em] max-md:px-[2em] items-center py-10 md:py-48 bg-black">
              <div className="text-center relative z-10">
                <p className="font-poppins font-normal text-[#808080] text-sm 1366:text-base 1440:text-lg 1600:text-xl tracking-tight mb-8">
                  02 - Technologies
                </p>
                <h2
                  className="font-normal text-center text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-2xl max-md:text-xl leading-tight uppercase"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  <TextType
                    text={["Advanced Tech Stack for"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    loop={true}
                  />
                </h2>

                <h2
                  className="font-normal text-center text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-2xl max-md:text-xl leading-tight uppercase"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  <TextType
                    text={["Performance, Scalability & Innovation"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    loop={true}
                  />
                </h2>

                <div
                  id="technologies-description"
                  className="lg:w-3/4 mx-auto mt-8"
                >
                  <ScrollReveal size="sm">
                    ‘Tech With Moonshot’ makes use of contemporary technology to
                    deliver promised results. Our technical and digital pundits
                    leverage artificial intelligence, machine learning, complex
                    algorithms, predictive data analysis and process automation
                    to ratchet up business profitability.
                  </ScrollReveal>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                    #technologies-description p {
                      text-align: center;
                    }
                  `,
                    }}
                  />
                </div>

                <div className="mt-8">
                  <SlidingLogoMarquee items={logos} />
                </div>
              </div>
            </div>

            {/* Glow ellipse below cards */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
                  style={{
                    background:
                      "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                    backgroundSize: "200% 100%, 200% 100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div>
          <div className="relative">
            <div className="absolute -top-3.5 md:-top-5.5 1280:-top-7 1600:-top-9 left-[48%] z-100">
              <Image
                src="/images/elevate-icon.png"
                alt="Elevate Icon"
                width={100}
                height={100}
                className="w-10 md:w-15 1280:w-20 1600:w-25 1920:w-30 relative z-10"
              />
            </div>
          </div>
          <div className="relative py-10 md:pt-48">
            <div className="absolute inset-0 z-0 -mt-[15%]">
              <Image
                alt="linear-gradient-bg"
                width={1920}
                height={1080}
                src="/images/services/bg-gradient-1.png"
              />
            </div>

            <div className="max-w-[90%] mx-auto relative">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-2">
                  <p className="text-[#808080] font-poppins font-normal text-sm 1366:text-base 1440:text-lg 1600:text-xl mb-6">
                    03 - How It Works
                  </p>

                  <h2
                    className="text-[clamp(30px,3vw,60px)] uppercase font-normal leading-[1.2]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Method of making <br /> better result
                  </h2>
                </div>
                <p className="max-sm:mt-6 md:col-span-3 text-[clamp(10px,1.1vw,23px)] leading-relaxed text-white/80">
                  We start by communicating with our clients via online chat,
                  email, or phone. After getting required information by asking
                  certain set of questions, we go for a mockup or a prototype
                  design by letting it go through several iterative stages as
                  per your feedback.
                  <br />
                  <br />
                  Once the final thing approved, the static designs are
                  converted to dynamic models with actual features and
                  functionalities with the help of extensive research and
                  coding. We test and test until it is free of all bugs or
                  errors and of course until it works as per your business
                  needs.
                </p>
              </div>

              {/* Align carousel with the right (col-span-3) text column */}
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2" aria-hidden="true" />
                <div className="md:col-span-3 md:-mt-24">
                  <HorizontalScrollCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Defines Us Section */}
        <div className="bg-[#00050A] relative pb-10 overflow-hidden">
          <div className="max-w-[90%] mx-auto relative py-36 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
            <div>
              <span className="text-sm 1366:text-base 1440:text-lg 1600:text-xl text-[#808080] text-nowrap font-poppins font-normal">
                04 — What Defines Us
              </span>

              <p className="text-[clamp(20px,2vw,50px)] mt-5 uppercase font-sora leading-tight">
                We deliver creative ideas to a crowded world.
              </p>

              <div className="">
                <ScrollReveal size="sm">
                  Our experience proves that there is no single digital strategy
                  that remains successful over time. Intuitively, our digital
                  design, marketing and development strategists too dislike
                  maintaining status quo.
                  <br />
                  <br />
                  Importantly, our digital advertising experts and web
                  application professionals continuously improve, test and
                  refine strategies. Furthermore, our SEO and Google ad words
                  pundits constantly adopt contemporary technologies and
                  theorems to engender matchless financial results for our
                  priceless partners.
                </ScrollReveal>
              </div>
            </div>

            <div className="w-full relative mx-auto h-auto overflow-hidden">
              <Image
                src="/images/about-us-page/what-defines-us.jpg"
                alt="What Defines Us"
                width={1200}
                height={600}
                className="w-full h-auto relative z-0 transition-all duration-600 hover:scale-105"
              />
            </div>
          </div>

          {/* Glow ellipse below cards */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
                style={{
                  background:
                    "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                  backgroundSize: "200% 100%, 200% 100%",
                }}
              />
            </div>
          </div>
        </div>

        <div id="about-us-partners" className="relative z-50">
          <div className="absolute -top-3.5 md:-top-5.5 1280:-top-7 1600:-top-9 left-[48%] z-100">
            <Image
              src="/images/elevate-icon.png"
              alt="Elevate Icon"
              width={100}
              height={100}
              className="w-10 md:w-15 1280:w-20 1600:w-25 1920:w-30 relative z-10"
            />
          </div>

          {/* <div className="absolute z-10 inset-0 top-0">
            <img
              src="/images/about-us-page/bg-partners.png"
              alt="Background Bottom"
              className="w-full h-auto object-cover"
            />
          </div> */}

          <div className="relative">
            <Partners />

            <style
              dangerouslySetInnerHTML={{
                __html: `
              #about-us-partners {
                background-color: #00060B;
              }
              #home-partners-clip-path {
                display: none;
              }
              #about-us-partners #partners {
                margin-top: 0px;
              }

              #about-us-partners #partners #partners-slider {
                display: none;
              }

              /* About Us page-only section number overrides */
              #about-us-partners #partners .font-sora.flex.justify-between span.text-nowrap.font-sora.font-normal {
                position: relative;
                display: inline-block;
                color: transparent;
              }
              #about-us-partners #partners .font-sora.flex.justify-between span.text-nowrap.font-sora.font-normal::before {
                content: "05 — Partners";
                position: absolute;
                inset: 0;
                color: #808080;
              }

              #about-us-partners #partners .mb-6 > span.text-nowrap.font-sora.font-normal {
                position: relative;
                display: inline-block;
                color: transparent;
              }
              #about-us-partners #partners .mb-6 > span.text-nowrap.font-sora.font-normal::before {
                content: "05 — Testimonials";
                position: absolute;
                inset: 0;
                color: #808080;
              }

              #about-us-partners #testimonials {
                margin-top: 0px;
                padding-top: 10px;
              }

              @media (max-width: 1024px) {
                #partners {
                  padding-top: 0px;
                }
              }
            `,
              }}
            />
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
