import React from 'react';

import PlaceListItem from './PlaceListItem';

const PlaceList = (props) => {

    // const placeListItems = props.

    // hard-coded for now
    const places = [
        {
            name: "La Banquise",
            address: "Parc La Fontaine"
        }, {
            name: "Poutineville",
            address: "Rue Ontario"
        }
    ];


    // replace with props.places when AJAX ready
    const placeListItems = places.map((place) => {
       return (
           <PlaceListItem
                place={place}
           />
       )
    });


    return (
        <div>
            {placeListItems}
        </div>
    )

}


export default PlaceList;