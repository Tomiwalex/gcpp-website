'use client';

import { PricingCard } from '@/components/ui/PricingCard';

const pricingPlans = [
    {
        name: 'Monthly Membership',
        description: 'An elegant single-page website for a sleek online presence.',
        price: '$500',
        priceNote: 'Mthly',
        features: [
            { text: 'Flexibility: Cancel anytime' },
            { text: 'Perfect for new members exploring GCPP' },
        ],
        featured: false,
    },
    {
        name: 'Annual Membership (Best Value!)',
        description: 'Perfect for authors wanting a multi-page portfolio.',
        price: '$59.94',
        priceNote: 'per year (6 months free!)',
        features: [
            { text: 'Save 50% compared to the monthly plan' },
            { text: 'Includes priority access to consultations and workshops' },
        ],
        featured: true,
    },
];

export default function CommunityPricing() {
    return (
        <section className="bg-[#F9F9F9] py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-[1512px] flex-col items-center justify-center px-5 mb-12 lg:mb-[48px] md:px-[100px]">
                <h2 className="text-[#14120F] text-[32px] lg:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-center max-w-[706px] mb-3">
                    Don’t Miss this Opportunity, Get your Membership Now
                </h2>
                <p className="text-[#14120F] text-base font-normal leading-relaxed text-center">
                    This membership will help you elevate your art from hobby to full-time career.
                </p>
            </div>

            <div className="mx-auto w-full max-w-[850px] px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[18px]">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            name={plan.name}
                            description={plan.description}
                            price={plan.price}
                            priceNote={plan.priceNote}
                            features={plan.features}
                            featured={plan.featured}
                            ctaLabel="Join Now"
                            ctaHref="#"
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
