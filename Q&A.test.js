const React = require('react');
const ReactDOM = require('react-dom');
const QuestionsAnswers = require('./client/src/components/Q&A/index.jsx');

it('on initial render', () => {
  const div = document.createElement("div");
  ReactDOM.render(<QuestionsAnswers></QuestionsAnswers>, div);
});