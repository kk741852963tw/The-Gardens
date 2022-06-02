import React, {useState, useEffect} from 'react';
import Reviewer from './Reviewer.jsx';
import axios from 'axios';

const Ratings_Reviews = function (props) {

  let initialReviews = [];
  let sortArr = [];

  const [hasLoaded, setHasLoaded] = useState(true);
  const [showInt, setShowInt] = useState(true);
  const [revs, setRevs] = useState([
    {
        body: '',
        data: '2022-01-01T00:00:00.000Z',
        helpfulness: 0,
        photos: [],
        rating: 0,
        recommend: false,
        response: null,
        review_id: 0,
        reviewer_name: '',
        summary: 'There are no reviews!'
      }
  ]);
  const [index, setIndex] = useState(2);

  const addMore = function (event) {

    if (props.reviewData.results[index] && props.reviewData.results[index + 1]) {

      if (showInt) {
        setRevs([...initialReviews, props.reviewData.results[index], props.reviewData.results[index + 1]]);
        setShowInt(false);
      } else {

        setRevs([...revs, props.reviewData.results[index], props.reviewData.results[index + 1]]);
        setIndex(index + 2);
      }

    } else {

      if (props.reviewData.results[index]) {

        setRevs([...revs, props.reviewData.results[index]]);
      }


      axios(props.reviewOption)
      .then((result) => {

        props.setPage(props.page + 1);
        if (result.data.results.length > 0) {
          props.setReviews(result.data);
          setIndex(0);
        } else {
          document.getElementById('moreReviewsBtn').hidden = true;
        }
      })
      .catch (err => console.log('get data from reviews fail', err));
    }
    // Grab more data when you reach the end of the index value
    // Change only the page number.
  }

  const sortDate = function(event) {
    let sortArr = revs;
    console.log('Should be revs', revs);
    console.log('Should be sortArr', sortArr);

    if (event.target.value === 'Newest') {

      sortArr.sort((data1, data2) => {

        if (data1.date < data2.date) {
          return 1;
        } else if (data1.date > data2.date) {
          return - 1;
        }
        return 0;
      });
    } else if (event.target.value === 'Helpful') {
      sortArr.sort((data1, data2) => {
        if (data1.helpfulness < data2.helpfulness) {
          return 1;
        } else if (data1.helpfulness > data2.helpfulness) {
          return - 1;
        }

        return 0;
      });
    } else {
      sortArr.sort((data1, data2) => {
        if (data1.helpfulness > data2.helpfulness) {
          return -1;
        } else if (data1.helpfulness < data2.helpfulness) {
          return 1;
        } else {
          if (data1.date < data2.date) {
            return 1;
          } else if (data1.date > data2.date) {
            return - 1;
          }

          return 0;
        }
      });
    }


    console.log('sortArr', sortArr);


    setRevs([...sortArr]);
  }

  useEffect(() => {
    // setRevs([props.reviewData.results[0], props.reviewData.results[0]]);
  }, []);

  if (props.reviewData.results && props.page) {

    if (props.reviewData.results.length >= 2 && props.page === 2 ) {

      initialReviews.push(props.reviewData.results[0]);
      initialReviews.push(props.reviewData.results[1]);
    } else if (props.reviewData.results.length >= 1 && props.page === 2) {

      initialReviews.push(props.reviewData.results[0]);
    } else if (props.reviewData.results.length < 1) {

      initialReviews.push({
        body: '',
        data: '2022-01-01T00:00:00.000Z',
        helpfulness: 0,
        photos: [],
        rating: 0,
        recommend: false,
        response: null,
        review_id: 0,
        reviewer_name: '',
        summary: 'There are no reviews!'
      });
    }



    return (
      <div id="Reviews" className= "text-xs basis-2/3 content-center  border-2 border-solid mx-8">
        <div className="font-bold">
          {props.reviewData.results.length} reviews, sorted by <select onChange={sortDate} type="dropdown" className="font-bold underline decoration-9">
            <option value="Relevant">Relevant</option>
            <option value="Newest">Newest</option>
            <option value="Helpful">Helpful</option>
          </select>
        </div>
        <div className="overflow-y-auto max-h-96">
          {showInt && initialReviews.map(result => (
            <Reviewer data={result}/>
          ))}
          {revs.map(result => (

            <Reviewer data={result}/>
          ))}
        </div>
        <div>
          {
            props.reviewData.results.length > 2 &&
          <button type="button" id="moreReviewsBtn" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2" onClick={addMore}>MORE REVIEWS</button>
          }
          <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2">ADD A REVIEW +</button>
        </div>

      </div>
    );
  }
}

export default Ratings_Reviews;

// Helpful - This sort order will prioritize reviews that have been found helpful. The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.


// Newest - This is a straightforward sort based on the date the review was submitted. The most recent reviews should appear first.


// Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received. This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful. Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.

// check the date and helpfulness values
// sort by helpfulness


// Write a sorting function or see if there is one already created

// Create a btn that is connected to the option selection
