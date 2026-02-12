'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SelectedFilter {
    id: string;
    label: string;
    category: string;
}

interface SelectedFiltersProps {
    filters: SelectedFilter[];
    onRemove: (id: string) => void;
    onClearAll: () => void;
}

export default function SelectedFilters({ filters, onRemove, onClearAll }: SelectedFiltersProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    if (filters.length === 0) return null;

    return (
        <div className="w-full bg-white px-4 py-3">
            {/* Header */}
            <div className="flex flex-col gap-[10px]">
                {/* Clear All - Top Right */}
                <div className="flex justify-end">
                    <button
                        onClick={onClearAll}
                        className="font-[Manrope] text-[14px] font-medium text-[#EB9202] hover:underline"
                    >
                        Clear All
                    </button>
                </div>

                {/* Selected Filters Header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex w-full items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <div className="relative h-5 w-5">
                            <Image
                                src="/icons/filter-horizontal.svg"
                                alt="Filter"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-[Manrope] text-[16px] font-medium text-[#14120F]">
                            Selected Filters
                        </span>
                    </div>
                    <div className={`relative w-[10px] h-[6px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <Image
                            src="/icons/accordion-mobile-icon.svg"
                            alt="Toggle"
                            fill
                            className="object-contain"
                        />
                    </div>
                </button>
            </div>

            {/* Filter Items List */}
            {isExpanded && (
                <div className="mt-[10px] flex flex-col gap-[5px]">
                    {filters.map((filter) => (
                        <div
                            key={filter.id}
                            className="flex items-center gap-4"
                        >
                            <button
                                onClick={() => onRemove(filter.id)}
                                className="relative h-4 w-4 flex-none"
                            >
                                <Image
                                    src="/icons/x.svg"
                                    alt="Remove"
                                    fill
                                    className="object-contain"
                                />
                            </button>
                            <span className="font-[Manrope] text-[14px] font-normal text-[#6C604E]">
                                {filter.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
