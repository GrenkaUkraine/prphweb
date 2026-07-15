import Image from "next/image";
import Tag from "@/components/Tag";
import Text from "@/components/Text";
import Link from "next/link";

export interface NewsData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  createdAt: string;
  url: string;
}

interface NewsCardProps {
  newsData: NewsData;
  size?: "sm" | "md";
}

export default function NewsCard({newsData, size = "md"}: NewsCardProps) {
  return (
    <Link className="group flex gap-5 h-30 cursor-pointer" href={newsData.url}>
      <div className="relative aspect-square h-full shrink-0 overflow-hidden">
        <Image
          src={newsData.imageSrc}
          alt={newsData.title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 w-full">
        <div className="flex gap-3 items-center">
          {newsData.tags.map((tag) => (
            <Tag key={tag} title={tag} size="sm"/>
          ))}
          <Text variant="metadata">
            {newsData.createdAt}
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <Text variant="h3">
            {newsData.title}
          </Text>
          <Text variant="body">
            {newsData.description}
          </Text>
        </div>
      </div>
    </Link>
  )
}