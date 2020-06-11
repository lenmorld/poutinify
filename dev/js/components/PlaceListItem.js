import React from 'react';

const PlaceListItem = ({ place, onPlaceSelect, isSelected }) => {

    let classNames = `place-list-item ${isSelected ? "selected" : ""}`;

    return (
        <li key={place.id} onClick={() => onPlaceSelect(place)}>
            <div className={classNames}>
                <div className="place-name">{place.name}</div>
                {/* <p>{place.address}</p> */}
            </div>
        </li>
    );
}

export default PlaceListItem;
