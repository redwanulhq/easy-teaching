import React from 'react';
import './Footer.css'

const Footer = () => {
     return (
          <footer>
               <div className="container-xxl">
                    <div className="footer-bottom">
                         <p>&copy; Copyright 2021 | All rights reserved by Easy Teaching</p>
                         <div className="footer-social">
                              <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://www.facebook.com"><i className="fab fa-twitter"></i></a>
                              <a href="https://www.facebook.com"><i className="fab fa-instagram"></i></a>
                              <a href="https://www.facebook.com"><i className="fab fa-linkedin-in"></i></a>
                              <a href="https://www.facebook.com"><i className="fab fa-youtube"></i></a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;