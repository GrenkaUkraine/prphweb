import React from "react";
import Link from "next/link";
import { HeartStraightIcon } from "@phosphor-icons/react/ssr";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-center z-50 sticky top-0 bg-page/80 backdrop-blur-md border-b border-border-subtle/50">
      <div className="w-full max-w-page mx-auto flex items-center justify-between">

        <div className="flex flex-1 gap-4 items-center justify-start">
          <Link href="/">
            <Logo className="h-[40px] w-auto" />
          </Link>
          <Text variant="button" className="text-content-muted">—</Text>
          <Text variant="button" className="text-content-muted">Журнал</Text>
        </div>

        <ul className="flex justify-self-center flex-nowrap">
          <li>
            <Link href="/news" className="cursor-pointer h-full p-5 transition-colors hover:text-brand-primary">
              <Text variant="button" as="span">
                Новини
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/afisha" className="cursor-pointer h-full p-5 transition-colors hover:text-brand-primary">
              <Text variant="button" as="span">
                Афіша
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/articles" className="cursor-pointer h-full p-5 transition-colors hover:text-brand-primary">
              <Text variant="button" as="span">
                Статті
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/music-hub" className="cursor-pointer h-full p-5 transition-colors hover:text-brand-primary">
              <Text variant="button" as="span">
                Музичний хаб
              </Text>
            </Link>
          </li>
        </ul>

        <div className="flex flex-1 justify-end">
          <Button
            as={Link}
            href="/support"
            intent="secondary"
          >
            <HeartStraightIcon size={16} weight="fill" className="text-red-500" />
            Підтримати
          </Button>
        </div>

      </div>
    </nav>
  );
}