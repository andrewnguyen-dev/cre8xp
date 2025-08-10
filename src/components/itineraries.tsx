import Image from "next/image";
import Link from "next/link";

export interface ItinerariesProps {
  thumbnail: string;
  tag: string;
  title: string;
  href: string;
}

export default function Itineraries({ thumbnail, tag, title, href }: ItinerariesProps) {
  return (
    <Link href={href} aria-label={title} className="group block focus:outline-none">
      <article className="hover:bg-pri focus-visible:bg-pri overflow-hidden rounded-sm bg-white transition-colors duration-200">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover px-3 pt-3"
            priority={false}
          />
        </div>

        <div className="p-5">
          <span className="group-hover:pri group-focus-visible:pri inline-flex items-center rounded-full bg-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100">
            {tag}
          </span>

          <h3 className="group-hover:text-sec group-focus-visible:text-sec mt-3 text-lg font-semibold text-gray-900 transition-colors duration-200">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
