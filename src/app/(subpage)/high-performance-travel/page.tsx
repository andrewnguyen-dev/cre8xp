"use client";

import SlideUpRevealText from "@/components/custom-animation/slide-up-reveal-text";
import ProgramResponsibilities from "@/components/program-responsibilities";
import { programResponsibilities } from "@/constants/programResponsibilities";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInText from "@/components/custom-animation/fade-in-text";

const HighPerformanceTravel = () => {
  const img1Ref = useRef<HTMLDivElement>(null);
  const isImg1InView = useInView(img1Ref, { once: true, amount: 0.01 });

  return (
    <section className="text-pri font-supreme">
      <div className="grid h-screen grid-cols-1 sm:grid-cols-2">
        <div className="my-auto px-10 sm:px-24">
          <SlideUpRevealText>
            <h2>High Performance Travel</h2>
          </SlideUpRevealText>

          <FadeInText delay={0.75}>
            <p className="text-lg">
              At CRE8 XP, we deliver{" "}
              <span className="font-extrabold">
                transformational, turn-key programs designed to inspire, challenge and elevate
              </span>
              . Whether you’re seeking an exclusive, high-performance group experience or a truly unique adventure, we
              craft bespoke, life-changing journeys that go beyond expectations.
            </p>
          </FadeInText>
        </div>
        {/* Image container */}
        <div className="relative h-auto w-full overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)", scale: 1.05 }}
            animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.5, 0, 0.5, 1],
            }}
            className="relative h-full w-full"
          >
            <Image src="/1.jpg" alt="High Performance Travel" fill className="object-cover" />
          </motion.div>
        </div>
      </div>

      <div ref={img1Ref} className="grid h-screen grid-cols-1 gap-8 bg-white sm:grid-cols-3">
        <div className="relative col-span-2 h-auto w-full overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.1 }}
            animate={isImg1InView ? { clipPath: "inset(0 0 0 0)", scale: 1 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.5,
              ease: [0.5, 0, 0.5, 1],
            }}
            className="relative h-full w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="High Performance Travel"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="my-auto px-10 sm:px-16">
          <FadeInText>
          <h2>Our Promise</h2>

          </FadeInText>
          <p>
            Get ready for a journey that goes beyond the destination. With carefully curated resources — like insightful
            reading materials, reflective exercises, and practical tools — you'll gain more than just memories. You'll
            leave with a fresh perspective and profound growth that continues to shape your life long after you return
            home. This isn't just a trip; it's an experience that stays with you.
          </p>
        </div>
      </div>
      <div>
        <h2>Our Fully Integrated Approach</h2>
        <ul id="our-fully-integrated-approach" className="space-y-2">
          <li>
            <strong>Extraordinary Experiences That Shift Perspectives:</strong> Unlock new ways of thinking and
            performing at the highest level.
          </li>
          <li>
            <strong>Seamless Travel &amp; Logistics:</strong> Handled through our exclusive travel partner, including
            flights, accommodation, transfers, and transport.
          </li>
          <li>
            <strong>World-Class Hospitality &amp; Dining:</strong> Curated meals for participants and leaders, plus
            exclusive dinners with inspiring presentations.
          </li>
          <li>
            <strong>Access to Global Sporting Icons &amp; Venues:</strong> Private tours of elite high performance
            facilities, personally guided by industry leaders.
          </li>
          <li>
            <strong>Elite-Level Workshops &amp; Guest Speakers:</strong> High-performance sessions designed to push
            boundaries and accelerate success.
          </li>
          <li>
            <strong>Unmatched Networking Opportunities:</strong> Build powerful connections through exclusive events,
            intimate discussions, and industry insights.
          </li>
          <li>
            <strong>Immersive Sporting Experiences:</strong> Engage in unique, hands-on activities that redefine what’s
            possible.
          </li>
          <li>
            <strong>Professional Growth &amp; Recognition:</strong> Gain micro-credentialing, badges, and access to our
            cutting-edge Learning Management System.
          </li>
          <li>
            <strong>Comprehensive Preparation &amp; Support:</strong> Including leader briefings, participant
            inductions, and tailored networking opportunities.
          </li>
        </ul>

        <h2>Program Modules</h2>
        <p>
          Our program is designed to bridge the gap between elite sports and corporate performance, delivering an
          immersive, hands-on experience that mirrors the principles of professional athletes in the corporate world.
          Through world-class facilities, expert-led sessions, and exclusive access to high-performance environments, we
          provide a transformational journey that reshapes leadership, teamwork, and personal growth.
        </p>

        <section className="py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programResponsibilities.map((item) => (
              <ProgramResponsibilities
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default HighPerformanceTravel;