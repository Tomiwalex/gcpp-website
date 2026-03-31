'use client';

import { PricingCard } from '@/components/ui/PricingCard';

const bookCoverServicePackages = [
    {
        name: 'Standard Package',
        price: '$150',
        description: 'Perfect for authors who need a striking front cover.',
        features: [
            'Front cover design only.',
            'High-resolution artwork optimized for both print and digital formats.',
            'Delivery in 5 business days.',
        ],
        featured: false,
    },
    {
        name: 'Deluxe Package',
        price: '$300',
        description: 'Comprehensive design for a polished, professional look.',
        priceNote: 'for books up to 100 pages. $4 per additional page.',
        features: [
            'Front cover, spine, and back cover design.',
            'Print-ready files meeting publisher specifications.',
            'High-resolution digital formats included.',
            'Delivery in 7 business days.',
        ],
        featured: true,
    },
    {
        name: 'Premium Package',
        price: '$500',
        description: 'For authors who want a unique, custom-illustrated cover.',
        features: [
            'Custom illustrations tailored to your book\'s theme and genre.',
            'Includes front cover, spine, and back cover.',
            'Print-ready and digital formats provided.',
            'Delivery in 10 business days.',
        ],
        featured: false,
    },
];

export default function BookCoverServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center gap-[28px]">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px] max-w-[706px]">
                        Choose a package tailored to your needs
                    </h2>
                    <p className="mx-auto max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to meet your specific needs
                    </p>
                </div>

                {/* Pricing cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bookCoverServicePackages.map((pkg, index) => (
                        <PricingCard
                            key={index}
                            name={pkg.name}
                            price={pkg.price}
                            description={pkg.description}
                            priceNote={pkg.priceNote}
                            features={pkg.features.map(f => ({ text: f }))}
                            featured={pkg.featured}
                            priceVertical={pkg.name === 'Deluxe Package'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
