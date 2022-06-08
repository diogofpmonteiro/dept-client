import "./App.css";
import CaseHighlight from "./pages/CaseHighlight/CaseHighlight";
import CaseShowcase from "./pages/CaseShowcase/CaseShowcase";
import LandingPage from "./pages/LandingPage/LandingPage";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='App'>
      <LandingPage />
      <CaseShowcase />
      <CaseHighlight />
      <Clients />
      <Contact />
      <button onClick={scrollToTop} className='to-top-btn'>
        Top
      </button>
      <Footer />
    </div>
  );
}

export default App;
