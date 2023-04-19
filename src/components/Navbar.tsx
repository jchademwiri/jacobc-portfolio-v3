'use client';
import { useState, useRef, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { logo } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { links } from '@/data/Navlinks';
import uuid from 'react-uuid';
import { Inter } from 'next/font/google';
import Icons from './Icons';
import ResumeButton from './ResumeButton';
const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const ref = useRef<string | any>('');

  const [showMenu, setShowMenu] = useState(false);

  const [activeLink, setActiveLink] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set the active link to the href of the intersecting element
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 } // Set the threshold to 0.5 so that the link is considered active when it's halfway in view
    );

    // Observe all the elements with the "section" class
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);

    // Get the target ID from the href attribute
    const targetId = e.currentTarget.getAttribute('href');

    // Scroll smoothly to the target element
    const targetElem = targetId ? document.querySelector(targetId) : null;
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }

    // Set the active link to the clicked link
    setActiveLink(targetId);

    // Remove the "active" class from the links that are not in view
    const links = Array.from(document.querySelectorAll('.nav-link'));
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href !== targetId && href !== activeLink) {
        link.classList.remove('active');
      }
    });
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  return (
    <header className='fixed top-0 z-50 h-20 w-full bg-bodyColor px-4 shadow-navbarShadow lg:h-[12vh]'>
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
          <ul className='flex gap-7 text-base'>
            {links.map(({ num, name, link }) => (
              <motion.li
                key={uuid()}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <Link
                  href={link}
                  onClick={handleScroll}
                  className={`text-Dark nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-green ${
                    link === activeLink ? 'active' : ''
                  }`}
                >
                  <span className='text-green'>{num}</span> {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <ResumeButton />
        </div>
        {/* mobile icon */}
        <div
          onClick={() => setShowMenu(true)}
          className='group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-green md:hidden'
        >
          <span className='inline-flex h-[2px] w-full transform bg-green transition-all duration-300 ease-in-out group-hover:translate-x-2'></span>
          <span className='inline-flex h-[2px] w-full transform bg-light transition-all duration-300 ease-in-out group-hover:translate-x-3'></span>
          <span className='inline-flex h-[2px] w-full transform bg-green transition-all duration-300 ease-in-out group-hover:translate-x-1'></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className='absolute top-0 right-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 md:hidden'
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className='scrollbarHide relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10'
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className='absolute top-4 right-4 cursor-pointer text-3xl text-green hover:text-light'
              />
              <div className='flex flex-col items-center gap-7'>
                <ul className='flex flex-col  items-center gap-7 text-base'>
                  {links.map(({ num, name, link }) => (
                    <motion.li
                      key={uuid()}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: 'easeIn' }}
                    >
                      <Link
                        href={link}
                        onClick={handleScroll}
                        className={`text-Dark nav-link flex cursor-pointer gap-1 font-medium duration-300 hover:text-green ${
                          link === activeLink ? 'active' : ''
                        }`}
                      >
                        <span className='text-green'>{num}</span> {name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                {/* button  */}
                <ResumeButton />
                <div className='flex gap-4'>
                  <Icons />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  className='mt-4 w-72 text-center text-sm tracking-widest text-green'
                >
                  <Link href='mailto:jchademwiri@gmail.com' target='_blank'>
                    jchademwiri@gmail.com
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
