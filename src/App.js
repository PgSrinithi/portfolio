import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
