import { Analytics } from "@vercel/analytics/react"
import Home from "./component/Home.jsx"
import About from "./component/About.jsx"
import Nav from "./component/navbar.jsx"
import Skills from "./component/Skills.jsx"
import Contact from "./component/Contact.jsx"
import Project from "./component/Project.jsx"
import Certificate  from "./component/Certificates.jsx"

function App() {


  return (
    <>
    <div >
    <Nav />
    <section id="Home">
    <Home/></section>
    <section id="About">
    <About/></section>
    <section id="Skills">
      <Skills />
    </section>
    <section id="Project">
      <Project />
    </section>
    <section id="Certificate">
      <Certificate/>
    </section>
    <section id="Contact">
      <Contact/>
    </section>
    </div>
    <Analytics/>
    </>
  )
}

export default App
