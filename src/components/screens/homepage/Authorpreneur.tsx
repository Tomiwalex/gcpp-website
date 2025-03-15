'use client';

import { Button } from '@/components/ui/button';
import MemberCard from './MemberCard';
import { members } from '@/components/data/members';

export default function Authorpreneur() {
  const groupSize = Math.ceil(members.length / 3);
  const group1 = members.slice(0, groupSize);
  const group2 = members.slice(groupSize, groupSize * 2);
  const group3 = members.slice(groupSize * 2);

  const duplicateGroup = (group: typeof members) => [
    ...group,
    ...group,
    ...group,
  ];

  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <div className="wrapper">
        <div className="mx-auto mb-12 max-w-7xl text-center text-balance">
          <div className="grid gap-5">
            <h2 className="text-[min(10vw,40px)] font-bold">
              Be Part of Our Authorpreneur Network
            </h2>
            <p className="text-[min(10vw,16px)]">
              Step into a supportive environment at GCPP, where personal growth
              and professional development go hand in hand. Our membership
              offers everything you need to thrive as a writer and entrepreneur.
              From educational resources to business services.
            </p>

            <div className="flex flex-wrap justify-center gap-5 lg:flex-nowrap">
              <Button className="px-10">Become a member today</Button>
              <Button variant="outline" className="px-10">
                Explore benefits
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Infinite Scrolling Groups */}
      <div>
        {/* Group 1 */}
        <div className="relative mb-6 overflow-hidden">
          <div className="animate-scroll animate-scroll-1 space-x-5 whitespace-nowrap">
            {duplicateGroup(group1).map((member, index) => (
              <div key={index} className="inline-block min-w-60">
                <MemberCard
                  name={member.name}
                  country={member.country}
                  flagSrc={member.flagSrc}
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div className="relative mb-6 overflow-hidden">
          <div className="animate-scroll animate-scroll-2 space-x-5 whitespace-nowrap">
            {duplicateGroup(group2).map((member, index) => (
              <div key={index} className="inline-block min-w-60">
                <MemberCard
                  name={member.name}
                  country={member.country}
                  flagSrc={member.flagSrc}
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Group 3 */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll animate-scroll-3 space-x-5 whitespace-nowrap">
            {duplicateGroup(group3).map((member, index) => (
              <div key={index} className="inline-block min-w-60">
                <MemberCard
                  name={member.name}
                  country={member.country}
                  flagSrc={member.flagSrc}
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll linear infinite;
        }

        .animate-scroll-1 {
          animation-duration: 15s;
        }

        .animate-scroll-2 {
          animation-duration: 17s;
        }

        .animate-scroll-3 {
          animation-duration: 19s;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
