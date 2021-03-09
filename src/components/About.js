import React from 'react';
import Typed from 'react-typed';
import GitHubIcon from '@material-ui/icons/GitHub';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { Fade } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import styles from '../styles/components/About.module.css';

function Home() {
  const Curriculo = 'https://docs.google.com/document/d/e/2PACX-1vSr_O3HFkGZv3Lj3XYZ4tFqPnH7VcqBUfbOuvarn8yBYnpCX-oi5bQ-xh7WqOUPde01fd_4MemUwPVo/pub';

  return (

    <div>

      <div
        className={styles.home}
      >

        <Typed
          className={styles.typedTitle}
          strings={[
            'Olá, meu nome é Erick.',
          ]}
          typeSpeed={50}
          cursorChar=""
        />
        <div className={styles.sub}>
          <p>Sou estudante de Administração pela UFSC e interessado por desenvolvimento web</p>

        </div>

        <div>
          <Tooltip
            title="GitHub"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <a rel="noopener noreferrer" href="https://github.com/ErickMifo" target="_blank">
              <GitHubIcon className={styles.icon} />
            </a>
          </Tooltip>

          <Tooltip
            title="CV"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <a rel="noopener noreferrer" href={Curriculo} target="_blank">
              <FormatAlignLeftIcon className={styles.icon} />
            </a>
          </Tooltip>

        </div>

      </div>
    </div>

  );
}

export default Home;
