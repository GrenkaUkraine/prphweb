import Tag from "@/components/ui/Tag";
import {MapPinIcon} from "@phosphor-icons/react/ssr";
import Text from "@/components/ui/Text";

import Image from "next/image";
import Link from "next/link";

export interface EventData {
  id: string;
  title: string;
  participants: string[];
  address: string;
  price: string;
  date: string;
  imageSrc: string;
  url: string;
}

interface EventCardProps {
  eventData: EventData;
  size?: "sm" | "md";
}

export default function EventCard({eventData, size = "md"}: EventCardProps) {
  return (
    <Link href={eventData.url} className="relative flex flex-col p-6 gap-5 overflow-hidden group cursor-pointer text-surface">
      <div className="absolute inset-0 z-0">
        <Image
          src={eventData.imageSrc}
          alt={eventData.title}
          fill
          priority
          className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/70" />
      </div>

      <div className="relative z-10 flex w-full justify-between items-center">
        <Tag title={eventData.date}/>
        <div className="flex gap-1 items-center text-content-tertiary-light">
          <MapPinIcon weight="fill" size={12}/>
          <Text variant="button">
            {eventData.address}
          </Text>
        </div>
      </div>
      <div className="relative z-10 flex flex-col flex-1 gap-1.5">
        <div className="flex flex-col gap-0.5 h-full w-full">
          <Text variant="h3">
            {eventData.title}
          </Text>
          <Text variant="body" className="line-clamp-2 text-content-tertiary-light">
            Учасники: <strong className="font-bold">{eventData.participants.join(", ")}</strong>
          </Text>
        </div>
        <Text variant="h3" as="span">
          {eventData.price} ГРН
        </Text>
      </div>
    </Link>
  )
}