import React from 'react';

const PlaceListItem = (props) => {

    const place  = props.place;

    return (
        <div className="place-list-item">
            <h2>{place.name}</h2>
            <h3>{place.address}</h3>
        </div>

    );
}


export default PlaceListItem;