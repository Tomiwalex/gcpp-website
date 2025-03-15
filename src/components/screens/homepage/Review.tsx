'use client';

import BlogCard from '../../BlogCard';
import ReviewCard from './ReviewCard';

export default function Review() {
  const reviews = [
    {
      name: 'Michael Rivera',
      books: ['The Silent Witness', 'Beyond the Horizon'],
      review:
        'The process felt effortless, and I felt supported every step of the way. My book is everything I dreamed it would be.',
      rating: 4,
      imageSrc: '/images/reviews/michael-rivera.jpg',
      imageAlt: 'Michael Rivera',
    },
    {
      name: 'Sarah Johnson',
      books: ['Echoes of Eternity', 'Shades of Dawn'],
      review:
        'Working with GCPP was a game-changer for my writing career. Highly recommend!',
      rating: 5,
      imageSrc: '/images/reviews/sarah-johnson.jpg',
      imageAlt: 'Sarah Johnson',
    },
    {
      name: 'James Carter',
      books: ['Whispers in the Dark'],
      review:
        'An incredible experience from start to finish. My book turned out beautifully.',
      rating: 4,
      imageSrc: '/images/reviews/james-carter.jpg',
      imageAlt: 'James Carter',
    },
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className="wrapper">
        <div className="mx-auto mb-12 max-w-6xl text-center text-balance">
          <h2 className="mb-5 text-[min(10vw,40px)] font-bold">
            Real Voices, Real Experiences
          </h2>
          <p className="text-[min(10vw,16px)]">
            Our authors reveal how our collaborative publishing process
            transformed their manuscripts into masterpieces, thanks to our
            dedicated support and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="inline-block w-[400px]">
              <ReviewCard
                name={review.name}
                books={review.books}
                review={review.review}
                rating={review.rating}
                imageSrc={review.imageSrc}
                imageAlt={review.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
