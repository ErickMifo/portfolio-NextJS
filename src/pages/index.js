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
      <ProjectCard
        order="row-reverse"
        image="images/cn-jokes.png"
        imageDescription="Projeto1"
        githubLink="https://github.com/ErickMifo/cn-jokes"
        projectDescription="Projeto feito em ReactJS consumindo dados de uma API para um processo seltivo."
        projectLink="https://truckpag-teste-erickmifo.vercel.app/"
      />
    </div>
  );
}
