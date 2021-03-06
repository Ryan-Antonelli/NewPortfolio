import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="head sticky-top d-flex">

            <nav className="navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" rel="thisIsMyPage" href="./assets/images/sitePlaceHolder2.PNG" >
                  <img src="./assets/images/hello.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                </a>
                <div className="header">
                <h1 id="name">
                    Ryan Antonelli</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon border"></span>
                </button>
                </div>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item active">
                    <Link className="nav-link" id="aboutlink" to="/about">About <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="contactlink" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="portfoliolink" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
              
            </nav>
    </header>
  );
}

export default Nav;



