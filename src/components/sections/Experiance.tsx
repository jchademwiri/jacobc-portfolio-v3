'use client';
import { useState } from 'react';
import TitleSection from '../TitleSection';
import { Buam, PMG, Sithembe } from '../Works';

const Experiance = () => {
  const [workSithembe, setWorkSithembe] = useState(true);
  const [workPmg, setWorkPmg] = useState(false);
  const [workBuam, setWorkBuam] = useState(false);

  const handleSithembe = () => {
    setWorkSithembe(true);
    setWorkPmg(false);
    setWorkBuam(false);
  };
  const handlePmg = () => {
    setWorkSithembe(false);
    setWorkPmg(true);
    setWorkBuam(false);
  };
  const handleBuam = () => {
    setWorkSithembe(false);
    setWorkPmg(false);
    setWorkBuam(true);
  };

  return (
    <section
      id='experiance'
      className={` mx-auto flex max-w-contentContainer flex-col gap-4 py-10 md:py-24 md:px-10 lg:gap-8 xl:px-4`}
    >
      <TitleSection titleNumber='02.' title='Experiance' />
      <div className='mt-5 flex w-full flex-col gap-4 md:flex-row'>
        <ul className='flex md:w-72 md:flex-col'>
          <li
            onClick={handleSithembe}
            className={`${
              workSithembe
                ? 'border-t-green text-green md:border-t-0 md:border-l-green'
                : 'border-t-hoverColor text-dark md:border-t-0 md:border-l-hoverColor'
            } cursor-pointer  border-t-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Sithembe
          </li>
          <li
            onClick={handlePmg}
            className={`${
              workPmg
                ? 'border-t-green text-green md:border-t-0 md:border-l-green'
                : 'border-t-hoverColor text-dark md:border-t-0 md:border-l-hoverColor'
            } cursor-pointer  border-t-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            PMG
          </li>

          <li
            onClick={handleBuam}
            className={`${
              workBuam
                ? 'border-t-green text-green md:border-t-0 md:border-l-green'
                : 'border-t-hoverColor text-dark md:border-t-0 md:border-l-hoverColor'
            } cursor-pointer  border-t-2  bg-transparent py-3 px-4 text-sm font-medium text-dark duration-300 hover:bg-[#112240] md:border-l-2`}
          >
            Buam
          </li>
        </ul>
        {workSithembe && <Sithembe />}
        {workPmg && <PMG />}
        {workBuam && <Buam />}
      </div>
    </section>
  );
};
export default Experiance;

// https://youtu.be/fkrDAaAMcpY?t=4399
