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
  const [statusLoadA, setStatusLoadA] = useState(false);

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
    setStatusLoadA(true);
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
    <div id="gridQ" className="grid">
      <div className="font-black mt-2">Q:</div>
      <div className="max-h-full font-black mt-2">{questionBodySpecHead(question_body)}<span className="bg-yellow-300">{props.text}</span>{questionBodySpecTail(question_body)}</div>
      <div className="flex justify-end mt-2">
        <span className="mr-2">Helpful?</span>
        <span className='underline hover:bg-purple-400 cursor-pointer' onClick={() => {!props.addOneTime ? handleHelpful(props.question.question_id) : console.log('bad')}}>Yes </span>
        <span className="mr-2">{`(${props.question.question_helpfulness})`}</span>
        <span className="bg-white hover:bg-gray-300 border-2 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer h-8" onClick={handleAddA}>Add Answer</span>
        {statusA ? <AddAnswer status={handleAddA} body={props.question.question_body} product_name={props.product_name} key={i} question_id={props.question.question_id}></AddAnswer> : <></>}
      </div>
      <div className="col-span-3">
        {answers.length !== 0 ?
          <div id="Answer" className="m-auto max-h-halfscreen">
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
          </div> : <></>}
        </div>
        <div></div>
        <div>
          {answers.length !== 0 && answers.length > count ?
          <span className="bg-white hover:bg-gray-300 border-2 border-stone-900 shadow shadow-blue-500/40 py-0.5 px-4 rounded-full cursor-pointer" onClick={moreAnswers}>LOAD MORE ANSWERS</span> : statusLoadA ? <div>Collapse answers</div> : <></>}
        </div>
        <div></div>
    </div>
  );
}