import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      <Head>
        <title>
          Erick Fukuda | Portfólio
        </title>
      </Head>
      <NavBar />
      <About />
      <h1 style={{ textAlign: 'center', paddingBottom: '2rem' }}> Aqui estão alguns dos meus projetos. </h1>
      <ProjectCard
        order="row-reverse"
        image="images/cn-jokes.png"
        imageDescription="Projeto1"
        githubLink="https://github.com/ErickMifo/cn-jokes"
        projectDescription="Projeto feito em ReactJS consumindo dados de uma API para um processo seltivo."
        projectLink="https://truckpag-teste-erickmifo.vercel.app/"
      />
      <ProjectCard
        order="row"
        image="images/moveit.png"
        imageDescription="Projeto2"
        githubLink="https://github.com/ErickMifo/moveit-nextjs"
        projectDescription="Aplicativo de produtividade feito em NextJS durante a Next Level Week da RocketSeat."
        projectLink="https://moveit-nextjs-iota.vercel.app/"
      />
      <ProjectCard
        order="row-reverse"
        image="images/news.png"
        imageDescription="Projeto3"
        githubLink="https://github.com/ErickMifo/Teste-FrontEnd"
        projectDescription="Site de notícias responsivo com uso de grid."
        projectLink="https://erick-mifo-frontend-erickmifo.vercel.app/"
      />
    </div>
  );
}
