'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  date: string;
  author: string;
}

export default function BlogCard({
  title,
  description,
  imageSrc,
  href,
  date,
  author,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden rounded border border-[#EAEAEA] transition-all duration-300 ease-in-out select-none hover:border-[#cccccc] lg:max-w-[360px]">
      <div className="relative h-[214px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="cursor-pointer object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="p-6">
        {/* Date and Author */}
        <p className="mb-2 flex gap-2 text-xs font-normal text-nowrap text-[#747998]">
          <span>{date}</span> | <span className="truncate">by {author}</span>
        </p>
        {/* Title */}
        <h3 className="mb-3 text-base font-semibold text-[#14120F] lg:mb-0 lg:h-[90px] lg:text-xl">
          {title}
        </h3>
        {/* Description */}
        <p className="mb-10 line-clamp-[7] text-[min(10vw,14px)] leading-[1.54] font-normal text-ellipsis text-[#43413E]">
          {description}
        </p>
        {/* Read More Button */}
        <Button
          variant="outline"
          className="border border-[#14120F] px-10 text-[#14120F] hover:bg-[#14120F] hover:text-white"
          asChild
        >
          <Link href={href}>Read More</Link>
        </Button>
      </div>
    </div>
  );
}
