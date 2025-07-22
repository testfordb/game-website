'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-8 gap-8 mx-auto max-w-7xl"
      data-aos="fade-up"
    >
      <div className="hero-left-info text-center md:text-left max-w-md w-full">
        <p className="hero-subtitle font-work-sans text-5xl font-semibold text-[#0b0223] uppercase">
          Play Like The
        </p>
        <h1 className="hero-title font-work-sans text-[95px] font-extrabold uppercase bg-[linear-gradient(180deg,#f948b2_0%,#8758f1_100%)] bg-clip-text text-transparent mt-2">
          G.O.A.T
        </h1>
        <div className="hero-item mt-5 space-y-2">
          <p className="flex items-center gap-2 justify-center md:justify-start text-[#534c64] text-xl font-work-sans">
            <i className="fa-solid fa-circle-play text-[#f948b2] text-2xl"></i> 1-Click instant play
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start text-[#534c64] text-xl font-work-sans">
            <i className="fa-solid fa-download text-[#f948b2] text-2xl"></i> No Download
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start text-[#534c64] text-xl font-work-sans">
            <i className="fa-solid fa-user-group text-[#f948b2] text-2xl"></i> 1000s of supported online games
          </p>
        </div>
        <div className="hero-btns flex justify-center md:justify-start gap-6 mt-8">
          <Link
            href="#"
            className="px-6 py-3 rounded-[48px] bg-[linear-gradient(90deg,#ff42a5_13.13%,#ff42a5_87.94%)] text-[#ffffff] text-lg font-medium uppercase hover:bg-opacity-80 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="px-6 py-3 rounded-[48px] bg-[#4ec5f7] text-[#ffffff] text-lg font-medium uppercase hover:bg-opacity-80 transition-colors"
          >
            Go Rogue
          </Link>
        </div>
      </div>
      <div className="hero-right-info">
        <Image
          src="/images/Group 18.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="object-contain w-full max-w-[600px] md:max-w-[700px]"
          onError={() => console.error('Failed to load hero image: /images/Group 18.png')}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;