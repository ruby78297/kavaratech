'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ['latin'] });

const listItem = ['Home', 'About', 'Contact Us', 'Login'];

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          <nav className='bg-teal-100 w-full h-14 flex items-center'>
            <div className='flex justify-between items-center w-full px-4'>
              <div className='font-black text-teal-800 text-3xl'>Next.js</div>
              <div className='hidden md:block'>
                <ul className='flex items-center'>
                  {listItem.map((item, index) => (
                    <li className='mx-3 font-bold text-2xl' key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className='md:hidden block'
                onClick={toggleMobileMenu}
                aria-label='Toggle menu'
              >
                <i className='fas fa-bars text-red-900'></i>
              </button>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div className='fixed bg-white border-red  inset-0 z-50 flex flex-col items-start justify-start '>
              <button
                className='absolute top-4 right-4 md:hidden block'
                onClick={toggleMobileMenu}
              >
                <i className='fa-solid fa-xmark text-red-900 text-2xl'></i>
              </button>
              <ul className='flex flex-col items-start m-3'>
                {listItem.map((item, index) => (
                  <li className='my-3 font-bold text-2xl' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {children}

        <div> hello</div>
      </body>
    </html>
  );
}
