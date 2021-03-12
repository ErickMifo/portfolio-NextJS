import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/ProjectCard.module.css';

function ProjectCard({
  order, image, imageDescription, githubLink, projectDescription, projectLink,
}) {
  return (
    <div className={styles.container} style={{ flexDirection: order }}>

      <div className={styles.textContainer}>
        <p
          className={styles.info}
        >
          {projectDescription}
        </p>

        <a
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href={githubLink}
        >
          Link para o Repositório
        </a>
      </div>

      <a rel="noopener noreferrer" target="_blank" href={projectLink}>
        <img
          src={image}
          alt={imageDescription}
          className={styles.image1}
        />
      </a>

    </div>
  );
}

ProjectCard.propTypes = {
  order: PropTypes.oneOf(['row', 'row-reverse']).isRequired,
  image: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectCard;
