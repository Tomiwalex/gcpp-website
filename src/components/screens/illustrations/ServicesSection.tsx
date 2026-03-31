'use client';

import { PricingCard } from '@/components/ui/PricingCard';

const illustrationPackages = [
    {
        name: 'Basic Package',
        price: '$500',
        description: 'Professional spot illustrations to highlight key moments.',
        features: [
            { text: 'Up to 5 custom spot illustrations.' },
            { text: 'Single character or simple object designs.' },
            { text: 'Black and white or limited color palette.' },
            { text: 'Delivery in 7 business days.' },
        ],
        featured: false,
    },
    {
        name: 'Standard Package',
        price: '$1,200',
        description: 'Vibrant full-page illustrations for a richer visual experience.',
        priceNote: 'for up to 10 illustrations. $70 per additional illustration.',
        features: [
            { text: 'Up to 10 full-page custom illustrations.' },
            { text: 'Full color and detailed backgrounds.' },
            { text: 'Character design and scene composition.' },
            { text: 'Delivery in 14 business days.' },
        ],
        featured: true,
    },
    {
        name: 'Premium Package',
        price: '$3,000',
        description: 'Comprehensive illustration suite for children\'s books or graphic novels.',
        priceNote: 'for up to 50 illustrations. $50 per additional illustration.',
        features: [
            { text: 'Up to 50 custom illustrations.' },
            { text: 'Full cover art and interior illustrations.' },
            { text: 'Consistent character styling throughout the book.' },
            { text: 'Commercial rights and high-res print files.' },
            { text: 'Delivery in 21 business days.' },
        ],
        featured: false,
    },
];

export default function IllustrationsServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center gap-[28px]">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px] max-w-[706px]">
                        Choose the illustration package that fits your needs
                    </h2>
                    <p className="mx-auto max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to meet your specific needs
                    </p>
                </div>

                {/* Pricing cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {illustrationPackages.map((pkg, index) => (
                        <PricingCard
                            key={index}
                            name={pkg.name}
                            price={pkg.price}
                            description={pkg.description}
                            priceNote={pkg.priceNote}
                            features={pkg.features}
                            featured={pkg.featured}
                            priceVertical={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
