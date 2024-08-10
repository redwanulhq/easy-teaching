import React from 'react';
import './Header.css'
import img from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <header>
               <div className="container-xxl">
                    <nav>
                         <Link to="/" className="logo">
                              <img src={img} alt="" />
                         </Link>
                         <div className="menu">
                              <Link to="/">Home</Link>
                              <Link to="/courses">All Courses</Link>
                              <Link to="/about">About</Link>
                              <Link className="sign-in" to="/sign-in">Sign In</Link>
                         </div>
                    </nav>
               </div>
          </header>
     );
};

export default Header;