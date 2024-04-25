import "./home.scss"
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Parallax from "../Parallax/Parallax";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return <div>
    <section id='Homepage'><Navbar/><Hero/></section>
    <section id='Services'><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default Home;
