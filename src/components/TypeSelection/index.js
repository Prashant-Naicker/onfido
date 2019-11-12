import React from 'react';

import styles from './typeSelection.module.css';
import Logo from '../../images/vensa-logo.png';
import { ReactComponent as Globe } from '../../images/globe.svg';
import { ReactComponent as DL } from '../../images/license.svg';

const TypeSelection = ({onClick}) => {
    return (
        <div className={styles.container}>

            <div className={styles.title}>Select Document</div>
            <div className={styles.text}>You will take a picture of it in the next step</div>
            <br />
            <div className={styles.card}>
                <Globe className={styles.icon} />
                Passport    
            </div>
            <div className={styles.card}>
                <DL className={styles.icon}/>
                Drivers License
            </div>
        </div>
    );
}

export default TypeSelection;