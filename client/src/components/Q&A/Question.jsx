import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

export default function Question(props) {
  const [count, setCount] = useState(2);
  const [countH, setCountH] = useState(0);
  const [helpfulness, setHelpful] = useState(props.question.question_helpfulness);

  const moreAnswers = function() {
    setCount(count + 2);
  };

  const handleHelpful = function(question_id) {
    if (countH < 1) {
      axios.put('/questions', { question_id: question_id, type: 'helpful' });
      setHelpful(helpfulness + 1);
    }
    setCountH(countH + 1);
  };

  return (
    <>
      <div className="flex">
        <div>Q: {props.question.question_body}</div>
        <div>Helpful?
          <span className='underline' onClick={() => handleHelpful(props.question.question_id)}>Yes </span>
          <span>({helpfulness})  |  </span>
          {/* remember write */}
          <span>Add Answer </span>
        </div>
      </div>
      {Object.keys(props.question.answers).slice(0, count).map(function(key, index) {
        return <Answer answer={props.question.answers[key]}></Answer>
      })}
      {Object.keys(props.question.answers).length > count ?
      <div>
        <button onClick={moreAnswers}>LOAD MORE ANSWERS</button>
      </div> : <></>}
    </>
  );
}