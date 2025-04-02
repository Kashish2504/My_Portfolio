import Home from "./component/Home.jsx"
import About from "./component/About.jsx"
import Nav from "./component/navbar.jsx"
import Skills from "./component/Skills.jsx"

function App() {


  return (
    <>
    <Nav />
    <section id="Home">
    <Home/></section>
    <section id="About">
    <About/></section>
    <section id="Skills">
      <Skills />
    </section>
    
    </>
  )
}

export default App
