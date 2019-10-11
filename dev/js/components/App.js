// like Layout that contains all of the other components
import React from 'react';
// import ReactDOM from 'react-dom';
import '../../scss/style.scss';    // scss can be used by all

// sub-components
// import Header from './Header';
import Footer from './Footer';

import PlaceList from './PlaceList';
import PlaceDetailInfo from './PlaceDetailInfo';
import PlaceDetailMap from './PlaceDetailMap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
            selectedPlace: {}
        }
    }

    componentDidMount() {
        fetch('/yelp/places')
            .then(res => res.json())
            .then(places => {
                // console.log("LENNY");
                console.log("(backend->) places: ", { places });
                // places: { business: [{id, alias, name, etc}, {}] }
                this.setState(
                    {
                        places: places,
                        selectedPlace: places[0]
                    }
                );
                // select first one as default
            });
    }

    render() {
        return (
            <div>
                {/*<header>
            <Header />
          </header>*/}

                <div className="left">
                    <h3>poutine places</h3>
                    <PlaceList
                        places={this.state.places}
                        onPlaceSelect={selectedPlace => this.setState({ selectedPlace })}
                        selectedPlace={this.state.selectedPlace}
                    />
                </div>

                <div className="wrapper">
                    <div className="top-right">
                        <PlaceDetailInfo place={this.state.selectedPlace} />
                    </div>

                    <div className="bottom-right">
                        bottom right
                    <PlaceDetailMap place={this.state.selectedPlace} />
                    </div>
                </div>

                <h1>Places</h1>
                {this.state.places.map(place =>
                    <div key={place.id}>{place.name}</div>)
                }

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
