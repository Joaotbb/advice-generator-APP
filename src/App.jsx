import { useState } from 'react'
import './App.css'

import desktopSVG from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'

function App() {
  const [data, setData] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    setData(data.slip)
  }

  return (
    <>
      <div className="container">
        <h1>Advice # {data.id}</h1>
        <p>{data.advice}</p>

        <div className="flex justify-center">
          <div className='h-0.5 bg-white w-full'></div>
          <img className="w-40" src={desktopSVG} alt="desktopSVG" />
          <div className='h-0.5 bg-white w-full'></div>
          
        </div>

        <div>
          <button onClick={fetchAdvice}>
            <img src={dice} alt="dice-button" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
