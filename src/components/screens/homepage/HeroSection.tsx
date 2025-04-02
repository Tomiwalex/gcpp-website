import { Button } from '@/components/ui/button';
import heroBg from '../../../../public/background-images/hero-bg.png';
import StarRating from '@/components/customui/StarRating';

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/background-images/hero-bg.png')", // Use the public folder path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex min-h-[calc(100dvh-100px)] items-center object-cover p-5 py-24 md:px-[50px]"
    >
      <div className="mx-auto w-full max-w-[1288px]">
        <h1 className="w-full max-w-[591px] text-[2.5rem] leading-[40px] font-semibold text-white lg:text-[3.5rem] lg:leading-[65px] lg:font-medium">
          Your Story, Our Passion for Publishing
        </h1>

        <p className="mt-5 max-w-[571px] text-base font-medium text-[#c1c1c1] lg:text-lg lg:font-normal">
          Every story deserves authentic and careful telling. Our expertise
          guarantees your book reflects your voice and effortlessly connects
          with its audience.
        </p>

        <div className="mt-10 space-y-6 space-x-6">
          <Button className="px-10 font-medium">Publish Your Book</Button>
          <Button
            variant="outline"
            className="border-background text-background px-10 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#14120f]"
          >
            Explore Our Services
          </Button>
        </div>

        <div className="mt-[89px] space-y-2 py-5">
          <p className="font-roboto text-lg font-medium text-white">
            Excellent
          </p>

          <div className="">
            <StarRating rating={5} />
          </div>

          <small className="font-roboto text-sm leading-[22px] font-normal text-white">
            Based on <b className="underline">455 reviews</b>
          </small>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
