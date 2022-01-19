import React,{useState} from 'react';
import NewInputNote from '../../NewInputNote/NewInputNote';
import Notes from '../../Notes/Notes';
import SettingsContext from '../../context/SettingsContext';
import Settings from '../../Timer/Settings';
import Timer from '../../Timer/Timer';
import NewsNavBar from '../../NewsNavBar/NewsNavBar';
import styles from './Home.module.css'

const Home = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(25)
    const [breakMinutes, setBreakMinutes] = useState(15)

    return (
        <>
        <div className={styles.container}>
            <h1 style={{textAlign: 'center'}}>Manage your work</h1>
          <div className={styles.body}>
            <div>
              <NewInputNote/>
              <Notes/>
            </div>

            <div>
              <SettingsContext.Provider value={
                {
                  workMinutes,
                  breakMinutes,
                  setWorkMinutes,
                  setBreakMinutes,
                  setShowSettings
                }
                }>
                  {showSettings ? <Settings/> : <Timer/>}
              </SettingsContext.Provider>
            </div>
          </div>
      </div>
                
      <div className={styles.navbar}>
        <NewsNavBar/>
      </div>
      </>
    )
}

export default Home
