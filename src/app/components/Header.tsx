'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 py-5 sm:px-8 sm:py-5" data-aos="fade-down">
      <div className="logo flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Frame.png"
            alt="Gamer Logo"
            width={60}
            height={60}
            className="object-contain"
            onError={() => console.error('Failed to load logo image: /images/Frame.png')}
          />
          <span className="font-work-sans text-[45px] font-bold text-dark-purple">
            <span className="text-primary-pink">G</span>amer
          </span>
        </Link>
      </div>
      <div className="menu flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
        <Link href="#" className="text-text-gray text-lg font-medium hover:text-primary-pink transition-colors">
          About Us
        </Link>
        <Link href="#" className="text-text-gray text-lg font-medium hover:text-primary-pink transition-colors">
          Developers
        </Link>
        <Link
          href="#"
          className="nav-btn rounded-lg bg-nav-bg px-4 py-2 flex items-center gap-2 text-text-gray text-lg font-medium hover:bg-primary-pink/20 transition-colors"
        >
          Follow Us On
          <i className="fa-brands fa-youtube text-red-600"></i>
          <i className="fa-brands fa-tiktok text-text-gray"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;