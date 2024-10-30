// import Navs from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
// import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Experience from './components/experience';
import Hero from './components/hero';
import './App.css';

function App() {
  return (
    <>
    {/* <Navs /> */}
    <Hero></Hero>
    {/* <About/> */}
    <Experience/>
    <Projects/>
    <Contact></Contact>
    </>
  )
}

export default App
