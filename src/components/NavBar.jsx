import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="navbar">
      <div class="container flex">
        <h1 class="logo">Vinrays</h1>
        <nav>
          <ul className="main-menu flex flex-1">
            <li>
              <a href="/">Company</a>
              <div className="sub-menu">
                <ul>
                  <li>
                  <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/principles">Our Vision, Mission, and Values</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/">Services</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link to="/software">Custom Software Development</Link>
                  </li>
                  <li>
                    <Link to="/digital">Digital Transformation</Link>
                  </li>
                  <li>
                    <Link to="/consulting">IT Consulting</Link>
                  </li>
                  <li>
                    <Link to="/staffing">Staffing</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/">Industries</a>
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link to="/construction">Construction</Link>
                  </li>
                  <li>
                    <Link to="/travel">Travel & Hospitality</Link>
                  </li>
                  <li>
                    <Link to="/retail">Retail & E-Commerce</Link>
                  </li>
                  <li>
                    <Link to="/healthcare">Healthcare</Link>
                  </li>
                  <li>
                    <Link to="/dental">Dental</Link>
                  </li>
                  <li>
                    <Link to="/insurance">Insurance</Link>
                  </li>
                  <li>
                    <Link to="/fintech">FinTech</Link>
                  </li>
                  <li>
                    <Link to="/logistics">Logistics & Automotive</Link>
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
