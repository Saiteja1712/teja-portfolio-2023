import './App.css';
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'
import Nav from './components/nav/Nav.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
