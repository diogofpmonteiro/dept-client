import "./LandingPage.css";
import Header from "./../../components/Header/Header";

const LandingPage = ({ toggleMenu }) => {
  return (
    <div className='landing-container'>
      <Header toggleMenu={toggleMenu} />
      <div className='landing-title'>Work</div>

      <button type='submit' className='view-btn'>
        <a href='/' className='link'>
          View Case
        </a>
      </button>
    </div>
  );
};

export default LandingPage;
