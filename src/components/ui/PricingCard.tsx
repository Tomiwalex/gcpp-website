import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export interface PricingFeature {
    text: string;
}

export interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    priceNote?: string;
    features: PricingFeature[];
    featured?: boolean;
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
}

export function PricingCard({
    name,
    description,
    price,
    priceNote,
    features,
    featured = false,
    ctaLabel = 'Get Started',
    ctaHref = '/publish#contact',
    className,
}: PricingCardProps) {
    return (
        <div
            className={cn(
                'flex flex-col rounded-[4px] bg-white p-8 transition-shadow duration-300',
                featured
                    ? 'border border-[#EB9202] shadow-[-1px_10px_4px_0px_rgba(0,0,0,0.1)]'
                    : 'border border-[#D0CCCC]',
                className,
            )}
        >
            {/* Header / Price section */}
            <div className="space-y-[22px]">
                {/* Package name with gradient */}
                <h3
                    className="text-[32px] font-semibold leading-[40px] tracking-[-2%]"
                    style={{
                        background: 'linear-gradient(180deg, #FEE416 0%, #EB9202 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    {name}
                </h3>

                {/* Description */}
                <p className="text-base font-normal leading-[22px] text-[#14120F]">
                    {description}
                </p>

                {/* Price */}
                <p className="text-[32px] font-semibold leading-[35px] tracking-[-2%] text-[#14120F]">
                    {price}
                    {priceNote && (
                        <span className="text-base font-normal tracking-normal">
                            {' '}
                            {priceNote}
                        </span>
                    )}
                </p>
            </div>

            {/* CTA Button - Moved to the middle */}
            <div className="mt-6 mb-[24px]">
                <Button
                    asChild
                    variant={featured ? 'default' : 'outline'}
                    className={cn(
                        'w-full rounded-[2px] transition-all duration-300',
                        featured
                            ? 'border-none bg-gradient-to-b from-[#FEE416] to-[#EB9202] text-[#14120F] shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:opacity-90'
                            : 'border-[#14120F] bg-white font-normal text-[#14120F] hover:bg-[#14120F] hover:text-white',
                    )}
                >
                    <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
            </div>

            {/* Features */}
            <ul className="space-y-[13px]">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        {/* Tick icon */}
                        <span className="mt-[3px] flex h-6 w-6 flex-shrink-0 items-center justify-center">
                            <svg
                                width="14"
                                height="11"
                                viewBox="0 0 14 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 5L5 9L13 1"
                                    stroke="#14120F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="text-sm font-normal leading-[1.7] text-[#14120F]">
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
