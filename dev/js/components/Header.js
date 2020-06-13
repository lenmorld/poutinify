import React from 'react';

// import ReactDOM from 'react-dom';
import '../../scss/style.scss';    // scss can be used by all

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Poutinify</h1>
        <div className="tagline">Top poutine places in Montreal!</div>
        <div class="powered_by">
          <div>Powered by</div>
          <div>
            <img class="yelp_logo"
              src="./images/Yelp_trademark_RGB-crop.png"
              alt="powered by Yelp" />
          </div>
        </div>
      </header>
    );
  }


}


export default Header;
