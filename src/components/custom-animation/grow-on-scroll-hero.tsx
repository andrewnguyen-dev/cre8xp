"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * GrowOnScrollHero
 *
 * A full-height hero where a small centered image grows as you scroll down
 * until it fills the screen, then the rest of the page content continues.
 *
 * Props:
 *  - imageSrc: string (required) – the image to grow
 *  - slogan: string (required) – big text shown under the image
 *  - children: React.ReactNode – normal page content after the hero
 *
 * Usage:
 *  <GrowOnScrollHero imageSrc="/hero.png" slogan="Shine with Solar">
 *    <YourPageContent />
 *  </GrowOnScrollHero>
 */
export default function GrowOnScrollHero({
  imageSrc,
  slogan,
  children,
}: {
  imageSrc: string;
  slogan: string;
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Drive animations based on how far we've scrolled through the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start when the hero hits the top of the viewport, end when its bottom hits the top
    offset: ["start start", "end start"],
  });

  // Smooth the progress a touch
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  // Image scales from modest to very large so it eventually covers the viewport
  const scale = useTransform(smoothProgress, [0, 1], [0.6, 3.8]);

  // Text fades and slides up as the image grows
  const textOpacity = useTransform(smoothProgress, [0, 0.5, 0.8, 1], [1, 0.8, 0.15, 0]);
  const textY = useTransform(smoothProgress, [0, 1], [0, -80]);

  return (
    <div ref={containerRef} className="relative">
      {/* Spacer ensures we have room to scroll while the hero stays sticky */}
      <div className="">
        {/* Sticky hero that occupies the screen height */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
          <div className="absolute inset-0 grid place-items-center">
            {/* Image wrapper – start small via width and then scale up with motion */}
            <motion.div
              style={{ scale }}
              className="relative z-10 w-[42vmin] md:w-[34vmin] aspect-square"
            >
              <Image
                src={imageSrc}
                alt="Hero"
                fill
                priority
                sizes="(max-width: 768px) 42vmin, 34vmin"
                className="rounded-3xl object-cover shadow-2xl"
              />
            </motion.div>

            {/* Slogan text */}
            <motion.h1
              style={{ opacity: textOpacity, y: textY }}
              className="pointer-events-none absolute bottom-[12vh] left-1/2 z-20 -translate-x-1/2 px-6 text-center font-semibold tracking-tight text-4xl md:text-6xl lg:text-7xl"
            >
              {slogan}
            </motion.h1>

            {/* Subtle gradient vignette to help the image feel full-bleed as it grows */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
