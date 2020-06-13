// like Layout that contains all of the other components
import React from 'react';
import '../../scss/style.scss';    // scss can be used by all

import storage from '../helpers/storage'
import data_fetch from '../helpers/data_fetch'

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

    updatePlaces(places) {
        console.log("### 🤩 cached places ###")
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
    }

    componentDidMount() {
        const savedPlaces = storage.get('places')

        if (savedPlaces) {
            this.updatePlaces(savedPlaces)
        } else {
            data_fetch.get('/yelp/places')
                .then(places => {
                    storage.set('places', places)
                    this.updatePlaces(places)
                });
        }
    }

    render() {
        return (
            <main>
                <div className="left">
                    {/* <h3>poutine places</h3> */}
                    <PlaceList
                        places={this.state.places}
                        onPlaceSelect={selectedPlace => this.setState({ selectedPlace })}
                        selectedPlace={this.state.selectedPlace}
                    />
                </div>

                <div className="right-wrapper">
                    <div className="top-right">
                        <PlaceDetailInfo place={this.state.selectedPlace} />
                    </div>

                    <div className="bottom-right">
                        <div className="location-title">Where is it?</div>
                        <PlaceDetailMap place={this.state.selectedPlace} />
                    </div>
                </div>

                {/* <h1>Places</h1>
                {this.state.places.map(place =>
                    <div key={place.id}>{place.name}</div>)
                } */}
            </main>
        );
    }
}


export default App;
