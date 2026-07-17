"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeartStraightIcon, XIcon } from "@phosphor-icons/react/ssr";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Logo from "@/components/common/Logo";
import {ListIcon} from "@phosphor-icons/react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/news", label: "Новини" },
  { href: "/afisha", label: "Афіша" },
  { href: "/articles", label: "Статті" },
  { href: "/music-hub", label: "Музичний хаб" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-page-inline-mobile md:px-0 h-20 flex items-center justify-center z-50 sticky top-0 bg-page/80 backdrop-blur-md border-b border-border-subtle/50">
      <div className="w-full max-w-page mx-auto flex items-center justify-between relative">

        <div className="flex flex-1 gap-4 items-center justify-start">
          <Link href="/">
            <Logo className="h-[40px] w-auto" />
          </Link>
          <Text variant="button" className="text-content-muted">—</Text>
          <Text variant="button" className="text-content-muted">Журнал</Text>
        </div>

        <ul className="justify-self-center flex-nowrap hidden md:flex">
          {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="cursor-pointer h-full p-5 transition-colors hover:text-brand-primary">
                  <Text variant="button" as="span">
                    {link.label}
                  </Text>
                </Link>
              </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-1 justify-end">
          <SupportButton />
        </div>

        <div className="flex md:hidden flex-1 justify-end">
          <Button className="!p-2 h-auto w-auto text-content-primary" intent="outline" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
          </Button>
        </div>

        {isOpen && (
            <div className="absolute top-[60px] left-0 w-full bg-page border border-border-subtle/50 flex flex-col p-6 gap-4 md:hidden z-50 shadow-md">
              {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="py-2" onClick={() => setIsOpen(false)}>
                    <Text variant="button">{link.label}</Text>
                  </Link>
              ))}
              <hr className="border-border-subtle/50" />
              <SupportButton className="w-full flex justify-center gap-2" onClick={() => setIsOpen(false)} />
            </div>
        )}
      </div>
    </nav>
  );
}

interface SupportButtonProps {
  className?: string;
  onClick?: () => void;
}

function SupportButton({ className, onClick }: SupportButtonProps) {
  return (
      <Button
          as={Link}
          href="/support"
          intent="secondary"
          className={className}
          onClick={onClick}
      >
        <HeartStraightIcon size={16} weight="fill" className="text-red-500" />
        Підтримати
      </Button>
  );
}