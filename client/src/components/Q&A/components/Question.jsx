import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';

export default function Question(props) {
  const [count, setCount] = useState(2);
  const [answers, setAnswer] = useState({});
  const [statusA, setStatus] = useState(false);

  useEffect(() => {
    const temp = sortAnswer(props.question);
    setAnswer(temp);
  }, [props]);

  const sortAnswer = function(question) {
    const tempArray = Object.values(question.answers);
    tempArray.sort((a, b) => { return b.helpfulness - a.helpfulness });
    tempArray.sort((a, b) => {
      if (a.answerer_name === "Seller") {
        return 1;
      } else if (b.answerer_name === "Seller") {
        return -1;
      } else return b.helpfulness - a.helpfulness;
    });
    const tempObject = {};
    for (let i = 0; i < tempArray.length; i++) {
      tempObject[tempArray[i].id] = tempArray[i];
    }
    question.answers = tempObject;
    return question;
  };

  const moreAnswers = function() {
    setCount(count + 2);
  };

  const handleHelpful = function(question_id) {
    axios.put('/questions', { question_id: question_id, type: 'helpful' });
    props.addHelpful();
  };

  const handleAddA = function() {
    if (!statusA) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  return (
    <>
      <div className="flex">
        <div>Q: {props.question.question_body}</div>
        <div>Helpful?
          <span className='underline' onClick={() => {!props.addOneTime ? handleHelpful(props.question.question_id) : console.log('bad')}}>Yes </span>
          <span>({props.question.question_helpfulness})  |  </span>
          <button onClick={handleAddA}>Add Answer</button>
          {statusA ? <AddAnswer status={handleAddA} body={props.question.question_body} product_name={props.product_name}></AddAnswer> : <></>}
        </div>
      </div>
      <>
        {answers.answers ?
          <>
            <div className="max-h-halfscreen overflow-auto">
              {Object.keys(answers.answers).slice(0, count).map(function(key, index) {
                return <Answer
                key={answers.answers[key].id}
                answer={answers.answers[key]}
                addHelpfulA={props.addHelpfulA}
                addOneTimeA={props.addOneTimeA}
                addReportA={props.addReportA}
                reportA={props.reportA}></Answer>
              })}
            </div>
            {Object.keys(answers.answers).length > count ?
              <div>
                <button onClick={moreAnswers}>LOAD MORE ANSWERS</button>
              </div> : <div>Collapse answers</div>}
          </> : <></>}
      </>
    </>
  );
}