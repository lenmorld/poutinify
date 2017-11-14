import React from 'react';

import '../../scss/style.scss';    // scss can be used by all


class Footer extends React.Component {

  getCurrentTime() {
    let d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  }


  render() {
    return(
      <div>
        <hr/>
        <h4>
          {this.getCurrentTime()}
        </h4>
      </div>
    );
  }
}


export default Footer;
