import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import BonusLogo from '../assets/logo-bonus.svg';
import { AppContext } from '../App';
import Zoom from 'react-reveal/Zoom';


const Header = () => {
  const { score, advanced } = useContext(AppContext);
  

  return (
    <header className='header'>
      <div className='score-section'>
        <img src={advanced ? Logo : BonusLogo} alt="" />
        <div className='score'>
          <h1 className='score__label'>Score</h1>
          <h2 className='score__number'>{score}</h2>
        </div>
      </div>
    </header>
  )
}

export default Header