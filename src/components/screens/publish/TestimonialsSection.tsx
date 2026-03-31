'use client';

import TestimonialCarousel, { Testimonial } from '@/components/shared/TestimonialCarousel';

const testimonials: Testimonial[] = [
    {
        quote:
            '"The process felt effortless, and I felt supported every step of the way. My book is everything I dreamed it would be."',
        author: 'Michael Rivera',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 4,
        imagePath: '/images/real-man.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"Partnering with this team transformed my publishing journey. They believed in my vision and helped me bring it to life."',
        author: 'Lucas Bennett',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 5,
        imagePath: '/images/real-woman.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"The process felt effortless, and I felt supported every step of the way. My book is everything I dreamed it would be."',
        author: 'Michael Rivera',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 4,
        imagePath: '/images/real-man.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"Partnering with this team transformed my publishing journey. They believed in my vision and helped me bring it to life."',
        author: 'Lucas Bennett',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 5,
        imagePath: '/images/real-woman.png',
        imagePosition: 'object-center',
    }
];

export default function TestimonialsSection() {
    return (
        <TestimonialCarousel
            testimonials={testimonials}
        />
    );
}
