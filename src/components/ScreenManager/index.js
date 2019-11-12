import React from 'react';

import styles from './screenManager.module.css';
import Initial from '../Initial';
import TypeSelection from '../TypeSelection';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

class ScreenManager extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            prev: 0,
            screen: 0
        }
    }

    onClick = (screen) => {
        this.setState({ 
            prev: this.state.screen,
            screen: screen 
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inner}>
                    {this.state.screen !== 0 && <Arrow style={{width: "30px", height: "30px", marginTop: "2%"}} onClick={() => this.setState({ screen: this.state.prev, prev: 0})} />}
                    {this.state.screen == 0 && <Initial onClick={this.onClick}/>}
                    {this.state.screen == 1 && <TypeSelection onClick={this.onClick}/>}
                </div>
            </div>
        )
    }
}

export default ScreenManager;