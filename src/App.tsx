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
    </div>
  )
}

export default App
