// components/ReviewCard.tsx
'use client';

import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  books: string[];
  review: string;
  rating: number; // Number of stars (1 to 5)
  imageSrc: string;
  imageAlt: string;
}

export default function ReviewCard({
  name,
  books,
  review,
  rating,
  imageSrc,
  imageAlt,
}: ReviewCardProps) {
  // Paths to star images (adjust these based on your project structure)
  const starFilledSrc = '/images/stars/star-filled.png';
  const starEmptySrc = '/images/stars/star-empty.png';

  return (
    <div className="flex flex-col gap-4 rounded-[4px] border border-[#EAEAEA] bg-white p-4 sm:flex-row">
      {/* Left Section: Text Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">
          Author of{' '}
          {books.map((book, index) => (
            <span key={index}>
              {book}
              {index < books.length - 1 ? ' • ' : ''}
            </span>
          ))}
        </p>
        <p className="mt-2 text-sm text-gray-700 italic">"{review}"</p>
        <div className="mt-2 flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={index < rating ? starFilledSrc : starEmptySrc}
              alt={index < rating ? 'Filled Star' : 'Empty Star'}
              width={16} // Adjust size as needed
              height={16} // Adjust size as needed
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative h-40 w-32">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="rounded-[4px] object-cover"
        />
      </div>
    </div>
  );
}
