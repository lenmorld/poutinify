import React from 'react';

// global var for map - since 3rd party Mapbox Leaflet
let mymap = null;

class PlaceDetailMap extends React.Component {

    constructor(props) {
        super(props);

        this.markers = [];
        this.state = {
            place: props.place,
        }
    }

    prepareMap(place) {
        if (place.coordinates) {
            console.log(place.coordinates);
            // console.log("MAP place:", place);

            const latLng = [place.coordinates.latitude, place.coordinates.longitude];

            const map_type = 'mapbox.dark';  // ''mapbox.streets', mapbox.satellite'
            const mapbox_access_token = "pk.eyJ1IjoibGVubW9ybGQiLCJhIjoiY2ozcDVkMG4xMDBwYTJ3bjQ3djFvcXVhcSJ9.x7QMt0rLTQfX38XfTdxRTA";

            // const mymap = L.map('mapid');
            mymap.setView(latLng, 13);

            const map_style = 'https://api.mapbox.com/styles/v1/lenmorld/cji7qigek10y52ro19byoibog/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVubW9ybGQiLCJhIjoiY2ozcDVkMG4xMDBwYTJ3bjQ3djFvcXVhcSJ9.x7QMt0rLTQfX38XfTdxRTA';
            const old_map_style = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';

            L.tileLayer(map_style, {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: map_type,
                accessToken: mapbox_access_token
            }).addTo(mymap);

            // const marker = L.marker(place.latLng).addTo(mymap);

            // yelp business coords objects
            const marker = L.marker(latLng);
            this.markers.push(marker);

            // remove other markers, place the one currently selected
            this.markers.forEach(m => {
                if (m._latlng.lat === place.coordinates.latitude)
                    m.addTo(mymap);
                else
                    m.remove();
            });
        }
    }


    /**
      only called on first mount, not on updates
      must place here since it requires #mapid to be rendered already to insert map things
    */

    componentDidMount() {
        console.log("componentDidMount", this.props);

        // prepare map
        mymap = L.map('mapid');

        // setup map after render
        this.prepareMap(this.state.place);
    }

    /* called on every update
      i.e. when clicking a PlaceListItem -> update map
    */
    componentDidUpdate(prevProps) {
        // only do update when not similar to current place
        if (prevProps.place.id !== this.props.place.id) {
            console.log(">>> componentDidUpdate", this.props.place);
            this.prepareMap(this.props.place);
        }
    }

    render() {
        return (
            <div id="mapid" style={{ height: '500px' }}>
            </div>
        )
    }
}

export default PlaceDetailMap;
