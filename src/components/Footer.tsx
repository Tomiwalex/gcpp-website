import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { ImFacebook2 } from 'react-icons/im';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-foreground py-8">
      <div className="wrapper">
        {/* Desktop View: Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="flex">
            <div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
              {/* Membership Section */}
              <div className="flex-1 sm:flex-1/4">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold">
                  Membership
                </h3>
                <ul className="text-foreground space-y-2 text-[min(10vw,12px)]">
                  <li>
                    <Link href="#" className="hover:underline">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Membership
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div className="flex-1 sm:flex-1/4">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold">
                  Quick Links
                </h3>
                <ul className="text-foreground space-y-2 text-[min(10vw,12px)]">
                  <li>
                    <Link href="#" className="hover:underline">
                      Authors
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Bookshop
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Section */}
              <div className="flex-1 sm:flex-1/2">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold">
                  Services
                </h3>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="mb-2 space-y-2">
                      <h4 className="text-[min(10vw,12px)] font-bold">
                        Publishing
                      </h4>
                      <ul className="text-foreground space-y-2 text-[min(10vw,12px)]">
                        <li>
                          <Link href="#" className="hover:underline">
                            Book Publishing
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Book Formatting
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Manuscript Review
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Audio Book Creation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-2 space-y-2">
                      <h4 className="text-[min(10vw,12px)] font-bold">
                        Design
                      </h4>
                      <ul className="text-foreground space-y-2 text-[min(10vw,12px)]">
                        <li>
                          <Link href="#" className="hover:underline">
                            Book Cover Design
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Illustrations
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Website design
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:underline">
                            Video Editing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-2 space-y-2">
                    <h4 className="text-[min(10vw,12px)] font-bold">
                      Other Services{' '}
                    </h4>
                    <ul className="text-foreground space-y-2 text-[min(10vw,12px)]">
                      <li>
                        <Link href="#" className="hover:underline">
                          Ghostwriting
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Editing Services
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Copywriting
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Transcription
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Consultation & Training
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Mentoring
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Accountability Coaching
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          CV Writing & Optimization
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          SEO Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our List Section */}
          <div>
            <h3 className="invisible mb-4 max-lg:hidden">Membership</h3>
            <h3 className="mb-4 text-[min(10vw,20px)] font-medium">
              Join Our List
            </h3>
            <p className="mb-4 text-[min(10vw,12px)]">
              At Golden Child Promotions Publishing, we simplify every step of
              the publishing process, from manuscript refinement to navigating
              complex platforms. Our experienced team ensures your book is
              polished to perfection and ready to reach its audience.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Enter your email address"
                className="placeholder:text-muted-foreground h-12 text-[min(10vw,14px)]"
              />
              <Button className="w-fit px-10">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-8 border-t border-[#E9E9E9] pt-10 text-center md:flex-row md:items-stretch md:text-start lg:pt-20">
          {/* Copyright */}
          <div className="flex items-center space-x-4 max-md:order-3">
            <p className="text-[min(10vw,13px)] leading-[23px]">
              © 2025 Golden Child Promotions Publishing
            </p>
          </div>

          {/* Logo */}
          <div className="max-md:order-2">
            <Image
              src="/images/gcpp_logo.png"
              alt="Golden Child Promotions Publishing"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/*  Tagline and Social Icons */}
          <div className="mt-4 flex flex-col items-center justify-between gap-8 space-y-2 max-md:order-1 md:mt-0 md:items-start md:space-y-0 md:space-x-4 lg:w-[370px]">
            <p className="text-[min(10vw,13px)] leading-[23px]">
              Bringing Stories to Life, One Page at a Time. <br />
              Global Reach | Trusted Support | Seamless Publishing <br /> 📧{' '}
              <Link
                className="transition-transform duration-300 ease-linear hover:underline"
                href="mailto:info@gcppublishing.com"
              >
                info@gcppublishing.com{' '}
              </Link>
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="hover:scale-125">
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="transition-transform duration-300 ease-linear hover:scale-125"
              >
                <ImFacebook2 size={20} />
              </Link>

              <Link
                href="#"
                className="transition-transform duration-300 ease-linear hover:scale-125"
              >
                <RiInstagramFill size={20} />
              </Link>

              <Link
                href="#"
                className="transition-transform duration-300 ease-linear hover:scale-125"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="transition-transform duration-300 ease-linear hover:scale-125"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
