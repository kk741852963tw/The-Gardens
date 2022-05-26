import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';

export default function Question(props) {
  const [count, setCount] = useState(2);
  const [answers, setAnswer] = useState([]);
  const [statusA, setStatus] = useState(false);
  const [i, setI] = useState(0);
  const [question_body, setQuestionBody] = useState(props.question.question_body);

  useEffect(() => {
    const temp = sortAnswer(props.question);
    setAnswer(temp);
  }, [props]);

  const questionBodySpecHead = function(question_body) {
    let index = question_body.indexOf(props.text);
    if (!props.text) {
      return question_body;
    } else {
      return question_body.substring(0, index);
    }
  }

  const questionBodySpecTail = function(question_body) {
    let index = question_body.indexOf(props.text);
    if (!props.text) {
      return;
    } else {
      return question_body.substring(index + props.text.length, question_body.length);
    }
  }

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
    return tempArray;
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
      setI(i + 1);
      setStatus(true);
    } else {
      setI(i + 1);
      setStatus(false);
    }
  }

  return (
    <>
      <div className="flex">
        {/* <div>Q: {props.question.question_body}</div> */}
        <div>Q: {questionBodySpecHead(question_body)}<span className="bg-yellow-300">{props.text}</span>{questionBodySpecTail(question_body)}</div>
        <div>Helpful?
          <span className='underline' onClick={() => {!props.addOneTime ? handleHelpful(props.question.question_id) : console.log('bad')}}>Yes </span>
          <span>({props.question.question_helpfulness})  |  </span>
          <button onClick={handleAddA}>Add Answer</button>
          {statusA ? <AddAnswer status={handleAddA} body={props.question.question_body} product_name={props.product_name} key={i} question_id={props.question.question_id}></AddAnswer> : <></>}
        </div>
      </div>
      <>
        {answers.length !== 0 ?
          <>
            <div className="max-h-halfscreen overflow-auto">
              {answers.slice(0, count).map((answer, index) => {
                return <Answer
                key={answer.id}
                i={index}
                answer={answer}
                addHelpfulA={props.addHelpfulA}
                addOneTimeA={props.addOneTimeA}
                addReportA={props.addReportA}
                reportA={props.reportA}></Answer>
              })}
            </div>
            {answers.length > count ?
              <div>
                <button onClick={moreAnswers}>LOAD MORE ANSWERS</button>
              </div> : <div>Collapse answers</div>}
          </> : <></>}
      </>
    </>
  );
}