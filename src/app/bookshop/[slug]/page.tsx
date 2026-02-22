'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import BookCard from '@/components/screens/bookshop/BookCard';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useCart } from '@/context/CartContext';


export default function BookPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const decodedTitle = decodeURIComponent(slug);

    // Find the book by title (slug)
    const book = books.find((b) => b.title === decodedTitle);

    const [quantity, setQuantity] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        if (!book) return;
        addToCart(book, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (!book) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Book not found</h1>
                <Button onClick={() => router.push('/bookshop')}>
                    Back to Bookshop
                </Button>
            </div>
        );
    }

    // Get related books (simple logic for now: same genre or random, excluding current)
    const relatedBooks = books
        .filter(b => b.id !== book.id && (b.genre === book.genre || b.author === book.author))
        .slice(0, 2);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="min-h-screen bg-[#F9F9F9] pt-2 pb-20">
            <div className="mx-auto w-full max-w-[1512px] px-5 md:px-[40px] lg:px-[80px] xl:px-[100px]">
                {/* Breadcrumbs */}
                <div className="w-full mb-2">
                    <Link
                        href="/bookshop"
                        className="inline-flex items-center gap-[6px] font-[Manrope] text-[14px] font-medium text-[#14120F] hover:underline"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Back to results
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[278px_1fr] gap-x-[24px] w-full items-start">
                    {/* Block 1: Title & Buy Section (Top on mobile, Right on desktop) */}
                    <div className="flex flex-col w-full lg:col-start-2 order-1">
                        {/* Highlights/Details Container with Underline */}
                        <div className="border-b border-[#D7D7D7] pb-[16px] mb-[24px] flex flex-col gap-[2px]">
                            <h1 className="font-[Manrope] text-[28px] md:text-[32px] font-semibold text-[#14120F] leading-[1.1]">{book.title}</h1>
                            <p className="font-[Manrope] text-[14px] md:text-[15px] font-medium text-[#6c604e]">By {book.author}</p>
                            <p className="font-[Manrope] text-[15px] md:text-[16px] font-normal text-[#14120F]">A Novel</p>

                            {/* Price Group with Gap 4 */}
                            <div className="flex flex-col gap-0 mt-2">
                                <div className="flex items-center">
                                    {book.originalPrice && (
                                        <>
                                            <span className="font-[Manrope] text-[18px] md:text-[20px] font-semibold !text-black line-through !decoration-black decoration-1">${book.originalPrice}</span>
                                            <span className="font-[Manrope] text-[18px] md:text-[20px] font-semibold text-[#eb9202]">&nbsp;Now:&nbsp;</span>
                                        </>
                                    )}
                                    <span className="font-[Manrope] text-[18px] md:text-[20px] font-semibold text-[#eb9202]">${book.price}</span>
                                </div>
                                <p className="font-[Manrope] text-[18px] md:text-[20px] font-bold text-[#eb9202]">Spend $35 and get FREE shipping</p>
                            </div>

                            {/* Format Selection Dropdown */}
                            <div className="relative flex items-center w-[172px] mt-3">
                                <Select defaultValue="Paperback">
                                    <SelectTrigger className="w-full h-[32px] rounded-[0px] border-[0.5px] border-[#14120F] bg-[#f1f1f1] text-[16px] font-[Manrope] font-normal tracking-[-0.02em] px-[13px] pr-[35px] shadow-none focus:ring-0 [&_svg]:hidden">
                                        <SelectValue placeholder="Select Format" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Paperback">Paperback</SelectItem>
                                        <SelectItem value="Hardcover">Hardcover</SelectItem>
                                        <SelectItem value="E-book">E-book</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="pointer-events-none absolute right-[13px] h-[6px] w-[10px]">
                                    <Image
                                        src="/icons/relevance-icon.svg"
                                        alt="Dropdown"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-[12px] md:gap-[24px] mb-[32px] w-full max-w-sm lg:w-[384px]">
                            {/* Quantity Selector - 55% width on mobile */}
                            <div className="flex items-center justify-center gap-[6px] md:gap-[9px] basis-[55%] lg:flex-1">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-[36px] h-[36px] md:w-[50px] md:h-[48px] rounded-[2px] border border-[#14120F] text-[#14120F] shrink-0"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus className="h-3 w-3 md:h-4 md:w-4" />
                                </Button>
                                <div className="flex-1 max-w-[70px] h-[36px] md:max-w-[80px] md:h-[48px] flex items-center justify-center bg-[#EFEDED] rounded-[4px]">
                                    <span className="font-[Manrope] text-[16px] md:text-[18.2px] font-semibold text-[#14120F] leading-[150%]">{quantity}</span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-[36px] h-[36px] md:w-[50px] md:h-[48px] rounded-[2px] border border-[#14120F] text-[#14120F] shrink-0"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="h-3 w-3 md:h-4 md:w-4" />
                                </Button>
                            </div>

                            {/* Add to Cart - 45% width on mobile */}
                            <Button
                                className="basis-[45%] lg:flex-1 lg:max-w-[162px] h-[36px] md:h-[48px] text-[14px] md:text-[16px] font-medium leading-none tracking-[-0.02em]"
                                onClick={handleAddToCart}
                            >
                                {isAdded ? 'Added!' : 'Add to Cart'}
                            </Button>
                        </div>
                    </div>

                    {/* Block 2: Image & Bookstore Links (Middle on mobile, Left on desktop) */}
                    <div className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 lg:w-[278px] lg:col-start-1 lg:row-start-1 lg:row-span-2 order-2 mb-10 lg:mb-0">
                        {/* Book Image */}
                        <div className="w-full lg:w-[278px] h-[396px] relative overflow-hidden rounded-t-[4px]">
                            <Image
                                src={book.image}
                                alt={book.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bookstore Links */}
                        <div className="w-full max-w-[300px] lg:w-[278px] p-[16px] bg-white border-x border-b border-[#EAEAEA] rounded-b-[4px] flex flex-col gap-[10px]">
                            <h3 className="font-[Manrope] text-[14px] font-semibold text-[#14120F] text-center mb-[4px]">Available on</h3>
                            <div className="flex flex-col gap-[10px]">
                                {[
                                    { name: "Amazon", url: "#" },
                                    { name: "Bookshop", url: "#" },
                                    { name: "Books-A-Million", url: "#" },
                                    { name: "Target", url: "#" },
                                    { name: "Walmart", url: "#" },
                                    { name: "Barnes & Noble", url: "#" }
                                ].map((store) => (
                                    <a
                                        key={store.name}
                                        href={store.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-[48px] px-[16px] flex items-center justify-center gap-[8px] border border-[#14120F] rounded-[4px] bg-white hover:bg-[#F9F9F9] transition-colors"
                                    >
                                        <span className="font-[Manrope] text-[16px] font-medium text-[#14120F] tracking-[-0.01em]">{store.name}</span>
                                        <div className="w-[14px] h-[14px] flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.66663 3.5H10.5M10.5 3.5V9.33333M10.5 3.5L3.5 10.5" stroke="#14120F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Block 3: Tabs & Story (Bottom on mobile, Right on desktop) */}
                    <div className="flex flex-col w-full lg:col-start-2 order-3">
                        {/* Tabs */}
                        <Tabs defaultValue="about" className="w-full mb-[40px]">
                            <TabsList className="w-full justify-start h-[48px] p-0 bg-[#F1F1F1] border-t-0 border-l-0 border-r-0 border-b border-[#EAEAEA] rounded-none gap-0 mb-[24px] overflow-x-auto scrollbar-hide">
                                <TabsTrigger
                                    value="about"
                                    className="flex-none w-[109px] lg:w-[200px] h-[48px] rounded-none border-t-0 border-l-0 border-b-0 border-r-[0.5px] border-[#D7D7D7] px-[12px] py-[13px] lg:px-0 lg:py-0 font-[Manrope] text-[16px] font-normal text-[#838383] data-[state=active]:bg-white data-[state=active]:text-[#14120F] data-[state=active]:font-semibold data-[state=active]:border-0 data-[state=active]:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-gradient-to-b data-[state=active]:after:from-[#FEE416] data-[state=active]:after:to-[#EB9202] shadow-none transition-all"
                                >
                                    About Book
                                </TabsTrigger>
                                <TabsTrigger
                                    value="details"
                                    className="flex-none w-[133px] lg:w-[200px] h-[48px] rounded-none border-t-0 border-l-0 border-b-0 border-r-[0.5px] border-[#D7D7D7] px-[12px] py-[13px] lg:px-0 lg:py-0 font-[Manrope] text-[16px] font-normal text-[#838383] data-[state=active]:bg-white data-[state=active]:text-[#14120F] data-[state=active]:font-semibold data-[state=active]:border-0 data-[state=active]:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-gradient-to-b data-[state=active]:after:from-[#FEE416] data-[state=active]:after:to-[#EB9202] shadow-none transition-all"
                                >
                                    Product Details
                                </TabsTrigger>
                                <TabsTrigger
                                    value="reviews"
                                    className="flex-none w-[127px] lg:w-[200px] h-[48px] rounded-none border-0 px-[12px] py-[13px] lg:px-0 lg:py-0 font-[Manrope] text-[16px] font-normal text-[#838383] data-[state=active]:bg-white data-[state=active]:text-[#14120F] data-[state=active]:font-semibold data-[state=active]:border-0 data-[state=active]:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-gradient-to-b data-[state=active]:after:from-[#FEE416] data-[state=active]:after:to-[#EB9202] shadow-none transition-all"
                                >
                                    Review
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="about" className="mt-0">
                                <h3 className="font-[Manrope] text-[16px] font-bold text-[#14120F] mb-[8px]">The Chronicles of Destiny</h3>
                                <p className="font-[Manrope] text-[13px] font-normal text-[#5D5D5D] mb-[16px]">By {book.author}</p>
                                <p className="font-[Manrope] text-[16px] font-normal leading-[150.7%] text-[#14120F]">
                                    {book.description || "No description available."}
                                </p>
                            </TabsContent>
                            <TabsContent value="details">
                                <div className="flex flex-col gap-[12px] w-full max-w-md">
                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Price:</span>
                                        <div className="font-[Manrope] text-[16px] font-normal text-[#14120F]">
                                            {book.originalPrice && (
                                                <span className="mr-2 text-[#ACACAC] line-through">${book.originalPrice}</span>
                                            )}
                                            <span>${book.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Publisher:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">GCPP</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Publish Date:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">July 14, 2020</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Pages:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">350</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Dimensions:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">7.4 X 6.6 X 0.7 inches | 0.7 pounds</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Language:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">{book.language || "English"}</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">Type:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">{book.format || "Paperback"}</span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F] w-[100px] shrink-0">ISBN:</span>
                                        <span className="font-[Manrope] text-[16px] font-normal text-[#14120F]">978-0-123456-78-9</span>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="reviews">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px]">
                                    {/* Review 1 */}
                                    <div className="flex flex-col gap-[32px] md:gap-[56px] p-[24px_16px] bg-white border border-[#E0E0E0]">
                                        <p className="font-[Manrope] text-[16px] font-normal text-[#14120F] leading-[150%]">
                                            &quot;The Good Hawk&quot; is unlike any fantasy book I’ve read before. Agatha is such a unique and courageous character, and her journey is both inspiring and heart-pounding. I loved the Scottish setting—it felt so wild and magical. The story was unpredictable, emotional, and left me wanting more. Highly recommend!
                                        </p>
                                        <div className="flex gap-[5.6px]">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-[28px] h-[28px] text-[#219653]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.89655 15.0938L14.1968 13.9423L15.9935 19.7931L9.89655 15.0938ZM19.7931 7.53134H12.2234L9.89655 0L7.56969 7.53134H0L6.12644 12.1995L3.79957 19.7309L9.92601 15.0627L13.6961 12.1995L19.7931 7.53134Z" fill="currentColor" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review 2 */}
                                    <div className="flex flex-col gap-[32px] md:gap-[56px] p-[24px_16px] bg-white border border-[#E0E0E0]">
                                        <p className="font-[Manrope] text-[16px] font-normal text-[#14120F] leading-[150%]">
                                            I really enjoyed this book! The relationship between Agatha and Jaime is beautifully written, and the representation of Agatha as a protagonist with Down syndrome is handled so well. Some parts of the story felt rushed, but the world-building and action made up for it. Can’t wait to read the sequel!
                                        </p>
                                        <div className="flex gap-[5.6px]">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-[28px] h-[28px] text-[#219653]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.89655 15.0938L14.1968 13.9423L15.9935 19.7931L9.89655 15.0938ZM19.7931 7.53134H12.2234L9.89655 0L7.56969 7.53134H0L6.12644 12.1995L3.79957 19.7309L9.92601 15.0627L13.6961 12.1995L19.7931 7.53134Z" fill="currentColor" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review 3 */}
                                    <div className="flex flex-col gap-[32px] md:gap-[56px] p-[24px_16px] bg-white border border-[#E0E0E0]">
                                        <p className="font-[Manrope] text-[16px] font-normal text-[#14120F] leading-[150%]">
                                            I had mixed feelings about this book. I loved Agatha’s perspective—she’s a fantastic and refreshing character. However, the plot didn’t grip me as much as I hoped, and some of the pacing felt uneven. It’s still worth reading for the representation and unique setting.
                                        </p>
                                        <div className="flex gap-[5.6px]">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-[28px] h-[28px] text-[#219653]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.89655 15.0938L14.1968 13.9423L15.9935 19.7931L9.89655 15.0938ZM19.7931 7.53134H12.2234L9.89655 0L7.56969 7.53134H0L6.12644 12.1995L3.79957 19.7309L9.92601 15.0627L13.6961 12.1995L19.7931 7.53134Z" fill="currentColor" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review 4 */}
                                    <div className="flex flex-col gap-[32px] md:gap-[56px] p-[24px_16px] bg-white border border-[#E0E0E0]">
                                        <p className="font-[Manrope] text-[16px] font-normal text-[#14120F] leading-[150%]">
                                            What an adventure! I couldn’t put this book down. Agatha is one of the most memorable characters I’ve ever read about, and the blend of ancient Scotland with fantasy elements was so well done. Joseph Elliott is an author to watch!
                                        </p>
                                        <div className="flex gap-[5.6px]">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-[28px] h-[28px] text-[#219653]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.89655 15.0938L14.1968 13.9423L15.9935 19.7931L9.89655 15.0938ZM19.7931 7.53134H12.2234L9.89655 0L7.56969 7.53134H0L6.12644 12.1995L3.79957 19.7309L9.92601 15.0627L13.6961 12.1995L19.7931 7.53134Z" fill="currentColor" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Story Continue */}
                        <div className="border-t border-[#EAEAEA] pt-8 pb-16">
                            <h2 className="font-[Manrope] text-2xl font-bold text-[#14120F] mb-8">The Story Continue</h2>
                            <div className="flex flex-col gap-6">
                                {relatedBooks.map(relatedBook => (
                                    <BookCard key={relatedBook.id} book={relatedBook} viewMode="list" />
                                ))}
                                {relatedBooks.length === 0 && (
                                    <p className="text-[#5D5D5D]">No related books found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Recommendations Section */}
            <div className="w-full bg-[#F9F9F9] border-t border-[#D7D7D7] pt-16 pb-24 px-5 md:px-[40px] lg:px-[80px] xl:px-[112px]">
                <div className="mx-auto w-full max-w-[1512px]">
                    <div className="flex flex-col gap-[21px]">
                        <h2 className="font-[Manrope] text-[28px] md:text-[32px] font-semibold text-[#14120F] leading-[48px] tracking-[-0.02em]">Other Recommendations</h2>

                        {/* Books Grid - 5 columns on desktop */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
                            {books.slice((currentPage - 1) * 10, currentPage * 10).map((recommendation) => (
                                <BookCard key={recommendation.id} book={recommendation} viewMode="grid" />
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-[5.31px]">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            className="w-[48.55px] h-[48.55px] flex items-center justify-center border border-[#ACACAC] rounded-[3.03px] bg-white text-[#ACACAC] hover:bg-gray-50 transition-colors disabled:opacity-50"
                            disabled={currentPage === 1}
                        >
                            <svg width="24.28" height="24.28" viewBox="0 0 24.28 24.28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.175 18.21L9.105 12.14L15.175 6.07" stroke="currentColor" strokeWidth="1.52" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {[1, 2, 3].map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-[48.55px] h-[48.55px] flex items-center justify-center rounded-[3.03px] font-[Manrope] text-[18.2px] font-semibold transition-colors border ${currentPage === page
                                    ? "bg-[#FAFAFA] text-[#14120F] border-[#14120F]"
                                    : "bg-white text-[#D0D0D0] border-[#ACACAC] hover:text-[#14120F] hover:border-[#14120F]"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
                            className="w-[48.55px] h-[48.55px] flex items-center justify-center border border-[#ACACAC] rounded-[3.03px] bg-white text-[#ACACAC] hover:bg-gray-50 transition-colors disabled:opacity-50"
                            disabled={currentPage === 3}
                        >
                            <svg width="24.28" height="24.28" viewBox="0 0 24.28 24.28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.105 6.07L15.175 12.14L9.105 18.21" stroke="currentColor" strokeWidth="1.52" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
