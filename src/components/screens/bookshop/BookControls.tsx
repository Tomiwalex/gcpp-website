'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

interface BookControlsProps {
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
}

export default function BookControls({ viewMode, setViewMode }: BookControlsProps) {
    return (
        <div className="flex flex-col gap-2">
            {/* Search Bar - Frame 2608917 */}
            <div className="relative w-full">
                <div className="absolute left-[24px] top-1/2 h-[16.67px] w-[16.67px] -translate-y-1/2">
                    <Image
                        src="/icons/search-icon.svg"
                        alt="Search"
                        fill
                        className="object-contain opacity-50"
                    />
                </div>
                <Input
                    placeholder="Search "
                    className="h-[48px] w-full rounded-none border-[0.5px] border-[#D7D7D7] bg-[#FAFAFA] pl-[54px] font-[Manrope] text-[16px] text-[#14120F] placeholder:text-[#838383] shadow-none focus-visible:ring-0"
                />
            </div>

            {/* Controls Stack */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
                {/* Results Bar - Frame 2608794 */}
                <div className="flex h-[48px] w-full items-center bg-[#F1F1F1] px-[16px] sm:w-auto sm:flex-1 sm:pl-[42px]">
                    <span className="font-[Manrope] text-[16px] text-[#14120F]">1-16 out of 31 results found in 0.006s</span>
                </div>

                {/* Sort & View Row - Frame 1597880974 */}
                <div className="flex h-[48px] w-full max-w-[296px] sm:w-auto sm:max-w-none">
                    {/* Sort Dropdown - Frame 756 */}
                    <div className="relative flex h-full flex-1 items-center border-[0.5px] border-[#14120F] bg-[#F1F1F1] sm:w-[200px] sm:flex-none">
                        <Select defaultValue="relevance">
                            <SelectTrigger className="h-full w-full gap-2 border-none bg-transparent px-[26px] pr-[50px] font-[Manrope] text-[16px] text-[#14120F] shadow-none focus:ring-0 [&_svg]:hidden">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="relevance">Relevance</SelectItem>
                                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                <SelectItem value="newest">Newest Arrivals</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="pointer-events-none absolute right-[24px] h-[6px] w-[10px]">
                            <Image
                                src="/icons/relevance-icon.svg"
                                alt="Sort"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* View Toggles - Frame 2608793 & 2608792 */}
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex h-[48px] w-[48px] flex-none items-center justify-center border-y border-r transition-colors ${viewMode === 'grid' ? 'border-[#14120F] bg-[#FAFAFA]' : 'border-y-[#D7D7D7] border-r-[#14120F] bg-[#FAFAFA] hover:bg-gray-50'}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3H3V10H10V3Z" stroke={viewMode === 'grid' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 3H14V10H21V3Z" stroke={viewMode === 'grid' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 14H14V21H21V14Z" stroke={viewMode === 'grid' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 14H3V21H10V14Z" stroke={viewMode === 'grid' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex h-[48px] w-[48px] flex-none items-center justify-center border-y border-r transition-colors ${viewMode === 'list' ? 'border-[#14120F] bg-[#FAFAFA]' : 'border-[#D7D7D7] bg-[#FAFAFA] hover:bg-gray-50'}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6H21" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 12H21" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 18H21" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H3.01" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H3.01" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H3.01" stroke={viewMode === 'list' ? '#14120F' : '#D7D7D7'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
