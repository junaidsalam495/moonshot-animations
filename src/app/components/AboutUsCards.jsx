/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { GoArrowUpRight } from 'react-icons/go';

const AboutCard = ({
    roman = 'I.',
    titleTopLeft = '',
    titleTopRight = '',
    number = '',
    image = '',
    className = '',
    compact = false,
}) => {
    return (
        <div
            className={[
                'group relative overflow-hidden rounded-3xl border border-[#4D4D4D]',
                'bg-zinc-900/20 shadow-[0_8px_60px_rgba(0,0,0,0.55)]',
                compact ? 'h-100 w-100' : 'h-100 w-100',
                'md:w-80 md:h-80 1920:w-100 1920:h-100 1600:w-82.5 1600:h-82.5 1440:w-78.5 1440:h-78.5 1366:w-75 1366:h-75 1280:w-70 1280:h-70 lg:w-55 lg:h-55',
                'transition-transform duration-300 will-change-transform',
                'hover:-translate-y-1',
                className,
            ].join(' ')}
        >
            <img
                src={image}
                alt={titleTopRight || titleTopLeft}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Corner text (Roman + Titles) */}
            <div className="absolute left-8 top-4 text-white/80 text-[clamp(12px,4vw,20px)] select-none">
                {roman}
            </div>

            <div className="absolute left-8 bottom-4 flex items-end justify-between">
                <div className="font-urbanist text-white tracking-tighter text-[clamp(40px,4vw,80px)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
                    {number}
                </div>
            </div>

            <div className="font-urbanist leading-10 absolute right-8 top-4 text-right text-white/85 text-[clamp(14px,2vw,26px)]"
            >
                {titleTopLeft && <div>{titleTopLeft}</div>}
                {titleTopRight && <div>{titleTopRight}</div>}
            </div>

            <div className="absolute right-5 bottom-4 flex items-end justify-between">
                <GoArrowUpRight className="w-10 h-14 1280:w-14 1280:h-18 1600:w-20 1600:h-24" />
            </div>
        </div>
    );
};


export default function AboutUsCards() {
    const IMG_BASE = '/images/about-us';
    const cards = [
        {
            roman: 'I.',
            titleTopLeft: '',
            titleTopRight: 'Years\nExperience',
            number: '12+',
            image: `${IMG_BASE}/about-us-1.png`,
            compact: false,
            offset: 'lg:translate-y-12',
        },
        {
            roman: 'II.',
            titleTopLeft: '',
            titleTopRight: 'Completed\nProjects',
            number: '25K+',
            image: `${IMG_BASE}/about-us-2.png`,
            compact: false,
            offset: 'lg:-translate-y-4',
        },
        {
            roman: 'III.',
            titleTopLeft: '',
            titleTopRight: 'Award\nWinning',
            number: '110+',
            image: `${IMG_BASE}/about-us-3.png`,
            compact: true,
            offset: 'lg:translate-y-12',
        },
        {
            roman: 'IV.',
            titleTopLeft: '',
            titleTopRight: 'Satisfied\nClients',
            number: '4M+',
            image: `${IMG_BASE}/about-us-4.png`,
            compact: false,
            offset: 'lg:-translate-y-4',
        },
    ];

    return (
        <div className="relative z-10 my-10 overflow-visible mt-0 1280:mt-10 1440:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-22">
                {cards.map((c, i) => (
                    <div key={i} className={['w-full flex justify-center', c.offset].join(' ')}>
                        <PinContainer
                            title={c.titleTopRight.replace('\n', ' ')}
                            href="#"
                            containerClassName="w-full h-full"
                        >
                            <AboutCard
                                roman={c.roman}
                                titleTopRight={
                                    <span className="whitespace-pre leading-5">
                                        {String(c.titleTopRight)}
                                    </span>
                                }
                                number={c.number}
                                image={c.image}
                                compact={c.compact}
                            />
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};