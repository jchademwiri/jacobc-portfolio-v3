import LeftSide from '@/components/LeftSide';
import Middle from '@/components/Middle';
import RightSide from '@/components/RightSide';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
      <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
        <LeftSide />
      </div>
      <div className='h-[88vh] mx-auto p-4'>
        <Middle />
      </div>
      <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
        <RightSide />
      </div>
    </main>
  );
}
