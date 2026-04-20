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
    <header className="fixed top-4 z-[999] w-full flex justify-center font-sans">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="
          relative
          px-6 sm:px-8
          h-16
          flex items-center
          rounded-2xl
          border border-white/20
          bg-gradient-to-br from-sky-100/40 via-white/30 to-violet-100/30
          backdrop-blur-2xl backdrop-saturate-150
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
        "
      >
        {/* Glass highlight */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-2xl
            bg-gradient-to-b from-white/70 to-transparent
            opacity-30
          "
        />

        {/* Navigation */}
        <ul className="relative flex items-center gap-x-2 sm:gap-x-4 text-[0.95rem] font-medium">
          {links.map((link) => {
            const isActive = activeSection === link.hash;

            return (
              <li key={link.hash} className="relative">
                <NextLink
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    `
                      relative px-4 py-2 rounded-xl
                      transition-all duration-300
                    `,
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {link.nameEng}

                  {/* Active pill (matching global gradient system) */}
                  {isActive && (
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
                        from-white/40
                        via-sky-100/40
                        to-violet-100/30
                        border border-white/30
                        backdrop-blur-xl
                        shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                      "
                    />
                  )}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
}
