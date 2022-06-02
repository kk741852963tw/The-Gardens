/**
 * @jest-environment jsdom
 */
// const sum = require('./sum');
// const React = require('react');

import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom";

import QuestionsAnswers from '../src/components/Q&A/index.jsx';
import Question from '../src/components/Q&A/components/Question.jsx';
import Search from '../src/components/Q&A/components/Search.jsx';
import Image from '../src/components/Q&A/components/Image.jsx';
import AddAnswer from '../src/components/Q&A/components/AddAnswer.jsx';
import AddQuestion from '../src/components/Q&A/components/AddQuestion.jsx';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('render QuestionsAnswers&A', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionsAnswers></QuestionsAnswers>, div);
  const divQ = document.createElement('div');
  ReactDOM.render(<Question question={Q}></Question>, divQ);
  const divS = document.createElement('div');
  ReactDOM.render(<Search></Search>, divS);
  const divI = document.createElement('div');
  ReactDOM.render(<Image></Image>, divI);
  const divAA = document.createElement('div');
  ReactDOM.render(<AddAnswer></AddAnswer>, divAA);
  const divAQ = document.createElement('div');
  ReactDOM.render(<AddQuestion></AddQuestion>, divAQ);
});


const Q = {
  "question_id": 573260,
  "question_body": "test",
  "question_date": "2022-02-10T00:00:00.000Z",
  "asker_name": "greg",
  "question_helpfulness": 36,
  "reported": false,
  "answers": {
      "5985485": {
          "id": 5985485,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 3,
          "photos": []
      },
      "5985486": {
          "id": 5985486,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 0,
          "photos": []
      },
      "5985487": {
          "id": 5985487,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 0,
          "photos": []
      },
      "5985488": {
          "id": 5985488,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 0,
          "photos": []
      },
      "5985489": {
          "id": 5985489,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 0,
          "photos": []
      },
      "5985490": {
          "id": 5985490,
          "body": "this is good",
          "date": "2022-05-24T00:00:00.000Z",
          "answerer_name": "Hello",
          "helpfulness": 0,
          "photos": []
      },
      "5985692": {
          "id": 5985692,
          "body": "test",
          "date": "2022-05-30T00:00:00.000Z",
          "answerer_name": "po",
          "helpfulness": 10,
          "photos": [
              "https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"
          ]
      }
  }
};
const A = {
  "id": '5985692',
  "body": "test",
  "date": "2022-05-30T00:00:00.000Z",
  "answerer_name": "po",
  "helpfulness": 10,
  "photos": [
      "https://i.ibb.co/DRWty1n/5494-2708-215-of.webp"
  ]
};