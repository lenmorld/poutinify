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

// AJAX
// import axios from 'axios';
const YELP_API_KEY = "X08V7dIeiMyvpuAsQBmR-KVVt5u7mFfZafVNSUCY5a6JrqdVY5qT8tULeuN541vt2eLfg4pPdbT4nbRkKUP_d_wGRqYHymzcwdpN_zHkoYBq2DMpB8vjetidxBuNWXYx";

class App extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     // hard-coded for now
        //     places: [
        //         {
        //             id: 0,
        //             name: "La Banquise",
        //             address: "Parc La Fontaine",
        //             latLng: [45.5253558,-73.5769621]
        //         }, {
        //             id: 1,
        //             name: "Poutineville",
        //             address: "Rue Ontario",
        //             latLng: [45.5253743,-73.583555]
        //         }
        //     ],
        //   selectedPlace: {
        //       id: 0,
        //       name: "La Banquise",
        //       address: "Parc La Fontaine",
        //       latLng: [45.5253558,-73.5769621]
        //   },
        //     // selectedPlace: null
        // };

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
                console.log("(backend->) places: ", {places});
                // places: { business: [{id, alias, name, etc}, {}] }
                this.setState(
                    {
                        places: places,
                        selectedPlace: places[0]
                    }
                );
                // select first one as default
            } );

        // fetch places with an AJAX call using axios
        // ---> CORS
        // axios.get(
        //     'https://api.yelp.com/v3/businesses/search?location=Montreal&term=poutine',
        //     {
        //         headers: {'Authorization': "Bearer " + YELP_API_KEY},
        //         crossDomain: true
        //     })
        //     .then(res => {
        //        const businesses = res.businesses;
        //
        //        console.log("businesses", businesses);
        //     }, err => {
        //         console.log("error", err);
        //     });
    }

  render() {
    return(
        <div>
          {/*<header>
            <Header />
          </header>*/}

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
                    <PlaceDetailMap place={this.state.selectedPlace}/>
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
