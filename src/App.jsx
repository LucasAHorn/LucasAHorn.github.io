import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
      <AboutMe />
      <Projects />
      
    </>
  )
}

export default App
