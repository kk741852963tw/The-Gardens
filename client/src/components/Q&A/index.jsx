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
      product_id: '37312',
      product_name: 'Bright Future Sunglasses',
      count: 4,
      answers: [],
      temp: [],
      statusQ: false,
      helpful: {},
      helpfulA: {},
      reportA: {},
      text: ''
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
            objA[array[i].answers[key]] = false;
            objAR[array[i].answers[key]] = false;
          }
        }
        this.setState({
          display: array,
          temp: array,
          helpful: objQ,
          helpfulA: objA,
          reportA: objAR
        });
      })
      .catch(err => console.log(err));
  }

  moreAnsweredQ() {
    this.setState({
      count: this.state.count + 2
    });
  }
  //upperCase!!!!
  handleSearch(text) {
    if (text.length > 2) {
      const array = [];
      for (let i = 0; i < this.state.temp.length; i++) {
        if (this.state.temp[i].question_body.includes(text)) {
          array.push(this.state.temp[i]);
        }
      }
      this.setState({
        display: array,
        text: text
      });
    } else {
      this.setState({
        display: this.state.temp,
        text: ''
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
    obj2[index]['question_helpfulness'] = question_helpfulness + 1;
    let obj = this.state.helpful;
    obj[question_id] = true;
    this.setState({
      helpful: obj,
      display: obj2
    });
  }

  addHelpfulA(answer_id, answer_helpful, index) {
    let obj2 = this.state.display;
    obj2[index]['answers'][answer_id.toString()].helpfulness = answer_helpful + 1;
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
      <div>
        <div>{"QUESTIONS & ANSWERS"}</div>
        <Search text={this.handleSearch}></Search>
<<<<<<< HEAD
        <div className="max-h-screen overflow-auto">
          {this.state.display.length === 0 ? <></> :
            <>
              {this.state.display.slice(0, this.state.count).map((question, index) => {
                return <Question
                key={question.question_id + question.question_helpfulness}
                question={question} product_name={this.state.product_name}
                addHelpful={() => this.addHelpful(question.question_id, question.question_helpfulness, index)}
                addOneTime={this.state.helpful[question.question_id]}
                addHelpfulA={(answer_id, answer_helpful) => this.addHelpfulA(answer_id, answer_helpful, index)}
                addOneTimeA={this.state.helpfulA} addReportA={(answer_id) => this.addReportA(answer_id, index)}
                reportA={this.state.reportA}
                text={this.state.text}></Question>
              })}
            </>}
          {this.state.display.length > this.state.count ?
            <div>
              <button onClick={this.moreAnsweredQ}>MORE ANSWERD QUESRIONS</button>
              <button onClick={this.handleAddQ}>ADD A QUESTION</button>
              {this.state.statusQ ? <AddQuestion product_name={this.state.product_name} status={this.handleAddQ} product_id={this.state.product_id}></AddQuestion> : <></>}
            </div> :
            <div>
              <button onClick={this.handleAddQ}>ADD A QUESTION</button>
              {this.state.statusQ ? <AddQuestion product_name={this.state.product_name} status={this.handleAddQ} product_id={this.state.product_id}></AddQuestion> : <></>}
            </div>}
          </div>
=======
        {this.state.display.length === 0 ? <></> :
          <>
            {this.state.display.slice(0, this.state.count).map(question => {
              return <Question question={this.sortAnswer(question)}></Question>
            })}
          </>}
        {this.state.display.length > this.state.count ?
          <div>
            <button onClick={this.moreAnsweredQ}>MORE ANSWERED QUESTIONS</button>
            <button>ADD A QUESTION</button>
          </div> :
          <div>
            <button>ADD A QUESTION +</button>
          </div>}
>>>>>>> CamCarouselDev
      </div>
    );
  }
}

export default QuestionsAnswers;