'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { useState } from 'react';

export default function WhyPublishWithUs() {
  const [reason, setReason] = useState<string>('Expert Guidance');

  const reasons = [
    'Expert Guidance',
    'Ownership & Freedom',
    'Personalized Support',
    'Creative Excellence',
    'Comprehensive Solutions',
    'Global Reach',
    'Beginner-Friendly',
  ];

  return (
    <section className="p-5 md:p-12 lg:py-24">
      <div className="mx-auto w-full max-w-[1284px]">
        <h2 className="mb-10 text-center text-3xl font-semibold text-[#14120F] lg:mb-12 lg:text-5xl">
          Why Publish With Us?
        </h2>

        <div className="flex flex-wrap items-stretch gap-3 lg:flex-nowrap">
          <div className="grid grid-cols-1 gap-3 lg:max-w-[456px] xl:w-[456px]">
            {reasons.map((value, index) => (
              <button
                onClick={e => setReason(value)}
                className={`text-xl lg:text-2xl ${value === reason ? 'rounded border border-[#EAEAEA] bg-[#FAFAFA] font-semibold text-[#14120F]' : 'border-b border-b-[#EAEAEA] font-medium text-[#D0D0D0]'} group flex h-20 cursor-pointer items-center justify-between gap-2 pr-8 pl-10 transition-all duration-300 ease-in-out lg:pl-14`}
                key={index}
              >
                {value}{' '}
                <Icon
                  icon="si:arrow-right-duotone"
                  className={`text-3xl text-[#D0D0D0] ${value === reason ? 'text-[#EB9202] opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out group-hover:opacity-100`}
                />
              </button>
            ))}
          </div>

          {/* reason details */}
          <div className="flex flex-1 flex-col gap-9 rounded border border-[#EAEAEA] bg-[#FAFAFA] p-5 lg:px-24 lg:py-[59px]">
            <div className="">
              <h3 className="text-base font-semibold text-[#8A8884]">
                {reason}
              </h3>

              <p className="mt-2 text-base font-normal text-[#14120f]">
                At Golden Child Promotions Publishing, we simplify every step of
                the publishing process, from manuscript refinement to navigating
                complex platforms. Our experienced team ensures your book is
                polished to perfection and ready to reach its audience.
              </p>
            </div>

            <div className="relative w-full flex-1 overflow-hidden rounded">
              <Image
                src="https://res.cloudinary.com/degg7xvzv/image/upload/v1743500780/GCPP/Frontend-images/expert-guidiance_ef7bgw.png"
                alt="expert guidance"
                fill={true}
                objectFit="cover"
                className="w-full flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
