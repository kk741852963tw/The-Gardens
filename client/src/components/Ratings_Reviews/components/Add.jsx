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


// TODO: Find all of the values required for the form
// TODO: Update the stars to be grey and click able
// TODO: Set a width for the reviews


// TODO: Read through the business requirements for the form once more.

const Add = function ({clearForm, character}) {

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


// Create a modal window overlaying the product page. The modal should be titled "Write Your Review" with a subtitle "About the [Product Name Here]"

// Asterisk next to any mandatory fields

/*
	1 star - “Poor”
	2 stars - “Fair”
	3 stars - “Average”
	4 stars - “Good”
	5 stars - “Great”
 */

// Selectable star rating, after selecting a star rating the stars to the left of it will be colored in
// After selecting a title should popup to the right of the stars

{/* <div className="star-ratings text-lg text-gray-400 relative m-0 p-0">
  <div id={props.data.review_id}  className="fill-ratings p-0 absolute z-1 block top-0 left-0 truncate ">
    <span className="inline-block">★★★★★</span>
  </div>
  <div className="empty-ratings p-0 z-0 block">
    <span className="inline-block ">★★★★★</span>
  </div>
</div>

// Have the option for "Do you recommend this product?"

// Radio button of yes or no.

<div>
  <label>
    Do you recommend this product?
  </label>
  <input type="radio">
    <option>
      Yes
    </option>
    <option>
      No
    </option>
  </input>
</div>

// Characteristics will have a row of 5 options for each character. 1 is the lowest and 5 is the highest.
// This has a table for reference
// This will need data
// isSize, isComfort, isFit, isLength, isQuality, isWidth

// Enter summary max 60 characters, have placeholder “Example: Best purchase ever!”

<label>Summary</label>
<input type="text" id="summary" name="summary" placeholder="Example: Best purchase ever!"></input>

// Enter body, “Minimum required characters left: [##]” minimum of 50, with a character count, after 50 replace with "Minimum reached"
// Maximum is 1000 characters
<label>Body</label>
<input type="text" id=""></input>

// Upload button for images with upto 5 images
// A thumbnail showing the uploaded image
// The button will disappear after the 5 image

// Add the nickname
// Max text of 60 char */}
// “Example: jackson11!” placeholder
// Below this field, the text “For privacy reasons, do not use your full name or email address”

// Add the email
// Max text of 60 char
// Placeholder “Example: jackson11@email.com”
// Below this field, the text “For authentication reasons, you will not be emailed”

// Submit button
// Checks all fields
// If field is invalid
// The submission should be prevented, and a warning message will appear.
// This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The review body is less than 50 characters
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
