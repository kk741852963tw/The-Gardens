import React, {useState, useEffect} from 'react';
import Reviewer from './Reviewer.jsx';

const Ratings_Reviews = function (props) {

  let initialReviews = [];
  let lastIndex = 2;

  const [revs, setRevs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(props.reviewData.results) {
      initialReviews.push(props.reviewData.results[lastIndex]);
    }
  });

  const addMore = function (event) {
    setRevs([...revs, props.reviewData.results[index]]);
    setIndex(index + 1);
  }

  if (props.reviewData.results) {

    initialReviews.push(props.reviewData.results[0]);
    initialReviews.push(props.reviewData.results[1]);

    return (
      <div id="Reviews" className= "text-xs basis-2/3 content-center  border-2 border-solid mx-8">
        <div className="font-bold">
          {props.reviewData.count} reviews, sorted by <select type="dropdown" className="font-bold underline decoration-9">
            <option value="sortOption">Relevance</option>
            <option value="sortOption">Newest</option>
            <option value="sortOption">Oldest</option>
            <option value="sortOption">Most Helpful</option>
            <option value="sortOption">Rating</option>
          </select>
        </div>
        {initialReviews.map(result => (
          <Reviewer data={result}/>
        ))}
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