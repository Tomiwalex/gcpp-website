'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn('mb-3', className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'group flex h-[80px] w-full flex-1 items-center justify-between rounded-[4px] border border-[#eaeaea] bg-white px-6 font-[Manrope] text-[20px] font-semibold tracking-[-0.02em] text-[#14120f] transition-all hover:bg-gray-50 focus:outline-none md:text-[24px]',
                className
            )}
            {...props}
        >
            {children}
            <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center">
                <Image
                    src="/icons/relevance-icon.svg"
                    alt="Toggle"
                    width={14}
                    height={7}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
            </div>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            'mt-3 overflow-hidden rounded-[4px] border border-[#eaeaea] bg-[#f9f9f9] text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            className
        )}
        {...props}
    >
        <div className={cn('p-6 py-[45px] lg:px-[145px]', className)}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default function AccordionSection() {
    return (
        <section className="bg-[#f9f9f9] px-5 pb-24 pt-12 md:px-10 lg:px-[112px]">
            <div className="mx-auto w-full max-w-[1252px]">
                <Accordion type="single" collapsible className="w-full flex-col">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What We Offer</AccordionTrigger>
                        <AccordionContent>
                            <div className="mx-auto flex w-full max-w-[962px] flex-col items-center justify-center gap-10 md:flex-row md:gap-[46px]">
                                <div className="flex w-full max-w-[406px] flex-col gap-2">
                                    <span className="font-[Manrope] text-[16px] font-semibold leading-[1.5] text-[#8a8884]">
                                        What we offer
                                    </span>
                                    <p className="font-[Manrope] pl-1 text-[16px] leading-[28px] text-[#14120f]">
                                        Golden Child Promotions Publishing provides a full spectrum of
                                        publication services, covering everything from proofreading and
                                        editing to formatting, book cover design, printing, and
                                        distribution. Our additional offerings include barcode
                                        generation, ISBN acquisition, and author website creation. With
                                        expertise in self-publishing platforms like Amazon Kindle, we
                                        ensure your work reaches its full potential.
                                    </p>
                                </div>
                                <div className="relative h-[250px] w-full max-w-[510px] shrink-0 overflow-hidden rounded-[4px] bg-white md:h-[373px]">
                                    <Image
                                        src="/images/pexels-divinetechygirl-1181408 1.png"
                                        alt="What we offer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Our Mission</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex w-full flex-col items-center justify-center p-6 text-center">
                                <p className="font-[Manrope] text-[16px] text-[#14120f]">
                                    More information coming soon.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>The GCPP Difference</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex w-full flex-col items-center justify-center p-6 text-center">
                                <p className="font-[Manrope] text-[16px] text-[#14120f]">
                                    More information coming soon.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Your Story, Our Commitment</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex w-full flex-col items-center justify-center p-6 text-center">
                                <p className="font-[Manrope] text-[16px] text-[#14120f]">
                                    More information coming soon.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
