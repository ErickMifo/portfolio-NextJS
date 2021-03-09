import React, { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ClearIcon from '@material-ui/icons/Clear';
import styles from '../styles/components/NavBar.module.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (

    <div className={styles.navBarContainer}>

      <button
        type="button"
        className={styles.buttonHome}
      >
        Portfólio
      </button>

      <div className={click ? styles.navActive : styles.navLinks}>

        <button
          type="button"
          className={styles.buttonProjetos}
        >
          Projetos
        </button>

        <button
          type="button"
          className={styles.buttonContato}
        >
          Contato
        </button>

      </div>

      <div
        role="button"
        tabIndex={0}
        className={styles.menuIcon}
        onClick={handleClick}
        onKeyPress={handleClick}
      >

        {click ? <ClearIcon /> : <DehazeIcon />}

      </div>
    </div>
  );
}

export default NavBar;
