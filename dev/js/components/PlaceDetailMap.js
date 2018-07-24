import React from 'react';

// global var for map (sorry, no choice)
let mymap = null;

// const PlaceDetailMap = (props) => {

class PlaceDetailMap extends React.Component {


    constructor(props) {
        console.log(props);
        super(props);

        this.markers = [];

        this.state = {
            place: props.place,
        }
    }

    // similar to componentDidMount() but for updates
    // componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("update of state", prevState);

        // console.log("props", prevProps);
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps);
    // }

    prepareMap(place) {
        //
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


    // must place here since it requires #mapid to be rendered already to insert map things
    // only called on first
    componentDidMount() {

        // never called on updates

        console.log("componentDidMount", this.props);

        // prepare map
        mymap = L.map('mapid');

        // setup map after render
        this.prepareMap(this.state.place);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", this.props);
        this.prepareMap(this.props.place);
    }

    render() {
        // console.log("render", this.props.place);

        // TODO: how to invoke componentDidMount with new props

        return (
            <div id="mapid">
            </div>
        )
    }
}




// }


export default PlaceDetailMap;
