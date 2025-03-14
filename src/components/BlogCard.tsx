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
    <div className="overflow-hidden duration-500 ease-linear hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        {/* Date and Author */}
        <p className="text-foreground/50 mb-2 flex gap-2 text-[min(10vw,14px)] text-nowrap">
          <span>{date}</span> | <span className="truncate">by {author}</span>
        </p>
        {/* Title */}
        <h3 className="h-[90px] text-[min(10vw,20px)] font-bold text-gray-900">
          {title}
        </h3>
        {/* Description */}
        <p className="text-foreground/70 mb-10 line-clamp-[7] text-[min(10vw,14px)]">
          {description}
        </p>
        {/* Read More Button */}
        <Button
          variant="outline"
          className="border-gray-400 px-10 text-gray-700 hover:bg-gray-100"
          asChild
        >
          <Link href={href}>Read More</Link>
        </Button>
      </div>
    </div>
  );
}
