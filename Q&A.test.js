import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
//import QuestionsAnswers from './client/src/components/Q&A/index.jsx';
import Search from './client/src/components/Q&A/components/Search.jsx';
import Question from './client/src/components/Q&A/components/Question.jsx';
import Answer from './client/src/components/Q&A/components/Answer.jsx';
import Image from './client/src/components/Q&A/components/Image.jsx';
import AddAnswer from './client/src/components/Q&A/components/AddAnswer.jsx';
import AddQuestion from './client/src/components/Q&A/components/AddQuestion.jsx';


// it('on initial render', () => {
//   render(<QuestionsAnswers></QuestionsAnswers>);
//   const span = screen.getByTestId('addaQuestion');
//   fireEvent.click(span);
//   expect(span).not.toBeDisabled();
// });

it('question', () => {
  render(<Question
    question={Q}
    product_name={"Bright Future Sunglasses"}
    addOneTime={false}
    addOneTimeA={hA}
    reportA={rA}></Question>);
  const spanmoreanswer = screen.getByTestId('moreanswer');
  fireEvent.click(spanmoreanswer);
  expect(spanmoreanswer).not.toBeDisabled();
});

// it('answer', () => {
//   render(<Answer
//     i={0}
//     answer={A}></Answer>);
//   const ha = screen.getByTestId('ha');
//   fireEvent.click(ha);
//   expect(ha).toBeDisabled();
//   const ra = screen.getByTestId('ra');
//   fireEvent.click(ra);
//   expect(ra).toBeDisabled();
// });

it('search', () => {
  const handldtext = jest.fn();
  render(<Search text={handldtext}></Search>);
  const input = screen.getByTestId('search');
  fireEvent.change(input, {target: {value: 't'}});
  expect(handldtext).toHaveBeenCalledTimes(1);
});

it('image', () => {
  const handleModal = jest.fn();
  render(<Image modal={handleModal} url={"https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"}></Image>);
  const span = screen.getByTestId('image');
  fireEvent.click(span);
  expect(handleModal).toHaveBeenCalledTimes(1);
});

it('addAnswer', () => {
  const handleAddA = jest.fn();
  render(<AddAnswer status={handleAddA} body={"Hello there? "} product_name={"Bright Future Sunglasses"} question_id={543184}></AddAnswer>);
  const qbody = screen.getByTestId("answer_body");
  fireEvent.change(qbody, {target: {value: '123'}});
  expect(qbody.value).toBe("123");
  const qname = screen.getByTestId("answer_name");
  fireEvent.change(qname, {target: {value: '456'}});
  expect(qname.value).toBe("456");
  const qemail = screen.getByTestId("answer_email");
  fireEvent.change(qemail, {target: {value: '789@123.456'}});
  expect(qemail.value).toBe("789@123.456");
  const qimage = screen.getByTestId("answer_image");
  fireEvent.change(qimage, {target: {value: "https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"}});
  expect(qimage.value).toBe("https://i.ibb.co/DRWty1n/5494-2708-215-of.webp");
  const answerbutton = screen.getByTestId('answer_button');
  fireEvent.click(answerbutton);
  expect(answerbutton).not.toBeDisabled();
  const buttonsubmit = screen.getByTestId('button_submit');
  fireEvent.click(buttonsubmit);
  expect(buttonsubmit).not.toBeDisabled();
  const buttoncancel = screen.getByTestId('button_cancel');
  fireEvent.click(buttoncancel);
  expect(buttoncancel).not.toBeDisabled();
});

it('addquestion', () => {
  const handleAddQ = jest.fn();
  render(<AddQuestion product_name={"Bright Future Sunglasses"} status={handleAddQ} product_id={"37312"}></AddQuestion>);
  const qbody = screen.getByTestId("question_body");
  fireEvent.change(qbody, {target: {value: '123'}});
  expect(qbody.value).toBe("123");
  const qname = screen.getByTestId("question_name");
  fireEvent.change(qname, {target: {value: '456'}});
  expect(qname.value).toBe("456");
  const qemail = screen.getByTestId("question_email");
  fireEvent.change(qemail, {target: {value: '789@123.456'}});
  expect(qemail.value).toBe("789@123.456");
  const buttonsubmit = screen.getByTestId('button_submit');
  fireEvent.click(buttonsubmit);
  expect(buttonsubmit).not.toBeDisabled();
  const buttoncancel = screen.getByTestId('button_cancel');
  fireEvent.click(buttoncancel);
  expect(buttoncancel).not.toBeDisabled();
});

const Q = {
  "question_id": 543184,
  "question_body": "Hello there? ",
  "question_date": "2021-11-07T00:00:00.000Z",
  "asker_name": "Obi-Wan",
  "question_helpfulness": 0,
  "reported": false,
  "answers": {
      "5269248": {
          "id": 5269248,
          "body": "sadfasdf",
          "date": "2022-01-02T00:00:00.000Z",
          "answerer_name": "asdfasdfa",
          "helpfulness": 0,
          "photos": ["https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"]
      },
      "5269249": {
          "id": 5269249,
          "body": "sadfasdf",
          "date": "2022-01-02T00:00:00.000Z",
          "answerer_name": "asdfasdfa",
          "helpfulness": 0,
          "photos": ["https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"]
      },
      "5269247": {
          "id": 5269247,
          "body": "sadfasdf",
          "date": "2022-01-02T00:00:00.000Z",
          "answerer_name": "asdfasdfa",
          "helpfulness": 0,
          "photos": ["https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"]
      }
  }
};

const A = {
  "id": 5269248,
  "body": "sadfasdf",
  "date": "2022-01-02T00:00:00.000Z",
  "answerer_name": "asdfasdfa",
  "helpfulness": 0,
  "photos": ["https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"]
};

const hA = {
  '5269248': false,
  '5269249': false,
  '5269247': false
};
const rA = {
  '5269248': false,
  '5269249': false,
  '5269247': false
};