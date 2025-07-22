'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0223] text-center py-12 mt-12" data-aos="fade-up">
      <div className="footer-logo mx-auto">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Image
            src="/images/Frame.png"
            alt="Footer Logo"
            width={48}
            height={28}
            className="object-contain"
            onError={() => console.error('Failed to load footer logo: /images/Frame.png')}
          />
          <span className="font-work-sans text-[45px] font-bold text-[#ffffff]">
            <span className="bg-[linear-gradient(90deg,#ff42a5_13.13%,#ff42a5_87.94%)] bg-clip-text text-transparent">G</span>amer
          </span>
        </Link>
      </div>
      <div className="footer-menu flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
        {['Our Story', 'Games', 'Web Games', 'Careers', 'Support', 'My Account'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-[#ffffff] text-lg font-medium hover:text-[#f948b2] transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="footer-icon flex justify-center gap-6 sm:gap-8 mt-8">
        {['twitter', 'facebook', 'youtube', 'linkedin', 'instagram', 'apple'].map((icon) => (
          <Link
            key={icon}
            href="#"
            className="text-[#ffffff] text-2xl hover:text-[#f948b2] transition-colors"
          >
            <i className={`fa-brands fa-${icon}`}></i>
          </Link>
        ))}
      </div>
      <div className="footer-terms flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
        {['Terms and Conditions', 'Privacy Policy', 'Cookie Policy', 'Privacy Settings'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-[rgba(255,255,255,0.60)] text-lg font-medium hover:text-[#f948b2] transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
      <p className="copy text-[rgba(255,255,255,0.60)] text-lg mt-8">
        Play Games @ Gamer @ 2000-2023
      </p>
    </footer>
  );
};

export default Footer;