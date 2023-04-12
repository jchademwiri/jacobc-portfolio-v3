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
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <nav
        className={`${inter.className} max-w-container h-full mx-auto py-1 flex items-center justify-between`}
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
        <div className='hidden md:inline-flex items-center gap-7'>
          <ul className='flex text-[13px] gap-7'>
            {links.map(({ num, name, link }) => (
              <motion.li
                key={uuid()}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <Link
                  href={link}
                  className='flex items-center gap-1 font-medium text-Dark hover:text-green cursor-pointer duration-300 nav-link'
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
              className='px-4 py-2 rounded-md text-green text-[13px] border border-green hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </Link>
        </div>
        {/* mobile icon */}
        <div className='w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-green cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-green inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

// time: 22:33
// link: https://youtu.be/fkrDAaAMcpY?t=1353
