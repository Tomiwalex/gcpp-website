'use client';
const PublishingTimeline = () => {
  const steps = [
    {
      number: 1,
      title: 'Week 1-2: Manuscript Submission & Review',
      points: [
        'Submit your manuscript and receive initial feedback within two weeks.',
      ],
    },
    {
      number: 2,
      title: 'Week 3-6: Editing & Revisions',
      points: [
        'Engage in collaborative editing and proofreading to refine your manuscript.',
      ],
    },
    {
      number: 3,
      title: 'Week 7-8: Design & Formatting',
      points: [
        'Approve your book cover and layout design.',
        'Finalize formatting for both print and digital editions.',
      ],
    },
    {
      number: 4,
      title: 'Week 9-10: Publishing & Distribution',
      points: [
        'Your book goes live on various platforms, making it accessible to readers worldwide.',
      ],
    },
    {
      number: 5,
      title: 'Week 11-12: Marketing & Launch',
      points: [
        'Launch your book with a comprehensive marketing strategy tailored to your target audience.',
      ],
    },

    {
      number: 6,
      title: 'Ongoing: Post-Publication Support',
      points: [
        'Monitor your book’s performance, plan new promotions, and receive guidance for your future projects.',
      ],
    },
  ];

  return (
    <section className="bg-[#F9F9F9] p-5 py-14 md:px-[50px] lg:py-24">
      <div>
        <h2 className="mb-8 text-center text-3xl font-semibold text-[#14120F] lg:mb-12 lg:text-5xl">
          Our Publishing Timeline
        </h2>

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-7 gap-y-1 md:grid-cols-2 lg:gap-10 lg:pt-10">
          <div className="grid grid-cols-1 gap-y-2">
            {steps.slice(0, 3).map((step, i) => (
              <div
                key={step.number}
                className="relative flex min-h-[139px] max-w-[522px] items-start gap-5"
              >
                {/* Connector Line */}
                {[1].includes(step.number) && (
                  <div className="absolute top-8 bottom-0 left-4 block w-[2px] bg-[#14120F] lg:top-10 lg:left-5 lg:w-[3px]" />
                )}
                {[2].includes(step.number) && (
                  <div className="absolute top-10 -bottom-4 left-4 block w-[2px] bg-[#14120F] lg:top-12 lg:-bottom-10 lg:left-5 lg:w-[3px]" />
                )}
                {[3].includes(step.number) && (
                  <div className="absolute top-10 -bottom-4 left-4 block w-[2px] bg-[#14120F] md:hidden md:w-[3px] lg:top-12 lg:-bottom-10 lg:left-5" />
                )}
                {/* Step number circle */}
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#14120F] text-lg font-semibold text-white lg:h-10 lg:w-10 lg:text-2xl">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#EB9202] lg:text-2xl">
                    {step.title}
                  </h3>
                  <ul className="ml-3 list-outside list-disc space-y-1 text-sm leading-[1.7] font-normal text-[#1E1E1E]">
                    {step.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-y-2">
            {steps.slice(3, 6).map((step, i) => (
              <div
                key={step.number}
                className="relative flex min-h-[139px] max-w-[522px] items-start gap-5"
              >
                {/* Connector Line */}
                {[4].includes(step.number) && (
                  <div className="absolute top-8 bottom-0 left-4 block w-[2px] bg-[#14120F] lg:top-10 lg:left-5 lg:w-[3px]" />
                )}
                {[5].includes(step.number) && (
                  <div className="absolute top-10 -bottom-4 left-4 block w-[2px] bg-[#14120F] lg:top-12 lg:-bottom-10 lg:left-5 lg:w-[3px]" />
                )}

                {/* Step number circle */}
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#14120F] text-lg font-semibold text-white lg:h-10 lg:w-10 lg:text-2xl">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#EB9202] lg:text-2xl">
                    {step.title}
                  </h3>
                  <ul className="ml-3 list-outside list-disc space-y-1 text-sm leading-[1.7] font-normal text-[#1E1E1E]">
                    {step.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingTimeline;
