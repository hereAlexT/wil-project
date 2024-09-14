import React from 'react';

import Image from 'next/image';
import { Flex, Text, Button } from '@radix-ui/themes';

const HomePage = () => {
  ``
  return (
    <main className="flex-grow">
      {/* Section 1: Image on left, text on right */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/images/home/home-pic-1.webp" alt="Placeholder" width="500" height="500" className=" rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Raise Your Voice, Create Change</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our social awareness platform. Here, you can share your thoughts, connect with like-minded individuals, and make a real difference in your community and beyond.
            </p>
            {/* <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">
              Start Posting
            </Button> */}
          </div>
        </div>
      </section>

      {/* Section 2: Text on left, image on right */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <Image src="/images/home/home-pic-2.webp" alt="Placeholder" width={600} height={400} className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Creating Global Impact</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to amplify voices, spread awareness, and inspire action. By connecting passionate individuals, we&rsquo;re building a community dedicated to addressing social issues and driving positive change worldwide.
            </p>
            {/* <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg">
              Explore Campaigns
            </Button> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
