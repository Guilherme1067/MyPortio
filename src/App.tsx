import { useEffect, useState } from "react";
import { ContactMe } from "./components/Contact";
import { Experiences } from "./components/Experiences";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { MobileMenu } from "./components/MobileMenu";
import { Works } from "./components/Works";
import ReactGA from "react-ga";

ReactGA.initialize(import.meta.env.VITE_TRACK_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="font-body animate-show ">
      {isMobileMenuOpen ? (
        <MobileMenu setMenuStatus={setIsMobileMenuOpen} />
      ) : (
        <>
          <Header setMenuStatus={setIsMobileMenuOpen} />
          <Info />
          <Works />
          <Experiences />
          <ContactMe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
