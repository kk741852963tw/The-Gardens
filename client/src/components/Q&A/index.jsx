import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';
import Search from './components/Search.jsx';
import AddQuestion from './components/AddQuestion.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      product_id: '37313', //'37408', //'37312',
      product_name: 'Morning Joggers', //'Leopold Pants',//'Bright Future Sunglasses',
      count: 2,
      answers: [],
      statusQ: false,
      helpful: {},
      helpfulA: {},
      reportA: {},
      text: '',
      search: false,
      searchD: []
    }
    this.moreAnsweredQ = this.moreAnsweredQ.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddQ = this.handleAddQ.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.addHelpful = this.addHelpful.bind(this);
    this.addHelpfulA = this.addHelpfulA.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/questions', { params: { product_id: this.state.product_id } })
      .then(result => {
        const array = result.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        });
        const objQ = {};
        const objA = {};
        const objAR = {};
        for (let i = 0; i < array.length; i++) {
          objQ[array[i].question_id] = false;
          for (let key in array[i].answers) {
            objA[array[i].answers[key].id] = false;
            objAR[array[i].answers[key].id] = false;
          }
        }
        this.setState({
          display: array,
          helpful: objQ,
          helpfulA: objA,
          reportA: objAR
        });
      })
      .catch(err => console.log(err));
  }

  moreAnsweredQ() {
    this.setState({
      count: this.state.display.length
    });
  }

  handleSearch(text) {
    if (text.length > 2) {
      let array = [];
      console.log(this.state.display);
      for (let i = 0; i < this.state.display.length; i++) {
        if (this.state.display[i].question_body.includes(text)) {
          for (let i = 0; i < this.state.display.length; i++) {
            if (this.state.display[i].question_body.includes(text)) {
              array.push(this.state.display[i]);
            }
          }
          this.setState({
            search: true,
            text: text,
            searchD: array
          });
          break;
        }
      }
    } else {
      this.setState({
        text: '',
        search: false,
        searchD: []
      });
    }
  }

  handleAddQ() {
    if (!this.state.statusQ) {
      this.setState({
        statusQ: true
      });
    } else {
      this.setState({
        statusQ: false
      });
    }
  }

  addHelpful(question_id, question_helpfulness, index) {
    let obj2 = this.state.display;
    for (let i = 0; i < obj2.length; i++) {
      if (obj2[i].question_id === question_id) {
        obj2[i].question_helpfulness = question_helpfulness + 1;
      }
    }
    let obj = this.state.helpful;
    obj[question_id] = true;
    const array = obj2.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness
    });
    this.setState({
      helpful: obj,
      display: array
    });
  }

  addHelpfulA(answer_id, answer_helpful, index) {
    let obj2 = this.state.display;
    for (let i = 0; i < obj2.length; i++) {
      for (let key in obj2[i].answers) {
        if (key === answer_id.toString()) {
          obj2[i]['answers'][answer_id.toString()].helpfulness = answer_helpful + 1;
        }
      }
    }
    let obj = this.state.helpfulA;
    obj[answer_id] = true;
    this.setState({
      helpfulA: obj,
      display: obj2
    });
  }

  addReportA(answer_id) {
    let obj = this.state.reportA;
    obj[answer_id] = true;
    this.setState({
      reportA: obj
    });
  }

  render() {
    return (
      <div id="QA" className="my-6 w-4/5 m-auto">
        <h2 className="m-auto w-full text-2xl font-extrabold font-poppins mb-1">{"QUESTIONS & ANSWERS"}</h2>
        <Search text={this.handleSearch}></Search>
        <div id="Question" className="m-auto w-full max-h-screen mb-1">
          {this.state.search && this.state.searchD.length !== 0 ?
          (<>
            {this.state.searchD.map((question, index) => {
              return <Question
              key={question.question_id}
              question={question} product_name={this.state.product_name}
              addHelpful={() => this.addHelpful(question.question_id, question.question_helpfulness, index)}
              addOneTime={this.state.helpful[question.question_id]}
              addHelpfulA={(answer_id, answer_helpful) => this.addHelpfulA(answer_id, answer_helpful, index)}
              addOneTimeA={this.state.helpfulA} addReportA={(answer_id) => this.addReportA(answer_id, index)}
              reportA={this.state.reportA}
              text={this.state.text}></Question>
            })}
          </>) :
          (this.state.display.length === 0 ? <></> :
            <>
              {this.state.display.slice(0, this.state.count).map((question, index) => {
                return <Question
                key={question.question_id}
                question={question} product_name={this.state.product_name}
                addHelpful={() => this.addHelpful(question.question_id, question.question_helpfulness, index)}
                addOneTime={this.state.helpful[question.question_id]}
                addHelpfulA={(answer_id, answer_helpful) => this.addHelpfulA(answer_id, answer_helpful, index)}
                addOneTimeA={this.state.helpfulA} addReportA={(answer_id) => this.addReportA(answer_id, index)}
                reportA={this.state.reportA}
                text={''}></Question>
              })}
            </>)}
            </div>
        {this.state.display.length > this.state.count && (!this.state.search || this.state.searchD.length === 0) ?
          <div  className="m-auto w-full flex justify-between">
            <span className="border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-2 rounded-full cursor-pointer place-self-start" onClick={this.moreAnsweredQ}>More Answered Questions</span>
            <span className="border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-2 rounded-full cursor-pointer place-self-start" onClick={this.handleAddQ}>ADD A QUESTION</span>
            {this.state.statusQ ? <AddQuestion product_name={this.state.product_name} status={this.handleAddQ} product_id={this.state.product_id}></AddQuestion> : <></>}
          </div> :
          <div  className="m-auto w-full flex justify-between">
            <span data-testid="addaQuestion" className="border border-1 border-gray-500 hover:bg-gray-700 hover:text-white text-gray font-bold py px-2 rounded-full cursor-pointer place-self-start">
              <button onClick={this.handleAddQ}>ADD A QUESTION</button>
              {this.state.statusQ ? <AddQuestion product_name={this.state.product_name} status={this.handleAddQ} product_id={this.state.product_id}></AddQuestion> : <></>}
            </span>
            <span></span>
          </div>}
      </div>
    );
  }
}

export default QuestionsAnswers;