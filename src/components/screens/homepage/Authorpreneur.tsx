'use client';

import { Button } from '@/components/ui/button';
import MemberCard from './MemberCard';

const members = [
  {
    name: 'Mitchell Schuppe',
    country: 'Norway',
    flagSrc: '/flags/norway.png',
    imageSrc: '/members/mitchell-schuppe.jpg',
    imageAlt: 'Mitchell Schuppe',
  },
  {
    name: 'Deanna Bradtke',
    country: 'Cyprus',
    flagSrc: '/flags/cyprus.png',
    imageSrc: '/members/deanna-bradtke.jpg',
    imageAlt: 'Deanna Bradtke',
  },
  {
    name: 'Kristy Batz',
    country: 'Spain',
    flagSrc: '/flags/spain.png',
    imageSrc: '/members/kristy-batz.jpg',
    imageAlt: 'Kristy Batz',
  },
  {
    name: 'Lucia Schroeder',
    country: 'Croatia',
    flagSrc: '/flags/croatia.png',
    imageSrc: '/members/lucia-schroeder.jpg',
    imageAlt: 'Lucia Schroeder',
  },
  {
    name: 'Ms. Sheri Davis',
    country: 'Algeria',
    flagSrc: '/flags/algeria.png',
    imageSrc: '/members/sheri-davis.jpg',
    imageAlt: 'Ms. Sheri Davis',
  },
  {
    name: 'Darrel Zboncak MD',
    country: 'New Zealand',
    flagSrc: '/flags/new-zealand.png',
    imageSrc: '/members/darrel-zboncak.jpg',
    imageAlt: 'Darrel Zboncak MD',
  },
  {
    name: 'Mitchell Goodwin',
    country: 'Bermuda',
    flagSrc: '/flags/bermuda.png',
    imageSrc: '/members/mitchell-goodwin.jpg',
    imageAlt: 'Mitchell Goodwin',
  },
  {
    name: 'Grant Sauer',
    country: 'Greenland',
    flagSrc: '/flags/greenland.png',
    imageSrc: '/members/grant-sauer.jpg',
    imageAlt: 'Grant Sauer',
  },
  {
    name: 'Dr. Sylvester Bruen',
    country: 'Niue',
    flagSrc: '/flags/niue.png',
    imageSrc: '/members/sylvester-bruen.jpg',
    imageAlt: 'Dr. Sylvester Bruen',
  },
  {
    name: 'Wendell Wilderman',
    country: 'United Kingdom',
    flagSrc: '/flags/united-kingdom.png',
    imageSrc: '/members/wendell-wilderman.jpg',
    imageAlt: 'Wendell Wilderman',
  },
  {
    name: 'Diana Larson',
    country: 'Sweden',
    flagSrc: '/flags/sweden.png',
    imageSrc: '/members/diana-larson.jpg',
    imageAlt: 'Diana Larson',
  },
  {
    name: 'Carrie Auer',
    country: 'Western Sahara',
    flagSrc: '/flags/western-sahara.png',
    imageSrc: '/members/carrie-auer.jpg',
    imageAlt: 'Carrie Auer',
  },
  {
    name: 'Ian Koss',
    country: 'United States Minor Outlying Islands',
    flagSrc: '/flags/us-minor-outlying-islands.png',
    imageSrc: '/members/ian-koss.jpg',
    imageAlt: 'Ian Koss',
  },
  {
    name: 'Myra Donnelly DDS',
    country: 'Tokelau',
    flagSrc: '/flags/tokelau.png',
    imageSrc: '/members/myra-donnelly.jpg',
    imageAlt: 'Myra Donnelly DDS',
  },
  {
    name: 'Mr. Ken Brown',
    country: 'Lithuania',
    flagSrc: '/flags/lithuania.png',
    imageSrc: '/members/ken-brown.jpg',
    imageAlt: 'Mr. Ken Brown',
  },
  {
    name: 'Grace Graham',
    country: 'Trinidad and Tobago',
    flagSrc: '/flags/trinidad-and-tobago.png',
    imageSrc: '/members/grace-graham.jpg',
    imageAlt: 'Grace Graham',
  },
  {
    name: 'Kristy Wolff Sr.',
    country: 'Iceland',
    flagSrc: '/flags/iceland.png',
    imageSrc: '/members/kristy-wolff.jpg',
    imageAlt: 'Kristy Wolff Sr.',
  },
  {
    name: 'Angelica Bernathy',
    country: 'Bhutan',
    flagSrc: '/flags/bhutan.png',
    imageSrc: '/members/angelica-bernathy.jpg',
    imageAlt: 'Angelica Bernathy',
  },
];

export default function Authorpreneur() {
  return (
    <section className="bg-gray py-10 lg:py-20">
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
              <Button className="px-10"> Become a member today</Button>
              <Button variant="outline" className="px-10">
                Explore benefits
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                country={member.country}
                flagSrc={member.flagSrc}
                imageSrc={member.imageSrc}
                imageAlt={member.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
