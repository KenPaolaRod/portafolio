import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />


    </>
  )
}

export default App
