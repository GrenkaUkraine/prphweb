import React from "react";

import Text from "@/components/Text";

interface CtaBannerProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function CtaBanner({title, description, children, className = ""}: CtaBannerProps) {
  return (
    <div className={`w-full bg-content-primary p-8 flex justify-between items-center gap-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <Text variant="h3" as="span" className="text-surface">{title}</Text>
        {description && (
          <Text variant="body" className="text-page">{description}</Text>
        )}
      </div>
      {children}
    </div>
  )
}