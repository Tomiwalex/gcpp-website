'use client';

import Image from 'next/image';
import logo from '../../../public/icons/gcpp-logo-2.png';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const navList = [
    { path: '/', name: 'Home' },
    { path: '/authors', name: 'Authors' },
    { path: '/services', name: 'Services' },
    { path: '/bookshop', name: 'Bookshop' },
    { path: '/about', name: 'About us' },
    { path: '/community', name: 'Our Community' },
    { path: '/blog', name: 'Blogs' },
  ];

  const subNavList = [
    { path: '/mailing-list', name: 'Sign up to our mailing list' },
    { path: '/contact', name: 'Contact us' },
    { path: '/help', name: 'Help' },
    { path: '/cart', name: 'Cart' },
    { path: '/login', name: 'Login' },
  ];

  return (
    <header
      className={`sticky ${isMenuOpen ? 'top-0' : '-top-12'} z-[10] bg-[#14120F]`}
    >
      <div className="mx-auto w-full max-w-[1512px]">
        <div
          className={`${isMenuOpen ? 'hidden lg:flex' : 'flex'} items-center justify-end gap-x-6 border-b-[0.8px] border-b-[#1E1E1E] px-5 py-3 font-normal text-[#ACACAC]`}
        >
          <Link
            href="#"
            className="hidden text-xs transition-all duration-300 ease-in-out hover:text-[#EB9202] md:inline-block"
          >
            Sign up to our mailing list
          </Link>
          <Link
            href="#"
            className="hidden text-xs transition-all duration-300 ease-in-out hover:text-[#EB9202] md:inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-xs transition-all duration-300 ease-in-out hover:text-[#EB9202]"
          >
            Help
          </Link>
          |
          <Link
            href="#"
            className="flex items-center gap-1 text-xs transition-all duration-300 ease-in-out hover:text-[#EB9202]"
          >
            <Icon icon="ph:shopping-cart-thin" /> Cart
          </Link>
          |
          <Link
            href="#"
            className="text-xs transition-all duration-300 ease-in-out hover:text-[#EB9202]"
          >
            Login
          </Link>
        </div>

        <div className="sticky top-0 z-[10] flex items-center justify-between gap-x-10 p-5">
          <Link href="/">
            <Image alt="gcpp" src={logo} className="h-auto w-[169px]" />
          </Link>

          {/* nav for desktop */}
          <nav className="hidden max-w-[650px] flex-1 items-center justify-between lg:flex">
            {navList.map((link, index) => (
              <Link
                href={link.path}
                className={`cursor-pointer ${
                  pathname === link.path
                    ? 'font-semibold text-[#EB9202]'
                    : 'font-normal text-white'
                } relative text-sm after:absolute after:bottom-[-10px] after:left-[50%] after:h-[6px] after:w-[6px] after:rounded-full after:bg-[#EB9202] after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100`}
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {/* schedule a consult */}
            <Button className="hidden h-8 rounded px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-in-out md:flex">
              Schedule a consult
            </Button>

            {/* hamburger menu */}
            <div
              className="cursor-pointer lg:hidden"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {!isMenuOpen ? (
                <Icon
                  icon="lineicons:menu-hamburger-1"
                  className="cursor-pointer text-4xl text-white"
                />
              ) : (
                <Icon
                  icon="solar:close-circle-broken"
                  className="cursor-pointer text-4xl text-white"
                />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-[80px] left-0 z-[20] h-[calc(100dvh-80px)] w-[100dvw] bg-[#14120F30] backdrop-blur-md md:hidden"
            >
              <motion.div
                initial={{ translateX: '30%' }}
                exit={{ translateX: '30%' }}
                animate={{ translateX: 0 }}
                className="ml-auto h-full w-[60%] max-w-[300px] bg-[#14120F]"
              >
                <nav className="flex flex-col gap-7 p-7">
                  {navList.map((link, index) => (
                    <Link
                      href={link.path}
                      className={`cursor-pointer text-base ${
                        location.pathname === link.path
                          ? 'font-semibold text-[#EB9202]'
                          : 'font-medium text-white'
                      } relative`}
                      key={index}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* schedule a consult */}
                  <Button className="h-8 rounded px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-in-out">
                    Schedule a consult
                  </Button>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
