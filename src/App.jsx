import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import './App.css';

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [darkMode, setDarkMode] = useState(false);
  const [source, setSource] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const resetSource = () => {
    setSource("");
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar 
        setCategory={setCategory} 
        setCountry={setCountry} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        setSource={setSource} 
        resetSource={resetSource}
      />
      <NewsBoard 
        category={category} 
        country={country} 
        source={source} 
      />
    </div>
  );
}

export default App;
