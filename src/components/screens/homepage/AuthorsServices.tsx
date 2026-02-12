import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { services } from '@/components/data/services';

export default function AuthorsServices() {
  return (
    <section className="bg-[#F9F9F9] p-5 py-14 md:px-[100px] lg:py-24">
      <div className="mx-auto w-full max-w-[1512px]">
        <h2 className="mb-5 text-center text-4xl font-semibold text-[#14120F] lg:mb-6 lg:text-[40px]">
          Services for Authors
        </h2>

        <p className="mx-auto max-w-[734px] text-center text-base leading-[1.5] font-normal text-[#14120f]">
          From idea to publication, we guide and support you, ensuring a smooth,
          empowering, and inspiring journey to make your work shine.
        </p>

        {/* the services */}
        <div className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-3">
          <div className="flex flex-col items-center rounded border border-[#D0CCCC] bg-white p-5 py-8 lg:px-12">
            <Image
              src={'/icons/publishing-icon.png'}
              alt="publishing"
              width={50}
              height={50}
              className="h-auto w-12 lg:w-14"
            />

            <h3 className="mt-3 text-[28px] font-semibold text-[#14120F] lg:text-[2rem]">
              {services.publishing.heading}
            </h3>

            <p className="mx-auto mt-1 w-full max-w-[320px] text-center text-base font-normal text-[#14120F]">
              {services.publishing.description}
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-2">
              {services.publishing.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#F9F9F9] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>

          {/* design services */}
          <div className="flex flex-col items-center rounded border border-[#D0CCCC] bg-white p-5 py-8 lg:px-12">
            <Image
              src={'/icons/design-icon.png'}
              alt="design"
              width={50}
              height={50}
              className="h-auto w-12 lg:w-14"
            />

            <h3 className="mt-3 text-[28px] font-semibold text-[#14120F] lg:text-[2rem]">
              {services.design.heading}
            </h3>

            <p className="mx-auto mt-1 w-full max-w-[320px] text-center text-base font-normal text-[#14120F]">
              {services.design.description}
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-2">
              {services.design.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#F9F9F9] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>

          {/* solutions service */}
          <div className="flex flex-col items-center rounded border border-[#D0CCCC] bg-white p-5 py-8 lg:px-12">
            <Image
              src={'/icons/solutions-icon.png'}
              alt="solutions"
              width={50}
              height={50}
              className="h-auto w-12 lg:w-14"
            />
            <h3 className="mt-3 text-[28px] font-semibold text-[#14120F] lg:text-[2rem]">
              {services.solutions.heading}
            </h3>

            <p className="mx-auto mt-1 w-full max-w-[320px] text-center text-base font-normal text-[#14120F]">
              {services.solutions.description}
            </p>

            <div className="mt-8 grid w-full grid-cols-1 gap-2">
              {services.solutions.services.map((service, index) => (
                <Link
                  href={'#'}
                  key={index}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#F9F9F9] py-2 text-base leading-[48px] font-medium text-[#6C604E] transition-all duration-300 ease-in-out hover:bg-[#6C604E] hover:text-[#F9F9F9] lg:text-lg"
                >
                  {service} <Icon icon="radix-icons:arrow-top-right" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
