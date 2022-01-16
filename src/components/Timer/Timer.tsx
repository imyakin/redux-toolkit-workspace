import React, { useContext, useState, useEffect, useRef } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SettingsContext from '../context/SettingsContext';
import Pausebutton from './Pausebutton';
import Playbutton from './Playbutton';
import Settingsbutton from './Settingsbutton';
import styles from './Timer.module.css'

type Mode = 'work' | 'break' | null

const Timer = () => {
    const settingsInfo = useContext(SettingsContext)
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('break')
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    const tick = () => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }
    const switchMode = () => {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
        setMode(nextMode)
        modeRef.current = nextMode

        setSecondsLeft(nextSeconds)
        secondsLeftRef.current = nextSeconds
    }
    const initTimer = () => {
        setSecondsLeft(settingsInfo.workMinutes * 60)
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(()=>{
            if(isPausedRef.current){
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }

            tick();
        }, 1000)

        return () => clearInterval(interval);
    }, [settingsInfo])

    const totalSeconds = mode === 'work' 
        ? settingsInfo.workMinutes * 60 
        : settingsInfo.breakMinutes * 60;
    const percantage = Math.round(secondsLeft / totalSeconds * 100)

    const minutes = Math.floor(secondsLeft / 60)
    let seconds: any = secondsLeft % 60
    if(seconds < 10) seconds = '0'+ seconds

    return (
        <div className={styles.container}>
            <CircularProgressbarWithChildren 
                value={percantage}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textColor: '#fff',
                    pathColor: mode === 'work' ? '#c6ff00' : '#00c853'
                })}
            >
                <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 20, marginTop: -5 }}>
                    <strong>{minutes + ':' + seconds}</strong> mate
                </div>
            </CircularProgressbarWithChildren>
            <div className={styles.btns}>
                {isPaused 
                ? <span onClick={()=>{setIsPaused(false); isPausedRef.current = false}}><Playbutton/></span>
                : <span onClick={()=>{setIsPaused(true); isPausedRef.current = true}}><Pausebutton/></span>}
            </div>
            <div onClick={()=>settingsInfo.setShowSettings(true)}>
                <Settingsbutton/>
            </div>
        </div>
    )
}

export default Timer
