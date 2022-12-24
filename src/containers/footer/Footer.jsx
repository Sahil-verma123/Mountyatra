import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img src="./Images/Home-Images/Mount-Yatra-Logo.png" alt="logo" />
                </a>
                <p><strong>Mount Yatra</strong> Is A Service Providing Agency, Which Provides You Tour & Travel Packages At A Affordable Cost With Good Value.</p>

                <div className="hr"></div>
                <h6>Haridwar, Uttarakhand</h6>
                <h6>
                  +91 9412979959<span>|</span>+91 7895212535
                </h6>
          <h6>mountyatra@gmail.com</h6>

                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                      <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                      <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                      <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a className="hover-target" href="">
                      <i className="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &copy; 2023 Mount Yatra All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
