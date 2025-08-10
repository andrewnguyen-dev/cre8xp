import { ItinerariesProps } from "@/components/itineraries";

export type Itinerary = ItinerariesProps

export const itineraries: Itinerary[] = [
  {
    thumbnail: "https://images.unsplash.com/photo-1507582164819-43222b86fb0d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "High Performance",
    title: "Tokyo Elite Performance Immersion",
    href: "/itineraries/tokyo-elite-performance",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1612257186416-418ec625fae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Sports Science",
    title: "Melbourne Sports Science Deep Dive",
    href: "/itineraries/melbourne-sport-science",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1656392022643-11e2ad8f6d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Leadership",
    title: "Queenstown Leadership in Motion",
    href: "/itineraries/queenstown-leadership",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1557587884-a22f19abbdb1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Networking",
    title: "London Football and Boardroom",
    href: "/itineraries/london-football-boardroom",
  },
];
