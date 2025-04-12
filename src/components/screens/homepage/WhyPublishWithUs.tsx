'use client';
import { reasons } from '@/components/data/whyPublishData';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function WhyPublishWithUs() {
  const [reason, setReason] = useState(reasons[0]);

  return (
    <section className="p-5 py-10 md:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-[1284px]">
        <h2 className="mb-10 text-center text-3xl font-semibold text-[#14120F] lg:mb-12 lg:text-5xl">
          Why Publish With Us?
        </h2>

        <div className="flex flex-wrap items-stretch gap-3 lg:flex-nowrap">
          <div className="grid w-full grid-cols-1 gap-3 lg:max-w-[456px] xl:w-[456px]">
            {reasons.map((value, index) => (
              <div key={index} className="w-ful;">
                <button
                  onClick={e => setReason(value)}
                  className={`w-full text-lg lg:text-2xl ${value.title === reason.title ? 'rounded border border-[#EAEAEA] bg-[#FAFAFA] font-semibold text-[#14120F]' : 'border-b border-b-[#EAEAEA] font-medium text-[#D0D0D0]'} group flex h-20 cursor-pointer items-center justify-between gap-2 pr-8 pl-8 transition-all duration-300 ease-in-out lg:pl-14`}
                >
                  {value.title}
                  <Icon
                    icon="si:arrow-right-duotone"
                    className={`text-3xl text-[#D0D0D0] ${value.title === reason.title ? 'text-[#EB9202] opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out group-hover:opacity-100`}
                  />
                </button>

                <AnimatePresence>
                  {reason.title === value.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 flex w-full flex-1 flex-col gap-9 overflow-hidden rounded border border-[#EAEAEA] bg-[#FAFAFA] p-5 md:hidden lg:px-24 lg:py-[59px]"
                    >
                      <div className="">
                        <h3 className="text-base font-semibold text-[#8A8884]">
                          {reason.title}
                        </h3>

                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              reason?.content?.replace(/\n/g, '<br>') ?? '',
                          }}
                          className="mt-2 text-base font-normal text-[#14120f]"
                        ></p>
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* reason details */}
          <div className="hidden flex-1 flex-col gap-9 rounded border border-[#EAEAEA] bg-[#FAFAFA] p-5 md:flex lg:px-24 lg:py-[59px]">
            <div className="">
              <h3 className="text-base font-semibold text-[#8A8884]">
                {reason.title}
              </h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: reason?.content?.replace(/\n/g, '<br>') ?? '',
                }}
                className="mt-2 text-base font-normal text-[#14120f]"
              ></p>
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
