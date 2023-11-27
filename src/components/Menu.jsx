import React, { useState } from 'react';


const MenuItem = ({ title, subMenuItems, onClick, onMouseOver }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleSubMenuToggle = () => {
    if (onMouseOver) {
      onMouseOver(!isSubMenuOpen);
    } else {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <div>
      <div onClick={onClick} onMouseOver={onMouseOver}>
        {title}
      </div>
      {subMenuItems && (
        <div
          style={{ marginLeft: '20px' }}
          onMouseEnter={() => onMouseOver && handleSubMenuToggle()}
          onMouseLeave={() => onMouseOver && handleSubMenuToggle()}
        >
          {subMenuItems.length > 0 && (
            <button onClick={handleSubMenuToggle}>
              {isSubMenuOpen ? 'Hide Submenu' : 'Show Submenu'}
            </button>
          )}
          {isSubMenuOpen && (
            <ul>
              {subMenuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const Layout = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleMenuItemClick = (title) => {
    console.log(`Clicked on ${title}`);
  };

  const handleSubMenuToggle = (isSubMenuOpen) => {
    setIsSubMenuOpen(isSubMenuOpen);
  };

  return (
    <div>
      <header>
        <h1>Your Website</h1>
      </header>
      <nav>
        <MenuItem
          title="About"
          subMenuItems={['Our Vision, Mission, and Values', 'Careers', 'Contact Us']}
          onClick={() => handleMenuItemClick('About')}
        />
        <MenuItem
          title="Company"
          subMenuItems={['Custom Software Development', 'Digital Transformation', 'IT Consulting', 'Staffing']}
          onClick={() => handleMenuItemClick('Company')}
        />
        <MenuItem
          title="Services"
          subMenuItems={['Construction', 'Travel & Hospitality', 'Retail & E-Commerce', 'Healthcare', 'Dental', 'Insurance', 'FinTech', 'Logistics & Automotive']}
          onMouseOver={(isSubMenuOpen) => handleSubMenuToggle(isSubMenuOpen)}
        />
        {/* Add more MenuItems as needed */}
      </nav>
      <main>
        {/* Your main content goes here */}
      </main>
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;
