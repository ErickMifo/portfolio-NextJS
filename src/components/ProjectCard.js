import React from 'react';
import styles from '../styles/components/ProjectCard.module.css';

function ProjectCard() {
  return (

    <div className={styles.container}>

      <div className={styles.textContainer}>
        <p
          className={styles.info}
        >
          Projeto feito em ReactJS consumindo dados de uma API
        </p>

        <a
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/ErickMifo/cn-jokes"
        >
          https://github.com/ErickMifo/cn-jokes
        </a>
      </div>

      <img
        src="images/cn-jokes.png"
        alt="project1"
        className={styles.image1}
      />

    </div>
  );
}

export default ProjectCard;
