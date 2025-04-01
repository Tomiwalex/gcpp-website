'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="bg-gray px-5 py-10 md:px-[50px] lg:py-20">
      <div className="bg-background-gradient mx-auto w-full max-w-[1288px] lg:py-11">
        <div className="z-1 mx-auto grid max-w-[1086px] grid-cols-1 items-center rounded lg:grid-cols-2 lg:gap-8">
          {/*  */}
          <div className="space-y-6 p-5 max-lg:order-2 lg:max-w-[520px] lg:p-0">
            <h2 className="text-4xl leading-tight font-medium text-white lg:text-[40px] lg:leading-[53px]">
              Your Story Deserves <br /> to Be Told
            </h2>
            <p className="text-[min(10vw,20px)] font-normal text-[#C1C1C1]">
              Every story matters. Let’s bring yours to the world with the care
              and excellence it deserves.
            </p>
            <div className="mt-7 flex flex-wrap gap-5 lg:mt-10 lg:flex-nowrap">
              <Button className="px-10 font-medium">Publish Your Book</Button>
              <Button
                variant="outline"
                className="border-background text-background px-10 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#14120f]"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/*  */}
          <div className="relative h-[360px] w-full overflow-hidden rounded">
            <Image
              src="/images/cta.png"
              alt="Team meeting in a conference room"
              fill
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
