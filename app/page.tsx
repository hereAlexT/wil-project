import React from 'react';

import Image from 'next/image';
import { Flex, Text, Button } from '@radix-ui/themes';

const HomePage = () => {
  return (
    <main className="flex-grow">
      {/* Section 1: Image on left, text on right */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/images/home/home-pic-1.webp" alt="Placeholder" width="500" height="500" className=" rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Campaign</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo et nunc bibendum, in fermentum nulla ultrices.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">
              Learn More
            </Button>
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
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Phasellus auctor, magna a pulvinar hendrerit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg">
              Join Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
