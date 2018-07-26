import React from 'react';

import Reviews from './Reviews';

class PlaceDetailInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      placeDetails: null,
      reviews: null,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // compare id is needed so it wouldn't run every second
    if(this.props.place.id && this.props.place.id !== prevProps.place.id) {
      // get place details, incl:
      /*
      3 top photos
      distance
      is_closed
      phone
      */

      // console.log("fetch: ", `/yelp/places/${this.props.place.id}`);
      fetch(`/yelp/places/${this.props.place.id}`)
      .then(res => res.json())
      .then(placeDetails => {
        // debugger;
        // console.log("(backend->) placeDetails: ", {placeDetails});
        this.setState(
          {
            placeDetails: placeDetails,
          }
        );
      } );

      fetch(`/yelp/reviews/${this.props.place.id}`)
      .then(res => res.json())
      .then(reviews => {
        this.setState(
          {
            reviews: reviews,
          }
        );
      } );
    }
  }

  // fetchBusinessDetails(id) {
  //   '/places/:id'
  // }

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

        <div className="place-rating">
          {
            this.intToList(Math.floor(place.rating)).map((e,i) => {
              return <span
                key={`${place.id}_starred_${i}`}
                className="fa fa-star checked"></span>;
              })
            }
            {
              this.intToList(5 - Math.floor(place.rating)).map((e,i) => {
                return <span
                  key={`${place.id}_unstarred_${i}`}
                  className="fa fa-star"></span>;
                })
              }
            </div>

            <div className="place-detail-info-container">
              <img
                className="place-image"
                src={place.image_url}
                alt={place.name} />

              <Reviews reviews={this.state.reviews} />
            </div>



          </div>
        )
      }
    }

    export default PlaceDetailInfo;
