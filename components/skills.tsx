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
      icon: <FaLinkedin size={28} />,
      color: "text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/noumanhafeez",
      icon: <FaGithub size={28} />,
      color: "text-gray-900",
    },
    {
      name: "Medium",
      url: "https://medium.com/@noumanhafeez095",
      icon: <FaMedium size={28} />,
      color: "text-black",
    },
    {
      name: "Twitter",
      url: "https://x.com/Nouman1256",
      icon: <FaTwitter size={28} />,
      color: "text-sky-500",
    },
  ];

  return (
    <section
      id="connect"
      ref={ref}
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 px-4 text-center"
    >
      <SectionHeading>Connect With Me</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <div
              onClick={() => window.open(link.url, "_blank")}
              className="
                relative
                rounded-3xl
                px-6 py-4
                flex items-center gap-2
                cursor-pointer
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-xl backdrop-saturate-150
                border border-white/30
                shadow-[0_15px_40px_rgba(56,189,248,0.15)]
                transition-transform duration-300 hover:scale-105
              "
            >
              {/* Glass highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-20"
              />

              {/* Content */}
              <div
                className={`relative z-10 flex items-center gap-2 ${link.color}`}
              >
                {link.icon}
                <span className="text-lg font-medium">{link.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
