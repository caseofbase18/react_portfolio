import React from 'react';
import '../assets/style.css';

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <h2>Casey Natale Maltese</h2>
        </div>
        <div className="col-3"></div>
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <ul className="nav justify-content-center">
            {/* <li className="nav-item">
              <a className="nav-link active" href="index.html">About</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="portfolio.html" target="_blank">Portfolio</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;