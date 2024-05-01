import Navbar from '../Navbar/Navbar'
import './buying.scss'

function Buying() {
  return (
    <div>
      <Navbar/>
      <section className="buying">
    <div className="buying-content">
      <h2>Guiding Your Path to Homeownership: Your Expert Partner Awaits</h2>
    </div>
    <div className="buying-image">
      <img src="https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/buying.avif" alt=""/>
    </div>
  </section>

  <section>
    <div className="tips">
      <div className="images" id="tips-image">
        <img src="https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/buying2.avif" alt=""/>
      </div>
      <div className="content" id="tips-content">
        <p>
          Homeownership is a dream for many and a livelihood for some, providing a steady income stream. There are various reasons why you might be considering a home purchase:
        </p>

        <p>
          As a first-time buyer, you may be uncertain about where to begin. You want to escape high rental costs and build equity by owning a home. The allure of a brand-new property with modern upgrades tempts you. Upsizing to a better home in the same or a different location is your goal. Investing in a property for your children's future college expenses is a priority. Serious investors seek fixer-uppers, renovating and flipping them for profit. A 1031 Exchange is on your radar. You and a group of friends aim to buy property in partnership, renting it out, and selling it for a profit later. You're interested in purchasing land for future residential or commercial development.
        </p>

        <p>
          Regardless of your circumstances, you've worked hard for your money and want to invest wisely in your family's future. Having an expert by your side to navigate these decisions is crucial. Reach out to us, and one of our team members will connect with you to arrange a one-on-one session with an experienced Realtor® who will ensure a smooth and enjoyable process. Stay updated with the latest real estate trends at Real Estate Market 2019. Your dream home is just a step away.
        </p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Buying
