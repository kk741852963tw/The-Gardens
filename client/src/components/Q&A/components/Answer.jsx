import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Answer(props) {
  const [countH, setCountH] = useState(0);
  const [helpfulness, setHelpful] = useState(props.answer.helpfulness);
  const [countR, setCountR] = useState(0);

  const changeTimeFormat = function(timeData) {
    let temp = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timeData).toLocaleDateString([], temp);
  };

  const handleHelpful = function(answer_id) {
    if (countH < 1) {
      axios.put('/answers', { answer_id: answer_id, type: 'helpful' });
      setHelpful(helpfulness + 1);
    }
    setCountH(countH + 1);
  };

  const handleReport = function(answer_id) {
    if (countR < 1) {
      axios.put('/answers', { answer_id: answer_id, type: 'report' });
    }
    setCountR(countR + 1);
  };

  return (
    <>
      <div>A: {props.answer.body}</div>
      by
      {props.answer.answerer_name === "Seller" ? <span className='font-bold'> {props.answer.answerer_name}</span> : <span> {props.answer.answerer_name}</span>}
      <span>, {changeTimeFormat(props.answer.date)}  |  </span>
      <span>Helpful? </span>
      <span className='underline' onClick={() => handleHelpful(props.answer.id)}>Yes </span>
      <span>({helpfulness})  |  </span>
      <span className='underline' onClick={() => handleReport(props.answer.id)}>Report</span>
    </>
  );
}