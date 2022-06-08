import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='top-half'>
        <ul className='footer-list'>
          <li className='footer-list-title'>Dept</li>
          <li className='footer-list-top-item'>Work</li>
          <li className='footer-list-top-item'>Services</li>
          <li className='footer-list-top-item'>Stories</li>
          <li className='footer-list-top-item'>About</li>
          <li className='footer-list-top-item'>Careers</li>
          <li className='footer-list-top-item'>Contact</li>
        </ul>
        <ul className='footer-list'>
          <li className='footer-list-top-item'>facebook</li>
          <li className='footer-list-top-item'>twitter</li>
          <li className='footer-list-top-item'>instagram</li>
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
