import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './nm.css'
import {themeContext} from './Context'

const NightModeToggle = () => {
  const nightmood =useContext(themeContext)

  const {isNightMode, setIsNightMode}=nightmood;

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div className='nightmood'>
      <button
      style={{width: '100%',
        height: '100%'}}
        className={`p-2 rounded-full ${isNightMode ? 'bg-gray-800' : 'bg-white'}`}
        onClick={toggleNightMode}
      >
        <FontAwesomeIcon
          icon={isNightMode ? faSun : faMoon}
          style={{ color: isNightMode ? 'white' : 'black' }}
        />
      </button>
    </div>
  );
};

export default NightModeToggle;
