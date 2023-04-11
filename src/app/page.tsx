import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
