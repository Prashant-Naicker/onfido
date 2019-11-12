import React from 'react';

import styles from './initial.module.css';
import Logo from '../../images/vensa-logo.png';


const Initial = ({onClick}) => {

    return (
        <div className={styles.flexbox}>
            <img className={styles.logo} src={Logo} alt="logo" />
            <div className={styles.introText}>Welcome to the Vensa-Onfido Experience</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.button} onClick={() => onClick(1)}>Start</div>
        </div>
    );
}

export default Initial;