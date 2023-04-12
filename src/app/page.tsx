import Banner from '@/components/Banner';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='h-[88vh] w-full items-center justify-between gap-20 xl:flex'>
      <div className='fixed left-0 bottom-0 hidden h-full w-32 xl:inline-flex'>
        <LeftSide />
      </div>
      <div className='mx-auto h-[88vh] w-full p-4'>
        <Banner />
      </div>
      <div className='fixed right-0 bottom-0 hidden h-full w-32 xl:inline-flex'>
        <RightSide />
      </div>
    </main>
  );
}
