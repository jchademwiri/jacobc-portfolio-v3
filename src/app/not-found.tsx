import Link from 'next/link';

export const metadata = {
  title: 'Jacob chademwiri Web Developer in Centurion',
  description:
    'I am a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.',
};
export default function NotFound() {
  return (
    <div className='grid h-screen place-items-center'>
      <div className='text-center'>
        <h2 className='text-[10rem] font-extrabold text-gray-600'>404</h2>
        <p>This Page could not be found</p>
        <Link href={`/`} className='py-3 text-2xl text-green hover:underline'>
          Go Home
        </Link>
      </div>
    </div>
  );
}
