import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySongs from './components/MySongs';

const App = () => {
  return (
      <div>
          <h1>Welcome to My Music App</h1>
          <MySongs />  {/* Render the MySongs component*/}
      </div>
  );
};



export default App
