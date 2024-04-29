import {ReactTyped} from "react-typed";
import HeroParticles from "./HeroParticles";



function Hero() {
  return (
    <>
    <HeroParticles/>
    <div className="particles-container ">
      <div className="title">
        <h1>Hey! I'm Kenyerling Rodriguez</h1>
        <p><ReactTyped strings={["Front End Web Developer"]} typeSpeed={100} loop /></p>
      </div>
  </div>

  </>
  )
}

export default Hero