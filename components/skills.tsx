"use client";

import { useSectionInView } from "@/lib/useInView";
import SectionHeading from "./section-heading";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

export default function ConnectWithMe() {
  const { ref } = useSectionInView("#connect");

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nouman-hafeez/",
      icon: <FaLinkedin size={26} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/noumanhafeez",
      icon: <FaGithub size={26} />,
    },
    {
      name: "Medium",
      url: "https://medium.com/@noumanhafeez095",
      icon: <FaMedium size={26} />,
    },
    {
      name: "Twitter",
      url: "https://x.com/Nouman1256",
      icon: <FaTwitter size={26} />,
    },
  ];

  return (
    <section
      id="connect"
      ref={ref}
      className="mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4 text-center"
    >
      {/* Title styled like Intro/About */}
      <h2 className="text-4xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Connect With Me
        </span>
      </h2>

      {/* Glass container */}
      <div
        className="
          relative mt-10
          rounded-3xl
          border border-white/20
          bg-gradient-to-br from-sky-100/40 via-white/30 to-violet-100/30
          backdrop-blur-2xl backdrop-saturate-150
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
          px-10 py-12
        "
      >
        {/* soft highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-30"
        />

        <ul className="relative z-10 flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <div
                onClick={() => window.open(link.url, "_blank")}
                className="
                  relative
                  rounded-2xl
                  px-6 py-4
                  flex items-center gap-3
                  cursor-pointer
                  bg-white/20
                  border border-white/30
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                  transition-transform duration-300 hover:scale-105
                "
              >
                {/* icon */}
                <span className="text-slate-700">{link.icon}</span>

                {/* text */}
                <span className="text-[17px] font-medium text-slate-700">
                  {link.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
