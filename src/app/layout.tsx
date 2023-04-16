import Script from 'next/script';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Jacob chademwiri Web Developer in Centurion',
    template: '%s | Web Developer in Centurion',
  },
  description:
    'I am a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.',

  openGraph: {
    title: 'Frontend Developer in Centurion, SA',
    description: `I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`,
    url: `https://jacobc.co.za`,
    siteName: 'Jacob Chademwiri',
    images: [
      {
        url: `https://jacobc.co.za/social.jpg`,
        width: 1200,
        height: 600,
        alt: 'Jacob Chademwiri Frontend Developer in Centurion, SA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Chademwiri',
    description: `I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`,
    siteId: '1467726470533754880',
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    images: ['https://jacobc.co.za/social.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id='ga-mesurement-id'
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='ga-mesurement-code' strategy='lazyOnload'>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <body
        className={`${montserrat.className} min-h-screen overflow-x-hidden overflow-y-scroll  bg-bodyColor text-light scrollbar scrollbar-track-dark/20 scrollbar-thumb-dark/60`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
