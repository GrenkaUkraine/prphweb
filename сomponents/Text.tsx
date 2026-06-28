import React from "react";
import {cn} from "@/lib/utils";

const variantsMap = {
  h1: 'typography-h1',
  h2: 'typography-h2',
  h3: 'typography-h3',
  h4: 'typography-h4',
  'body-lead': 'typography-body-lead',
  body: 'typography-body',
  button: 'typography-button',
  metadata: 'typography-metadata',
}

const defaultTagsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lead': 'p',
  body: 'p',
  button: 'span',
  metadata: 'span',
}

export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body-lead' | 'body' | 'button' | 'metadata';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default function Text({ variant = 'body', as, className, children, ...props }: TextProps) {
  const Component = as || defaultTagsMap[variant] || 'p';

  return <Component className={cn(variantsMap[variant], className)} {...props}>{children}</Component>
}