"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SectionHeading from "./section-heading";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

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
      url: "", // ✅ your Medium link here
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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Connect With Me</SectionHeading>

      {/* Social Links */}
      <ul className="flex flex-wrap justify-center gap-6 mt-6">
        {links.map((link, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={link.name}
            className="hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={() => window.open(link.url, "_blank")}
          >
            <div className={`flex items-center gap-2 ${link.color}`}>
              {link.icon}
              <span className="text-lg font-medium">{link.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
