import { ProjectInfo } from "@/lib/type";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  imageUrl,
  link,
}: ProjectProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-64"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* Thumbnail */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300"
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4"
        >
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-white text-sm mt-2">{description}</p>
        </motion.div>
      </a>
    </motion.div>
  );
}
