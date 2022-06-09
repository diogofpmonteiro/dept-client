import "./Menu.css";
import polygon from "../../polygon2.svg";
import closeMenu from "./closemenu.svg";

const Menu = ({ toggleMenu }) => {
  return (
    <div className='menu-wrapper'>
      <ul className='menu-top-box'>
        <li>
          <img src='/images/DEPTWhite.png' alt='dept-logo-white' className='dept-logo-white' />
        </li>
        <ul className='menu-top-right'>
          <li>
            <button className='menu-toggle-btn' onClick={toggleMenu}>
              <img src={closeMenu} alt='toggle' className='menu-toggler' />
            </button>
          </li>
        </ul>
      </ul>
      <ul className='country-list'>
        Countries
        <li className='country'>Global</li>
        <li className='country'>
          <img src={polygon} alt='white-polygon' className='polygon' />
          Nederland
        </li>
        <li className='country'>United States</li>
        <li className='country'>Ireland</li>
        <li className='country'>United Kingdom</li>
        <li className='country'>Deutschland</li>
        <li className='country'>Schweiz</li>
      </ul>
      <ul className='menu'>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Home
          </a>
        </li>

        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Work
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Culture
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Services
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Partners
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Stories
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Careers
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Events
          </a>
        </li>
        <li className='menu-item'>
          <a className='link item' href='/'>
            <img src={polygon} alt='white-polygon' loading='lazy' className='menu-polygon' />
            Contacts
          </a>
        </li>
      </ul>
      <ul className='social-list'>
        <li className='socials'>
          <a className='link' target='blank' href='https://www.facebook.com/DeptAgency/'>
            Facebook
          </a>
        </li>
        <li className='socials'>
          <a className='link' target='blank' href='https://twitter.com/deptagency'>
            Twitter
          </a>
        </li>
        <li className='socials'>
          <a className='link' target='blank' href='https://www.instagram.com/deptagency/'>
            Instagram
          </a>
        </li>
        <li className='socials'>
          <a className='link' target='blank' href='https://www.linkedin.com/company/deptagency/'>
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
