import { articles } from '@/components/data/articles';
import BlogCard from '@/components/BlogCard';
import Cta from '@/components/Cta';
import Image from 'next/image';
import { CornerUpRight, Link as LinkIcon } from 'lucide-react';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogDetail({ params }: Props) {
    const { slug } = await params;

    // We mock the content with the provided text for "Common Mistakes"
    const post = {
        title: 'Common Mistakes First-Time Authors Make and How to Avoid Them',
        date: '25 August, 2024',
        author: 'Kwadw(o) Naya',
        mainImage: '/images/blog/pexels-divinetechygirl-1181408 1.png',
        secondaryImage: '/images/blog/pexels-rdne-7821484 1.png',
    };

    const moreArticles = articles
        .filter((a) => a.href !== `/blog/${slug}`)
        .slice(0, 3);

    return (
        <main>
            <div className="mx-auto max-w-[1512px] px-5 py-12 md:px-[100px] lg:py-24">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px] xl:gap-[80px]">
                    {/* Left Column: Article Content */}
                    <article className="flex-1 max-w-[900px]">
                        {/* Header Content */}
                        <div className="text-left">
                            <p className="mb-4 text-sm font-normal text-[#747998] md:text-base">
                                {post.date} &nbsp;|&nbsp; by {post.author}
                            </p>
                            <h1 className="mb-8 text-3xl font-semibold leading-[1.3] text-[#14120F] md:mb-12 md:text-[40px] md:leading-[52px]">
                                {post.title}
                            </h1>
                        </div>

                        {/* Main Image */}
                        <div className="mb-10 w-full overflow-hidden rounded md:mb-16">
                            <Image
                                src={post.mainImage}
                                alt={post.title}
                                width={1024}
                                height={460}
                                className="h-[300px] w-full object-cover md:h-[460px]"
                            />
                        </div>

                        {/* Article Body */}
                        <div className="space-y-8 text-base font-normal leading-relaxed text-[#43413E] md:text-[18px] md:leading-[32px]">
                            <p>
                                Writing a book is a monumental achievement, but for first-time
                                authors, the process can be riddled with challenges. While every
                                writer’s journey is unique, there are common mistakes that many new
                                authors encounter. Recognizing and addressing these pitfalls can
                                make the difference between a frustrating experience and a
                                successful one. Here are some of the most frequent mistakes and tips
                                to avoid them.
                            </p>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    1. Lack of Planning and Structure
                                </h2>
                                <p className="mb-4">
                                    Many first-time authors dive into writing without a clear plan,
                                    thinking that inspiration alone will guide them. While spontaneity
                                    has its place, a lack of structure often leads to disorganized
                                    content and unfinished manuscripts.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Create an outline before you start writing. Even a simple
                                        roadmap of chapters and key points can help maintain focus.
                                    </li>
                                    <li>
                                        Consider tools like mind maps or storyboarding to visualize your
                                        ideas.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    2. Neglecting Target Audience
                                </h2>
                                <p className="mb-4">
                                    Some authors write for themselves rather than considering who
                                    their audience is. Without a clear understanding of the readers’
                                    needs and preferences, the book may fail to resonate.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Define your target audience early in the process. Are you
                                        writing for young adults, professionals, or a niche group?
                                    </li>
                                    <li>
                                        Research similar books in your genre to understand what appeals
                                        to your intended readers.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    3. Overcomplicating the Writing
                                </h2>
                                <p className="mb-4">
                                    First-time authors often fall into the trap of trying to impress
                                    with elaborate language or overly complex ideas, which can
                                    alienate readers.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Aim for clarity and simplicity in your writing. Use concise
                                        sentences and avoid jargon unless it’s essential to your topic.
                                    </li>
                                    <li>Read your work aloud to ensure it flows naturally.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    4. Ignoring Feedback
                                </h2>
                                <p className="mb-4">
                                    Many new authors hesitate to share their work with others, fearing
                                    criticism. However, avoiding feedback can lead to blind spots in
                                    the manuscript.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Join a writers’ group or workshop where you can receive
                                        constructive feedback.
                                    </li>
                                    <li>
                                        Share your draft with trusted friends or beta readers who can
                                        provide honest input.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    5. Skipping the Editing Process
                                </h2>
                                <p className="mb-4">
                                    Some first-time authors believe their initial draft is ready for
                                    publication, but skipping thorough editing can result in a subpar
                                    book.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Edit your manuscript multiple times, focusing on different
                                        aspects such as grammar, plot consistency, and pacing.
                                    </li>
                                    <li>Consider hiring a professional editor to refine your work.</li>
                                </ul>
                            </div>

                            {/* Secondary Image inserted for layout variance */}
                            <div className="my-10 w-full overflow-hidden rounded md:my-14">
                                <Image
                                    src={post.secondaryImage}
                                    alt="People editing"
                                    width={800}
                                    height={400}
                                    className="h-[250px] w-full object-cover md:h-[400px]"
                                />
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    6. Underestimating the Importance of a Strong Opening
                                </h2>
                                <p className="mb-4">
                                    The opening pages of a book are crucial for capturing the reader’s
                                    attention. A slow or unclear beginning can deter potential readers.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Start with a compelling hook that draws readers in immediately.
                                    </li>
                                    <li>
                                        Revise your opening several times to ensure it’s engaging and
                                        sets the tone for the rest of the book.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    7. Failing to Market the Book
                                </h2>
                                <p className="mb-4">
                                    Writing the book is only half the battle; many first-time authors
                                    overlook the importance of marketing and building an audience.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Start building your author platform early, using social media, a
                                        blog, or an email newsletter.
                                    </li>
                                    <li>
                                        Research marketing strategies specific to your genre and
                                        consider investing in professional help if needed.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    8. Setting Unrealistic Expectations
                                </h2>
                                <p className="mb-4">
                                    First-time authors sometimes expect instant success or significant
                                    financial rewards, which can lead to disappointment.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Set realistic goals for your writing journey, focusing on the
                                        process rather than immediate results.
                                    </li>
                                    <li>
                                        Celebrate milestones like completing a draft or receiving
                                        positive feedback.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    9. Rushing to Publish
                                </h2>
                                <p className="mb-4">
                                    The excitement of completing a manuscript often tempts authors to
                                    publish it prematurely. This can result in errors and missed
                                    opportunities for improvement.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>Take the time to polish your manuscript thoroughly.</li>
                                    <li>
                                        Research publishing options, whether traditional or
                                        self-publishing, to find the best fit for your book.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    10. Failing to Learn the Craft
                                </h2>
                                <p className="mb-4">
                                    Some new authors jump into writing without studying the art and
                                    mechanics of storytelling, which can limit their potential.
                                </p>
                                <p className="mb-2 font-medium text-[#14120F]">How to Avoid It:</p>
                                <ul className="ml-5 list-disc space-y-2">
                                    <li>
                                        Read widely in your genre to understand what works and why.
                                    </li>
                                    <li>
                                        Invest in writing courses, books, or workshops to hone your
                                        skills.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-xl font-semibold text-[#14120F] md:text-2xl">
                                    Conclusion
                                </h2>
                                <p>
                                    Writing a book is a rewarding but challenging endeavor. By being
                                    aware of these common mistakes and taking proactive steps to avoid
                                    them, first-time authors can set themselves up for success.
                                    Remember, every great writer started as a beginner, and each
                                    mistake is an opportunity to grow.
                                </p>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="mt-12 flex flex-wrap items-center gap-[10px] pt-8 text-[15px] font-normal text-[#14120F]">
                            <button className="flex h-[40px] items-center justify-center gap-[10px] rounded-[3px] border-[0.76px] border-[#ACACAC] px-[11px] py-[12px] hover:bg-gray-50">
                                Share
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18v-6a3 3 0 0 1 3-3h9" /><path d="m17 5 4 4-4 4" /></svg>
                            </button>
                            <button className="flex h-[40px] items-center justify-center gap-[10px] rounded-[3px] border-[0.76px] border-[#ACACAC] px-[11px] py-[12px] hover:bg-gray-50">
                                Tweet
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </button>
                            <button className="flex h-[40px] items-center justify-center gap-[10px] rounded-[3px] border-[0.76px] border-[#ACACAC] px-[11px] py-[12px] hover:bg-gray-50">
                                Copy link
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </button>
                        </div>
                    </article>

                    {/* Right Column wrapper so divider takes its height */}
                    <div className="flex w-full shrink-0 flex-col gap-10 lg:w-auto lg:flex-row lg:gap-[60px] xl:gap-[80px]">
                        {/* Vertical Divider */}
                        <div className="hidden w-px shrink-0 bg-[#EAEAEA] lg:block"></div>

                        {/* Right Column: More Articles */}
                        <aside className="w-full pt-2 lg:w-[360px]">
                            <h2 className="mb-8 text-[28px] font-semibold leading-[1.3] text-[#14120F] md:text-[32px]">
                                More Articles
                            </h2>
                            <div className="flex flex-col gap-[20px]">
                                {moreArticles.map((article, index) => (
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
                        </aside>
                    </div>
                </div>
            </div>

            <Cta />
        </main>
    );
}
