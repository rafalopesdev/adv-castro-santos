import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-100">
      <nav className="container m-auto grid grid-cols-2 items-center pt-3 pb-3 fixed bg-white">
        <a href="">
          <Image src="/logo.svg" alt="logotipo" width={260} height={45.28} />
        </a>
        <ul className="flex justify-between">
          <li>
            <a href="">Nosso Escritório</a>
          </li>
          <li>
            <a href="">Área de Atuação</a>
          </li>
          <li>
            <a href="">Diferencial</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      <Image
        src="/bannerTop.png"
        alt="Banner Top"
        width={1440}
        height={600}
        className="w-screen cover"
      />
    </div>
  );
};

export default Header;
