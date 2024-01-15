import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full relative">
      <div className="w-full bg-white fixed z-10">
        <nav className="container m-auto pt-3 pb-3 flex justify-between items-center">
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
      </div>
      <div className="w-full h-full flex items-center justify-center absolute">
        <div className="flex flex-col items-start mt-16 container">
          <p>Proteja seus direitos</p>
          <h1 className="text-5xl">
            Nosso escritório está aqui para representar<br></br> e proteger os
            seus interesses
          </h1>
          <a href="">Fale conosco</a>
        </div>
      </div>

      <Image
        src="/bannerTop.png"
        alt="Banner Top"
        width={1440}
        height={600}
        className="w-full object-cover"
      />
    </div>
  );
};

export default Header;
