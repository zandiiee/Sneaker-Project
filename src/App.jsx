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

  return (
    <div>
      <Header/>
      <Line/>
      <Hero/>


    </div>
  )
}

export default App
