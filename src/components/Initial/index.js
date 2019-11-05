import React from 'react';

import styles from './initial.module.css';
import Logo from '../../images/vensa-logo.png';


const Initial = () => {

    return (
        <div className={styles.flexbox}>
            <img className={styles.logo} src={Logo} alt="logo" />
            <div className={styles.introText}>Welcome to the Vensa-Onfido Experience</div>
            <div className={styles.button}>Start</div>
        </div>
    );
}

export default Initial;