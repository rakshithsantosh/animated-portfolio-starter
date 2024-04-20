import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";

const App = () => {
  return <div>
    <section id='Homepage'><Navbar/><Hero/></section>
    <section id='Services'><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact-">Contact</section>
  </div>;
};

export default App;
