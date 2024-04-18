import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return <div>
    <section id='Homepage'><Navbar/><Hero/></section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact-">Contact</section>
  </div>;
};

export default App;
