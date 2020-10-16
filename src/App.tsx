import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import LogoImg from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
      <img src={LogoImg} alt="logo"/>

      <main>
        <h1>Leve felicidade para o mundo.</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>São Paulo</strong>
        <span>São Paulo</span>
      </div>

      <a href="https://google.com" className="enter-app">
        0
      </a>

  </div>
    </div>
  );
}

export default App;
