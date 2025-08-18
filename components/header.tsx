"use client";

import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/type";
import { useActiveSectionContext } from "@/containers/active-section";
import { motion } from "framer-motion";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed z-[999] w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center px-6
         border border-yellow-500 border-opacity-40 
         bg-yellow-900 bg-opacity-80 shadow-lg shadow-yellow-100/30
         backdrop-blur-[0.5rem] h-20
         dark:bg-yellow-500 dark:border-yellow-100 dark:bg-opacity-115"
      >
        {/* Navigation */}
        <ul
          className="flex flex-wrap items-center gap-x-6 text-[0.9rem] 
                 font-medium text-gray-500 mx-auto"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative"
            >
              <NextLink
                className={clsx(
                  "flex items-center px-3 py-2 transition dark:text-gray-800",
                  {
                    "dark:text-gray-500": activeSection === link.hash,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.nameEng}
                {link.hash === activeSection && (
                  <motion.span
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
