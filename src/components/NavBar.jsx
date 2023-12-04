import React from "react";
import logo from '../assests/logo/logo.jpg';
import MyLink from "./MyLink";

const NavBar = () => {
  return (
    <div class="navbar">
      <div class="container flex">
        {/*<h1 class="logo">Vinrays</h1>*/}
        <img className="company-logo" src={logo} alt="logo"></img>
        <nav>
          <ul className="main-menu flex-1">
            <li>
              <a href="/">Company</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <MyLink toValue="/about">About Us</MyLink>
                  </li>
                  <li>
                    {/*<Link to="/principles" onClick={handleOnClick}>Our Vision, Mission, and Values</Link>*/}
                    <MyLink toValue="principles">
                      Our Vision, Mission, and Values
                    </MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/careers">Careers</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/contactus">Contact Us</MyLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/">Services</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <MyLink toValue="/software">
                      Custom Software Development
                    </MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/digital">Digital Transformation</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/consulting">IT Consulting</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/staffing">Staffing</MyLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/">Industries</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <MyLink toValue="/construction">Construction</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/travel">Travel & Hospitality</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/retail">Retail & E-Commerce</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/healthcare">Healthcare</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/dental">Dental</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/insurance">Insurance</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/fintech">FinTech</MyLink>
                  </li>
                  <li>
                    <MyLink toValue="/logistics">Logistics & Automotive</MyLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
