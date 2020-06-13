import React from 'react';

import User from './User'; ``
import Rating from "./Rating"

const Review = ({ review }) => {
  debugger;
  return (
    <div className="review">
      <div className="left-review">
        <User user={review.user} />
        <Rating rating={review.rating} size="small" />
      </div>
      <div className="right-review">
        <div className="text">{review.text}</div>
        <div className="read-more">
          <a href={review.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Review;
