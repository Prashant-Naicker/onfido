import React from 'react';

import styles from './screenManager.module.css';
import Initial from '../Initial';

class ScreenManager extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            screen: 0
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inner}>
                    <Initial />
                </div>
            </div>
        )
    }
}

export default ScreenManager;