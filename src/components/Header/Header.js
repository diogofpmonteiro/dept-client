import "./Header.css";
import headerToggle from "./headertoggle.svg";

const Header = ({ toggleMenu }) => {
  return (
    <ul className='header'>
      <li className='dept-logo-container'>
        <img src='/images/DEPTBlack.png' alt='dept-logo-black' className='dept-logo' />
      </li>
      <ul className='header-menu'>
        <li className='header-item'>Menu</li>
        <li className='header-item'>
          <button onClick={toggleMenu} className='toggle-btn'>
            <img src={headerToggle} alt='menu-toggle' className='header-toggle' />
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default Header;
