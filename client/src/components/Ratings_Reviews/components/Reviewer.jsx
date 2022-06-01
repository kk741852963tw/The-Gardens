import {useState, useEffect} from 'react';
import moment from 'moment';



const Reviewer = function (props) {

  let isRecommended = <p></p>;
  if (props.data.recommend) {
    isRecommended = <p className="float-none p-3">✓ I recommend this product</p>;
  }

  let mainSummary = '';
  let subSummary = '';
  if (props.data.summary) {
    mainSummary = props.data.summary.split('', 60);
    subSummary = props.data.summary.substring(60);
  }

  let mainBody = '';
  const [subBody, setSubBody] = useState('');
  if (props.data.body) {
    mainBody = props.data.body.split('', 250);
  }

  let showMore = function (event) {

    setSubBody(props.data.body.substring(250));
    event.target.hidden = true;
  }

  const [showPhoto, setShowPhoto] = useState(false);
  let photoClick = function () {

    if (showPhoto) {
      setShowPhoto(false);
    } else {
      setShowPhoto(true);
    }
  }

  useEffect(() => {
    let newWidth = props.data.rating/5 * 100;
    newWidth = newWidth.toString() + '%';
    document.getElementById(props.data.review_id).style.width = newWidth;
    document.getElementById(props.data.review_id).style.color = 'orange';
  });

  // I need to split the summary up into 2 parts the main summary and the sub summary
  // This will allow me to place each one in the correct place.


  return (
    <div className="reviews">
      {console.log(props)}
      <div>
        <div className="float-left">
          <div className="star-ratings text-lg text-gray-400 relative m-0 p-0">
            <div id={props.data.review_id}  className="fill-ratings p-0 absolute z-1 block top-0 left-0 truncate ">
              <span className="inline-block">★★★★★</span>
            </div>
            <div className="empty-ratings p-0 z-0 block">
              <span className="inline-block ">★★★★★</span>
            </div>
          </div>
        </div>
        <div className="float-right "> {props.data.reviewer_name}, {moment(props.data.date, moment.DATETIME_LOCAL_MS).format('LL')}</div><br /><br />
        <h3 className="float-none font-bold">{mainSummary}</h3>
        <h6>...{subSummary}</h6>
      </div>
      <div>
        {mainBody}
        {subBody}
        {
          mainBody.length === 20 &&
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2' onClick={showMore}>Show More</button>
        }
        <div className="mb-10 float-none">
        {props.data.photos.map(urls => (
          <div>
            <img src={urls.url} onClick={photoClick} id='myImg' className='object-cover h-14 w-14 rounded hover:opacity-70 float-left'></img>
            {
              showPhoto &&
              <div id="myModal" className="modal fixed z-3 pt-[100px] top-0 left-0 w-full h-full overflow-auto bg-gray-800">
                <span className="close absolute top-3.5 right-9 text-[#f1f1f1] text-4xl font-bold text-gray-400 hover:no-underline z-4	hover:text-gray-300" onClick={photoClick}>&times;</span>

                <img src={urls.url} className="modal-content m-auto block w-10/12 max-w-3xl" id="img01"></img>
              </div>
            }
          </div>
        ))}
        </div>

        <br/>
        {isRecommended}
        <div>Helpful? <button className="underline">Yes</button> ({props.data.helpfulness}) | <button className="underline">Report</button></div>
      </div>
    </div>
  );
}

/***************/// Star Rating - This will be the rating given to the product by this individual review.. The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.



/***************/// Date of review - The date the review was written should appear in the format “Month DD, YYYY”

/***************/// Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters. On the review tile, this summary will appear in bold font above the full review.

// Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
// The text submitted as part of the review will be between 50 and 1000 characters long.
// Users should be able to submit up to 5 images along with a single review.

/********************Build this functionality out first*********************/
/***************/// By default the first 250 characters of the review should display. If the review is longer than 250 characters, below the body a link reading “Show more” will appear. Upon clicking this link, the review tile should expand and the rest of the review should display.

/***************/// Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution. The only functionality available within this modal should be the ability to close the window.

/****************/// Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review. If the reviewer does not recommend the product, nothing will display here.

/****************/// Reviewer name - The username for the reviewer will appear. Only the username will appear. No email addresses or other personal information will display. However, if the user’s email is associated with a sale in the system then next to the username the text “Verified Purchaser” will appear.

// Response to Review - Our internal sales team has the ability to respond to any reviews written. If the review has a corresponding response, this should appear below the reviewer name. The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.

// Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful. At the bottom of the review the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”. Following “Yes” and “No” will be the count of users that have selected that button. Clicking either link should cast a vote for that selection.
// A user on the site does not need to be logged in to provide feedback on helpfulness.
// A user can provide feedback on any review. However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.



export default Reviewer;
