'use client';

import ReviewCard from './ReviewCard';

export default function Review() {
  return (
    <section className="py-10 lg:py-20">
      <div className="wrapper">
        <div className="mx-auto mb-12 max-w-6xl text-center text-balance">
          <h2 className="mb-5 text-[min(10vw,40px)] font-bold">
            Real Voices, Real Experiences
          </h2>
          <p className="text-[min(10vw,16px)]">
            Our authors reveal how our collaborative publishing process
            transformed their manuscripts into masterpieces, thanks to our
            dedicated support and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}
