'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { books } from '@/data/books';
import BookCard from '@/components/screens/bookshop/BookCard';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { cartItems, updateQuantity, removeItem, subtotal } = useCart();
    const [currentPage, setCurrentPage] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="min-h-screen bg-[#F9F9F9] pb-20 pt-[75px]">
                <div className="mx-auto w-full max-w-[1512px] px-5 md:px-[100px]">
                    {/* Page Title */}
                    <h1 className="mb-[21px] text-center font-[Manrope] text-[28px] md:text-[32px] font-semibold leading-[48px] tracking-[-0.02em] text-[#14120F]">
                        Your Cart
                    </h1>

                    <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[16px]">
                        {/* Left Column - Cart Items */}
                        <div className="flex flex-1 flex-col gap-[16px] lg:max-w-[965px]">
                            {(!mounted || cartItems.length === 0) ? (
                                <div className="flex h-[400px] items-center justify-center bg-white p-[32px]">
                                    <p className="text-center font-[Manrope] text-[16px] text-[#6c604e]">
                                        Your cart is empty
                                    </p>
                                </div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-[10px] bg-white p-[32px]"
                                    >
                                        <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between">
                                            {/* Book Info Section */}
                                            <div className="flex gap-[32px]">
                                                {/* Book Image */}
                                                <div className="h-[128px] w-[88px] flex-shrink-0 overflow-hidden rounded-[2px] bg-white">
                                                    <Image
                                                        src={item.book.image}
                                                        alt={item.book.title}
                                                        width={88}
                                                        height={128}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                {/* Book Details */}
                                                <div className="flex flex-col justify-center gap-[47px]">
                                                    <div className="flex flex-col gap-[4px]">
                                                        <div className="flex flex-col gap-0">
                                                            <h3 className="font-[Manrope] text-[16px] font-semibold text-[#14120F]">
                                                                {item.book.title}
                                                            </h3>
                                                            <p className="font-[Manrope] text-[13px] font-normal text-[#6c604e]">
                                                                By {item.book.author}
                                                            </p>
                                                        </div>
                                                        <p className="font-[Manrope] text-[13px] font-normal text-[#d4d4d4]">
                                                            In stock
                                                        </p>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeItem(index)}
                                                        className="flex w-fit items-center gap-[8px] transition-opacity hover:opacity-70"
                                                    >
                                                        <Image
                                                            src="/icons/delete-03.svg"
                                                            alt="Delete"
                                                            width={16}
                                                            height={16}
                                                        />
                                                        <span className="font-[Manrope] text-[13px] font-normal text-[#eb9202]">
                                                            Remove
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price and Quantity Section */}
                                            <div className="flex flex-col items-end gap-[47px] sm:w-[136px]">
                                                {/* Price */}
                                                <p className="w-full text-right font-[Manrope] text-[24px] font-semibold leading-[33px] tracking-[-0.02em] text-[#14120F]">
                                                    ${(item.book.price * item.quantity).toFixed(2)}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex w-full items-center gap-[12px]">
                                                    <button
                                                        onClick={() => updateQuantity(index, -1)}
                                                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[2px] border border-[#14120F] transition-colors hover:bg-gray-100"
                                                    >
                                                        <Image
                                                            src="/icons/minus.svg"
                                                            alt="Decrease quantity"
                                                            width={17}
                                                            height={2}
                                                        />
                                                    </button>

                                                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[4px] bg-[#EFEDED]">
                                                        <span className="font-[Manrope] text-[18.2px] font-semibold leading-[150%] text-[#14120F]">
                                                            {item.quantity}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onClick={() => updateQuantity(index, 1)}
                                                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[2px] border border-[#14120F] transition-colors hover:bg-gray-100"
                                                    >
                                                        <Image
                                                            src="/icons/plus.svg"
                                                            alt="Increase quantity"
                                                            width={17}
                                                            height={17}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Right Column - Cart Summary */}
                        <div className="w-full lg:w-[299px]">
                            <div className="flex flex-col gap-0 border border-[#D7D7D7] bg-white">
                                {/* Header */}
                                <div className="border-b border-[#D7D7D7] p-[12px_16px]">
                                    <h2 className="font-[Manrope] text-[16px] font-medium text-[#43413e]">
                                        Cart Summary
                                    </h2>
                                </div>

                                {/* Summary Details */}
                                <div className="flex flex-col gap-[10px] p-[12px_16px]">
                                    <div className="flex items-center justify-between">
                                        <span className="font-[Manrope] text-[13px] font-normal text-[#43413e]">
                                            Subtotal
                                        </span>
                                        <span className="font-[Manrope] text-[16px] font-semibold text-[#14120F]">
                                            ${mounted ? subtotal.toFixed(2) : '0.00'}
                                        </span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <div className="p-[12px_16px]">
                                    <Button className="h-[48px] w-full font-[Manrope] text-[16px] font-medium tracking-[-0.02em]">
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Recommendations Section */}
                <div className="mt-16 w-full border-t border-[#D7D7D7] bg-[#F9F9F9] px-5 pt-16 md:px-[40px] lg:px-[80px] xl:px-[112px]">
                    <div className="mx-auto w-full max-w-[1512px]">
                        <div className="flex flex-col gap-[21px]">
                            <h2 className="font-[Manrope] text-[28px] md:text-[32px] font-semibold leading-[48px] tracking-[-0.02em] text-[#14120F]">
                                Other Recommendations
                            </h2>

                            {/* Books Grid - 5 columns on desktop */}
                            <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                {books.slice((currentPage - 1) * 10, currentPage * 10).map((recommendation) => (
                                    <BookCard key={recommendation.id} book={recommendation} viewMode="grid" />
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-[5.31px]">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                className="flex h-[48.55px] w-[48.55px] items-center justify-center rounded-[3.03px] border border-[#ACACAC] bg-white text-[#ACACAC] transition-colors hover:bg-gray-50 disabled:opacity-50"
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
                                    className={`flex h-[48.55px] w-[48.55px] items-center justify-center rounded-[3.03px] border font-[Manrope] text-[18.2px] font-semibold transition-colors ${currentPage === page
                                        ? "border-[#14120F] bg-[#FAFAFA] text-[#14120F]"
                                        : "border-[#ACACAC] bg-white text-[#D0D0D0] hover:border-[#14120F] hover:text-[#14120F]"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
                                className="flex h-[48.55px] w-[48.55px] items-center justify-center rounded-[3.03px] border border-[#ACACAC] bg-white text-[#ACACAC] transition-colors hover:bg-gray-50 disabled:opacity-50"
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

            {/* Footer */}
            <Footer />
        </>
    );
}
