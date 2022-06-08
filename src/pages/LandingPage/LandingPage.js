import "./LandingPage.css";
import Header from "./../../components/Header/Header";

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <Header />
      <div className='landing-title'>Work</div>
      <div className='btn-container'>
        <button type='submit' className='view-btn'>
          View Case
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
