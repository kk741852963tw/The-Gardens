import React from 'react';

const Ratings_Reviews = function () {
  return (
    <div id="Reviews" class= "text-xs basis-2/3 content-center  border-2 border-solid">
      <div class="font-bold">
        230 reviews, sorted by <select type="dropdown" class="font-bold underline decoration-9">
          <option value="sortOption">Sort Option</option>
          <option value="sortOption">Sort Option</option>
          <option value="sortOption">Sort Option</option>
          <option value="sortOption">Sort Option</option>
          <option value="sortOption">Sort Option</option>
        </select>
      </div>
      <div>
        <div class="float-left">*****</div> <div class="float-right ">verified username, January 1, 2022</div><br/>
        <h3 class="float-none font-bold">Review List title...</h3>
        <h6>...sub title and continuation of title</h6>
      </div>
      <div>
        body of the review
        <div>Helpful? <button class="underline">Yes</button> (3) | <button class="underline">Report</button></div>
      </div>
      <div>
        <button type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2">MORE REVIEWS</button>
        <button type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2">ADD A REVIEW +</button>
      </div>

    </div>
  );
}

export default Ratings_Reviews;