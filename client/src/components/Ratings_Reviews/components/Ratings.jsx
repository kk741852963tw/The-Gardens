import React, {useState} from 'react';

const Ratings_Reviews = function () {

  return (
    <div id="Ratings" class= "basis-1/3 mx-10 border-2 border-solid text-xs">
      <h5 class="text-xs">RATINGS & REVIEWS</h5>
      <h2 class="text-4xl float-left">4</h2>
      <p class="mx-6">*****</p>
      <br/><br/>
      <h6>100% of reviews recommend this product</h6>
      <div>
        <p class="underline">5 stars status bar</p>
        <p class="underline">4 stars status bar</p>
        <p class="underline">3 stars status bar</p>
        <p class="underline">2 stars status bar</p>
        <p class="underline">1 stars status bar</p>
      </div>
      <div>
        Metadata about how the item fit
      </div>
    </div>
  );
}

export default Ratings_Reviews;