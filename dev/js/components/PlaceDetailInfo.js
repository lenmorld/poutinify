import React from 'react';

import Reviews from './Reviews';
import Rating from './Rating'

import storage from '../helpers/storage'
import data_fetch from '../helpers/data_fetch'

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
    if (this.props.place.id && this.props.place.id !== prevProps.place.id) {
      // get place details, incl:
      /*
      3 top photos
      distance
      is_closed
      phone
      */

      // console.log("fetch: ", `/yelp/places/${this.props.place.id}`);
      const placeId = this.props.place.id;
      const savedPlaceDetails = storage.get(`place_${placeId}`);

      if (savedPlaceDetails) {
        console.log("### 🤩 cached place details ###")
        this.setState(
          {
            placeDetails: savedPlaceDetails,
          }
        );
      } else {
        data_fetch.get(`/yelp/places/${placeId}`)
          .then(placeDetails => {
            // console.log("(backend->) placeDetails: ", {placeDetails});

            storage.set(`place_${placeId}`, placeDetails)

            this.setState(
              {
                placeDetails: placeDetails,
              }
            );
          });
      }

      const savedPlaceReviews = storage.get(`reviews_${placeId}`);

      if (savedPlaceReviews) {
        console.log("### 🤩 cached reviews ###")
        this.setState(
          {
            reviews: savedPlaceReviews,
          }
        );
      } else {
        data_fetch.get(`/yelp/reviews/${placeId}`)
          .then(res => res.json())
          .then(reviews => {

            storage.set(`reviews_${placeId}`, reviews)

            this.setState(
              {
                reviews: reviews,
              }
            );
          });
      }
    }
  }

  // fetchBusinessDetails(id) {
  //   '/places/:id'
  // }

  intToList(x) {
    const a = [];
    for (var i = 0; i < x; i++) {
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

    return (
      <div className="place-detail-info" >
        <h2>{place.name}</h2>
        <div className="place-location">{place.location.address1}</div>

        <div className="place-rating">
          <div>
            <Rating rating={place.rating} size="large" />
          </div>
          <div className="review-count">{place.review_count} reviews</div>
          <div className="yelp-business-link">
            <a href={place.url} target="_blank" rel="noopener noreferrer">
              <img src="./images/Yelp_trademark_RGB-crop.png" alt="Yelp link to business" />
            </a>
          </div>
        </div>

        <div className="detail-body">
          <div className="place-image">
            <img
              src={place.image_url}
              alt={place.name} />
          </div>

          <Reviews reviews={this.state.reviews} />
        </div>
      </div >
    )
  }
}

export default PlaceDetailInfo;
