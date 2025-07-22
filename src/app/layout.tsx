'use client';

import './globals.css';
import { Poppins, Work_Sans } from 'next/font/google';
import AOS from 'aos';
import { useEffect } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-work-sans',
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Frame.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Work+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
        />
        <link rel="stylesheet" href="/fonts/aos/aos.css" />
      </head>
      <body className={`${poppins.variable} ${workSans.variable} max-w-7xl mx-auto`}>
        {children}
      </body>
    </html>
  );
}