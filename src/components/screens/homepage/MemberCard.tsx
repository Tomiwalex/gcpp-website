'use client';

import Image from 'next/image';

interface MemberCardProps {
  name: string;
  country: string;
  flagSrc: string;
  imageSrc: string;
}

export default function MemberCard({
  name,
  country,
  flagSrc,
  imageSrc,
}: MemberCardProps) {
  return (
    <div className="bg-background flex items-center gap-[10px] rounded-md border border-[#EAEAEA] p-2">
      {/* Member Image */}
      <div className="relative h-16 w-16 min-w-16 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-md object-cover"
          priority
        />
      </div>
      {/* Member Info */}
      <div className="flex flex-col gap-1">
        <p className="text-foreground/50 text-[min(10vw,14px)] font-semibold">
          {name}
        </p>
        <div className="flex items-center gap-1">
          <Image
            src={flagSrc}
            alt={`${country} flag`}
            width={16}
            height={12}
            className="object-contain"
          />
          <p className="text-foreground/50 text-[min(10vw,12px)]">{country}</p>
        </div>
      </div>
    </div>
  );
}
