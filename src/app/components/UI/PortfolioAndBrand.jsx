/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Tabs } from '@/components/ui/tabs';
import React, { useEffect, useRef, useState } from 'react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import Button from '../button/button';

export function Tags() {
    const tabs = [
        {
            title: "Branding",
            value: "branding",
            anchor: "portfolio-1"
        },
        {
            title: "UI/UX",
            value: "ui-ux",
            anchor: "portfolio-2"
        },
        {
            title: "Motion",
            value: "motion",
            anchor: "portfolio-4"
        },
        {
            title: "Mobile Applications",
            value: "mobile-applications",
            anchor: "portfolio-3"
        },

        {
            title: "All Services",
            value: "all-services",
            anchor: "portfolio-1"
        },
    ];

    return (
        <div className="relative flex flex-col max-w-xl ml-auto w-5/6">
            <p className='font-normal text-lg font-sora mb-8 text-end text-white/60'>
                (<span className='text-white'>Filter</span> by Tag)
            </p>
            <Tabs tabs={tabs} />
        </div>
    );
}

const ExpandableSpan = ({ children }) => {
    const spanRef = useRef(null);
    const [targetWidth, setTargetWidth] = useState(0);

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.style.width = 'auto';
            const measuredWidth = spanRef.current.offsetWidth;

            setTargetWidth(measuredWidth);
            spanRef.current.style.width = '0px';
        }
    }, [children]);

    return (
        <span
            ref={spanRef}
            className="inline-block overflow-hidden align-bottom opacity-100"
            style={{
                width: `calc(var(--reveal-progress, 0) * ${targetWidth}px)`,
                height: 'auto',
                transition: 'width 0.1s linear'
            }}
        >
            {children}
        </span>
    );
};

const ScrollFillText = ({ children, className = "" }) => {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !overlayRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on position in viewport
            // Start revealing when top of element is at bottom of viewport
            // Finish revealing when it's 75% up the viewport
            let progress = (windowHeight - rect.top) / (windowHeight * 0.75);

            progress = Math.max(0, Math.min(1, progress));

            const percentageToHide = (1 - progress) * 100;
            // Reveal from bottom to top
            // overlayRef.current.style.clipPath = `inset(0% ${percentageToHide}% 0% 0%)`;
            overlayRef.current.style.clipPath = `inset(0% ${percentageToHide}% 0% 0%)`;

            containerRef.current.style.setProperty('--reveal-progress', progress);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block leading-none ${className}`}
            style={{ '--reveal-progress': 0 }}
        >
            {/* Background Layer (Static Text) */}
            <span className="relative z-0 text-white whitespace-nowrap">
                {children}
            </span>

            {/* Foreground Layer (Revealed Text with Shine) */}
            <div
                ref={overlayRef}
                className="absolute top-0 left-0 z-10 w-full h-full whitespace-nowrap bg-black"
                style={{
                    clipPath: 'inset(0% 100% 0% 0%)',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone'
                }}
            >
                <span className="animate-shine block">
                    {children}
                </span>
            </div>
        </div>
    );
};

const PortfolioAndBrand = () => {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const placeholderRef = useRef(null);
    const transitionRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    const xSteps = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
    const yOffsets = [0, 10, 20, 30, 40, 50, 60, 70];

    const generateClipPath = (progress) => {
        const inverseProgress = 1 - progress;
        const baseY = inverseProgress * 100;

        let path = "polygon(0% 100%, ";

        for (let i = 0; i < 8; i++) {
            const xStart = xSteps[i];
            const xEnd = xSteps[i + 1];

            let stepY = baseY + (yOffsets[i] * inverseProgress);

            stepY = Math.max(0, Math.min(100, stepY));

            path += `${xStart}% ${stepY}%, ${xEnd}% ${stepY}%, `;
        }

        path += "100% 100%)";
        return path;
    };

    // Clip-path animation for transition section
    useEffect(() => {
        const transition = transitionRef.current;
        if (!transition) return;

        const handleClipScroll = () => {
            const windowHeight = window.innerHeight;
            const rect = transition.getBoundingClientRect();

            let progress = (windowHeight - rect.top) / (windowHeight * 1.5);
            progress = Math.max(0, Math.min(1, progress));

            const path = generateClipPath(progress);

            transition.style.clipPath = path;
            transition.style.webkitClipPath = path;
        };

        window.addEventListener("scroll", handleClipScroll);
        handleClipScroll();

        return () => window.removeEventListener("scroll", handleClipScroll);
    }, []);

    useEffect(() => {
        const brandEl = document.getElementById('brand-section');
        const container = containerRef.current;
        const inner = innerRef.current;
        const placeholder = placeholderRef.current;
        if (!brandEl || !container || !inner || !placeholder) return;

        let currentlySticky = false;
        let lastScrollY = window.scrollY;
        let scrollingDown = true;

        let storedWidth = null;
        const setFixed = () => {
            const contRect = container.getBoundingClientRect();
            const innerRect = inner.getBoundingClientRect();
            // keep the inner element visually where it currently is in the viewport
            const currentTop = innerRect.top; // distance from viewport top
            const currentLeft = innerRect.left;
            const currentWidth = innerRect.width;

            storedWidth = currentWidth;

            placeholder.style.display = 'block';
            placeholder.style.height = `${innerRect.height}px`;
            inner.style.position = 'fixed';
            inner.style.top = `${currentTop}px`;
            inner.style.left = `${currentLeft}px`;
            inner.style.width = `${currentWidth}px`;
            inner.style.zIndex = '70';
            currentlySticky = true;
            setIsSticky(true);
        };

        const unsetFixed = () => {
            placeholder.style.display = 'none';
            placeholder.style.height = '0px';
            inner.style.position = '';
            inner.style.top = '';
            inner.style.left = '';
            inner.style.width = '';
            inner.style.zIndex = '';
            currentlySticky = false;
            setIsSticky(false);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollingDown = currentScrollY > lastScrollY;
            lastScrollY = currentScrollY;
        };

        const observer = new IntersectionObserver((entries) => {
            const ent = entries[0];
            if (ent.isIntersecting) {
                // Brand is intersecting — only stick if scrolling down
                if (scrollingDown) {
                    setFixed();
                } else {
                    // Scrolling up while Brand is visible — unset
                    unsetFixed();
                }
            } else {
                // Brand not intersecting — always unset
                unsetFixed();
            }
        }, { threshold: 0 });

        observer.observe(brandEl);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const onResize = () => {
            if (!currentlySticky) return;
            // Prefer recalculating width as 90% of viewport (matches `max-w-[90%]`), then center
            const newWidth = Math.round(window.innerWidth * 0.9);
            const newLeft = Math.round((window.innerWidth - newWidth) / 2);
            inner.style.width = `${newWidth}px`;
            inner.style.left = `${newLeft}px`;
        };

        window.addEventListener('resize', onResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', onResize);
            unsetFixed();
        };
    }, []);

    return (
        <>
            <section ref={containerRef} className="sticky -top-360 390:-top-400 480:-top-480 md:-top-180 840:-top-200 lg:-top-60 1280:-top-120 1366:-top-160 1440:-top-180 1600:-top-240 1920:-top-260 text-white py-24 1366:py-36 1600:py-48 bg-[#00060A] z-10">
                <div ref={placeholderRef} style={{ display: 'none', height: 0 }} />
                <div id="portfolio" className="max-w-[90%] mx-auto px-4" ref={innerRef}>
                    {/* 3 Column Grid - 3 Rows */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Row 1, Col 1: Section Label + Heading */}
                        <div className="flex flex-col justify-between space-y-6">
                            <div className='space-y-6'>
                                <h2 className="text-[#808080] text-sm 1366:text-base 1440:text-lg 1600:text-xl font-normal font-poppins">06 — Portfolio</h2>

                                <h2 className="text-4xl lg:text-5xl xl:text-7xl block font-normal" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                    Explore <br /> Our <span
                                        className="italic"
                                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                                    >
                                        Works
                                    </span>
                                </h2>
                            </div>

                            <div className='inline-block'>
                                <Button text="Explore All Works" href="/portfolio" />
                            </div>
                        </div>

                        {/* Row 1, Col 2: First Portfolio Image */}
                        <div id="portfolio-1">
                            <DirectionAwareHover
                                imageUrl="/images/portfolio/portfolio-1.png"
                                className="relative w-full h-full"
                                heading={<p>Branding</p>}
                                number={<p>01.</p>}
                            >
                                <div className="text-sm lg:text-[18px] 2xl:text-base font-poppins font-light text-white/80">
                                    <p>#BuildYourBrand</p>
                                    <p>#brandwithpurpose</p>
                                </div>
                            </DirectionAwareHover>
                        </div>

                        {/* Row 1, Col 3: Filter Tags */}
                        <div className="flex flex-col justify-start gap-3">
                            <Tags />
                        </div>


                        {/* Row 2, Col 3: Empty Spacer */}
                        <div className="block max-lg:hidden lg:col-span-1"></div>

                        {/* Row 2, Col 1: Portfolio Image 2 */}
                        <div id="portfolio-2">
                            <DirectionAwareHover
                                imageUrl="/images/portfolio/portfolio-2.png"
                                className="w-full h-full"
                                heading={<p>UI/UX</p>}
                                number={<p>02.</p>}
                            >
                                <div className="text-sm lg:text-[18px] 2xl:text-base font-poppins font-light text-white/80">
                                    <p>#Webdesign</p>
                                    <p>#Creativewebsolutions</p>
                                </div>
                            </DirectionAwareHover>
                        </div>


                        {/* Row 2, Col 2: Portfolio Image 3 */}
                        <div id="portfolio-3">
                            <DirectionAwareHover
                                imageUrl="/images/portfolio/portfolio-3.png"
                                className="w-full h-full"
                                heading={<p>Mobile Applications</p>}
                                number={<p>03.</p>}
                            >
                                <div className="text-sm lg:text-[18px] 2xl:text-base font-poppins font-light text-white/80">
                                    <p>#Appdesign</p>
                                    <p>#Mobileapps</p>
                                </div>
                            </DirectionAwareHover>
                        </div>

                        {/* Row 3, Col 1: Portfolio Image 4 */}
                        <div id="portfolio-4">
                            <DirectionAwareHover
                                imageUrl="/images/portfolio/portfolio-4.png"
                                className="w-full h-full"
                                heading={<p>Animations</p>}
                                number={<p>04.</p>}
                            >
                                <div className="text-sm lg:text-[18px] 2xl:text-base font-poppins font-light text-white/80">
                                    <p>#Creativemotion</p>
                                    <p>#Animateddesign</p>
                                </div>
                            </DirectionAwareHover>
                        </div>


                        {/* Row 3, Col 2: Empty Spacer */}
                        <div className="block max-lg:hidden lg:col-span-1"></div>

                        {/* Row 3, Col 2: Portfolio Image 5 */}
                        <div id="portfolio-5">
                            <DirectionAwareHover
                                imageUrl="/images/portfolio/portfolio-5.png"
                                className="w-full h-full"
                                heading={<p>Logo Design</p>}
                                number={<p>05.</p>}
                            >
                                <div className="text-sm lg:text-[18px] 2xl:text-base font-poppins font-light text-white/80">
                                    <p>#Logodesign</p>
                                    <p>#Brandidentity</p>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transition Section with Clip-Path */}
            <section
                ref={transitionRef}
                className="relative h-[50vh] z-50"
                style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    willChange: "clip-path",
                    transform: "translate3d(0,0,0)",
                    background: "transparent"
                }}
            >
                <div className="absolute inset-0 bg-[#34A5DC]" style={{ clipPath: "inherit" }} />
            </section>

            <section id="brand-section" className="bg-[#34A5DC] -mt-1 pt-20 lg:pt-36 1366:pt-52 pb-125 relative z-10 min-h-screen flex items-center justify-center overflow-x-hidden">
                <h2 className="z-20 text-[clamp(60px,12vw,260px)] text-center tracking-[-3%] leading-[0.8] md:leading-[0.85] uppercase font-semibold font-sora flex flex-col items-center gap-2">

                    <ScrollFillText>WE</ScrollFillText>
                    <ScrollFillText>MAKE</ScrollFillText>
                    <ScrollFillText>YOUR</ScrollFillText>
                    <ScrollFillText>BRAND</ScrollFillText>
                    <div className='hidden lg:block'>
                        <ScrollFillText>
                            SH
                            <ExpandableSpan>IIIIIIIIII</ExpandableSpan>
                            NE!
                        </ScrollFillText>
                    </div>
                    <div className='block lg:hidden'>
                        <ScrollFillText>SHINE</ScrollFillText>
                    </div>
                </h2>
            </section>
        </>
    );
};

export default PortfolioAndBrand;
