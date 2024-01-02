import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-100 relative">
      <div className="w-screen bg-white fixed z-10">
        <nav className="container m-auto grid grid-cols-2 items-center pt-3 pb-3">
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
      <div className="w-screen flex items-center z-10 bg-green-400 absolute">
        <div className="container m-auto">
          <p>Proteja seus direitos</p>
          <h1>
            Nosso escritório está aqui para representar e proteger os seus
            interesses
          </h1>
          <a href="">Fale conosco</a>
        </div>
      </div>
      <Image
        src="/bannerTop.png"
        alt="Banner Top"
        width={1440}
        height={600}
        className="w-screen h-screen object-cover  absolute"
      />
    </div>
  );
};

export default Header;
