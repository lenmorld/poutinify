// like Layout that contains all of the other components

import React from 'react';
// import ReactDOM from 'react-dom';
import '../../scss/style.scss';    // scss can be used by all

// sub-components
import Header from './Header';
import Footer from './Footer';

import PlaceList from './PlaceList';
import PlaceDetailInfo from './PlaceDetailInfo';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // hard-coded for now
            places: [
                {
                    id: 0,
                    name: "La Banquise",
                    address: "Parc La Fontaine"
                }, {
                    id: 1,
                    name: "Poutineville",
                    address: "Rue Ontario"
                }
            ],
          selectedPlace: null,
        };
    }


    // TODO: ajax call to get poutine places
    placesFetch() {

    }

  render() {
    return(
        <div>
          <header>
            <Header />
          </header>

            <div className="left">
                <h3>poutine places</h3>
                <PlaceList
                    places={this.state.places}
                    onPlaceSelect={selectedPlace => this.setState({selectedPlace})}
                    selectedPlace={this.state.selectedPlace}
                />
            </div>

            <div className="wrapper">
                <div className="top-right">
                    <PlaceDetailInfo place={this.state.selectedPlace} />
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
