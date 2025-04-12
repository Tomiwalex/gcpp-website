'use client';

import BlogCard from '../../BlogCard';

export default function AuthorsCorner() {
  const articles = [
    {
      title: 'The Road to Publishing: From Manuscript to Market',
      description:
        'Every great book starts with an idea. But what happens between the initial spark and seeing your book on a shelf? The journey from manuscript to market involves several crucial steps. First, the manuscript itself must be written and polished. This process often includes multiple drafts and revisions. Once the manuscript is ready, the next step is finding a publisher or exploring self-publishing options. This can be a daunting process, but it’s essential to match your book with the right platform.',
      imageSrc: '/images/blog/blog_1.png',
      href: '/articles/road-to-publishing',
      date: '25 August, 2024',
      author: 'Kwadw(o) Naya',
    },
    {
      title: 'Common Mistakes First-Time Authors Make and How to Avoid Them',
      description:
        'Embarking on your first publishing journey can be thrilling yet fraught with pitfalls. One common mistake is the lack of planning. Having a clear plan and timeline is crucial for staying organized and on track. Ignoring the audience is another frequent error; understanding who your readers are and what they want is essential for a successful book. Skipping professional editing is a mistake many first-time authors make. A professional editor can provide invaluable feedback and polish your manuscript to a high standard.',
      imageSrc: '/images/blog/blog_2.png',
      href: '/articles/common-mistakes',
      date: '25 August, 2024',
      author: 'Kwadw(o) Naya',
    },
    {
      title: 'The Benefits of Collaborative Publishing',
      description:
        'Publishing doesn’t have to be a solitary journey. Collaborative publishing offers numerous advantages that can elevate your book to new heights. Shared expertise is one of the most significant benefits. Collaborating with professionals brings diverse skills and knowledge to your project, enhancing its overall quality. Enhanced creativity is another advantage, as brainstorming and feedback from multiple minds can lead to innovative ideas and improvements.',
      imageSrc: '/images/blog/blog_3.png',
      href: '/articles/collaborative-publishing',
      date: '25 August, 2024',
      author: 'Kwadw(o) Naya',
    },
  ];

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
