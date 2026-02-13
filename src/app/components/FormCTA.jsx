/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import RotatingText from "@/components/RotatingText";
import TextType from "@/components/TextType";
import { PhoneCall, ArrowRight } from "lucide-react";
import { GoLocation } from "react-icons/go";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function FormCTA() {
  const tags = [
    "UI/UX Design",
    "Website Development",
    "E-commerce",
    "Branding",
    "Web Applications",
    "Animations",
    "Mobile Applications",
    "SEO",
    "SMM",
    "Google Adwords",
    "Email Marketing",
    "Digital Marketing",
  ];

  const [selectedTag, setSelectedTag] = useState(false);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [budget, setBudget] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleTag = (t) => {
    setSelectedTag(t);
  };

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Please tell us about your project.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubmitSuccess(false);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // placeholder for submit
      console.log({
        email,
        fullName,
        budget,
        businessName,
        message,
        selectedTag,
      });
      setSubmitSuccess(true);
      setEmail("");
      setFullName("");
      setBudget("");
      setBusinessName("");
      setMessage("");
      setSelectedTag(false);
    }
  };

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
    <section className="bg-[#00050A] overflow-hidden">
      <div className="pb-20 1366:pb-40 pt-25 rounded-[34.137px]">
        <div className="px-8 sm:px-10 md:px-16 lg:px-24 xl:px-36 grid grid-cols-1 lg:grid-cols-9 items-center gap-16">
          {/* Left content */}
          <div className="lg:col-span-4">
            <p className="font-poppins font-normal text-sm lg:text-lg text-[#989898] mb-4">
              01 — Get in Touch
            </p>

            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="leading-tight text-white mb-6 block text-[clamp(40px,5vw,75px)] md:text-[clamp(55px,5vw,75px)] lg:text-[clamp(40px,4.2vw,75px)]"
            >
              <span className="flex items-baseline gap-x-4">
                Have a{" "}
                <RotatingText
                  texts={["Project?", "Idea?", "Vision?", "Goal?", "Dream?"]}
                  mainClassName="inline-block text-white overflow-hidden justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                  rotationInterval={5000}
                />{" "}
                <br />
              </span>
              Let’s
              <span
                className="italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {" "}
                Talk!
              </span>
            </h2>

            <div className="hidden lg:block min-h-14 1920:min-h-26.5 text-[#989898] text-[clamp(10px,1.04vw,20px)] font-poppins leading-relaxed tracking-widest mb-8">
              <TextType
                text="Ready to take your triathlon performance to the next <br />level? Reach out today and let's create a personalized training <br />plan for you."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>

            <div className="lg:hidden block min-h-14 lg:min-h-26.5 text-[#989898] text-[clamp(14px,1.5vw,20px)] lg:text-[clamp(10px,1.04vw,20px)] font-poppins leading-relaxed tracking-widest mb-8">
              <TextType
                text="Ready to take your triathlon performance to the next level? Reach out today and let's create a personalized training plan for you."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>

            <div className="hidden lg:block h-[1.5px] bg-[#888] my-12" />

            <div className="space-y-8 text-white text-[clamp(14px,2vw,24px)] lg:text-[clamp(10px,1.4vw,24px)]">
              <div className="flex items-center gap-4">
                <PhoneCall className="w-10 h-10 max-lg:h-8 md:h-8 fill-white" />
                <Link href="tel:+19723315058" className="hover:underline">
                  +1-972-331-5058
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <GoLocation className="w-10 h-10 max-lg:h-8 md:h-8" />
                <Link
                  href="https://share.google/nqL7znJrG0VweAWyG"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1200 East Collins Boulevard <br /> Suite 106 Richardson Texas
                  75081
                </Link>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            className="relative z-50 lg:col-span-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="bg-[#011322] rounded-[25px] p-12 xl:mx-6 1366:p-14 2xl:p-16 max-sm:p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins font-normal text-white text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]">
                <div>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]"
                  />
                  {errors.email ? (
                    <p className="text-red-400 text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px] mt-2 ml-5">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]"
                  />
                  {errors.fullName ? (
                    <p className="text-red-400 text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px] mt-2 ml-5">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 font-poppins font-normal text-white text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]">
                <input
                  placeholder="Project Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]"
                />
                <input
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]"
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell us more about your product and goals"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="font-poppins font-normal w-full rounded-[25px] mt-6 p-8 text-white text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px] bg-[#000911] border border-[#18354D] outline-none"
                />
                {errors.message ? (
                  <p className="text-red-400 text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px] mt-2 ml-5">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <p className="text-white my-4 text-[12px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] lg:text-[10px]">
                How can we help you?
              </p>

              <div className="hidden lg:block space-y-3 lg:space-y-6">
                {[tags.slice(0, 4), tags.slice(4, 8), tags.slice(8, 12)].map(
                  (row, rowIdx) => (
                    <div
                      key={`tag-row-${rowIdx}`}
                      className="w-full grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap lg:flex-nowrap gap-3 lg:justify-between"
                    >
                      {row.map((t) => {
                        const isSelected = selectedTag === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTag(t)}
                            className={`max-sm:w-full py-4 px-3 1920:px-8 1600:px-6 1280:px-5 lg:px-3 max-xl:py-3 rounded-full bg-[#000911] text-[11px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] 1280:text-[10px] lg:text-[9px] transition-colors duration-200 border ${isSelected
                              ? "border-white/80 text-white/80"
                              : "border-[#18354D] text-[#999999]"
                              } hover:border-white/80 hover:text-white/80 cursor-pointer`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  ),
                )}
              </div>

              <div className="block lg:hidden">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 flex-wrap gap-3">
                  {tags.map((t) => {
                    const isSelected = selectedTag === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTag(t)}
                        className={`max-sm:w-full py-4 px-3 1920:px-8 1600:px-6 1280:px-5 lg:px-3 max-xl:py-3 rounded-full bg-[#000911] text-[11px] 1920:text-[13px] 1600:text-[12px] 1440:text-[11px] 1280:text-[10px] lg:text-[9px] transition-colors duration-200 border ${isSelected
                          ? "border-white/80 text-white/80"
                          : "border-[#18354D] text-[#999999]"
                          } hover:border-white/80 hover:text-white/80 cursor-pointer`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="md:flex justify-between items-center mt-8">
                <button
                  type="submit"
                  className="group border border-[#979797] inline-flex items-center gap-5 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                >
                  <span className="text-nowrap relative top-[0.5px] font-sora text-[clamp(14px,1.04vw,21px)]">
                    Send Message
                  </span>
                  <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-2 lg:p-3">
                    <ArrowRight className="w-4 h-4 1366:w-6 1366:h-6 group-hover:text-black" />
                  </span>
                </button>
                <div className="text-xs 1366:text-sm max-sm:space-y-3 max-sm:pt-6 md:text-end 1920:text-[13px] 1600:text-[14px]">
                  <p className="text-[#A3A3A3]">Prefer email?</p>
                  <Link
                    href="mailto:moonshottech@gmail.com"
                    className="text-white hover:underline"
                  >
                    moonshottech@gmail.com
                  </Link>
                </div>
              </div>

              {submitSuccess ? (
                <p className="mt-6 font-poppins 1920:text-[13px] 1600:text-[14px] text-[11px] text-white/80">
                  Thanks — we’ve received your message. Our team will reach out
                  shortly.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>

      <div className="mix-blend-screen font-sora relative z-50 flex flex-col items-center justify-start md:pt-20 lg:pt-36">
        {/* Left Gradient */}
        <div className="absolute z-50 -left-70 top-60 bottom-0 w-150 pointer-events-none">
          <div
            className="w-2/3 h-1/3"
            style={{
              background:
                "linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
              filter: "blur(150px)",
            }}
          />
        </div>

        {/* Right Gradient */}
        <div className="absolute -right-100 top-200 bottom-0 w-150 pointer-events-none">
          <div
            className="w-2/3 h-1/3"
            style={{
              background:
                "linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
              filter: "blur(150px)",
            }}
          />
        </div>

        {/* Heading */}
        <div className="text-center relative z-10">
          <p className="text-white/60 text-[clamp(30px,2vw,80px)] lg:text-[clamp(30px,4vw,80px)] mb-4 lg:mb-2 tracking-tight font-sora font-light">
            Let’s start
          </p>
          <h2 className="text-white text-[clamp(60px,6vw,138px)] lg:text-[clamp(60px,8vw,138px)] -mt-8 mb-2 font-medium tracking-tight leading-tight">
            <span
              className="block"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Your{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Project
              </span>
            </span>
          </h2>
        </div>

        <Image
          src="/images/elevate-icon.png"
          alt="Elevate Icon"
          width={100}
          height={100}
          className="w-30 max-1280:w-20 max-1280:pb-3 max-1440:w-25 relative z-10"
        />

        {/* Video container with outline */}
        <div
          className="relative py-12 max-1280:min-h-[55vh] max-1366:min-h-[60vh] max-1440:min-h-[65vh] max-1600:min-h-[70vh] min-h-[95vh] max-1440:max-w-[32.5%] max-1600:max-w-[30%] max-w-[35%] max-lg:max-w-[45%] max-sm:max-w-[70%] z-10 -mt-10 flex items-center justify-center gradient-border"
          style={{
            borderRadius: "1333.3px",
            mixBlendMode: "screen",
          }}
        >
          <div className="flex flex-col items-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover rounded-full items-center overflow-visible"
            >
              <source src="/videos/cta-video.webm" type="video/webm" />
            </video>

            <p className="font-sora font-normal mt-12 text-center text-lg lg:text-xl 1366:text-2xl 1600:text-3xl text-white/50">
              Ready to{" "}
              <span className="text-white">
                elevate
                <br /> your brand?
              </span>
            </p>
          </div>
        </div>

        {/* Small prompt + button */}
        <div className="-mt-16 max-1440:-mt-14 max-sm:-mt-13 relative z-10 flex flex-col items-center">
          <Link href="/contact-us">
            <button
              type="button"
              className="hover:cursor-pointer mt-6 h-18 w-18 max-1440:w-16 max-1440:h-16 max-lg:w-12 max-lg:h-12 max-sm:h-12 max-sm:w-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 hover:rotate-270 transition"
            >
              <LiaLongArrowAltRightSolid className="w-6 h-6 1600:w-8 1600:h-8" />
            </button>
          </Link>
        </div>

        {/* Bottom large background word/image */}
        <img
          src="/images/cta-unique.png"
          alt="Unique typography"
          className="w-full h-auto object-contain opacity-40 -mt-10 md:-mt-15 lg:-mt-36"
          draggable={false}
        />

        {/* Bottom large gradient */}
        <div className="max-sm:-mt-43 -mt-50 lg:-mt-53 1280:-mt-56 1366:-mt-60 1920:-mt-65 relative w-screen inset-0 flex items-center justify-center pointer-events-none z-50">
          <div
            className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
            style={{
              background:
                "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
              backgroundSize: "200% 100%, 200% 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
