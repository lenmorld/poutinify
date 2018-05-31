import React from 'react';

// global var for map (sorry, no choice)
let mymap = null;

// const PlaceDetailMap = (props) => {

class PlaceDetailMap extends React.Component {


    constructor(props) {
        console.log(props);
        super(props);

        this.state = {
            place: props.place,
        }
    }

    // similar to componentDidMount() but for updates
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("update of state", prevState);

        // console.log("props", prevProps);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps);
    // }

    prepareMap(place) {

        const map_type = 'mapbox.streets';  // 'mapbox.satellite'
        const mapbox_access_token = "pk.eyJ1IjoibGVubW9ybGQiLCJhIjoiY2ozcDVkMG4xMDBwYTJ3bjQ3djFvcXVhcSJ9.x7QMt0rLTQfX38XfTdxRTA";

        // const mymap = L.map('mapid');

        mymap.setView(place.latLng, 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: map_type,
            accessToken: mapbox_access_token
        }).addTo(mymap);

        const marker = L.marker(place.latLng).addTo(mymap);
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