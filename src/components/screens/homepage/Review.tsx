'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import ReviewCard from './ReviewCard';
import { useState } from 'react';

export default function Review() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  return (
    <section className="py-10 pb-16 md:px-[100px] lg:py-20 lg:pb-28">
      <div className="">
        <div className="mx-auto mb-8 px-5 text-center font-semibold text-[#14120F] lg:mb-12">
          <h2 className="mb-5 text-3xl md:text-4xl lg:text-5xl">
            Real Voices, <br className="md:hidden" /> Real Experiences
          </h2>
          <p className="mx-auto max-w-[734px] text-[min(10vw,16px)] font-normal text-[#14120F]">
            Our authors reveal how our collaborative publishing process
            transformed their manuscripts into masterpieces, thanks to our
            dedicated support and expertise.
          </p>
        </div>

        <div className="">
          <ReviewCard />

          {/* pagination */}
          <div className="mt-10 flex justify-center gap-2 lg:mt-12">
            <button
              type="button"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-[0.76px] border-[#ACACAC] text-[#ACACAC] duration-300 ease-in-out hover:bg-[#14120F] hover:text-white"
            >
              <Icon icon="cuida:arrow-left-outline" className="text-lg" />
            </button>

            {[1, 2, 3].map((page, index) => (
              <button
                className={`"flex h-12 w-12 cursor-pointer items-center justify-center rounded text-base font-semibold ${currentSlide === index ? 'text-[#14120F]' : 'text-[#D0D0D0]'} duration-300 ease-in-out hover:bg-[#FAFAFA] ${currentSlide === index && 'bg-[#fafafa]'} lg:text-lg`}
                key={index}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-[0.76px] border-[#ACACAC] text-[#ACACAC] duration-300 ease-in-out hover:bg-[#14120F] hover:text-white"
            >
              <Icon icon="cuida:arrow-right-outline" className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
