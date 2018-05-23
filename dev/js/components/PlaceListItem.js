import React from 'react';

const PlaceListItem = ({place, onPlaceSelect, isSelected}) => {

    const selectedClassName = isSelected ? "place-list-item-selected" : "";
    let classNames = `${selectedClassName} place-list-item`;

    return (
        <li onClick={() => onPlaceSelect(place)}>
            <div className={classNames}>
                <h2>{place.name}</h2>
                <p>{place.address}</p>
            </div>
        </li>

    );
}

export default PlaceListItem;