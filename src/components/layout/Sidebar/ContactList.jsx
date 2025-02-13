export const ContactList = () => {
  return (
    <div className="sidebar-info_more">
      <div className="separator"></div>

      <ul className="contact-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">E-mail</p>
            <a href="mailto:eren.sen@aol.com" className="contact-link">eren.sen@aol.com</a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+9054444****" className="contact-link">+90 (544) 443 ****</a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Manisa, Turkey</address>
          </div>
        </li>
      </ul>

      <div className="separator"></div>

      <ul className="social-list">
        <li className="social-item">
          <a href="https://twitter.com/saint_sen" className="social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon className="socials-icons" name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="https://github.com/seneren" className="social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon className="socials-icons" name="logo-github"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="https://www.linkedin.com/in/erensen/" className="social-link" target="_blank" rel="noopener noreferrer">
            <ion-icon className="socials-icons" name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}; 