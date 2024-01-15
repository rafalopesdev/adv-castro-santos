import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full grid grid-cols-2 items-center justify-between mt-10 mb-10">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae eius
        unde assumenda quia eum voluptates nobis, odit in sed dolorem quasi
        debitis nemo perferendis! Porro velit rem veritatis natus.
      </p>
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
