import HeadlineCards from "./component/HeadlineCards"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Food from "./component/Food"
import Category from "./component/Category"
import Location from './component/Location'
import Footer from "./component/Footer"

function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Location />
      <Footer />
    </div>
    </>
  )
}

export default App
