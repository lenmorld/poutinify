import React from 'react';

import User from './User';``

const Review = (props) => {

  const { review } = props;

  return (
    <div>
      <div className="review">
        <div className="text">
          {review.text}
        </div>

        <User user={review.user}/>
      </div>

      <div className="review-extras">
        <div className="user-rating">
          User rating: {`${review.rating}/5`}
        </div>

        <div className="time-created">
          {review.time_created}
        </div>
      </div>
    </div>
  );
}

export default Review;
