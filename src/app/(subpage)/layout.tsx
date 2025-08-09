"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navLinks } from "@/constants/navLinks";

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }
    const btn = menuBtnRef.current;
    if (btn) {
      const r = btn.getBoundingClientRect();
      setCenter({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
    setAnimDone(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAnimDone(false);
  };

  // Close on Escape and lock scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);

    const { body } = document;
    if (menuOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Mark animation complete when the clip-path transition finishes
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName === "clip-path" && menuOpen) setAnimDone(true);
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [menuOpen]);

  const btnBase =
    "h-11 w-11 rounded-full bg-pri text-white transition-colors duration-200 hover:text-pri hover:bg-sec hover:border hover:border-pri hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98]";

  // Big radius so the circle covers any viewport size. 150vmax is usually enough.
  const circleOpen = `circle(150vmax at ${center.x}px ${center.y}px)`;
  const circleClosed = `circle(0px at ${center.x}px ${center.y}px)`;

  return (
    <div className="bg-sec relative min-h-dvh px-6 py-24 sm:px-24">
      {/* Top-left controls */}
      <div className="fixed top-0 left-0 p-6 z-50 flex w-full justify-between">
        <button
          type="button"
          aria-label="Back to homepage"
          className={btnBase}
          onClick={() => router.push("/")}
          title="Back"
        >
          <svg
            viewBox="0 0 24 24"
            className="mx-auto h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          ref={menuBtnRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="fullscreen-menu"
          className={btnBase}
          onClick={openMenu}
          title="Menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="mx-auto h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <main className="relative">{children}</main>

      {/* Fullscreen Menu with spreading background */}
      <div
        ref={overlayRef}
        id="fullscreen-menu"
        role={menuOpen ? "dialog" : undefined}
        aria-modal={menuOpen ? true : undefined}
        // Use pointer-events to ignore clicks when closed
        className={`fixed inset-0 z-40 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          // We keep two layers: a base transparent layer that holds content,
          // and a colored layer underneath revealed by clip-path.
          position: "fixed",
        }}
      >
        {/* Colored layer that spreads out */}
        <div
          className="bg-pri absolute inset-0"
          style={{
            clipPath: menuOpen ? circleOpen : circleClosed,
            transition: "clip-path 420ms ease-out",
          }}
        />

        {/* Content layer sits above; fade in after the spread finishes */}
        <div
          className={`absolute inset-0 flex flex-col text-white ${animDone ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
          // Small delay while opening so text appears after the spread covers screen
        >
          {/* Close button top-right */}
          {/* <div className="flex items-center justify-between p-4">
            <span className="sr-only">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              className={btnBase}
              onClick={closeMenu}
              title="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="mx-auto h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div> */}

          <nav className="grid flex-1 place-items-center px-6">
            <ul className="w-full max-w-3xl space-y-3 text-center sm:space-y-6">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl py-4 text-lg font-semibold transition-colors duration-200 sm:text-2xl md:text-4xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 text-center text-sm opacity-80">
            Press Esc to close
          </div>
        </div>
      </div>
    </div>
  );
}
