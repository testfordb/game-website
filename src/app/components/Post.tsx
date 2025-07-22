'use client';

import Image from 'next/image';

const Post: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-40 py-8 gap-8" data-aos="fade-up">
      <div className="post-left-info max-w-md w-full text-center md:text-right">
        <h1 className="post-title font-work-sans text-5xl font-bold leading-[60px]">
          <span className="bg-title-gradient bg-clip-text text-transparent">Play Instantly,</span> No Downloads No Installs.
        </h1>
        <p className="text-text-gray text-lg mt-4">
          Play games online for free without downloading. Just click the Play button and play instantly in your browser.
        </p>
      </div>
      <div className="post-right-info flex flex-col items-center md:items-end">
        <Image
          src="/images/Rectangle 55.png"
          alt="Post Image"
          width={500}
          height={400}
          className="object-contain"
          onError={() => console.error('Failed to load post image: /images/Rectangle 55.png')}
        />
        <Image
          src="/images/Rectangle 66.png"
          alt="Post Small Image"
          width={200}
          height={150}
          className="object-contain -mt-44 -ml-24 md:-ml-0 md:-mr-24"
          onError={() => console.error('Failed to load post small image: /images/Rectangle 66.png')}
        />
      </div>
    </section>
  );
};

export default Post;