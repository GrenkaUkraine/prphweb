import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center typography-button h-[44px] md:h-[40px] px-5 py-2.5 cursor-pointer border border-transparent transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary:
          "bg-brand-primary text-surface border-brand-primary hover:bg-surface hover:text-content-primary hover:border-surface active:bg-transparent active:text-brand-primary active:border-brand-primary",
        secondary:
          "bg-content-primary text-surface border-content-primary hover:bg-surface hover:text-content-primary hover:border-surface active:bg-transparent active:text-content-primary active:border-content-primary",
        ghost:
          "bg-transparent text-content-secondary border-transparent hover:text-brand-primary active:bg-brand-primary/10",
        onContent:
          "bg-surface text-content-primary border-surface hover:bg-content-secondary hover:text-surface hover:border-content-secondary active:bg-transparent active:text-surface active:border-surface",
        outline:
          "border border-content-secondary text-surface bg-transparent hover:bg-content-secondary hover:border-content-secondary active:bg-transparent active:border-brand-primary active:text-brand-primary",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonProps<T extends React.ElementType = "button"> extends VariantProps<typeof buttonVariants> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export default function Button<T extends React.ElementType = "button">({
                                                                         as,
                                                                         className,
                                                                         intent,
                                                                         children,
                                                                         ...props
                                                                       }: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ intent }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}