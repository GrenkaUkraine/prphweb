import React from "react";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {ArrowRightIcon} from "@phosphor-icons/react/dist/ssr";

interface CategoryBlockProps {
  title: string;
  icon: React.ElementType;
  buttonText: string;
  buttonUrl?: string;
  children?: React.ReactNode;
}

export default function CategoryBlock({title, icon, buttonText, buttonUrl = "/", children}: CategoryBlockProps) {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-7 w-full">
      <div className="flex items-center gap-1.5">
        <Icon size={12} weight="fill" className="text-brand-primary"/>
        <Text variant="metadata" as="h2" className="uppercase">
          {title}
        </Text>
      </div>
      <div className="flex flex-col gap-6">
        {children}
        <Button intent="onContent" className="shadow-md" as={Link} href={buttonUrl}>
          {buttonText}
          <ArrowRightIcon size={12} weight="bold" />
        </Button>
      </div>
    </div>
  )
}