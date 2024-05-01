import './about.scss'
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <section className="aboutus-section">
  <div className="a-content">
    <h2>About Us</h2>
    <p>
      Welcome to the heart of Ravi Homes, where every journey begins with a story
    </p>
  </div>

  <div className=".a-content">
    <h3>Our Story</h3>
    <p>
      Our tale is one of passion, perseverance, and a shared vision to make a difference in Home buying journey.
    </p>
  </div>

  <div className=".a-content">
    <h3>Our Values</h3>
    <p>
      At Ravi Homes, our unwavering commitment to excellence is grounded in a set of core values that intricately shape every aspect of our operations. Our values embrace the delivery of seamless, hassle-free solutions, ensuring your Real Estate journey is marked by integrity, reliability, and a dedication to exceeding your expectations.
    </p>
  </div>

  <div className=".a-content">
    <h3>Why Choose Ravi Homes?</h3>
    <p>
      At Ravi Homes, we offer a distinctive fusion of professionalism, unwavering integrity, and a personalized touch in every client interaction. Our in-depth knowledge of the Bay Area's neighborhoods, coupled with a keen awareness of market trends and property values, guarantees that you make well-informed decisions at every juncture of your journey.
    </p>
  </div>
</section>

    </div>
  )
}

export default About
