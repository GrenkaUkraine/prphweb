import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import {
  ArrowRightIcon,
  TelegramLogoIcon,
  TiktokLogoIcon,
  InstagramLogoIcon,
  EnvelopeSimpleIcon,
  HeartIcon
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="w-full bg-content-primary mt-28">
      <div className="max-w-page mx-auto px-6 md:px-0 flex flex-col gap-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Link href="/">
              <Logo inverted className="h-[40px] w-auto" />
            </Link>
            <Text variant="metadata" className="text-surface max-w-70">
              Вільний журнал про українську альтернативну та андеграундну музичну сцену
            </Text>
          </div>
          <Button intent="onContent" className="whitespace-nowrap">
            Запропонувати новину
            <ArrowRightIcon weight="bold" size={12} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="flex flex-col gap-4">
            <Text variant="h4" as="span" className="text-surface">
              Ми в соцмережах
            </Text>
            <div className="flex flex-col gap-3">
              <Link href="https://t.me/prph_media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-content-tertiary-light hover:text-surface transition-colors">
                <TelegramLogoIcon size={16} weight="fill" />
                <Text variant="body">
                  Telegram канал
                </Text>
              </Link>
              <Link href="https://tiktok.com/prph_media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-content-tertiary-light hover:text-surface transition-colors">
                <TiktokLogoIcon size={16} weight="fill" />
                <Text variant="body">
                  TikTok
                </Text>
              </Link>
              <Link href="https://instagram.com/prph_media" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-content-tertiary-light hover:text-surface transition-colors">
                <InstagramLogoIcon size={16} weight="fill" />
                <Text variant="body">
                  Instagram
                </Text>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="h4" as="span" className="text-surface">Зв&apos;язок з редакцією</Text>
            <div className="flex flex-col gap-3">
              <Link href="mailto:contact@prph.media" className="flex items-center gap-2.5 text-content-tertiary-light hover:text-surface transition-colors">
                <EnvelopeSimpleIcon size={16} weight="fill" />
                <Text variant="body">contact@prph.media</Text>
              </Link>
              <Link href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-content-tertiary-light hover:text-surface transition-colors">
                <TelegramLogoIcon size={16} weight="fill" />
                <Text variant="body">Написати в Telegram</Text>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="h4" as="span" className="text-surface">Навігація</Text>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Головна</Text>
              </Link>
              <Link href="/chronicle" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Хроніка</Text>
              </Link>
              <Link href="/afisha" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Афіша</Text>
              </Link>
              <Link href="/articles" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Статті</Text>
              </Link>
              <Link href="/hub" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Музичний хаб</Text>
              </Link>
              <Link href="/suggest" className="text-content-tertiary-light hover:text-surface transition-colors">
                <Text variant="body">Запропонувати новину</Text>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="h4" as="span" className="text-surface">Підтримка</Text>
            <div className="flex flex-col gap-4">
              <Text variant="body" className="text-content-tertiary-light leading-relaxed">
                PRPH Périphérie — це незалежне медіа. Ми існуємо завдяки вашим донатам. Ваша підтримка допомагає нам оплачувати хостинг, гонорари авторам та робити ще більше крутого контенту про українську сцену.
              </Text>
              <Button intent="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
                <HeartIcon weight="fill" className="text-red-600" size={14} />
                Підтримати
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-content-secondary" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-content-tertiary-light">
          <div className="text-left">
            <Link href="/privacy" className="hover:text-surface transition-colors underline">
              <Text variant="metadata">
                Політика конфіденційності (Privacy Policy)
              </Text>
            </Link>
          </div>
          <div className="text-left md:text-center">
            <Text variant="metadata">
              © 2026 PÉRIPHÉRIE. Всі права захищенні.
            </Text>
          </div>
          <div className="text-left md:text-right">
            <Link href="/terms" className="hover:text-surface transition-colors underline">
              <Text variant="metadata">
                Умови використання (Terms of Use)
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}