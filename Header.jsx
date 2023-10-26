import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-bar">
        <div className="left-section">
          <p>DEV@Deakin</p>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="right-section">
            <div className='post-button'>
                <a href='/'>Post</a>
            </div>
          <div  className="login-button">
          <Link to ="/Login">Login</Link>
          </div>
          
        </div>
      </div>
      {/* <img src="https://youthincmag.com/wp-content/uploads/2018/09/Travel-And-Tourism-Sector.jpg" alt="Header" className="image" /> */}
    </header>
  );
};

export default Header;