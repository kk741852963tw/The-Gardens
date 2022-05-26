import React from 'react';
import moment from 'moment';

const Reviewer = function (props) {
  let isRecommended = <p></p>;
  if (props.data.recommend) {
    isRecommended = <p>✓ I recommend this product</p>;
  }

  return (
      <div className="reviews">
        <div>
        {console.log(props)}
          <div className="float-left">★★★★★</div> <div className="float-right "> {props.data.reviewer_name}, {moment(props.data.date, moment.DATETIME_LOCAL_MS).format('LL')}</div><br/>
          <h3 className="float-none font-bold">{props.data.summary}</h3>
          <h6>...sub title and continuation of title</h6>
        </div>
        <div>
          {props.data.body}
          {isRecommended}
          <div>Helpful? <button className="underline">Yes</button> ({props.data.helpfulness}) | <button className="underline">Report</button></div>
        </div>
    </div>
  );
}

export default Reviewer;