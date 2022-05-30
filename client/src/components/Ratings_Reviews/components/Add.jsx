import React from 'react';

// {
//   "product_id":37314,
//   "rating": 3,
//   "summary": "ReviewTitleFromReact",
//   "body": "REACT react Attack react REAAAAAAAACCCCCCCTTTTTT",
//   "recommend": false,
//   "name": "HakTest",
//   "email": "hak@test.com",
//   "photos": [],
//   "characteristics": {
//       "125040": 5
//   }
// }

/**
 * Write a function to pull the current characteristics and show them as options to rate
 */

const Add = function (props) {

  return (
    <div>
      <h4>Add a review</h4>
      <input placeholder="Name" type="text"></input>
      <input placeholder="Email" type="text"></input>
      <p>
        Rate this product: ★★★★★
      </p>
      <input placeholder="Write your review!" type="text"></input>
      <p>
        Do you recommend this product? <button className="underline">Yes</button> or <button className="underline"> No</button>
      </p>

    </div>
  );
}

export default Add;