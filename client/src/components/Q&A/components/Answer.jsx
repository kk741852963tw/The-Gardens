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
    <>
      {props.i === 0 ? <div>A: {props.answer.body}</div> : <div>   {props.answer.body}</div>}
      {props.answer.photos.length !== 0 ? props.answer.photos.map((element, index) => {
        if (index === props.answer.photos.length - 1) {
          return <><img src={element} className="h-9 w-16 inline mr-4" onClick={() => handleModal(element)}></img><br></br></>
        } else {
          return <img src={element} className="h-9 w-16 inline mr-4" onClick={() => handleModal(element)}></img>
        }
      }) : <></>}
      {modal ? <Image modal={handleModal} url={url}></Image> : <></>}
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