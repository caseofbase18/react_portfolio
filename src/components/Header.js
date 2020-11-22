import React from 'react';

function Header() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <h2>Casey Natale Maltese</h2>
        </div>
        <div class="col-3"></div>
        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html" target="_blank">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;