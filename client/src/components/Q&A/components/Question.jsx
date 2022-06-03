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
    axios.put('/questions', { question_id: question_id, type: 'helpful' })
      .then(() => {
        props.addHelpful();
      });
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
    <div id="gridQ" className="grid gap-2 border-2 shadow shadow-blue-500/40 rounded-md mb-2">
      <div className="font-black mt-1 text-xl ml-1">Q:</div>
      <div className="max-h-full font-black mt-1 text-xl">{questionBodySpecHead(question_body)}<span className="bg-yellow-300">{props.text}</span>{questionBodySpecTail(question_body)}</div>
      <div className="flex justify-end mt-1">
        <span className="mr-2">Helpful?</span>
        {!props.addOneTime ? <span className='mr-4 border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-2 rounded-full cursor-pointer place-self-start' onClick={() => handleHelpful(props.question.question_id)}>Yes{`(${props.question.question_helpfulness})`} </span> : <span className="mr-4 border border-1 border-gray-500 bg-gray-700 text-white font-bold py px-2 rounded-full  place-self-start">Yes{`(${props.question.question_helpfulness})`} </span>}
        <span className="border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-2 rounded-full cursor-pointer place-self-start" onClick={handleAddA}>Add Answer</span>
        {statusA ? <AddAnswer status={handleAddA} body={props.question.question_body} product_name={props.product_name} key={i} question_id={props.question.question_id}></AddAnswer> : <></>}
      </div>
        {answers.length !== 0 ?
        <div id="gridQA" className="col-span-3 pr-0.5">
          <div id="Answer" className="m-auto max-h-halfscreen">
            {answers.slice(0, count).map((answer, index) => {
              return <Answer
              key={answer.id.toString()}
              i={index}
              answer={answer}
              addHelpfulA={props.addHelpfulA}
              addOneTimeA={props.addOneTimeA}
              addReportA={props.addReportA}
              reportA={props.reportA}></Answer>
            })}
          </div></div> : <></>}
        <div className="col-span-2">
          {answers.length !== 0 && answers.length > count ?
          <span className="border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-4 rounded-full w-full cursor-pointer" onClick={moreAnswers}>See More</span> : statusLoadA ? <span className="border border-1 border-gray-500 bg-gray-700 text-white font-bold py px-4 rounded-full w-full">See Less</span> : <></>}
        </div>
        <div></div>
    </div>
  );
}