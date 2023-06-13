import { useState, createContext, useEffect } from 'react'
import './App.css'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Rules from './components/Rules';
import Header from './components/Header';
import DeskRules from './assets/image-rules.svg';
import BonusRules from './assets/image-rules-bonus.svg';

import { playSound } from './utils';
import clickSound from './assets/sounds/bip.mp3';

export const AppContext = createContext(null);

function App() {
  const [rulesPage, setRulesPage] = useState(false);
  const [score, setScore] = useState(12);
  const [houseChoice, setHouseChoice] = useState(1);
  const [choice, setChoice] = useState("none");
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [win, setWin] = useState("user");
  const [advanced, setAdvanced] = useState(true);

  const value = {
    score,
    setScore,
    houseChoice,
    setHouseChoice,
    choice,
    setChoice,
    setStep1, 
    setStep2,
    win,
    setWin,
    advanced,
    setAdvanced
  }


  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <div style={{position: 'absolute', color: 'white', fontSize: "1rem"}}>
          Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" style={{color: 'hsl(243, 100%, 62%)', textDecoration: 'none'}}>Dytoma</a>.
        </div>
        <Header />
        {step1 && <Step1 />}
        {step2 && <Step2 />}
        {rulesPage && 
        <div className='rules-page'>
          <div className='rules-page-section'>
            <div className='rules-page__header'>
              <h2 className='header__text'>Rules</h2>
              <button aria-label='close' className='btn-close' onClick={() => {
                setRulesPage(false);
                playSound(clickSound);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
              </button>
            </div>
            <img src={!advanced ? BonusRules : DeskRules} alt="rules" />
          </div>
        </div>
        }
        <div className='rules'>
          <button className='rules-btn' onClick={() => {
            setAdvanced(!advanced);
            playSound(clickSound);
          }}>{advanced ? "Advanced" : "Medium"}</button>
          <button className='rules-btn' onClick={() => {
            setRulesPage(true);
            playSound(clickSound);
          }}>RULES</button>
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
