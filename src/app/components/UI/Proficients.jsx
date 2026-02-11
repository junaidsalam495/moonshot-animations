/* eslint-disable @next/next/no-img-element */
"use client";

import Carousel from "@/components/Carousel";
import TextType from "@/components/TextType";

export default function Proficients() {
    return (
        <section className="px-6 lg:px-10 1366:px-16 items-center py-24 1366:py-36 bg-[#00080F] relative z-50">
            {/* Heading */}
            <div className="text-center relative z-10 space-y-6">
                <p className="text-[#808080] text-sm 1366:text-base 1440:text-lg 1600:text-xl tracking-tight font-poppins font-normal">05 <span className="-mr-2">—</span> — Profecients</p>
                <h2 className="text-white text-7xl max-2xl:text-6xl max-1280:text-5xl max-lg:text-4xl max-sm:text-3xl tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                        <TextType
                            text="Performance"
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            startOnVisible={true}
                            loop={true}
                        />
                        {" "}
                        <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            <TextType
                                text="Specialists"
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={false}
                                startOnVisible={true}
                                loop={true}
                            />
                        </span>
                    </span>
                </h2>
            </div>

            <div className="flex justify-center max-w-[85%] mx-auto mt-10">
                <div className="absolute inset-0 top-0 flex justify-center pointer-events-none">
                    <img src="/images/proficients/bg-performance.png" alt="Proficients Background" className="w-[95%] h-full object-contain object-center" />
                </div>
                <div className="relative z-10">
                    <Carousel
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={false}
                        round={false}
                    />
                </div>
            </div>
        </section>
    );
}