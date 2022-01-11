import React from 'react'
import styles from './Settings.module.css'
import ReactSlider from 'react-slider'

const Settings = () => {
    return (
        <div className={styles.container}>
           <label>Work Minutes:</label>
           <ReactSlider className={styles.work_slider}
            thumbClassName={styles.thumb}
            trackClassName='track'
            value={45}
            min={1}
            max={120}
           />
           <label>Break Minutes:</label>
           <ReactSlider className={styles.break_slider}/>
        </div>
    )
}

export default Settings
