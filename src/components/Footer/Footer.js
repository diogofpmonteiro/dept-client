import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='top-half'>
        <ul className='footer-list'>
          <li className='footer-list-title'>
            <img src='/images/DEPTWhite.png' alt='dept-logo-white' />
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              Work
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              Services
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              Stories
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              About
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              Careers
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' className='link' href='/'>
              Contact
            </a>
          </li>
        </ul>
        <ul className='footer-list'>
          <li className='footer-list-top-item'>
            <a target='blank' href='https://www.facebook.com/DeptAgency/'>
              <img className='social' src='/images/socials/fb.png' alt='fb-logo' />
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' href='https://twitter.com/deptagency'>
              <img src='/images/socials/twitter.png' alt='twitter-logo' />
            </a>
          </li>
          <li className='footer-list-top-item'>
            <a target='blank' href='https://www.instagram.com/deptagency/'>
              <img src='/images/socials/instagram.png' alt='instagram-logo' />
            </a>
          </li>
        </ul>
      </div>
      <div className='bottom-half'>
        <ul className='footer-list'>
          <li className='footer-list-bottom-item'>Chamber of Commerce: 63464101</li>
          <li className='footer-list-bottom-item'>VAT: NL 8552.47.502.B01</li>
          <li className='footer-list-bottom-item'>Terms and conditions</li>
        </ul>

        <ul className='footer-list'>
          <li className='footer-list-bottom-item1'>© 2018 Dept Agency</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
