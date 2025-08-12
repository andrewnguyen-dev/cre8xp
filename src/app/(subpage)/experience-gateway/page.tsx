"use client";

import SlideUpRevealText from "@/components/custom/slide-up-reveal-text";
import Itineraries from "@/components/itineraries";
import { itineraries } from "@/constants/itineraries";
import React from "react";

const ExperienceGateway = () => {
  return (
    <section className="text-pri font-supreme">
      <h1>
        <SlideUpRevealText text="The World’s Ultimate Experience Marketplace for High-Performance Adventures" />
      </h1>

      <p>
        <b>
          Discover, Book, and Live the World’s Most Elite Adventures Step into CRE8 XP Portal, the global marketplace
          where high-performance adventures come to life. Here, you can: Train with world-class athletes in extreme
          sports and fitness
        </b>
      </p>
      <div className="my-8 space-y-2 sm:w-2/3">
        <p></p>
        <p>
          Join immersive adventure tours curated by elite organizers. Book exclusive experiences like workouts with top
          performers, inspirational talks with rising athletes, or intimate sessions with musicians and creators. Every
          experience is designed to push limits, ignite passion, and create memories that last a lifetime — and you can
          explore, book, and manage it all seamlessly in one place.
        </p>
        <p>
          Whether you want to feel the adrenaline, learn from the best, or unlock once-in-a-lifetime access, CRE8 XP
          connects you with the world’s most extraordinary adventures.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {itineraries.map((item) => (
          <Itineraries key={item.href} thumbnail={item.thumbnail} tag={item.tag} title={item.title} href={item.href} />
        ))}
      </div>

      <p className="mt-12">
        <b>Are you an elite adventure tour organizer, a world-class athlete, musician or an experience creator?</b>
      </p>
      <div className="my-8 space-y-2 sm:w-2/3">
        <p>CRE8 XP is more than a marketplace — it’s the global stage for elite adventure tour organizers, world-class athletes, and experience creators to showcase unforgettable journeys.</p>
        <p>From extreme sports adventures and elite coaching sessions, to immersive workouts with top-tier performers, CRE8 XP connects those who live on the edge with those who aspire to rise.</p>
        <p>Whether you’re an athlete offering one-on-one training, an upcoming pro inspiring the next generation through corporate talks, or a musician curating a transformative experience — CRE8 XP is your platform to be discovered, booked, and celebrated.</p>
        <p>All bookings, communications, and logistics — seamlessly handled in one powerful hub.</p>
        <p className="underline">Contact us to get involved.</p>
      </div>
    </section>
  );
};

export default ExperienceGateway;
