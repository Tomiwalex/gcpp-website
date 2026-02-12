import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BookPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BookPagination({ currentPage, totalPages, onPageChange }: BookPaginationProps) {
    // Generate page numbers array
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-[5.31px]">
            {/* Previous Button - 48.55px square, rounded 3px, white bg, gray border */}
            <Button
                variant="outline"
                size="icon"
                className="h-[48.55px] w-[48.55px] rounded-[3px] border-[0.76px] border-[#ACACAC] bg-white p-0 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <div className="relative h-[24px] w-[24px]">
                    <Image
                        src="/images/pagination/arrow-left.svg"
                        alt="Previous"
                        fill
                        className="object-contain"
                    />
                </div>
            </Button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={cn(
                        "flex h-[48.55px] w-[48.55px] items-center justify-center rounded-[3px] font-[Manrope] text-[18.2px] font-semibold transition-colors",
                        currentPage === page
                            ? "bg-[#FAFAFA] text-[#14120F]" // Active: Frame 2608837 (2)
                            : "bg-white text-[#D0D0D0] hover:bg-gray-50 hover:text-gray-500" // Inactive: Frame 2608836 (1)
                    )}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <Button
                variant="outline"
                size="icon"
                className="h-[48.55px] w-[48.55px] rounded-[3px] border-[0.76px] border-[#ACACAC] bg-white p-0 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <div className="relative h-[24px] w-[24px]">
                    <Image
                        src="/images/pagination/arrow-right.svg"
                        alt="Next"
                        fill
                        className="object-contain"
                    />
                </div>
            </Button>
        </div>
    );
}
