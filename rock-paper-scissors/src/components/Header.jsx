import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import BonusLogo from '../assets/logo-bonus.svg';
import { AppContext } from '../App';
import Zoom from 'react-reveal/Zoom';


const Header = () => {
  const { score, advanced, setScore } = useContext(AppContext);

  useEffect(() => {
    const theScore = localStorage.getItem('gameScore');

    const num = Number(theScore);

    num ? setScore(num) : setScore(12);
    if (num < -12) {
      setScore(12);
    }
  }, [])

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