import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { ImFacebook2 } from 'react-icons/im';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Footer() {
  return (
    <footer className="text-foreground px-5 py-8 md:px-[50px]">
      <div className="mx-auto max-w-[1288px]">
        {/* Desktop View: Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:gap-x-[50px] xl:flex xl:justify-between xl:gap-x-[99px]">
          <div className="flex">
            <div className="flex w-full flex-col justify-between gap-8 sm:flex-row lg:gap-x-[50px] xl:gap-x-[86px]">
              {/* Membership Section */}
              <div className="">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold text-[#14120F]">
                  Membership
                </h3>

                <ul className="space-y-4 text-[min(10vw,12px)] font-normal text-[#43413E]">
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Membership
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div className="">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold text-[#14120F]">
                  Quick Links
                </h3>
                <ul className="space-y-4 text-[min(10vw,12px)] font-normal text-[#43413E]">
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Authors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Bookshop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Section */}
              <div className="sm:flex-1/2">
                <h3 className="mb-4 text-[min(10vw,16px)] font-bold text-[#14120F]">
                  Services
                </h3>
                <div className="grid grid-cols-2 lg:gap-x-10">
                  <div>
                    <div className="mb-2 space-y-2">
                      <h4 className="text-[min(10vw,12px)] font-bold text-[#14120F]">
                        Publishing
                      </h4>
                      <ul className="space-y-4 text-[min(10vw,12px)] font-normal text-[#43413E]">
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Book Publishing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Book Formatting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Manuscript Review
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Audio Book Creation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-2 space-y-2">
                      <h4 className="text-[min(10vw,12px)] font-bold text-[#14120F]">
                        Design
                      </h4>
                      <ul className="space-y-4 text-[min(10vw,12px)] font-normal text-[#43413E]">
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Book Cover Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Illustrations
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Website design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                          >
                            Video Editing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-2 space-y-4">
                    <h4 className="text-[min(10vw,12px)] font-bold text-[#14120F]">
                      Other Services{' '}
                    </h4>
                    <ul className="space-y-4 text-[min(10vw,12px)] font-normal text-[#43413E]">
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Ghostwriting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Editing Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Copywriting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Transcription
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Consultation & Training
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Mentoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          Accountability Coaching
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
                          CV Writing & Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-in-out hover:text-[#EB9202]"
                        >
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
          <div className="xl:max-w-[460px]">
            <h3 className="invisible mb-4 max-lg:hidden">Membership</h3>
            <h3 className="relative bottom-1 mb-3 text-[min(10vw,20px)] font-medium text-[#14120F]">
              Join Our List
            </h3>
            <p className="mb-4 text-[min(10vw,12px)] leading-[1.5] font-normal text-[#14120F]">
              At Golden Child Promotions Publishing, we simplify every step of
              the publishing process, from manuscript refinement to navigating
              complex platforms. Our experienced team ensures your book is
              polished to perfection and ready to reach its audience.
            </p>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Enter your email address"
                className="h-12 px-5 text-[min(10vw,14px)] font-normal placeholder:text-[#706D6E]"
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
            <p className="text-normal text-[min(10vw,13px)] leading-[23px] text-[#14120F]">
              Bringing Stories to Life, One Page at a Time. <br />
              Global Reach | Trusted Support | Seamless Publishing <br /> 📧{' '}
              <Link
                className="transition-all transition-transform duration-300 ease-in-out hover:text-[#EB9202]"
                href="mailto:info@gcppublishing.com"
              >
                info@gcppublishing.com{' '}
              </Link>
            </p>

            {/* social media icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="transition-all duration-300 ease-in-out hover:text-[#EDB40D]"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#14120F] transition-all duration-300 ease-in-out hover:text-[#EDB40D]"
              >
                <Icon icon="fa:facebook-square" className="text-lg" />
              </Link>

              <Link
                href="#"
                className="text-[#14120F] transition-all duration-300 ease-in-out hover:text-[#EDB40D]"
              >
                <Icon
                  icon="qlementine-icons:instagram-fill-16"
                  className="text-lg"
                />
              </Link>

              <Link
                href="#"
                className="transition-all duration-300 ease-in-out hover:text-[#EDB40D]"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 ease-in-out hover:text-[#EDB40D]"
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
