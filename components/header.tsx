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
    <header className="fixed top-4 z-[999] w-full flex justify-center">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="
          relative
          px-8
          h-16
          flex items-center
          rounded-2xl
          border border-sky-200/30
          bg-gradient-to-br
          from-sky-100/40
          via-cyan-100/20
          to-white/10
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_20px_50px_rgba(0,0,0,0.18)]
        "
      >
        {/* Inner glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-2xl
            bg-gradient-to-b from-white/50 to-transparent
            opacity-25
          "
        />

        {/* Navigation */}
        <ul
          className="
            relative
            flex items-center gap-x-6
            text-[0.9rem]
            font-medium
            text-slate-700
          "
        >
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <NextLink
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "relative px-4 py-2 transition-colors",
                  activeSection === link.hash
                    ? "text-slate-900"
                    : "hover:text-sky-700"
                )}
              >
                {link.nameEng}

                {/* Active Liquid Pill */}
                {activeSection === link.hash && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                    className="
                      absolute inset-0 -z-10
                      rounded-xl
                      bg-gradient-to-br
                      from-white/70
                      via-sky-100/50
                      to-cyan-100/30
                      backdrop-blur-md
                      border border-white/40
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.18)]
                    "
                  />
                )}
              </NextLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
