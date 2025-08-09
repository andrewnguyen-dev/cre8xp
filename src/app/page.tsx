"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks } from "@/constants/navLinks";

// Framer Motion variants for staggered slide-up
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
} as const;

export default function Homepage() {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-between bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Top Left Logo */}
      <div className="relative z-10 text-5xl font-extrabold text-white">
        Cre8xp
      </div>

      {/* Bottom Left Nav Links */}
      <nav className="relative z-10">
        <motion.ul
          className="space-y-1 sm:space-y-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={item}>
              <Link
                href={link.href}
                className="group font-clash relative flex items-center pl-4 text-2xl font-bold text-white uppercase transition-all duration-200 sm:pl-10 sm:text-4xl md:text-5xl"
              >
                {/* Arrow Icon (hidden until hover) */}
                <span className="absolute left-0 -translate-x-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-8 sm:w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5l7 7-7 7m-10-7h17"
                    />
                  </svg>
                </span>

                {/* Link Text */}
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                  {link.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}
