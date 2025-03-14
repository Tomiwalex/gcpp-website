'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="bg-gray py-10 lg:py-20">
      <div className="wrapper">
        <div className="bg-background-gradient border border-solid p-0 lg:px-16 lg:py-10">
          <div className="z-1 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left Side: Text and Buttons */}
            <div className="space-y-6 p-5 max-lg:order-2 lg:max-w-[400px] lg:p-0">
              <h2 className="text-[min(10vw,40px)] leading-tight font-medium text-white">
                Your Story Deserves to Be Told
              </h2>
              <p className="text-[min(10vw,20px) text-muted-foreground">
                Every story matters. Let’s bring yours to the world with the
                care and excellence it deserves.
              </p>
              <div className="flex flex-wrap gap-5 lg:flex-nowrap">
                <Button className="px-10">Publish Your Book</Button>
                <Button
                  variant="outline"
                  className="border-background text-background px-10"
                >
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative h-[360px] w-full overflow-hidden">
              <Image
                src="/images/cta.png"
                alt="Team meeting in a conference room"
                fill
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
