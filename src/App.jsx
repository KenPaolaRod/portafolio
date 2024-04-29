import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactInfo />
      <Footer />
    </>
    
  )
}

export default App
