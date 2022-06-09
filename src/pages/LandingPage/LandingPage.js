import "./LandingPage.css";
import Header from "./../../components/Header/Header";

const LandingPage = ({ toggleMenu }) => {
  return (
    <div className='landing-container'>
      <Header toggleMenu={toggleMenu} />
      <div className='landing-title'>Work</div>

      <button type='submit' className='view-btn'>
        View Case
      </button>
    </div>
  );
};

export default LandingPage;
