import "./Header.css";
import HeaderToggle from "./headertoggle.svg";
const Header = () => {
  return (
    <ul className='header'>
      <li className='header-logo'>DEPT®</li>
      <div className='header-menu'>
        <li className='header-item'>Menu</li>
        <li className='header-item'>
          <img src={HeaderToggle} alt='head-toggle' className='header-toggle' />
        </li>
      </div>
    </ul>
  );
};

export default Header;
