"use client";

import FadeInText from "@/components/custom-animation/fade-in-text";
import Itineraries from "@/components/itineraries";
import SplitText from "@/components/reactbits/split-text";
import { itineraries } from "@/constants/itineraries";
import React from "react";

const ExperienceGateway = () => {
  return (
    <section className="text-pri font-manrope">
      <div className="bg-sec">
        <div className="flex h-screen items-center justify-center bg-white px-6 sm:px-24">
          <SplitText
            text="The World's Ultimate Experience Marketplace for High-Performance Adventures"
            className="font-manrope text-5xl font-semibold uppercase sm:text-6xl md:text-7xl md:leading-20 sm:leading-17 leading-14"
            delay={100}
            duration={1.5}
            ease="power3.out"
            splitType="words"
          />
        </div>
        <div className="px-6 py-30 sm:px-24">
          <FadeInText fromY={10}>
            <p>
              <b>
                Discover, Book, and Live the World’s Most Elite Adventures Step into CRE8 XP Portal, the global
                marketplace where high-performance adventures come to life. Here, you can: Train with world-class
                athletes in extreme sports and fitness
              </b>
            </p>
          </FadeInText>
          <div className="my-8 space-y-2 sm:w-2/3">
            <FadeInText fromY={10} delay={0.25}>
              <p>
                Join immersive adventure tours curated by elite organizers. Book exclusive experiences like workouts
                with top performers, inspirational talks with rising athletes, or intimate sessions with musicians and
                creators. Every experience is designed to push limits, ignite passion, and create memories that last a
                lifetime — and you can explore, book, and manage it all seamlessly in one place.
              </p>
            </FadeInText>
            <FadeInText fromY={10} delay={0.5}>
              <p>
                Whether you want to feel the adrenaline, learn from the best, or unlock once-in-a-lifetime access, CRE8
                XP connects you with the world’s most extraordinary adventures.
              </p>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {itineraries.map((item) => (
              <Itineraries
                key={item.href}
                thumbnail={item.thumbnail}
                tag={item.tag}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-6 py-24 sm:mx-24">
        <p className="mt-12">
          <b>Are you an elite adventure tour organizer, a world-class athlete, musician or an experience creator?</b>
        </p>
        <div className="my-8 space-y-2 sm:w-2/3">
          <p>
            CRE8 XP is more than a marketplace — it’s the global stage for elite adventure tour organizers, world-class
            athletes, and experience creators to showcase unforgettable journeys.
          </p>
          <p>
            From extreme sports adventures and elite coaching sessions, to immersive workouts with top-tier performers,
            CRE8 XP connects those who live on the edge with those who aspire to rise.
          </p>
          <p>
            Whether you’re an athlete offering one-on-one training, an upcoming pro inspiring the next generation
            through corporate talks, or a musician curating a transformative experience — CRE8 XP is your platform to be
            discovered, booked, and celebrated.
          </p>
          <p>All bookings, communications, and logistics — seamlessly handled in one powerful hub.</p>
          <p className="underline">Contact us to get involved.</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGateway;
