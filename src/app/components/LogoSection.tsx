'use client';

import Image from 'next/image';

const LogoSection: React.FC = () => {
  const fiveLogos = [
    { src: '/images/Rectangle 11.png', title: 'Action Games' },
    { src: '/images/Rectangle 12.png', title: 'Adventure Games' },
    { src: '/images/Rectangle 13.png', title: 'Arcade Games' },
    { src: '/images/Rectangle 14.png', title: 'Educational Games' },
    { src: '/images/Rectangle 15.png', title: 'Word Games' },
  ];

  const fourLogos = [
    { src: '/images/Rectangle 16.png', title: 'Role Playing Games' },
    { src: '/images/Rectangle 17.png', title: 'Music & Audio Games' },
    { src: '/images/Rectangle 18.png', title: 'Puzzle Games' },
    { src: '/images/Rectangle 19.png', title: 'Strategy Games' },
  ];

  return (
    <section className="px-4 sm:px-8 pt-8 -mt-16" data-aos="fade-up">
      <div className="five-logo flex flex-col sm:flex-row justify-center items-center gap-8">
        {fiveLogos.map((logo, index) => (
          <div
            key={index}
            className="logo-item flex items-center gap-2 p-2 rounded-3xl hover:border hover:border-primary-pink hover:[&>h6]:text-primary-pink transition-all"
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={50}
              height={50}
              className="object-contain"
              onError={() => console.error(`Failed to load logo image: ${logo.src}`)}
            />
            <h6 className="font-work-sans text-xl font-semibold text-dark-purple">{logo.title}</h6>
          </div>
        ))}
      </div>
      <div className="four-logo flex flex-col sm:flex-row justify-center items-center gap-8 mt-4">
        {fourLogos.map((logo, index) => (
          <div
            key={index}
            className="logo-item flex items-center gap-2 p-2 rounded-3xl hover:border hover:border-primary-pink hover:[&>h6]:text-primary-pink transition-all"
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={50}
              height={50}
              className="object-contain"
              onError={() => console.error(`Failed to load logo image: ${logo.src}`)}
            />
            <h6 className="font-work-sans text-xl font-semibold text-dark-purple">{logo.title}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;