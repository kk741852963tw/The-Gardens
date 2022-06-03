import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';

export default function Answer(props) {
  const [countR, setCountR] = useState(0);
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState('');
  const [index, setIndex] = useState(0);

  const changeTimeFormat = function(timeData) {
    let temp = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timeData).toLocaleDateString([], temp);
  };

  const handleHelpful = function(answer_id) {
    axios.put('/answers', { answer_id: answer_id, type: 'helpful' })
      .then(() => {
        props.addHelpfulA(answer_id, props.answer.helpfulness);
      });
  };

  const handleReport = function(answer_id) {
    axios.put('/answers', { answer_id: answer_id, type: 'report' })
      .then(() => {
        props.addReportA(answer_id);
      });
  };

  const handleModal = function(url, index) {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
    setUrl(url);
    setIndex(index);
  }

  return (
    <div id="gridA" className="grid">
      {props.i === 0 ? <div className="font-black row-span-2 mt-3 ml-1">A:</div> : <div className="row-span-2 mt-3"></div>}
      <div>
        <div className="mt-3">{props.answer.body}</div>
        {props.answer.photos.length !== 0 ? props.answer.photos.map((element, index) => {
          if (index === props.answer.photos.length - 1) {
            return <><img data-testid="img" id="answerImage" src={element} className="h-18 w-32 object-contain inline mr-4 hover:opacity-70 rounded-md" onClick={() => handleModal(element, index)}></img><br></br></>
          } else {
            return <img id="answerImage" src={element} className="h-18 w-32 object-contain inline mr-4 hover:opacity-70 rounded-md" onClick={() => handleModal(element, index)}></img>
          }
        }) : <></>}
        {modal ? <Image key={index} modal={handleModal} url={url}></Image> : <></>}
      </div>
      <div className="mt-2 text-xs">
        <span className="mr-2">by</span>
        {props.answer.answerer_name === "Seller" ? <span className='font-black'> {props.answer.answerer_name}</span> : <span> {props.answer.answerer_name}</span>}
        <span className="mr-2">, {changeTimeFormat(props.answer.date)}   &#124;</span>
        <span className="mr-2">Helpful? </span>
        {!props.addOneTimeA[props.answer.id] ? <span data-testid="ha" className='mr-4 border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray py px-2 rounded-full cursor-pointer place-self-start' onClick={() => handleHelpful(props.answer.id)}>Yes({props.answer.helpfulness})</span> : <span className='mr-4 border border-1 border-gray-500 bg-gray-700 text-white py px-2 rounded-full  place-self-start'>Yes({props.answer.helpfulness})</span>}
        {!props.reportA[props.answer.id] ? <span data-testid="ra" className='border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray py px-2 rounded-full cursor-pointer place-self-start' onClick={() => handleReport(props.answer.id)}>Report</span> : <span className='border border-1 border-gray-500 bg-gray-700 text-white py px-2 rounded-full  place-self-start'>Reported</span>}
      </div>
    </div>
  );
}

