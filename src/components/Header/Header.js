import "./Header.css";
import HeaderToggle from "./headertoggle.svg";

const Header = () => {
  return (
    <ul className='header'>
      <li className='header-logo'>
        <img src='/images/DEPTBlack.png' alt='dept-logo-black' className='dept-logo' />
      </li>
      <ul className='header-menu'>
        <li className='header-item'>Menu</li>
        <li className='header-item'>
          <img src={HeaderToggle} alt='head-toggle' className='header-toggle' />
        </li>
      </ul>
    </ul>
  );
};

export default Header;
