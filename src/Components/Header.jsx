import React from 'react';
import '../Css/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="nav">
        <div className="navComponent navComponent-search">
          <Link to="/">
            <i className="fas fa-search"></i>
          </Link>
          {/* <span>Search</span> */}
        </div>
        <div className="navComponent navComponent-hot">
          <Link to="/hot">
            <i className="fab fa-hotjar"></i>
          </Link>
          {/* <span>Hot</span> */}
        </div>
        <div className="navComponent navComponent-saved">
          <Link to="/savePage">
            <i className="far fa-bookmark"></i>
          </Link>
          {/* <span>Save</span> */}
        </div>
        <div className="navComponent navComponent-liked">
          <Link to="/info">
            <i className="fas fa-info"></i>
          </Link>
          {/* <span>Liked</span> */}
        </div>
      </div>
    </>
  );
};

export default Header;
