import Footer from '@/components/Footer';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import {
  About,
  Banner,
  Contact,
  Experiance,
  Projects,
} from '@/components/sections';

export default function Home() {
  return (
    <main className='mx-auto h-[88vh] w-full items-center justify-between gap-20 xl:flex'>
      <section className='fixed left-0 bottom-0 hidden h-full w-32 xl:inline-flex'>
        <LeftSide />
      </section>
      <div className='mx-auto h-[88vh] w-full p-4'>
        {/* Banner  */}
        <Banner />
        {/* About  */}
        <About />
        {/* Experiance  */}
        <Experiance />
        {/* Projects  */}
        <Projects />
        {/* Contact  */}
        <Contact />
        {/* Footer  */}
        <Footer />
      </div>
      <section className='fixed right-0 bottom-0 hidden h-full w-32 xl:inline-flex'>
        <RightSide />
      </section>
    </main>
  );
}
