import "./App.css";
import CaseHighlight from "./pages/CaseHighlight/CaseHighlight";
import CaseShowcase from "./pages/CaseShowcase/CaseShowcase";
import LandingPage from "./pages/LandingPage/LandingPage";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className='App'>
      {active ? (
        <Menu toggleMenu={toggleMenu} />
      ) : (
        <>
          <LandingPage toggleMenu={toggleMenu} />
          <CaseShowcase />
          <CaseHighlight />
          <Clients />
          <Contact />
          <button onClick={scrollToTop} className='to-top-btn'>
            Top
          </button>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
