/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";

const ParallaxCard = ({ children, className, offset = 0 }) => {
  return (
    <div className={className}>
      <div className="w-full h-full">
        <div className="flex flex-col justify-between min-h-100 1366:min-h-100 1440:min-h-125 1920:min-h-150">{children}</div>
      </div>
    </div>
  );
};

const About2 = () => {
  return (
    <>
      <section className="relative bg-[#00060B] text-white py-24 1366:py-36 1600:py-48 z-50">
        {/* Content Overlay */}
        <div className="relative z-10 px-[5em] max-lg:px-[3em] max-md:px-[2em]">
          <div className="mb-8 lg:mb-16 1366:mb-24 1600:mb-36 space-y-12 overflow-x-hidden">
            {/* Top label */}
            <div className="flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl text-[#808080]">
              <span className="text-nowrap font-poppins font-normal">
                04 <span className="-mr-2">—</span> — The Inventive Minds
              </span>
            </div>

            {/* Heading */}
            <div
              className="-tracking-[0.03em] leading-relaxed font-light text-white/90"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <ScrollReveal size="md" enableBlur={false} textClassName="text-nowrap">
                Tech With Moonshot strategists drive impactful digital growth for
                your brand. By <br className="hidden md:block" /> analyzing data, trends, and audience
                insights, they deliver tailored solutions, SEO, email <br className="hidden md:block" />{" "}
                marketing, websites, e-commerce, animations, and more. More than a
                digital agency,
                <br className="hidden md:block" /> we make your brand stand out. That's the Tech With Moonshot
                difference.
              </ScrollReveal>
            </div>
          </div>

          {/* Core Discernments Title */}
          <div
            className="text-xl lg:text-3xl font-medium uppercase"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            <TextType
              text="Core"
              typingSpeed={15}
              pauseDuration={1500}
              showCursor={false}
              startOnVisible={true}
              loop={true}
            />
            <br />
            <TextType
              text="Discernments"
              typingSpeed={15}
              pauseDuration={1500}
              showCursor={false}
              startOnVisible={true}
              loop={true}
            />
          </div>

          {/* Cards Section with Background */}
          <div className="relative">
            {/* Background Image - Behind cards only */}
            <div className="sticky top-0 z-0 flex h-screen items-center justify-center pointer-events-none will-change-transform">
              <img
                src="/images/about-2/about-2-bg.png"
                alt=""
                className="max-w-275 w-[60vw] object-contain opacity-100"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            {/* Cards Container */}
            <div className="max-w-[80%] max-1366:max-w-[85%] max-1280:max-w-[90%] max-lg:max-w-full relative mx-auto z-10 max-md:-mt-[95vh] -mt-[100vh]">
              {/* Card 01 */}
              <div className="relative flex justify-center md:justify-end mb-10 md:-mb-30 md:right-20">
                <ParallaxCard
                  offset={-150}
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "p-8 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                    "bg-[url('/images/about-2/balls/image1.png')] bg-cover bg-no-repeat",
                  ].join(" ")}
                >
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      01
                    </div>
                  </div>
                  <div
                    className="relative z-10 text-xl lg:text-[clamp(22px,1.85vw,36px)] uppercase leading-tight tracking-[0.01em] text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    <TextType
                      text="Forty Three Leading Digital Performance Strategists Works With Tech With Moonshot."
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      loop={true}
                      startOnVisible={true}
                    />
                  </div>
                </ParallaxCard>
              </div>
              {/* Card 02 */}
              <div className="relative mb-10 md:-mb-30 max-md:flex max-md:justify-center">
                <ParallaxCard
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "p-8 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                    "bg-[url('/images/about-2/balls/image2.png')] bg-cover bg-no-repeat",
                  ].join(" ")}
                >
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      02
                    </div>
                  </div>
                  <div
                    className="lg:w-[95%] 1440:w-[90%] 1600:w-[95%] relative z-10 text-xl lg:text-[clamp(22px,1.85vw,36px)] uppercase leading-tight tracking-[0.01em] text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    <TextType
                      text="It Is Independent Google Partner (Accredited By Google)"
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={false}
                      loop={true}
                    />
                  </div>
                </ParallaxCard>
              </div>
              {/* Card 03 */}
              <div className="relative flex justify-center md:justify-end mb-10 -mt-62.5 max-sm:mt-0">
                <ParallaxCard
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "p-8 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                    "bg-[url('/images/about-2/balls/image3.png')] bg-cover bg-no-repeat",
                  ].join(" ")}
                >
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      03
                    </div>
                  </div>
                  <div
                    className="lg:max-w-[90%] relative z-10 text-xl lg:text-[clamp(22px,1.85vw,36px)] uppercase leading-tight tracking-[0.01em] text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    <TextType
                      text="Tech With Moonshot Is Trusted With Some Of World's Leading Digital Brands."
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      loop={true}
                      startOnVisible={true}
                    />
                  </div>
                </ParallaxCard>
              </div>
              {/* Card 04 */}
              <div className="relative max-md:flex max-md:justify-center -mt-36 md:left-20">
                <ParallaxCard
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden -mt-30 max-sm:mt-0",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "p-8 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                    "bg-[url('/images/about-2/balls/image4.png')] bg-cover bg-no-repeat",
                  ].join(" ")}
                >
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      04
                    </div>
                  </div>
                  <div
                    className="lg:max-w-[90%] relative z-10 text-xl lg:text-[clamp(22px,1.85vw,36px)] uppercase leading-tight tracking-[0.01em] text-white"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    <TextType
                      text="Our SEO And Google Ads Strategists Have Earned Numerous Industry Awards, Including Specialist Agency Of The Year."
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      loop={true}
                      startOnVisible={true}
                    />
                  </div>
                </ParallaxCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
