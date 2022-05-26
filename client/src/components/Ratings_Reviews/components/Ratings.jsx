import React, {useState} from 'react';
import Characteristics from './Characteristics.jsx';

const Ratings_Reviews = function (props) {

  let reviewAvg = 0;
  let recommended = 0;
  let characterTraits = [];

  if (props.ratingsData.ratings) {
    let totalVotes = 0;
    let weightedVotes = 0;

    for (let i = 1; i < 6; i++) {
      totalVotes += parseInt(props.ratingsData.ratings[i]);
      weightedVotes += i * parseInt(props.ratingsData.ratings[i]);
    }

    reviewAvg = Math.round(weightedVotes/totalVotes * 10) / 10;
  }

  if (props.ratingsData.recommended) {

    recommended = parseInt(props.ratingsData.recommended.false) + parseInt(props.ratingsData.recommended.true);

    recommended = Math.floor(parseInt(props.ratingsData.recommended.true)/recommended * 100);
  }

  if (props.ratingsData.characteristics) {
    characterTraits = Object.keys(props.ratingsData.characteristics);
  }

  return (
    <div id="Ratings" className= "basis-1/3 mx-8 border-2 border-solid text-xs">
      <h5 className="text-xs">RATINGS & REVIEWS</h5>
      <h2 className="text-4xl float-left">{reviewAvg}</h2>
      <p className="mx-8">★★★★★</p>
      <br/><br/>
      <h6>{recommended}% of reviews recommend this product</h6>
      <div className="mb-9">
        <p className="underline mb-3">5 stars status bar</p>
        <p className="underline mb-3">4 stars status bar</p>
        <p className="underline mb-3">3 stars status bar</p>
        <p className="underline mb-3">2 stars status bar</p>
        <p className="underline mb-3">1 stars status bar</p>
      </div>
      <div>
      {characterTraits.map((trait => (
        <Characteristics trait={props.ratingsData.characteristics[trait]} traitName={trait}/>
      )))}
      </div>
    </div>
  );
}

export default Ratings_Reviews;