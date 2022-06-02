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


/**
 * At the bottom of the Ratings & Reviews module, a button will appear allowing users to create new reviews for the product. This button should always be available on any product page.
Upon clicking the button a modal window should open, overlaying the product page. The modal should be titled “Write Your Review” and subtitled “About the [Product Name Here]”. The product name should be inserted into the subtitle.
The following inputs should appear on the review form. Each should be labeled as titled below. Those indicated as mandatory should have an asterisk next to the title.

 */
// Create a modal window overlaying the product page. The modal should be titled "Write Your Review" with a subtitle "About the [Product Name Here]"

// Asterisk next to any mandatory fields

/**
 * Overall rating (mandatory)
The overall rating will be selected via five selectable star icons. Initially, the stars will all be outlines, and none will be solid. Clicking on a star will fill that star and all of the stars to the left of it with solid color. Customers will not be able to select fractions of a star. After selecting a star, text will appear to the right of the stars explaining the meaning of the selection. The text will vary as follows:
	1 star - “Poor”
	2 stars - “Fair”
	3 stars - “Average”
	4 stars - “Good”
	5 stars - “Great”

 */

// Selectable star rating, after selecting a star rating the stars to the left of it will be colored in
// After selecting a title should popup to the right of the stars

  /**
   *  Do you recommend this product? (mandatory)
Recommendation will be captured via a radio button array of “Yes” and “No”. Default radio button behavior will apply.
1.2.6.3. Characteristics (mandatory)
Any characteristics designated as applicable for the current product will appear in this area. For these inputs, the title will be the characteristic title.
This input will appear as an array of five radio buttons. The meaning of the lowest (1) and highest (5) selection will appear below the array of radio buttons.
By default, no button will be selected.

   */

// Have the option for "Do you recommend this product?"

// Radio button of yes or no.

// Characteristics will have a row of 5 options for each character. 1 is the lowest and 5 is the highest.
// This has a table for reference

/**
 * 1.2.6.4. Review summary
A text input allowing up to 60 characters.
Placeholder text should read: “Example: Best purchase ever!”

// Enter summary max 60 characters, have placeholder text.

1.2.6.5. Review body (mandatory)
A text input allowing up to 1000 characters.
Placeholder text should read: “Why did you like the product or not?”.
The review must be over 50 characters long in order to be submitted. If the user tries to submit a review shorter than 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field.
Below the input for the Review body, a counter should appear. This counter should let the user know how many characters are needed to reach the 50 character minimum. It should appear in the format “Minimum required characters left: [##]”. As the user types, the count of characters should update. After the user reaches 50 characters, the counter should be replaced by a message stating “Minimum reached”.

// Enter body, “Minimum required characters left: [##]” minimum of 50, with a character count, after 50 replace with "Minimum reached"
// Maximum is 1000 characters

1.2.6.6. Upload your photos
A button will appear allowing users to upload their photos to the form.
Clicking the button should open a separate window where the photo to be can be selected.
After the first image is uploaded, a thumbnail showing the image should appear. A user should be able to add up to five images before the button to add disappears, preventing further additions.

// Upload button for images with upto 5 images
// A thumbnail showing the uploaded image
// The button will disappear after the 5 image

1.2.6.7. What is your nickname (mandatory)
A text input allowing up to 60 characters for the user’s display name.
Placeholder text should read: “Example: jackson11!”.
Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.

// Add the nickname
// Max text of 60 char
// “Example: jackson11!” placeholder
// Below this field, the text “For privacy reasons, do not use your full name or email address”

1.2.6.8. Your email (mandatory)
A text input allowing up to 60 characters.
Placeholder text should read: “Example: jackson11@email.com”.
Below this field, the text “For authentication reasons, you will not be emailed” will appear.

// Add the email
// Max text of 60 char
// Placeholder “Example: jackson11@email.com”
// Below this field, the text “For authentication reasons, you will not be emailed”

1.2.6.9. Submit review (button)
A button by which the review can be submitted.
Upon selecting this button the form’s inputs should be validated. If there are any invalid entries, the submission should be prevented, and a warning message will appear. This message should be titled “You must enter the following:”
This error will occur if:
Any mandatory fields are blank
The review body is less than 50 characters
The email address provided is not in correct email format
The images selected are invalid or unable to be uploaded.

 */

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
