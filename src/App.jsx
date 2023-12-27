import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Gallery />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}

export default App;
