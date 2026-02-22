// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import StarRating from '@/components/customui/StarRating';
import { testimonials } from '@/components/data/reviews';

export default function ReviewCard() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  useEffect(() => {
    // Set the second slide as active initially
    if (swiperRef.current) {
      swiperRef.current.slideTo(1, 0); // 0ms duration for instant transition
    }
  }, []);

  return (
    <div className="select-none">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={12}
        centeredSlides={true}
        onSlideChange={e => setCurrentSlide(e.activeIndex)}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          3048: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        initialSlide={1}
      >
        {testimonials.map((review, index: number) => (
          <SwiperSlide
            key={index}
            className={`my-auto overflow-hidden rounded border border-[#EAEAEA] bg-[#FAFAFA]`}
          >
            <div
              className={`${currentSlide === index ? 'md:h-[600px]' : 'md:h-[520px]'} flex flex-wrap-reverse md:flex-nowrap md:justify-between`}
            >
              {/* testimonial texts */}
              <div className="flex h-full w-full max-w-[535px] flex-col justify-center p-6 md:px-8 lg:pr-10 lg:pl-12">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#8A8884]">
                  {review.name}
                </h3>

                {/* author of */}
                <p className="mt-2 text-xs font-normal text-[#14120F] lg:text-sm">
                  Author of
                </p>
                <div className="mt-1 flex gap-2">
                  {review.book.map((book, index) => (
                    <p
                      className="cursor-pointer rounded border-1 border-[#EAEAEA] bg-white p-2 py-1 text-sm font-medium text-[#14120F] transition-all duration-300 ease-in-out hover:bg-[#14120F] hover:text-white lg:text-base"
                      key={index}
                    >
                      {book}
                    </p>
                  ))}
                </div>

                {/* quote */}
                <p className="mt-5 mb-14 text-base font-normal text-[#14120F] lg:mt-6 lg:text-lg">
                  “{review.quote}”
                </p>

                {/* rating */}
                <StarRating rating={review.rating} />
              </div>

              <div className="relative min-h-[372px] min-w-[300px] basis-full overflow-hidden md:basis-auto lg:flex-1">
                <Image
                  src={review.imgSrc}
                  alt={review.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
