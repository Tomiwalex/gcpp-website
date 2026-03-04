'use client';

import { PricingCard } from '@/components/ui/PricingCard';

const webDesignPackages = [
    {
        name: 'Basic Package',
        price: '$500',
        description: 'An elegant single-page website for a sleek online presence.',
        features: [
            { text: 'Custom-designed single-page website.' },
            { text: 'Mobile-responsive layout.' },
            { text: 'Essential sections: bio, book showcase, and contact form.' },
            { text: 'Delivery in 7 business days.' },
        ],
        featured: false,
    },
    {
        name: 'Standard Package',
        price: '$1,200',
        description: 'Perfect for authors wanting a multi-page portfolio.',
        features: [
            { text: 'Multi-page website design (up to 5 pages).' },
            { text: 'Includes home, about, portfolio, book gallery, and contact pages.' },
            { text: 'Mobile-responsive and SEO-optimized.' },
            { text: 'Delivery in 14 business days.' },
        ],
        featured: true,
    },
    {
        name: 'Premium Package',
        price: '$3,000',
        description: 'Comprehensive website with full e-commerce functionality.',
        features: [
            { text: 'Includes all Standard Package features.' },
            { text: 'E-commerce integration for book sales and promotions.' },
            { text: 'Custom blog section to engage readers.' },
            { text: 'Advanced SEO and analytics setup.' },
            { text: 'Delivery in 21 business days.' },
        ],
        featured: false,
    },
];

export default function WebDesignServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center gap-[28px]">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px] max-w-[706px]">
                        Choose the web design package that fits your needs
                    </h2>
                    <p className="mx-auto max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to meet your specific needs
                    </p>
                </div>

                {/* Pricing cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {webDesignPackages.map((pkg, index) => (
                        <PricingCard
                            key={index}
                            name={pkg.name}
                            price={pkg.price}
                            description={pkg.description}
                            features={pkg.features}
                            featured={pkg.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
