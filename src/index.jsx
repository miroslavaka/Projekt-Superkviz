import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Uvod from './components/Uvod';
import Kvizy from './components/Kvizy';
import Kviz from './components/Kviz';

import Zebricek from './components/Zebricek';
import Vyhodnoceni from './components/Vyhodnoceni';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './style.css';

const App = () => {
  const getData = (data) => {
    // setItem(data);
    console.log(data);
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Menu />

        <main className="main">
          <Routes>
            <Route path="/" element={<Uvod />} />
            <Route path="/kvizy" element={<Kvizy />} />
            {/* <Route path="/kviz" element={<KvizOutlet />}> */}
            <Route path="/kviz/:id" element={<Kviz />} />
            <Route path="/vyhodnoceni" element={<Vyhodnoceni />} />
            <Route path="/zebricek" element={<Zebricek />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
      {/*
      Tady bude tvůj Superkvíz :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace má nejméně 4 stránky (úvod, přehled kvízů, detail kvízu, žebříček)
      - použij router (musíš si ho nainstalovat)
    */}
    </>
  );
};

render(<App />, document.querySelector('#app'));
