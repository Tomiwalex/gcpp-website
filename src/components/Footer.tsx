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
    <footer className="text-foreground border-t border-t-[#E9E9E9] px-5 py-8 md:px-[50px]">
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
            <h3 className="relative bottom-1 mb-1 text-[min(10vw,20px)] font-medium text-[#14120F]">
              Unlock What's Hidden
            </h3>
            <p className="mb-4 text-[min(10vw,12px)] leading-[1.6] font-normal text-[#14120F]">
              (…or keep scrolling like everyone else...)
              <br />
              Your inbox becomes a vault.
              <br /> Secrets the algorithms suppress.
              <br />
              Forbidden chapters “they” don’t stock in mainstream bookstores.
              <br />
              Whispers about the mystical truths nobody dares publish.
              <br /> Until now...
              <br /> We’re not here to sell you “tips.” We’re here to hand you
              matches in a pitch-black library. <br /> <b>Join the 0.1% who:</b>
              <br /> - Access publishing backdoors (while others bang on locked
              doors)
              <br /> - Decode esoteric knowledge first (before it’s “redacted”)
              <br />- Own books that don’t just sit on shelves, (they rewrite
              realities)
              <br /> You like out-formation, right? <br />
              “But what if I’m not ready?” Exactly.
              <br /> Enter your name.
              <br /> Claim your access. Before the algorithm notices. <br />
              (This page may vanish. They don’t like truth-tellers.)
              <br />
              P.S. Your future manuscript? It’s already in the vault. <br />
              Break it out!
            </p>
            <div className="flex flex-col">
              <div className="flex gap-4">
                <Input
                  placeholder="Email"
                  className="h-12 px-5 text-[min(10vw,14px)] font-normal placeholder:text-[#706D6E]"
                />
                <Input
                  placeholder="First name"
                  className="h-12 px-5 text-[min(10vw,14px)] font-normal placeholder:text-[#706D6E]"
                />
              </div>
              <small className="mt-1 flex items-center gap-1 text-xs font-normal">
                <Icon icon="material-symbols-light:info-outline-rounded" /> We
                will not spam you or sell your information
              </small>
              <Button className="mt-4 w-fit px-10">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-8 border-t border-[#E9E9E9] pt-10 text-center md:flex-row md:items-stretch md:text-start lg:pt-20">
          {/* Copyright */}
          <div className="flex items-center space-x-4 max-md:order-3">
            <p className="text-[min(10vw,13px)] leading-[23px]">
              © 2019 Golden Child Promotions Publishing
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
                href="mailto:onlygold@goldenchildpromotionspublishing.gold"
              >
                onlygold@goldenchildpromotionspublishing.gold
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
