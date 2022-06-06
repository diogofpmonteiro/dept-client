import "./Header.css";
import HeaderToggle from "./headertoggle.svg";
const Header = () => {
  return (
    <ul>
      <li>Dept®</li>
      <li>Menu</li>
      <li>
        <img src={HeaderToggle} alt='head-toggle' className='header-toggle' />
      </li>
    </ul>
  );
};

export default Header;
