import React from 'react'
import Navbar from './components/header/navbar'
import Info from './components/infopage/info'
import Nightmood from './Nightmood'
import About from './components/aboutpage/about'
import Skills from './components/skillspage/skills'
import Projects from './components/projectspage/projects'
import Contact from './components/contectpage/contact'
import Service from './components/services/Service'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Nightmood/>
      <Info/>
      <About/>
      <Skills/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
