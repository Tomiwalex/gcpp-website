import { Button } from '@/components/ui/button';
import StarRating from '@/components/customui/StarRating';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-100px)] items-center object-cover p-5 py-24 md:px-[100px]">
      <div className="mx-auto w-full max-w-[1512px]">
        <h1 className="w-full max-w-[591px] text-[2.5rem] leading-[40px] font-semibold text-white lg:text-[3.5rem] lg:leading-[65px] lg:font-medium">
          Your Story, Our Passion for Publishing
        </h1>

        <p className="mt-5 max-w-[571px] text-base font-medium text-[#c1c1c1] lg:text-lg lg:font-normal">
          Every story deserves authentic and careful telling. Our expertise
          guarantees your book reflects your voice and effortlessly connects
          with its audience.
        </p>

        <div className="mt-10 space-y-6 space-x-6">
          <Button asChild className="px-10 font-medium">
            <Link href="/publish">Publish Your Book</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-background text-background px-10 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#14120f]"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>

        <div className="mt-5 py-5 lg:mt-[89px]">
          <p className="font-roboto text-lg leading-[26px] font-medium text-white">
            Excellent
          </p>

          <div className="mt-2">
            <StarRating rating={5} />
          </div>

          <small className="font-roboto mt-2 text-sm leading-[22px] font-normal text-white">
            Based on <b className="underline">455 reviews</b>
          </small>

          <p className="mt-2 flex items-center gap-1 text-base font-medium text-white">
            <Icon
              icon="simple-icons:trustpilot"
              className="text-2xl text-[#219653]"
            />{' '}
            Trustpilot
          </p>
        </div>
      </div>

      {/* bg image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/background-images/hero-bg.png"
          alt="hero-bg"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
