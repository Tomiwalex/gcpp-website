'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';
import Image from 'next/image';

interface SelectedFilter {
    id: string;
    label: string;
    category: string;
}

export default function BookFilter() {
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
    const [isSelectedFiltersExpanded, setIsSelectedFiltersExpanded] = useState(true);

    // Genres organized by subcategory per Figma
    const genreCategories = [
        {
            label: 'Fiction',
            items: ['Mystery & Thriller', 'Romance', 'Fantasy', 'Science Fiction', 'Historical Fiction', 'Horror', 'Literary Fiction', 'Contemporary Fiction']
        },
        {
            label: 'Non-Fiction',
            items: ['Biography & Memoir', 'Self-Help', 'True Crime', 'History', 'Business & Economics', 'Science & Technology', 'Spirituality', 'Travel & Adventure']
        },
        {
            label: 'Young Readers',
            items: ['Young Adult (YA)', 'Middle Grade', "Children's Books", 'Picture Books']
        },
        {
            label: 'Specialized',
            items: ['Poetry', 'Graphic Novels & Comics', 'Short Stories', 'Classic Literature']
        }
    ];

    const priceOptions = ['Free', '$10-$25', '$25-$50', 'Above $50'];

    const formatCategories = [
        {
            label: 'Physical Books',
            items: ['Hardcover', 'Paperback']
        },
        {
            label: 'Digital',
            items: ['E-Book', 'Audiobook']
        }
    ];

    const languages = ['English (356)', 'Spanish (44)', 'French (13)', 'German (1)'];

    const availabilityOptions = ['In Stock', 'Pre-order Available', 'Out of Stock'];

    const yearRanges = ['Last 30 Days', 'Last 6 Months', 'Last Year', 'Older'];

    const themes = ['Mental Health', 'Diversity & Inclusion', 'Adventure', 'Romance'];

    // Custom checkbox renderer
    const renderCheckbox = (id: string, label: string, category: string) => {
        const checked = isFilterSelected(id);
        return (
            <button
                key={id}
                type="button"
                onClick={() => handleFilterToggle(id, label, category, !checked)}
                className={`flex w-fit items-center gap-[16px] text-left transition-colors ${checked ? 'rounded-[4px] bg-[#F1F1F1] px-[8px] py-[4px]' : ''
                    }`}
            >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M0.5 6.83333C0.5 3.84777 0.5 2.35499 1.4275 1.4275C2.35499 0.5 3.84777 0.5 6.83333 0.5C9.8189 0.5 11.3117 0.5 12.2392 1.4275C13.1667 2.35499 13.1667 3.84777 13.1667 6.83333C13.1667 9.8189 13.1667 11.3117 12.2392 12.2392C11.3117 13.1667 9.8189 13.1667 6.83333 13.1667C3.84777 13.1667 2.35499 13.1667 1.4275 12.2392C0.5 11.3117 0.5 9.8189 0.5 6.83333Z" fill="#F9F9F9" stroke={checked ? '#EB9202' : '#6C604E'} />
                    {checked && (
                        <path d="M4.66667 7.33333L6 8.66667L9.33333 5.33333" stroke="#EB9202" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                </svg>
                <span className="font-[Manrope] text-[14px] font-normal leading-none text-[#6C604E]">{label}</span>
            </button>
        );
    };

    const handleFilterToggle = (id: string, label: string, category: string, checked: boolean) => {
        if (checked) {
            setSelectedFilters(prev => [...prev, { id, label, category }]);
        } else {
            setSelectedFilters(prev => prev.filter(f => f.id !== id));
        }
    };

    const handleRemoveFilter = (id: string) => {
        setSelectedFilters(prev => prev.filter(f => f.id !== id));
    };

    const handleClearAllFilters = () => {
        setSelectedFilters([]);
    };

    const isFilterSelected = (id: string) => selectedFilters.some(f => f.id === id);

    const hasSelectedFilters = selectedFilters.length > 0;

    return (
        <div className="w-full bg-white">
            {/* Header: switches between "Filters" and "Selected Filters" */}
            {hasSelectedFilters ? (
                <>
                    {/* Clear All - Top Right */}
                    <div className="flex justify-end px-4 pt-3">
                        <button
                            onClick={handleClearAllFilters}
                            className="font-[Manrope] text-[14px] font-medium text-[#EB9202] hover:underline"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Selected Filters Header */}
                    <button
                        onClick={() => setIsSelectedFiltersExpanded(!isSelectedFiltersExpanded)}
                        className="flex w-full items-center justify-between px-4 py-3"
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
                        <div className={`relative w-[10px] h-[6px] transition-transform duration-200 ${isSelectedFiltersExpanded ? 'rotate-180' : ''}`}>
                            <Image
                                src="/icons/accordion-mobile-icon.svg"
                                alt="Toggle"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </button>

                    {/* Filter Items List */}
                    {isSelectedFiltersExpanded && (
                        <div className="px-4 pb-4 flex flex-col gap-[8px] items-start">
                            {selectedFilters.map((filter) => (
                                <div
                                    key={filter.id}
                                    className="flex items-center gap-4"
                                >
                                    <button
                                        onClick={() => handleRemoveFilter(filter.id)}
                                        className="relative h-[9.33px] w-[9.33px] flex-none"
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

                    {/* Divider */}
                    <div className="border-t border-[#E5E5E5]"></div>
                </>
            ) : (
                <div className="flex h-[48px] items-center gap-3 border-b border-[#E5E5E5] px-4 text-[#14120F]">
                    <img src="/icons/filter2.svg" alt="Filter" width={20} height={20} />
                    <h3 className="text-[17px] font-medium leading-none">Filters</h3>
                </div>
            )}

            {/* Accordion — always mounted so open/close state is preserved */}
            <Accordion type="multiple" defaultValue={[]} className="w-full">
                <AccordionItem value="genre" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Genre
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[16px]">
                            {genreCategories.map((category) => (
                                <div key={category.label} className="flex flex-col gap-[8px]">
                                    <span className="font-[Manrope] text-[10px] font-medium uppercase text-[#14120F]">{category.label}</span>
                                    <div className="flex flex-col gap-[5px] items-start">
                                        {category.items.map((genre) => {
                                            const checked = isFilterSelected(`genre-${genre}`);
                                            return (
                                                <button
                                                    key={genre}
                                                    type="button"
                                                    onClick={() => handleFilterToggle(`genre-${genre}`, genre, 'Genre', !checked)}
                                                    className={`flex items-center gap-[16px] text-left transition-colors ${checked ? 'rounded-[4px] bg-[#F1F1F1] px-[8px] py-[4px]' : ''
                                                        }`}
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                                        <path d="M0.5 6.83333C0.5 3.84777 0.5 2.35499 1.4275 1.4275C2.35499 0.5 3.84777 0.5 6.83333 0.5C9.8189 0.5 11.3117 0.5 12.2392 1.4275C13.1667 2.35499 13.1667 3.84777 13.1667 6.83333C13.1667 9.8189 13.1667 11.3117 12.2392 12.2392C11.3117 13.1667 9.8189 13.1667 6.83333 13.1667C3.84777 13.1667 2.35499 13.1667 1.4275 12.2392C0.5 11.3117 0.5 9.8189 0.5 6.83333Z" fill="#F9F9F9" stroke={checked ? '#EB9202' : '#6C604E'} />
                                                        {checked && (
                                                            <path d="M4.66667 7.33333L6 8.66667L9.33333 5.33333" stroke="#EB9202" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                        )}
                                                    </svg>
                                                    <span className="font-[Manrope] text-[14px] font-normal leading-none text-[#6C604E]">{genre}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Price
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[5px] items-start">
                            {priceOptions.map((price) => renderCheckbox(`price-${price.replace(/\s/g, '-').toLowerCase()}`, price, 'Price'))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="formats" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Formats
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[16px]">
                            {formatCategories.map((category) => (
                                <div key={category.label} className="flex flex-col gap-[8px]">
                                    <span className="font-[Manrope] text-[10px] font-medium uppercase text-[#14120F]">{category.label}</span>
                                    <div className="flex flex-col gap-[5px] items-start">
                                        {category.items.map((format) => renderCheckbox(`format-${format.replace(/\s/g, '-').toLowerCase()}`, format, 'Format'))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="language" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Language
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[5px] items-start">
                            {languages.map((lang) => renderCheckbox(`lang-${lang.toLowerCase()}`, lang, 'Language'))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="release-date" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Release Date
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[5px] items-start">
                            {yearRanges.map((yr) => renderCheckbox(`year-${yr.replace(/\s/g, '-').toLowerCase()}`, yr, 'Release Date'))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="availability" className="border-b border-[#E5E5E5]">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Availability
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[5px] items-start">
                            {availabilityOptions.map((opt) => renderCheckbox(`avail-${opt.replace(/\s/g, '-').toLowerCase()}`, opt, 'Availability'))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="themes" className="border-none">
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 font-[Manrope] text-[16px] font-normal text-[#14120F] transition-all hover:bg-gray-50 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        Themes/Tags
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="flex flex-col gap-[5px] items-start">
                            {themes.map((theme) => renderCheckbox(`theme-${theme.replace(/\s/g, '-').toLowerCase()}`, theme, 'Themes/Tags'))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
