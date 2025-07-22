'use client';

import Image from 'next/image';
import Link from 'next/link';

const Video: React.FC = () => {
  const videos = [
    '/images/Rectangle 4.png',
    '/images/Rectangle 5.png',
    '/images/Rectangle 6.png',
    '/images/Rectangle 7.png',
  ];

  return (
    <section className="text-center px-4 sm:px-8 py-8" data-aos="fade-up">
      <h1 className="video-title font-work-sans text-5xl font-bold text-dark-purple">
        Online Games <span className="bg-title-gradient bg-clip-text text-transparent">Funny Videos</span>
      </h1>
      <p className="text-text-gray text-lg mt-4">A Collection of Hilarious Videos to Brighten Your Day</p>
      <div className="video-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {videos.map((src, index) => (
          <div key={index} className="video-item relative group">
            <Image
              src={src}
              alt={`Video ${index + 1}`}
              width={300}
              height={200}
              className="w-full rounded-2xl bg-black transition-all group-hover:border-4 group-hover:border-primary-pink group-hover:blur-sm"
              onError={() => console.error(`Failed to load video image: ${src}`)}
            />
            <Link
              href="#"
              className="play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              <i className="fa-solid fa-circle-play text-2xl"></i>
              <span>Watch Now</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;