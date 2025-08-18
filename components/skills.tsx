"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSectionInView } from "@/lib/useInView";
import SectionHeading from "./section-heading";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function ConnectWithMe() {
  const { ref } = useSectionInView("#connect");
  const [showMessage, setShowMessage] = useState(false);

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
      url: "", // keep empty since not ready yet
      icon: <FaMedium size={28} />,
      color: "text-black",
      comingSoon: true, // custom flag
    },
    {
      name: "Twitter",
      url: "https://x.com/Nouman1256",
      icon: <FaTwitter size={28} />,
      color: "text-sky-500",
    },
  ];

  const handleClick = (link: any) => {
    if (link.comingSoon) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // hide after 2s
    } else {
      window.open(link.url, "_blank");
    }
  };

  return (
    <section
      id="connect"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{"Connect With Me"}</SectionHeading>

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
            onClick={() => handleClick(link)}
          >
            <div className={`flex items-center gap-2 ${link.color}`}>
              {link.icon}
              <span className="text-lg font-medium">{link.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Coming Soon message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-4 text-center text-gray-600 font-medium"
        >
          🚧 Medium profile coming soon!
        </motion.div>
      )}
    </section>
  );
}
