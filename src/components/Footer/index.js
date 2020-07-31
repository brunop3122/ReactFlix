import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Sejam bem vindos Galera
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão é pra já
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
