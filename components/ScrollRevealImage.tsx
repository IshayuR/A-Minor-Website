"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollRevealImageProps = { src: string; alt: string; className?: string; priority?: boolean };

export function ScrollRevealImage({ src, alt, className, priority = false }: ScrollRevealImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-soft">
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
      </div>
    </motion.div>
  );
}
