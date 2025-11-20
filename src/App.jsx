import { useState } from 'react'
import './App.css'

import Header from './components/header/Header'
import Landing from './components/landing/Landing'
import AboutMe from './components/aboutMe/AboutMe'
import Projects from './components/projects/Projects'

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
