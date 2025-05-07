import { services } from '@/components/data/services';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Golden Child Promotions Publishing',
  description:
    'Our authors are the heart of what we do. Explore their works and discover the magic behind the pages',
};
const page = () => {
  return (
    <div className="bg-[#F9F9F9] px-5 py-16 md:px-[50px]">
      <div className="">
        <div className="text-[#14120F]">
          <h1 className="mb-2 text-3xl font-semibold lg:text-4xl">
            Services for Authors
          </h1>
          <p className="max-w-[706px] text-sm font-normal lg:text-base">
            From idea to publication, we guide and support you, ensuring a
            smooth, empowering, and inspiring journey to make your work shine.
          </p>
        </div>

        {/* publishing */}
        <div className="mt-6 rounded border border-[#D0CCCC]">
          <div className="relative h-[192px] w-full overflow-hidden">
            <Image
              fill
              src={'/background-images/submit-manuscript-bg.png'}
              alt="books in a shelf"
            />

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:text-left">
                <h2 className="bg-gradient-to-b from-[#FEE416] to-[#EB9202] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
                  {services.publishing.heading} Services
                </h2>
                <p className="text-sm font-normal text-white lg:text-base">
                  {services.publishing.description}
                </p>
              </div>
            </div>
          </div>

          {/* services */}
          <div className="m-6 flex flex-wrap justify-center lg:my-14">
            <div className="mx-auto flex w-full max-w-[978px] flex-wrap justify-center gap-2">
              {services.publishing.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#D0CCCC] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] md:max-w-[320px] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* design */}
        <div className="mt-5 rounded border border-[#D0CCCC]">
          <div className="relative h-[192px] w-full overflow-hidden">
            <Image
              fill
              src={'/background-images/submit-manuscript-bg.png'}
              alt="books in a shelf"
            />

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:text-left">
                <h2 className="bg-gradient-to-b from-[#FEE416] to-[#EB9202] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
                  {services.design.heading} Services
                </h2>
                <p className="text-sm font-normal text-white lg:text-base">
                  {services.design.description}
                </p>
              </div>
            </div>
          </div>

          {/* services */}
          <div className="m-6 flex flex-wrap justify-center lg:my-14">
            <div className="mx-auto flex w-full max-w-[978px] flex-wrap justify-center gap-2">
              {services.design.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#D0CCCC] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] md:max-w-[320px] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* solutions */}
        <div className="mt-5 rounded border border-[#D0CCCC]">
          <div className="relative h-[192px] w-full overflow-hidden">
            <Image
              fill
              src={'/background-images/submit-manuscript-bg.png'}
              alt="books in a shelf"
            />

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:text-left">
                <h2 className="bg-gradient-to-b from-[#FEE416] to-[#EB9202] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
                  {services.solutions.heading} Services
                </h2>
                <p className="text-sm font-normal text-white lg:text-base">
                  {services.solutions.description}
                </p>
              </div>
            </div>
          </div>

          {/* services */}
          <div className="m-6 flex flex-wrap justify-center lg:my-14">
            <div className="mx-auto flex w-full max-w-[978px] flex-wrap justify-center gap-2">
              {services.solutions.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#D0CCCC] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] md:max-w-[320px] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
