import React from 'react'
import Hero from '../Components/Hero/Hero'
import Counter from '../Components/Counter/Counter'
import About from '../Components/About/About'
import Slider from '../Components/Slider/Slider'
import './ScroolBar.css'

function Home() {
  return (
    <div>
      <Hero/>
      <Counter/>
      <About/>
      <Slider/>
    </div>
  )
}

export default Home
