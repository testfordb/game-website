'use client';

import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-8 gap-8" data-aos="fade-up">
      <div className="about-left-info">
        <Image
          src="/images/pngwing 4.png"
          alt="About Image"
          width={600}
          height={600}
          className="object-contain"
          onError={() => console.error('Failed to load about image: /images/pngwing 4.png')}
        />
      </div>
      <div className="about-right-info text-center md:text-right max-w-md w-full">
        <h1 className="about-title font-work-sans text-5xl font-bold bg-title-gradient bg-clip-text text-transparent">
          We are gamer
        </h1>
        <p className="text-text-gray text-lg mt-4">
          An international digital games and entertainment company. We develop, publish and distribute multiplayer mobile games. We reach over 400 million players each month and our audience keeps growing.
        </p>
        <div className="about-btn mt-8">
          <Link
            href="#"
            className="px-6 py-3 rounded-full bg-btn-gradient text-white text-lg font-medium uppercase hover:bg-opacity-80 transition-colors"
          >
            Know More
          </Link>
        </div>
        <p className="text-text-gray text-lg mt-4">Our purpose...</p>
        <h3 className="about-subtitle font-work-sans text-2xl font-semibold text-dark-purple mt-2">
          “unleash the gamer in everyone”
        </h3>
      </div>
    </section>
  );
};

export default About;