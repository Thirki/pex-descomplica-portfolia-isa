import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Menu />
      <div id="App">
        <Home />
        <About />
        <Social />
        <Services />
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default App;
