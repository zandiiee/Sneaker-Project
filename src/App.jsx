import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Line from "./components/Line.jsx"


function App() {
  const [count, setCount] = useState(0)

    function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  return (
    <div>
      <Header/>
      <Line/>
      <Hero increment={increment} decrement={decrement} count={count}/>


    </div>
  )
}

export default App
