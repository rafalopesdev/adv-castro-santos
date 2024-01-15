import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full grid grid-cols-2 items-center justify-between mt-10 mb-10">
      <p className=""></p>
      <Image
        src="/about.png"
        alt="Nosso Escritório"
        width={600}
        height={500}
        className=""
      />
    </div>
  );
};

export default About;
