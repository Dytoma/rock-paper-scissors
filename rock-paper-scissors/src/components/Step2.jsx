import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Paper from '../assets/icon-paper.svg';
import Lizard from '../assets/icon-lizard.svg';
import Spock from '../assets/icon-spock.svg';

import { playSound } from '../utils';
import lose from '../assets/sounds/lose.mp3';
import success from '../assets/sounds/success.mp3';
import noWin from '../assets/sounds/draw.mp3';
import clickSound from '../assets/sounds/bip.mp3';

import { easeInOut, motion } from 'framer-motion'


const Step2 = () => {
  const { choice, houseChoice, setStep1, setStep2, win, setWin, setScore, advanced, score } = useContext(AppContext);
  const [champion, setChampion] = useState(" ");
  const [championUser, setChampionUser] = useState("")

  useEffect(() => {
    const theScore = localStorage.getItem('gameScore');

    const num = Number(theScore);

    num ? setScore(num) : setScore(12);
  }, [])

  const house = [
    {
      style1: `btn__paper--wrapper ${champion}`,
      style2: 'btn btn__paper',
      image: { Paper }
    },
    {
      style1: `btn__scissors--wrapper ${champion}`,
      style2: 'btn btn__scissors',
      image: { Scissors }
    },
    {
      style1: `btn__rock--wrapper ${champion}`,
      style2: 'btn btn__rock',
      image: { Rock }
    }
  ]

  const houseAdvanced = [
    {
      style1: `btn__paper--wrapper ${champion}`,
      style2: 'btn btn__paper',
      image: { Paper }
    },
    {
      style1: `btn__scissors--wrapper ${champion}`,
      style2: 'btn btn__scissors',
      image: { Scissors }
    },
    {
      style1: `btn__rock--wrapper ${champion}`,
      style2: 'btn btn__rock',
      image: { Rock }
    },
    {
      style1: `btn__lizard--wrapper ${champion}`,
      style2: 'btn btn__lizard',
      image: { Lizard }
    },
    {
      style1: `btn__spock--wrapper ${champion}`,
      style2: 'btn btn__spock',
      image: { Spock }
    }
  ]

  const game = () => {
    if (choice === 'paper' && houseChoice === 0 || choice === 'scissors' && houseChoice === 1 || choice === 'rock' && houseChoice === 2 || choice === 'lizard' && houseChoice === 3 || choice === 'spock' && houseChoice === 4) {
      setWin("draw");
      setTimeout(() => {
        setScore(prevScore => prevScore + 0);
        playSound(noWin);
        localStorage.setItem('gameScore', `${score + 0}`);
      }, 6000);
      setChampion(" ");
      setChampionUser("")
    }
    if (choice === 'paper' && houseChoice === 1 || choice === 'scissors' && houseChoice === 2 || choice === 'rock' && houseChoice === 0 || choice === 'lizard' && houseChoice === 2 || choice === 'spock' && houseChoice === 3 || choice === 'scissors' && houseChoice === 4 || choice === 'lizard' && houseChoice === 1 || choice === 'spock' && houseChoice === 0 || choice === 'rock' && houseChoice === 4 || choice === 'paper' && houseChoice === 3) {
      setWin("house");
      setTimeout(() => {
        setScore(score - 1);
        playSound(lose);
        localStorage.setItem('gameScore', `${score - 1}`);
      }, 6000);
      setChampion("winner")
    }
    if (choice === 'paper' && houseChoice === 2 || choice === 'scissors' && houseChoice === 0 || choice === 'rock' && houseChoice === 1 || choice === 'scissors' && houseChoice === 3 || choice === 'lizard' && houseChoice === 0 || choice === 'paper' && houseChoice === 4 || choice === 'spock' && houseChoice === 2 || choice === 'rock' && houseChoice === 3 || choice === 'lizard' && houseChoice === 4 || choice === 'spock' && houseChoice === 1) {
      setWin("user");
      setTimeout(() => {
        setScore(score + 1);
        playSound(success);
        localStorage.setItem('gameScore', `${score + 1}`);
      }, 6000);
      setChampionUser("winnerUser")
    }

  }


  return (
    <div onLoad={() => {
      game();
    }}>
      <div className='step2'>


        <div className='player'>
          <h2 className='player__text'>You picked</h2>
          {choice === "paper" &&
            <div className={championUser ? 'btn__paper--wrapper winnerUser' : 'btn__paper--wrapper'}>
              <button className='btn btn__paper' aria-label='Paper'>
                <img src={Paper} alt="paper" />
              </button>
            </div>
          }
          {choice === "scissors" &&
            <div className={championUser ? 'btn__scissors--wrapper winnerUser' : "btn__scissors--wrapper"}>
              <button className='btn btn__scissors' aria-label='scissors'>
                <img src={Scissors} alt="scissors" />
              </button>
            </div>
          }
          {choice === "rock" &&
            <div className={championUser ? 'btn__rock--wrapper winnerUser' : 'btn__rock--wrapper'}>
              <button className='btn btn__rock' aria-label='rock'>
                <img src={Rock} alt="rock" />
              </button>
            </div>
          }
          {choice === "lizard" &&
            <div className={championUser ? 'btn__lizard--wrapper winnerUser' : 'btn__lizard--wrapper'}>
              <button className='btn btn__lizard' aria-label='lizard'>
                <img src={Lizard} alt="lizard" />
              </button>
            </div>
          }
          {choice === "spock" &&
            <div className={championUser ? 'btn__spock--wrapper winnerUser' : 'btn__spock--wrapper'}>
              <button className='btn btn__rock' aria-label='spock'>
                <img src={Spock} alt="spock" />
              </button>
            </div>
          }
        </div>



        <motion.div className='verdict-md'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: [0, 1] }}
          transition={{ duration: 1.5, delay: 5, ease: easeInOut }}
        >
          <h1 className='verdict__text'>{win === "user" ? "You win" : win === "house" ? "You lose" : "Draw"}</h1>
          <button className='verdict__button' onClick={() => {
            setStep1(true);
            setStep2(false);
            playSound(clickSound);
          }}>Play again</button>
        </motion.div>



        <div className='player'>
          <h2 className='player__text'>The house picked</h2>
          {advanced &&
            <div className='relative'>
              <div className='shadow' />

              <motion.div className={`${house[houseChoice].style1}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: [0, 1] }}
                transition={{ duration: 2, delay: 3, ease: easeInOut }}
              >
                <button className={house[houseChoice].style2} aria-label='computer choice'>
                  <img src={houseChoice === 0 ? Paper : houseChoice === 1 ? Scissors : Rock} alt="computer's choice illustration" />
                </button>
              </motion.div>

            </div>
          }
          {!advanced &&
            <div className='relative'>
              <div className='shadow' />

              <motion.div className={houseAdvanced[houseChoice].style1}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: [0, 1] }}
                transition={{ duration: 2, delay: 3, ease: easeInOut }}
              >
                <button className={houseAdvanced[houseChoice].style2} aria-label='computer choice'>
                  <img src={houseChoice === 0 ? Paper : houseChoice === 1 ? Scissors : houseChoice === 2 ? Rock : houseChoice === 3 ? Lizard : Spock} alt="computer's choice illustration" />
                </button>
              </motion.div>

            </div>
          }
        </div>


        <motion.div className='verdict-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: [0, 1] }}
          transition={{ duration: 1.5, delay: 5, ease: easeInOut }}
        >
          <h1 className='verdict__text'>{win === "user" ? "You win" : win === "house" ? "You lose" : "Draw"}</h1>
          <button className='verdict__button' onClick={() => {
            setStep1(true);
            setStep2(false);
            playSound(clickSound);
          }}>Play again</button>
        </motion.div>

      </div>
    </div>
  )
}

export default Step2