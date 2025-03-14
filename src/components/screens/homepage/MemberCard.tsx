// components/MemberCard.tsx
'use client';

import Image from 'next/image';

interface MemberCardProps {
  name: string;
  country: string;
  flagSrc: string; // URL or path to the flag image
  imageSrc: string; // URL or path to the member's photo
  imageAlt: string;
}

export default function MemberCard({
  name,
  country,
  flagSrc,
  imageSrc,
  imageAlt,
}: MemberCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-2 h-24 w-24">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <div className="flex items-center gap-1">
        <Image
          src={flagSrc}
          alt={`${country} flag`}
          width={16}
          height={16}
          className="object-contain"
        />
        <p className="text-xs text-gray-600">{country}</p>
      </div>
    </div>
  );
}
