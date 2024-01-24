import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next 14 Demo App',
  description: 'demo of approuter and server actions',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto px-4'></div>
        <Navbar />
        <div className='pb-8'>{children}</div>
      </body>
    </html>
  );
}
