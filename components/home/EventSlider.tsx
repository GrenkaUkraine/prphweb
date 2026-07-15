"use client"

import { useSyncExternalStore, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import Text from "@/components/Text";
import Tag from "@/components/Tag";
import Button from "@/components/Button";

import { ArrowRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export interface SliderData {
  id: string;
  title: string;
  imageSrc: string;
  tagText?: string;
  buttonText: string;
  buttonIntent: 'primary' | 'secondary' | 'ghost' | 'onContent' | 'outline';
  href: string;
}

interface SliderProps {
  slides: SliderData[];
}

const emptySubscribe = () => () => {};

export default function EventSlider({ slides }: SliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div className="w-full h-[505px] bg-content-secondary/70 animate-pulse" />
    );
  }

  return (
    <div className="relative w-full h-[505px] overflow-hidden select-none bg-content-secondary/70">
      <style>
        {`
          .custom-bullet {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            cursor: pointer;
            transition: all 0.25s ease;
          }
          .custom-bullet-active {
            background-color: #ffffff;
            width: 24px;
            border-radius: 4px;
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSwiper={setSwiperInstance}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            <Link href={slide.href} className="relative block w-full h-[505px] overflow-hidden group/slide">
              <div className="absolute inset-0 z-0 w-full h-full">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 text-surface">
                <div className="self-start">
                  {slide.tagText && (
                    <Tag title={slide.tagText} />
                  )}
                </div>

                <div className="flex flex-row items-end justify-between gap-12">
                  <Text variant="h2" className="max-w-[90%] text-white drop-shadow-sm">
                    {slide.title}
                  </Text>

                  <Button
                    as="div"
                    intent={slide.buttonIntent}
                    className="shrink-0"
                  >
                    {slide.buttonText}
                    <ArrowRightIcon weight="bold" size={12}/>
                  </Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-white opacity-50 hover:opacity-100 hover:scale-150 transition-all duration-200 cursor-pointer"
      >
        <CaretLeftIcon size={24} weight="bold" />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-white opacity-50 hover:opacity-100 hover:scale-150 transition-all duration-200 cursor-pointer"
      >
        <CaretRightIcon size={24} weight="bold" />
      </button>

      <div className="custom-swiper-pagination absolute bottom-2.5 left-0 w-full z-30 flex gap-2 justify-center items-center h-4" />
    </div>
  )
}