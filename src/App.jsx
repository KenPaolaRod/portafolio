import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticleComponent from './components/ParticleComponent'
import Comp from './components/Comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="particles-container">
        <ParticleComponent />
      </div>

    </>
  )
}

export default App
