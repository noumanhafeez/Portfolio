import { ProjectInfo } from "@/lib/type";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

type ProjectProps = ProjectInfo;

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const isVideo = imageUrl.endsWith(".mov") || imageUrl.endsWith(".mp4");

    // Ensures video is paused on page load and on first load
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    const handleMouseEnter = () => {
        console.log("Mouse entered"); // Debug log
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
    };

    const handleMouseLeave = () => {
        console.log("Mouse left"); // Debug log
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-white max-w-[42rem] border border-black-5 rounded-lg overflow-hidden sm:pr-8
                    relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8
                    dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            >
                <div
                    className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10
                        sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
                >
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase
                                tracking-wider text-white rounded-full dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                {isVideo ? (
                    <motion.video
                        ref={videoRef}
                        playsInline
                        muted // Ensure video is muted
                        width={300}
                        height={70}
                        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
                        animate={{ opacity: 1, scale: 1 }} // Animate to this state
                        exit={{ opacity: 0, scale: 0.8 }} // Animate out
                        transition={{ duration: 0.5 }} // Duration of the animation
                        className="absolute hidden sm:block top-2 left-[calc(60%-2px)]
                        rounded-t-lg shadow-2xl transition
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3 
                        group-hover:translate-y-3 
                        group-hover:-rotate-2
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2
                        group-even:right-[initial] 
                        group-even:-left-40"
                    >
                        <source
                            src={imageUrl}
                            type={imageUrl.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                        />
                        Your browser does not support the video tag.
                    </motion.video>
                ) : (
                    <Image
                        src={imageUrl}
                        alt="Project I worked"
                        quality={95}
                        width={350}
                        height={150}
                        className="absolute hidden sm:block top-3 left-[calc(80%-50px)] 
                        rounded-t-lg shadow-2xl transition
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3 
                        group-hover:translate-y-3 
                        group-hover:-rotate-2
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2
                        group-even:right-[initial] 
                        group-even:-left-40"
                    />
                )}
            </section>
        </motion.div>
    );
}
