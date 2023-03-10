import React, {useContext, useState} from 'react'
import { AppContext } from '../App';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Paper from '../assets/icon-paper.svg';
import Zoom from 'react-reveal/Zoom';
import Lizard from '../assets/icon-lizard.svg';
import Spock from '../assets/icon-spock.svg'


const Step2 = () => {
  const {choice, houseChoice, setStep1, setStep2, win, setWin, setScore, advanced, score} = useContext(AppContext);
  const [champion, setChampion] = useState(" ");
  const [championUser, setChampionUser] = useState("")

  const house = [
    {
      style1: `btn__paper--wrapper ${champion}`,
      style2: 'btn btn__paper',
      image: {Paper}
    },
    {
      style1: `btn__scissors--wrapper ${champion}`,
      style2: 'btn btn__scissors',
      image: {Scissors}
    },
    {
      style1: `btn__rock--wrapper ${champion}`,
      style2: 'btn btn__rock',
      image: {Rock}
    }
  ]

  const houseAdvanced = [
    {
      style1: `btn__paper--wrapper ${champion}`,
      style2: 'btn btn__paper',
      image: {Paper}
    },
    {
      style1: `btn__scissors--wrapper ${champion}`,
      style2: 'btn btn__scissors',
      image: {Scissors}
    },
    {
      style1: `btn__rock--wrapper ${champion}`,
      style2: 'btn btn__rock',
      image: {Rock}
    },
    {
      style1: `btn__lizard--wrapper ${champion}`,
      style2: 'btn btn__lizard',
      image: {Lizard}
    },
    {
      style1: `btn__spock--wrapper ${champion}`,
      style2: 'btn btn__spock',
      image: {Spock}
    }
  ]

  const game = () => {
    if (choice === 'paper' && houseChoice === 0 || choice === 'scissors' && houseChoice === 1 || choice === 'rock' && houseChoice === 2 || choice === 'lizard' && houseChoice === 3 || choice === 'spock' && houseChoice === 4) {
      setWin("draw");
      setTimeout( () => {
        setScore(prevScore => prevScore + 0);
      }, 6000);
      setChampion(" ");
      setChampionUser("")
    }
    if (choice === 'paper' && houseChoice === 1 || choice === 'scissors' && houseChoice === 2 || choice === 'rock' && houseChoice === 0 || choice === 'lizard' && houseChoice === 2 || choice === 'spock' && houseChoice === 3 || choice === 'scissors' && houseChoice === 4 || choice === 'lizard' && houseChoice === 1 || choice === 'spock' && houseChoice === 0 || choice === 'rock' && houseChoice === 4 || choice === 'paper' && houseChoice === 3) {
      setWin("house");
      setTimeout( () => {
        setScore(score - 1);
      }, 6000);
      setChampion("winner")
    }
    if (choice === 'paper' && houseChoice === 2 || choice === 'scissors' && houseChoice === 0 || choice === 'rock' && houseChoice === 1 || choice === 'scissors' && houseChoice === 3 || choice === 'lizard' && houseChoice === 0 || choice === 'paper' && houseChoice === 4 || choice === 'spock' && houseChoice === 2 || choice === 'rock' && houseChoice === 3 || choice === 'lizard' && houseChoice === 4 || choice === 'spock' && houseChoice === 1) {
      setWin("user");
      setTimeout( () => {
        setScore(score + 1);
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
              <img src={Paper} alt="paper"/>
            </button>
          </div>
          }
          { choice === "scissors" && 
          <div className={championUser ? 'btn__scissors--wrapper winnerUser' : "btn__scissors--wrapper"}>
            <button className='btn btn__scissors' aria-label='scissors'>
              <img src={Scissors} alt="scissors" />
            </button>
          </div>
          } 
          { choice === "rock" && 
          <div className={championUser ? 'btn__rock--wrapper winnerUser' :'btn__rock--wrapper'}>
            <button className='btn btn__rock' aria-label='rock'>
              <img src={Rock} alt="rock" />
            </button>
          </div>
          }
          { choice === "lizard" && 
          <div className={championUser ? 'btn__lizard--wrapper winnerUser' :'btn__lizard--wrapper'}>
            <button className='btn btn__lizard' aria-label='lizard'>
              <img src={Lizard} alt="lizard" />
            </button>
          </div>
          }
          { choice === "spock" && 
          <div className={championUser ? 'btn__spock--wrapper winnerUser' :'btn__spock--wrapper'}>
            <button className='btn btn__rock' aria-label='spock'>
              <img src={Spock} alt="spock" />
            </button>
          </div>
          }
        </div>


        <Zoom clear delay={5000} duration={1500}>
          <div className='verdict-md'>
            <h1 className='verdict__text'>{win === "user" ? "You win" : win === "house" ? "You lose" : "Draw"}</h1>
            <button className='verdict__button' onClick={() => {
              setStep1(true);
              setStep2(false);
            }}>Play again</button>
          </div>
        </Zoom>


        <div className='player'>
          <h2 className='player__text shadow'>The house picked</h2>
            {advanced &&
            <Zoom clear delay={3000} duration={2000}>
              <div className={house[houseChoice].style1}>
                <button className={house[houseChoice].style2} aria-label='computer choice'>
                  <img src={houseChoice === 0 ? Paper : houseChoice === 1? Scissors : Rock} alt="computer's choice illustration" />
                </button>
              </div>
            </Zoom>
            }
            {!advanced &&
            <Zoom clear delay={3000} duration={2000}>
              <div className={houseAdvanced[houseChoice].style1}>
                <button className={houseAdvanced[houseChoice].style2} aria-label='computer choice'>
                  <img src={houseChoice === 0 ? Paper : houseChoice === 1? Scissors : houseChoice === 2 ? Rock : houseChoice === 3 ? Lizard : Spock} alt="computer's choice illustration" />
                </button>
              </div>
            </Zoom>
            }
        </div>

        <Zoom clear delay={5000} duration={1500}>
          <div className='verdict-sm'>
            <h1 className='verdict__text'>{win === "user" ? "You win" : win === "house" ? "You lose" : "Draw"}</h1>
            <button className='verdict__button' onClick={() => {
              setStep1(true);
              setStep2(false);
            }}>Play again</button>
          </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Step2