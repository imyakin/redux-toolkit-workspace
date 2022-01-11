import React from 'react';
import './App.css';
import NewInputNote from './components/NewInputNote/NewInputNote';
import Notes from './components/Notes/Notes';


function App() {
  
  return (
    <>
      <NewInputNote/>
      <hr/>
      <Notes/>
    </>
  );
}

export default App;
