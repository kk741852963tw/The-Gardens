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
      product_id: '37312', //'37408', //'37312',
      product_name: 'Bright Future Sunglasses', //'Leopold Pants',//'Bright Future Sunglasses',
      count: 2,
      answers: [],
      temp: [],
      statusQ: false,
      helpful: {},
      helpfulA: {},
      reportA: {},
      text: '',
      tempA: [],
      tempA: []
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
      count: this.state.display.length
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
      const objQ = {};
      const objA = {};
      const objAR = {};
      const tempAarray = [];
      const tempQarray = [];
      for (let i = 0; i < array.length; i++) {
        objQ[array[i].question_id] = this.state.helpful[array[i].question_id];
        tempQarray.push(array[i].question_id);
        for (let key in array[i].answers) {
          objA[array[i].answers[key].id] = this.state.helpfulA[array[i].answers[key].id];
          objAR[array[i].answers[key].id] = this.state.reportA[array[i].answers[key].id];
          tempAarray.push(array[i].answers[key].id);
        }
      }
      this.setState({
        tempAhelpful: this.state.helpfulA,
        tempQhelpful: this.state.helpful,
        tempAreport: this.state.reportA,
        display: array,
        text: text,
        helpful: objQ,
        helpfulA: objA,
        reportA: objAR,
        tempA: tempAarray,
        tempQ: tempQarray
      });
    } else {
      const objQ = {};
      const objA = {};
      const objAR = {};
      for (let i = 0; i < this.state.temp.length; i++) {
        if (this.state.tempQ.includes(this.state.temp[i].question_id)) {
          objQ[this.state.temp[i].question_id] = this.state.helpful[this.state.temp[i].question_id];
        } else {
          objQ[this.state.temp[i].question_id] = this.state.tempQhelpful[this.state.temp[i].question_id];
        }
        for (let key in this.state.temp[i].answers) {
          if (this.state.tempA.includes(this.state.temp[i].answers[key].id)) {
            objA[this.state.temp[i].answers[key].id] = this.state.helpfulA[this.state.temp[i].answers[key].id];
            objAR[this.state.temp[i].answers[key].id] = this.state.reportA[this.state.temp[i].answers[key].id];
          } else {
            objA[this.state.temp[i].answers[key].id] = this.state.tempAhelpful[this.state.temp[i].answers[key].id];
            objAR[this.state.temp[i].answers[key].id] = this.state.tempAreport[this.state.temp[i].answers[key].id];
          }
        }
      }
      this.setState({
        display: this.state.temp,
        text: '',
        helpful: objQ,
        helpfulA: objA,
        reportA: objAR
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
      <div className="font-mono">
        <h2 className="m-auto w-3/5 text-2xl font-extrabold mb-1">{"QUESTIONS & ANSWERS"}</h2>
        <Search text={this.handleSearch}></Search>
        <div id="Question" className="m-auto w-3/5 max-h-screen mb-1">
          {this.state.display.length === 0 ? <></> :
            <>
              {this.state.display.slice(0, this.state.count).map((question, index) => {
                return <Question
                key={index}
                question={question} product_name={this.state.product_name}
                addHelpful={() => this.addHelpful(question.question_id, question.question_helpfulness, index)}
                addOneTime={this.state.helpful[question.question_id]}
                addHelpfulA={(answer_id, answer_helpful) => this.addHelpfulA(answer_id, answer_helpful, index)}
                addOneTimeA={this.state.helpfulA} addReportA={(answer_id) => this.addReportA(answer_id, index)}
                reportA={this.state.reportA}
                text={this.state.text}></Question>
              })}
            </>}
            </div>
        {this.state.display.length > this.state.count ?
          <div  className="m-auto w-3/5 flex justify-between">
            <span className="bg-white hover:bg-gray-300 hover:text-white border-2 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer" onClick={this.moreAnsweredQ}>More Answered Questions</span>
            <span className="bg-white hover:bg-gray-300 hover:text-white border-2 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer" onClick={this.handleAddQ}>ADD A QUESTION</span>
            {this.state.statusQ ? <AddQuestion product_name={this.state.product_name} status={this.handleAddQ} product_id={this.state.product_id}></AddQuestion> : <></>}
          </div> :
          <div  className="m-auto w-3/5 flex justify-between">
            <span  className="hover:bg-gray-300 hover:text-white border-2 border-stone-900 shadow shadow-blue-500/40 py px-2 rounded-full cursor-pointer">
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