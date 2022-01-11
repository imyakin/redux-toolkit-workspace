import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pausebutton from './Pausebutton';
import Playbutton from './Playbutton';
import Settingsbutton from './Settingsbutton';
import styles from './Timer.module.css'

const Timer = () => {
    return (
        <div className={styles.container}>
            <CircularProgressbarWithChildren 
                value={66}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textColor: '#fff',
                    pathColor: '#c6ff00'
                })}
            >
                <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 20, marginTop: -5 }}>
                    <strong>66%</strong> mate
                </div>
            </CircularProgressbarWithChildren>
            <div className={styles.btns}>
                <Playbutton/>
                <Pausebutton/>
            </div>
            <div>
                <Settingsbutton/>
            </div>
        </div>
    )
}

export default Timer
