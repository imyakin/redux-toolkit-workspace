import React, { useContext } from 'react'
import styles from './Settings.module.css'
import ReactSlider from 'react-slider'
import SettingsContext from '../context/SettingsContext'

const Settings = () => {
    const settingsInfo = useContext(SettingsContext)
   
    return (
        <div className={styles.container}>
           <label>Work: {settingsInfo.workMinutes}:00</label>
           <ReactSlider className={styles.work_slider}
            thumbClassName={styles.thumb}
            trackClassName='track'
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
           />
           <label>Break: {settingsInfo.breakMinutes}:00</label>
           <ReactSlider className={styles.break_slider}
           thumbClassName={styles.break_thumb}
           trackClassName='track'
           value={settingsInfo.breakMinutes}
           onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
           min={1}
           max={120}
           />
        </div>
    )
}

export default Settings
