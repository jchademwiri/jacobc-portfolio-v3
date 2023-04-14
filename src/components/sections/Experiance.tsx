'use client';
import { useState } from 'react';
import TitleSection from '../TitleSection';
import { Baum, PMG, Sithembe } from '../Works';
import { motion } from 'framer-motion';
import Babiya from '../Works/Babiya';

const Experiance = () => {
  const [workSithembe, setWorkSithembe] = useState(true);
  const [workPmg, setWorkPmg] = useState(false);
  const [workBaum, setWorkBaum] = useState(false);
  const [workBabiya, setWorkBabiya] = useState(false);

  const handleSithembe = () => {
    setWorkSithembe(true);
    setWorkPmg(false);
    setWorkBaum(false);
    setWorkBabiya(false);
  };
  const handlePmg = () => {
    setWorkSithembe(false);
    setWorkPmg(true);
    setWorkBaum(false);
    setWorkBabiya(false);
  };
  const handleBaum = () => {
    setWorkSithembe(false);
    setWorkPmg(false);
    setWorkBaum(true);
    setWorkBabiya(false);
  };
  const handleBabiya = () => {
    setWorkSithembe(false);
    setWorkPmg(false);
    setWorkBaum(false);
    setWorkBabiya(true);
  };

  return (
    <motion.section
      id='experiance'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`mx-auto flex max-w-contentContainer flex-col gap-4 py-10 md:py-24 md:px-10 lg:gap-8 xl:px-4`}
    >
      <TitleSection titleNumber='02.' title='Work Experiance' />
      <div className='mt-5 flex w-full flex-col gap-4 md:flex-row'>
        <ul className='flex md:w-72 md:flex-col'>
          <li
            onClick={handleSithembe}
            className={`${
              workSithembe
                ? 'border-b-green bg-[#112240] text-green md:border-b-0 md:border-l-green'
                : 'border-b-hoverColor text-dark md:border-b-0 md:border-l-hoverColor'
            } cursor-pointer  border-b-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Sithembe Transportation
          </li>
          <li
            onClick={handleBabiya}
            className={`${
              workBabiya
                ? 'border-b-green bg-[#112240] text-green md:border-b-0 md:border-l-green'
                : 'border-b-hoverColor text-dark md:border-b-0 md:border-l-hoverColor'
            } cursor-pointer  border-b-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Babiya Geomatics
          </li>
          <li
            onClick={handlePmg}
            className={`${
              workPmg
                ? 'border-b-green bg-[#112240] text-green md:border-b-0 md:border-l-green'
                : 'border-b-hoverColor text-dark md:border-b-0 md:border-l-hoverColor'
            } cursor-pointer  border-b-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Playhouse Media
          </li>

          <li
            onClick={handleBaum}
            className={`${
              workBaum
                ? 'border-b-green bg-[#112240] text-green md:border-b-0 md:border-l-green'
                : 'border-b-hoverColor text-dark md:border-b-0 md:border-l-hoverColor'
            } cursor-pointer  border-b-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Baum Syatems
          </li>
        </ul>
        {workSithembe && <Sithembe />}
        {workPmg && <PMG />}
        {workBaum && <Baum />}
        {workBabiya && <Babiya />}
      </div>
    </motion.section>
  );
};
export default Experiance;
