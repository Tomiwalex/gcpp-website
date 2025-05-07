'use client';

import { articles } from '@/components/data/articles';
import BlogCard from '../../BlogCard';

export default function AuthorsCorner() {
  return (
    <section className="py-10 lg:py-20">
      <div className="wrapper px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-4xl font-semibold lg:text-5xl">
            The Author&apos;s Corner
          </h2>
          <p className="mx-auto w-full max-w-[704px] text-base font-normal text-[#14120f]">
            Your go-to space for tips, inspiring stories, and everything you
            need to navigate your publishing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[360px_360px_360px]">
          {articles.map((article, index) => (
            <BlogCard
              key={index}
              title={article.title}
              description={article.description}
              imageSrc={article.imageSrc}
              href={article.href}
              date={article.date}
              author={article.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
