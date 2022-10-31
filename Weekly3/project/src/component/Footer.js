import React from 'react';

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 item text col-md-3 item">
              <h3>Address</h3>
              <p>Kp Karang Tengah, Pusaka Rakyat, Tarumajaya, Bekasi</p>
              <p>+62 877 8908 2213</p>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Free Nature</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col">
              <a href="https://www.facebook.com/muji.parawali">
                <img
                  src="assets/img/facebook.png"
                  alt="facebook"
                  className="icon-logo"
                />
              </a>
              <a href="https://www.instagram.com/mujiburr._/">
                <img
                  src="assets/img/instagram.png"
                  alt="instagram"
                  className="icon-logo"
                />
              </a>
              <a href="https://twitter.com/mujibur61">
                <img
                  src="assets/img/twitter.png"
                  alt="twitter"
                  className="icon-logo"
                />
              </a>
            </div>
          </div>
          <p className="copyright">Free Nature © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
