import {useState, useEffect} from 'react';
import Reviews from './components/Reviews.jsx';
import Ratings from './components/Ratings.jsx';
import axios from 'axios';

    // TODO:
    // Fix the star buttons to accept rate value when clicked

    // TODO:
    // Finish the add review button to show the review that is created

    // TODO:
    // Fix the recommend button and the report button



const Ratings_Reviews = function () {

  const [reviews, setReviews] = useState('reviews initialized');
  const [ratings, setRatings] = useState('ratings initialized');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(100);
  const [product_id, setProduct_id] = useState(37311);

  const reviewOption = {
    url: '/reviews',
    method: 'get',
    params: {
      product_id,
      page,
      count
    }
  };

  const ratingOption = {
    url: '/reviews/meta',
    method: 'get'
  };

  useEffect (() => {
    // console.log(reviewOption);
    axios(reviewOption)
      .then((result) => {
        // console.log('Result data', result.data);
        setReviews(result.data);
        setPage(page + 1);
      })
      .catch (err => console.log('get data from reviews fail', err));
  }, []);

  useEffect (() => {
    axios(ratingOption)
      .then((result) => {
        setRatings(result.data);
      })
      .catch (err => console.log('get data from reviews meta fail', err));
  }, []);


  return (
    <div id="RatingsReviewsContainer " className= "flex flex-row justify-center mb-5">
      <Ratings ratingsData={ratings}/>
      <Reviews reviewData={reviews} page={page} setPage={setPage} setReviews={setReviews} reviewOption={reviewOption}/>
    </div>
  );
}

export default Ratings_Reviews;