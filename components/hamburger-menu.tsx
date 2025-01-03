"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@/lib/type";
import clsx from "clsx";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/containers/active-section";
import { AnimatePresence, motion } from "framer-motion";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const menuTrigger = {
        visible: { scale: 1, opacity: 0.7, y: 0 },
        tap: { scale: 0.85 },
        hover: { scale: 1.2 },
    };
    const menuList = {
        start: { scale: 0.6, opacity: 0.7, y: -20 },
        visible: { scale: 1, opacity: 0.9, y: 0 },
    };

    // Debugging useEffect to observe state changes
    useEffect(() => {
        console.log("isOpen changed:", isOpen);
    }, [isOpen]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!(event.target as HTMLElement).closest(".hamburger-menu")) {
                console.log("Clicked outside, closing menu"); // Debug log
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        console.log("Toggle function called"); // Debug log
        setIsOpen((prev) => {
            const newState = !prev;
            console.log("Hamburger clicked, new isOpen state:", newState); // Log the new state
            return newState;
        });
    };

    return (
        <div className="hamburger-menu md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2">
            <motion.button
                variants={menuTrigger}
                initial="visible"
                whileTap="tap"
                whileHover="hover"
                className="bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
                onClick={toggleMenu} // Use toggleMenu directly
            >
                <Hamburger toggled={isOpen} toggle={() => {}} size={20} /> {/* Pass an empty function */}
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuList}
                        initial="start"
                        animate="visible"
                        exit={{ scale: 0.6, opacity: 0, y: -20 }} // Exit animation
                        className="w-full bg-white drop-shadow border border-slate-400 dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col items-center justify-center dark:bg-gray-950 p-1"
                    >
                        {links.map((link, index) => (
                            <motion.div
                                className="w-full"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }} // Animation duration for each link
                            >
                                <NextLink
                                    className={clsx(
                                        "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
                                        {
                                            "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded":
                                                activeSection === link.hash,
                                            "rounded-t-xl": index === 0,
                                            "rounded-b-xl": index === links.length - 1,
                                        }
                                    )}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.hash);
                                        setTimeOfLastClick(Date.now());
                                        setIsOpen(false); // Close the menu on link click
                                    }}
                                >
                                    {link.nameEng}
                                </NextLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
