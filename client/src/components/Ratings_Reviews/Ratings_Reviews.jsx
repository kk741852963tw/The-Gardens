import React from 'react';
import Reviews from './components/Reviews.jsx';
import Ratings from './components/Ratings.jsx';

const Ratings_Reviews = function () {
  return (
    <div id="RatingsReviewsContainer" class= "flex">
      <Ratings/>
      <Reviews/>
    </div>
  );
}

export default Ratings_Reviews;