import "./App.css";
import CaseHighlight from "./pages/CaseHighlight/CaseHighlight";
import CaseShowcase from "./pages/CaseShowcase/CaseShowcase";
import LandingPage from "./pages/LandingPage/LandingPage";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <CaseShowcase />
      <CaseHighlight />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
