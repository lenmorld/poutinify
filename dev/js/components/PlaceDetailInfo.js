import React from 'react';

class PlaceDetailInfo extends React.Component {

    intToList(x) {
      const a = [];
      for(var i = 0; i < x; i++) {
         a.push(i);
      }
      return a;
    }

    render() {

      const { place } = this.props;

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
        <div className="place-detail-info" >
            <h2>{place.name}</h2>
            <h3>{place.location.address1}</h3>
            <div className="place-detail-info-container">
              <img src={place.image_url} alt={place.name} />

              <div className="rating">

                {
                    this.intToList(Math.floor(place.rating)).map(e => {
                      return <span className="fa fa-star checked"></span>;
                    })
                }

                {
                    this.intToList(5 - Math.floor(place.rating)).map(e => {
                      return <span className="fa fa-star"></span>;
                    })
                }

              </div>
            </div>



        </div>
    )

  }
}

export default PlaceDetailInfo;
