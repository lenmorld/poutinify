import React from 'react';

import { Link } from 'react-router-dom';

// import ReactDOM from 'react-dom';
import '../../scss/style.scss';    // scss can be used by all

class Header extends React.Component {

  render() {
    return(
      <header>
        <h1>Poutinify</h1>
        <div>
          <span class="powered_by">Powered by</span>
          <img class="yelp_logo" src="./images/Yelp_trademark_RGB.png" alt="powered by Yelp" />
        </div>
        <div className="header-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
    );
  }


}


export default Header;
