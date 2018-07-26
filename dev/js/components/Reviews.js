import React from 'react';

import Review from './Review';

class Reviews extends React.Component {
  render() {

    const { reviews } = this.props;

    if (!reviews) {
      return (
        <div>Loading reviews...</div>
      );
    }

    return (
      <div className="reviews">
            <Review review={reviews[0]}
                    key={reviews[0].id}/>
      </div>
    );

    // DISPLAY ALL 3 reviews
    // return (
    //   <div className="reviews">
    //     {reviews.map(review => (
    //         <Review review={review}
    //                 key={review.id}/>
    //     ) )}
    //   </div>
    // );
  }
}

export default Reviews;
