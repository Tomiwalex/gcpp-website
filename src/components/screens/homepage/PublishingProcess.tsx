'use client';
const PublishingProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'Manuscript Submission',
      points: [
        'Submit your manuscript through our secure online portal.',
        'Our team conducts an initial review to ensure it aligns with our quality standards and publishing goals.',
      ],
    },
    {
      number: 2,
      title: 'Manuscript Review & Feedback',
      points: [
        'Receive detailed feedback from our expert editors.',
        'Optional: Schedule a consultation to discuss revisions and improvements.',
      ],
    },
    {
      number: 3,
      title: 'Editing & Proofreading',
      points: [
        'Collaborate with our professional editing team to refine your manuscript.',
        'Ensure your work is polished and ready for publication.',
      ],
    },
    {
      number: 4,
      title: 'Design & Formatting',
      points: [
        'Work with our creative team to design a captivating book cover and layout.',
        'Your manuscript will be formatted for print and digital publication.',
      ],
    },
    {
      number: 5,
      title: 'Publishing & Distribution',
      points: [
        'Your book is published across multiple platforms, including print-on-demand and eBook retailers.',
        'Distribution channels include Amazon, Barnes & Noble, and other global networks.',
      ],
    },

    {
      number: 6,
      title: 'Marketing & Promotion',
      points: [
        'Leverage GCPP’s promotional resources to reach your audience.',
        'Participate in author spotlight events, social media campaigns, and book launch strategies.',
      ],
    },

    {
      number: 7,
      title: 'Post-Publication Support',
      points: [
        'Continue to receive support with sales tracking, additional marketing, and planning your next project.',
      ],
    },
  ];

  return (
    <section className="p-5 py-14 md:px-[100px] lg:py-24">
      <div>
        <h2 className="mb-8 text-center text-3xl font-semibold text-[#14120F] lg:mb-12 lg:text-5xl">
          Our Publishing Process
        </h2>

        <div className="relative mx-auto grid max-w-[1512px] grid-cols-1 gap-7 gap-y-1 md:grid-cols-2 lg:gap-10 lg:pt-10">
          <div className="grid grid-cols-1 gap-y-2">
            {steps.slice(0, 4).map((step, i) => (
              <div
                key={step.number}
                className="relative flex min-h-[139px] max-w-[522px] items-start gap-5"
              >
                {/* Connector Line */}
                {[1, 5].includes(step.number) && (
                  <div className="absolute top-8 bottom-0 left-4 block w-[2px] bg-[#14120F] lg:top-10 lg:left-5 lg:w-[3px]" />
                )}
                {[2, 3, 6].includes(step.number) && (
                  <div className="absolute top-10 -bottom-4 left-4 block w-[2px] bg-[#14120F] lg:top-12 lg:-bottom-10 lg:left-5 lg:w-[3px]" />
                )}
                {[4].includes(step.number) && (
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

          <div className="grid grid-cols-1 gap-y-2 md:grid-rows-4">
            {steps.slice(4, 7).map((step, i) => (
              <div
                key={step.number}
                className="relative flex min-h-[139px] max-w-[522px] items-start gap-5"
              >
                {/* Connector Line */}
                {[1, 5].includes(step.number) && (
                  <div className="absolute top-8 bottom-0 left-4 block w-[2px] bg-[#14120F] lg:top-10 lg:left-5 lg:w-[3px]" />
                )}
                {[2, 3, 6].includes(step.number) && (
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

export default PublishingProcess;
