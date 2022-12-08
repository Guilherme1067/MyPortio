import { ContactMe } from "./components/Contact"
import { Experiences } from "./components/Experiences"
import { Header } from "./components/Header"
import { Info } from "./components/Info"
import { Works } from "./components/Works"


function App() {

  return (
    <div className="font-body">
      <Header />
      <Info />
      <Works />
      <Experiences />
      <ContactMe />

    </div>
  )
}

export default App
