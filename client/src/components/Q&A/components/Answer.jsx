import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Answer(props) {
  const [countR, setCountR] = useState(0);

  const changeTimeFormat = function(timeData) {
    let temp = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timeData).toLocaleDateString([], temp);
  };

  const handleHelpful = function(answer_id) {
    axios.put('/answers', { answer_id: answer_id, type: 'helpful' });
    props.addHelpfulA(answer_id, props.answer.helpfulness);
  };

  const handleReport = function(answer_id) {
    axios.put('/answers', { answer_id: answer_id, type: 'report' });
    props.addReportA(answer_id);
  };

  return (
    <>
      <div>A: {props.answer.body}</div>
      by
      {props.answer.answerer_name === "Seller" ? <span className='font-bold'> {props.answer.answerer_name}</span> : <span> {props.answer.answerer_name}</span>}
      <span>, {changeTimeFormat(props.answer.date)}  |  </span>
      <span>Helpful? </span>
      <span className='underline' onClick={() => {!props.addOneTimeA[props.answer.id] ? handleHelpful(props.answer.id) : console.log('bad')}}>Yes </span>
      <span>({props.answer.helpfulness})  |  </span>
      <span className='underline' onClick={() => {!props.reportA[props.answer.id] ? handleReport(props.answer.id) : console.log('bad')}}>{!props.reportA[props.answer.id] ? 'Report' : 'Reported'}</span>
    </>
  );
}