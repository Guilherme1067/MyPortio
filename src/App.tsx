import { ContactMe } from "./components/Contact"
import { Experiences } from "./components/Experiences"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Info } from "./components/Info"
import { Works } from "./components/Works"


function App() {

  return (
    <div className="font-body animate-show ">
      <Header />
      <Info />
      <Works />
      <Experiences />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
