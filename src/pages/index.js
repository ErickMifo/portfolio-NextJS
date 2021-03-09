import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Erick Fukuda | Portfólio
        </title>
      </Head>
      <NavBar />
      <About />
    </div>
  );
}
