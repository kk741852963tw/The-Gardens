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

export default Reviewer;
