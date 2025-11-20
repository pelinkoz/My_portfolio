import './index.css'
import Navbar from './containers/Navbar'
import Hero from './containers/Hero'
import About from './containers/About'
import MyProjects from './containers/MyProjects'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

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
      
      <section>
        <Footer/>
      </section>
      
    </div>
  )
}

export default App
