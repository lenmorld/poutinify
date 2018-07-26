import React from 'react';

import PlaceListItem from './PlaceListItem';

const PlaceList = (props) => {

    const { places } = props;

    const placeListItems = places.map((place) => {
       return (
           <PlaceListItem
                place={place}
                onPlaceSelect={props.onPlaceSelect}
                key={place.id}
                isSelected={props.selectedPlace && (props.selectedPlace.id === place.id)}
           />
       )
    });

    return (
        <div>
            <ul>
                {placeListItems}
            </ul>
        </div>
    )

}


export default PlaceList;
