import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <p className={montserrat.className}>Testing me Mont</p>
    </main>
  );
}
