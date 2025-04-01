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
    <div className="flex cursor-pointer items-center gap-[10px] rounded border-[0.5px] border-[#EAEAEA] bg-white p-2 text-[#7D7972] transition-all duration-300 ease-in-out select-none hover:bg-[#14120F] hover:text-white">
      {/* Member Image */}
      <div className="relative h-[67px] w-[67px] min-w-16 overflow-hidden rounded">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="w-full object-cover"
          priority
        />
      </div>
      {/* Member Info */}
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold">{name}</p>
        <div className="-mt-1 flex items-center gap-x-2">
          <Image
            src={flagSrc}
            alt={`${country} flag`}
            width={16}
            height={12}
            className="object-contain"
          />
          <p className="text-xs font-normal">{country}</p>
        </div>
      </div>
    </div>
  );
}
