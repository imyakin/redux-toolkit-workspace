import React, { useState } from 'react';
import './App.css';
import SettingsContext from './components/context/SettingsContext';
import NewInputNote from './components/NewInputNote/NewInputNote';
import Notes from './components/Notes/Notes';
import Settings from './components/Timer/Settings';
import Timer from './components/Timer/Timer';


function App() {

  const [showSettings, setShowSettings] = useState(true)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(15)
  
  return (
    <div className='app_container'>
      
      <div className='app_container_body'>
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
              setBreakMinutes
            }
            }>
              {showSettings ? <Settings/> : <Timer/>}
          </SettingsContext.Provider>
         
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
