import React from 'react';

const PlaceDetailInfo = ({place}) => {

    if (!place) {
        return (<div>Preparing poutine =P...</div>);
    }

    // extract place details here and display

    // TODO: image, comments, etc, other place details

    if (!place.location) {
        return (
            <h1>Loading...</h1>
        )
    }

    return(
        <div className="place-detail-info">
            <h2>{place.name}</h2>
            <h3>{place.location.address1}</h3>
        </div>
    )
}

export default PlaceDetailInfo;