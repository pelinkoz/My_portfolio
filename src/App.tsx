import React from 'react'
import './index.css'
import Navbar from './containers/Navbar'
import Hero from './containers/Hero'
import About from './containers/About'
import MyProjects from './containers/MyProjects'
import Contact from './containers/Contact'
import { useState } from 'react'

const App = () => {

  return (
    <div className="">
      <Navbar/>
      
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <MyProjects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App
