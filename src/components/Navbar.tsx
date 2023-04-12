'use client';

import { logo } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { links } from '@/data/Navlinks';
import uuid from 'react-uuid';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 h-20 w-full bg-bodyColor px-4 shadow-navbarShadow lg:h-[12vh]'>
      <nav
        className={`${inter.className} mx-auto flex h-full max-w-container items-center justify-between py-1`}
      >
        {/* add title font  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href='/'>
            <Image className='w-14' src={logo} alt='logo' />
          </Link>
        </motion.div>
        <div className='hidden items-center gap-7 md:inline-flex'>
          <ul className='flex gap-7 text-[13px]'>
            {links.map(({ num, name, link }) => (
              <motion.li
                key={uuid()}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <Link
                  href={link}
                  className='text-Dark nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-green'
                >
                  <span className='text-green'>{num}</span> {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <Link href='/' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='rounded-md border border-green px-4 py-2 text-[13px] text-green duration-300 hover:bg-hoverColor'
            >
              Resume
            </motion.button>
          </Link>
        </div>
        {/* mobile icon */}
        <div className='group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-green md:hidden'>
          <span className='inline-flex h-[2px] w-full transform bg-green transition-all duration-300 ease-in-out group-hover:translate-x-2'></span>
          <span className='inline-flex h-[2px] w-full transform bg-green transition-all duration-300 ease-in-out group-hover:translate-x-3'></span>
          <span className='inline-flex h-[2px] w-full transform bg-green transition-all duration-300 ease-in-out group-hover:translate-x-1'></span>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
