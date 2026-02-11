"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "cogni.wave",
      category: "ui-ux",
      type: "image",
      src: "/images/portfolio-page/projects/cogni-wave.mp4",
      bg: "/images/portfolio-page/portfolio-cards-bg/bg-1.png",
      isVideo: true,
    },
    {
      id: 2,
      title: "Arching",
      category: "branding",
      type: "image",
      src: "/images/portfolio-page/projects/archin.png",
      bg: "/images/portfolio-page/portfolio-cards-bg/bg-2.png",
      isVideo: false,
    },
    {
      id: 3,
      title: "Yuingair",
      category: "motion",
      type: "image",
      src: "/images/portfolio-page/projects/yuingair.png",
      bg: "",
      isVideo: false,
    },
    {
      id: 4,
      title: "Lime Armadillo",
      category: "mobile-app",
      type: "video",
      src: "/images/portfolio-page/projects/lime.mp4",
      bg: "/images/portfolio-page/portfolio-cards-bg/bg-4.png",
      isVideo: true,
    },
    {
      id: 5,
      title: "Netomi",
      category: "ui-ux",
      type: "image",
      src: "/images/portfolio-page/projects/netomi-5.png",
      bg: "/images/portfolio-page/portfolio-cards-bg/bg-5.png",
      isVideo: false,
    },
    {
      id: 6,
      title: "Visio AI",
      category: "branding",
      type: "image",
      src: "/images/portfolio-page/projects/visio.png",
      bg: "/images/portfolio-page/portfolio-cards-bg/bg-6.png",
      isVideo: false,
    },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Animations", value: "animations" },
    { label: "Web Development", value: "web-development" },
    { label: "Mobile Application", value: "mobile-app" },
    { label: "UI/UX", value: "ui-ux" },
  ];

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="relative bg-[#00050A]">
      <div className=" py-16 lg:px-12">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[85%] lg:max-w-[95%] mx-auto">
          {/* Header Section */}
          <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Filter Tabs */}
            <div className="relative md:z-20 lg:z-50 flex flex-col items-end gap-4">
              <div className="flex flex-wrap gap-6 max-xl:gap-4 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-poppins relative z-10 px-12 max-xl:px-8 py-4 rounded-full text-lg max-1440:text-base max-1366:text-sm max-1280:text-xs transition-all ${
                      activeTab === tab.value
                        ? "bg-[#D42290] text-white"
                        : "bg-[#041426] text-white hover:bg-[#D42290]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="relative z-50 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-black p-27 max-1600:p-25 max-1440:p-20 max-1336:p-16 max-xl:p-14 max-sm:px-5 max-sm:py-12 rounded-4xl relative group h-[95vh] max-1600:h-[80vh] max-1440:h-[70vh] max-1366:h-[65vh] max-1280:h-[60vh] max-lg:h-full ${
                  item.isVideo ? "col-span-1 lg:col-span-2" : "col-span-1"
                }`}
              >
                {item.bg && (
                  <div
                    className={`rounded-3xl absolute inset-0 ${
                      item.isVideo ? "opacity-100" : "opacity-30"
                    } bg-cover bg-center bg-no-repeat`}
                    style={{
                      backgroundImage: `url(${item.bg})`,
                    }}
                  />
                )}

                {item.isVideo ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative z-10 w-full h-full object-cover rounded-4xl"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`relative z-10 w-full h-full object-cover rounded-4xl`}
                  />
                )}
                <h3 className="font-sora relative mt-5 max-2xl:mt-3 max-1280:mt-2 -ml-15 max-2xl:-ml-10 max-xl:-ml-5 max-sm:ml-0 text-white text-[clamp(20px,2.7vw,40px)] md:text-[clamp(30px,2.7vw,48px)] font-light tracking-tighter">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center pt-20 pb-0 1920:py-20 relative md:z-20 lg:z-50">
          <Link
            href="#"
            className="group inline-flex items-center gap-6 rounded-full bg-[#2626264D] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-white/90 transition-all duration-300"
          >
            <span className="relative top-[0.5px] font-sora text-[18px] max-lg:text-[15px] whitespace-nowrap">
              See More
            </span>
            <span className="grid place-items-center rounded-full bg-[#333333] group-hover:bg-white p-3">
              <ChevronRight className="w-6 h-6 group-hover:text-black" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
