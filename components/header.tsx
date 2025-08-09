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
        className="flex items-center justify-between px-6
                   border border-white border-opacity-40 
                   bg-white bg-opacity-80 shadow-lg shadow-white/30
                   backdrop-blur-[0.5rem] h-20
                   dark:bg-white dark:border-white/80 dark:bg-opacity-75"
      >
        {/* Logo */}
        <div
          className="text-6xl font-extrabold 
             bg-gradient-to-r from-gray-400 via-gray-800 to-gray-700 
             bg-clip-text text-transparent
             drop-shadow-[4px_4px_3px_rgba(0,0,0,0.5)]
             -rotate-2"
        >
          N
        </div>

        {/* Navigation */}
        <ul
          className="flex flex-wrap items-center gap-x-6 text-[0.9rem] 
                     font-medium text-gray-100"
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
                  "flex items-center px-3 py-2  transition dark:text-gray-500 dark:hover:text-yellow-200",
                  {
                    " dark:text-gray-200": activeSection === link.hash,
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
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
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
