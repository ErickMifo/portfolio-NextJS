import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

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
      <ProjectCard />
    </div>
  );
}
