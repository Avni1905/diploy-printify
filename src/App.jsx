import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Connect from "./components/Connect"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import ProductDesign from "./components/Products"
import PictureCards from "./components/PictureCard"
import Money from "./components/Money"


function App() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Card />
        <ProductDesign />
        <PictureCards/>
        <Connect />
        <Testimonial />
        <Money />
        <Footer />
      </main>
    </>
  )
}

export default App
