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
    <div className="App" style={appStyle}>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}

const appStyle = {
  backgroundColor: "#f5f5f5",
  color: "#000",
  fontFamily: "sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
  padding: "0",
  textAlign: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

export default App;
