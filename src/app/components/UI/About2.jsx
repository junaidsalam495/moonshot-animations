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
        <div className="relative z-10 max-w-[90%] mx-auto">
          <div className="mb-8 lg:mb-16 1366:mb-24 1600:mb-36 overflow-x-hidden">
            {/* Top label */}
            <div className="flex items-center gap-3 text-sm 1366:text-base 1440:text-lg 1600:text-xl text-[#808080]">
              <span className="flex items-center gap-2 text-nowrap font-poppins font-normal">
                04
                <span className="w-6 h-px bg-[#808080] inline-block"></span>
                The Inventive Minds
              </span>
            </div>

            {/* Heading */}
            <div
              className="-tracking-[0.03em] leading-relaxed font-light text-white/90"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <ScrollReveal size="md" enableBlur={false}>
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
                    "px-4 py-6 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                  ].join(" ")}
                >
                  {/* Gradient - Top Right */}
                  <div
                    className="absolute top-16 -right-2 w-50 h-52 rounded-full blur-[30px] opacity-50 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)",
                    }}
                  />

                  {/* Gradient - Bottom Left */}
                  <div
                    className="absolute -left-32 -bottom-32 w-60 h-90 rounded-full blur-[30px] opacity-60 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)",
                    }}
                  />

                  {/* Top row: index + ball */}
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      01
                    </div>

                    <img
                      src="/images/about-2/balls/ball-1.png"
                      alt="Ball 1"
                      className="pointer-events-none absolute -top-30 -right-37.5 w-full h-auto object-contain"
                    />
                  </div>

                  {/* Headline */}
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
                    "px-4 py-6 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                  ].join(" ")}
                >
                  {/* Gradient - Top Right */}
                  <div
                    className="absolute top-16 -right-2 w-40 h-52 rounded-full blur-[75px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(50deg, rgba(255, 198, 40, 0.80) 39.93%, rgba(250, 40, 137, 0.80) 60.8%, rgba(62, 95, 249, 0.80) 91.46%)",
                    }}
                  />

                  {/* Gradient - Bottom Left */}
                  <div
                    className="absolute -left-32 -bottom-32 w-60 h-90 rounded-full blur-[75px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, #03499F 0.07%, #D722AF 99.93%)",
                    }}
                  />

                  {/* Top row: index + ball */}
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      02
                    </div>

                    <img
                      src="/images/about-2/balls/ball-2.png"
                      alt="Ball 1"
                      className="pointer-events-none absolute -top-30 -right-37.5 w-full h-auto object-contain"
                    />
                  </div>

                  {/* Headline */}
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
              <div className="relative flex justify-center md:justify-end mb-10 -mt-72 max-sm:mt-0">
                <ParallaxCard
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "px-4 py-6 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                  ].join(" ")}
                >
                  {/* Gradient - Top Right */}
                  <div
                    className="absolute top-16 -right-2 w-50 h-52 rounded-full blur-[30px] opacity-50 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)",
                    }}
                  />

                  {/* Gradient - Bottom Left */}
                  <div
                    className="absolute -left-32 -bottom-32 w-60 h-90 rounded-full blur-[30px] opacity-60 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)",
                    }}
                  />

                  {/* Top row: index + ball */}
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      03
                    </div>

                    <img
                      src="/images/about-2/balls/ball-3.png"
                      alt="Ball 3"
                      className="pointer-events-none absolute -top-30 -right-37.5 w-full h-auto object-contain"
                    />
                  </div>

                  {/* Headline */}
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
              <div className="relative max-md:flex max-md:justify-center md:left-20">
                <ParallaxCard
                  className={[
                    "relative rounded-[28px] border border-[#2e2e2e]/60 bg-[#030303] overflow-hidden -mt-30 max-sm:mt-0",
                    "shadow-[0_30px_120px_rgba(0,0,0,0.75)]",
                    "px-4 py-6 min-w-[42%] max-w-[42%] max-1280:max-w-[45%] max-1280:min-w-[45%] max-md:max-w-4/5 max-md:min-w-4/5",
                  ].join(" ")}
                >
                  {/* Gradient - Top Right */}
                  <div
                    className="absolute top-16 -right-2 w-50 h-70 rounded-full blur-[75px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(rgba(255, 198, 40, 0.80) 39.93%, rgba(250, 40, 137, 0.80) 60.8%, rgba(62, 95, 249, 0.80) 91.46%)",
                    }}
                  />

                  {/* Gradient - Bottom Left */}
                  <div
                    className="absolute -left-32 -bottom-32 w-60 h-90 rounded-full blur-[75px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, #03499F 0.07%, #D722AF 99.93%)",
                    }}
                  />

                  {/* Top row: index + ball */}
                  <div className="relative flex items-start justify-between z-10">
                    <div
                      className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      04
                    </div>

                    <img
                      src="/images/about-2/balls/ball-4.png"
                      alt="Ball 4"
                      className="pointer-events-none absolute -top-30 -right-37.5 w-full h-auto object-contain"
                    />
                  </div>

                  {/* Headline */}
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
