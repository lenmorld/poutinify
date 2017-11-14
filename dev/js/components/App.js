// like Layout that contains all of the other components

import React from 'react';
// import ReactDOM from 'react-dom';
import '../../scss/style.scss';    // scss can be used by all

// sub-components
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return(
        <div>
          <header>
            <Header />
          </header>



            <div className="left">
                left

            </div>

            <div className="wrapper">
                <div className="top-right">
                    top right
                </div>

                <div className="bottom-right">
                    bottom right
                </div>
            </div>



          {/*<footer>*/}
            {/*<Footer />*/}
          {/*</footer>*/}


        </div>
    );
  }
}


// pure function - no lifecycle stuff, whatsoever
// const App = () => (
//   <div>
//     <h1>Poutinify 12</h1>
//   </div>
// );
//


// export works similarly for Class or pure function
export default App;
