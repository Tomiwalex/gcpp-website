import { Button } from '@/components/ui/button';

const SubmitManuscript = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/background-images/submit-manuscript-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex min-h-[calc(100dvh-100px)] items-center object-cover p-5 py-24 md:px-[50px]"
    >
      <div className="mx-auto w-full max-w-[947px] text-center">
        <h1 className="text-3xl leading-[1.3] font-semibold text-white lg:text-[3.5rem] lg:leading-[65px] lg:font-medium">
          Golden Child Promotions Publishing (GCPP) Process & Publishing
          Timeline
        </h1>

        <p className="mt-5 text-base font-medium text-[#c1c1c1] lg:text-lg lg:font-normal">
          At GCPP, we believe in making the publishing process seamless and
          transparent. From manuscript submission to seeing your book on
          shelves, our step-by-step process ensures you stay informed and
          empowered at every stage.
        </p>

        <div className="mt-10 space-y-6 space-x-6">
          <Button className="px-10 font-medium">Submit Manauscript</Button>
          <Button
            variant="outline"
            className="border-background text-background px-10 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#14120f]"
          >
            Explore Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubmitManuscript;
