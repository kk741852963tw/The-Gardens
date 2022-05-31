import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';

export default function Answer(props) {
  const [countR, setCountR] = useState(0);
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState('');

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

  const handleModal = function(url) {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
    setUrl(url);
  }

  return (
    <div id="gridA" className="grid">
      {props.i === 0 ? <div className="font-black row-span-2 mt-3 ml-1">A:</div> : <div className="row-span-2 mt-3"></div>}
      <div>
        <div className="mt-3">{props.answer.body}</div>
        {props.answer.photos.length !== 0 ? props.answer.photos.map((element, index) => {
          if (index === props.answer.photos.length - 1) {
            return <><img id="answerImage" src={element} className="h-18 w-32 object-contain inline mr-4 hover:opacity-70 rounded-md" onClick={() => handleModal(element)}></img><br></br></>
          } else {
            return <img id="answerImage" src={element} className="h-18 w-32 object-contain inline mr-4 hover:opacity-70 rounded-md" onClick={() => handleModal(element)}></img>
          }
        }) : <></>}
        {modal ? <Image modal={handleModal} url={url}></Image> : <></>}
      </div>
      <div className="mt-2 text-xs">
        <span className="mr-2">by</span>
        {props.answer.answerer_name === "Seller" ? <span className='font-black'> {props.answer.answerer_name}</span> : <span> {props.answer.answerer_name}</span>}
        <span className="mr-2">, {changeTimeFormat(props.answer.date)}   &#124;</span>
        <span className="mr-2">Helpful? </span>
        {!props.addOneTimeA[props.answer.id] ? <span className='mr-4 bg-white hover:bg-gray-300 hover:text-white border-1 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer' onClick={() => handleHelpful(props.answer.id)}>Yes({props.answer.helpfulness})</span> : <span className='mr-4  bg-gray-300 text-white border-1 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full'>Yes({props.answer.helpfulness})</span>}
        {!props.reportA[props.answer.id] ? <span className='bg-white hover:bg-gray-300 hover:text-white border-1 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer' onClick={() => handleReport(props.answer.id)}>Report</span> : <span className='bg-gray-300 text-white border-1 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full'>Reported</span>}
      </div>
    </div>
  );
}

