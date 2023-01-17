import React, { useContext } from 'react';
import Paper from '../assets/icon-paper.svg';
import { AppContext } from '../App';
import Scissors from '../assets/icon-scissors.svg';
import Rock from '../assets/icon-rock.svg';
import Lizard from '../assets/icon-lizard.svg';
import Spock from '../assets/icon-spock.svg'
import "./step1.css";

const Step1 = () => {
  const { setHouseChoice, setChoice, setStep1, setStep2, advanced } = useContext(AppContext);

  const play = () => {
    if (advanced) {
      setHouseChoice(Math.floor(Math.random() * 3));
    } else {
      setHouseChoice(Math.floor(Math.random() * 5))
    }
    setStep1(false);
    setStep2(true);
  }
  return (
    <div className='step1'>


      { advanced && 
      <div className='choices'>

        <div className='btn__paper--wrapper' onClick={() => {
          play();
          setChoice("paper");
        }}>
          <button className='btn btn__paper' aria-label='paper'>
            <img src={Paper} alt="paper" />
          </button>
        </div>


        <div className='btn__scissors--wrapper' onClick={() => {
          play();
          setChoice("scissors");
        }}>
          <button className='btn btn__scissors' aria-label='Scissors'>
            <img src={Scissors} alt="scissors" />
          </button>
        </div>


        <div className='btn__rock--wrapper' onClick={() => {
          play()
          setChoice("rock");
        }}>
          <button className='btn btn__rock' aria-label='rock'>
            <img src={Rock} alt="rock" />
          </button>
        </div>
      </div>
      }


      {!advanced && 
      <div className='advanced'>
        <div className='grid'>

          <div className='item1'>
            <div className='btn__scissors--wrapper-advanced btn--wrapper' onClick={() => {
              play();
              setChoice("scissors");
            }}>
              <button className='btn-advanced btn__scissors-advanced' aria-label='Scissors'>
                <img src={Scissors} alt="scissors" />
              </button>
            </div>
          </div>

          
          <div className='item2'>
            <div className='btn__spock--wrapper btn--wrapper' onClick={() => {
              play();
              setChoice("spock");
            }}>
              <button className='btn-advanced btn__spock' aria-label='spock'>
                <img src={Spock} alt="spock" />
              </button>
            </div>


            <div className='btn__paper--wrapper-advanced btn--wrapper' onClick={() => {
              play()
              setChoice("paper");
            }}>
              <button className='btn-advanced btn__paper-advanced' aria-label='paper'>
                <img src={Paper} alt="paper" />
              </button>
            </div>
          </div>

          
          <div className='item3'>
            <div className='btn__lizard--wrapper btn--wrapper' onClick={() => {
              play()
              setChoice("lizard");
            }}>
              <button className='btn-advanced btn__lizard' aria-label='lizard'>
                <img src={Lizard} alt="lizard" />
              </button>
            </div>


            <div className='btn__rock--wrapper-advanced btn--wrapper' onClick={() => {
              play()
              setChoice("rock");
            }}>
              <button className='btn-advanced btn__rock-advanced' aria-label='rock'>
                <img src={Rock} alt="rock" />
              </button>
            </div>
          </div>


        </div>
      </div>
      }
    </div>
  )
}

export default Step1