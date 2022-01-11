import React, { useState } from 'react';
import './App.css';
import NewInputNote from './components/NewInputNote/NewInputNote';
import Notes from './components/Notes/Notes';
import Settings from './components/Timer/Settings';
import Timer from './components/Timer/Timer';


function App() {

  const [showSettings, setShowSettings] = useState(true)
  
  return (
    <div className='app_container'>
      
      <div className='app_container_body'>
        <div>
          <NewInputNote/>
          <Notes/>
        </div>
        <div>
          {showSettings ? <Settings/> : <Timer/>}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
