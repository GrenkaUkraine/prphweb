import Link from "next/link";
import Tag from "@/components/ui/Tag";
import Text from "@/components/ui/Text";

import Image from "next/image";

export interface ArticleData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  createdAt: string;
  timeToRead: string;
  url: string;
}

interface ArticleCardProps {
  articleData: ArticleData;
  size?: "sm" | "md";
}

export default function ArticleCard({articleData, size = "md"}: ArticleCardProps) {
  return (
    <Link href={articleData.url} className="flex flex-col p-7 gap-3 bg-surface group">
      <div className="relative w-full h-[273px] overflow-hidden shrink-0">
        <Image
          src={articleData.imageSrc}
          alt={articleData.title}
          fill
          priority
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center">
          {articleData.tags.map((tag) => (
            <Tag key={tag} title={tag}/>
          ))}
          <Text variant="metadata" className="text-content-muted">
            {articleData.createdAt}
          </Text>
        </div>
        <Text variant="metadata" className="text-content-muted">
          {articleData.timeToRead}
        </Text>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <Text variant="h3">
          {articleData.title}
        </Text>
        <Text variant="body" className="text-content-tertiary">
          {articleData.description}
        </Text>
      </div>
    </Link>
  )
}