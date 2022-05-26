import React, {useState, useEffect} from 'react';
import Reviews from './components/Reviews.jsx';
import Ratings from './components/Ratings.jsx';
import axios from 'axios';

const Ratings_Reviews = function () {

  const [reviews, setReviews] = useState('reviews initialized');
  const [ratings, setRatings] = useState('ratings initialized');

  const reviewOption = {
    url: '/reviews',
    method: 'get'
  };

  const ratingOption = {
    url: '/reviews/meta',
    method: 'get'
  };

  useEffect (() => {
    axios(reviewOption)
      .then((result) => {
        setReviews(result.data);
      })
      .catch (err => console.log('get data from questions fail', err));
  }, []);

  useEffect (() => {
    axios(ratingOption)
      .then((result) => {
        setRatings(result.data);
      })
      .catch (err => console.log('get data from questions fail', err));
  }, []);


  return (
    <div id="RatingsReviewsContainer " className= "flex flex-row justify-center">
      <Ratings ratingsData={ratings}/>
      <Reviews reviewData={reviews}/>
    </div>
  );
}

export default Ratings_Reviews;