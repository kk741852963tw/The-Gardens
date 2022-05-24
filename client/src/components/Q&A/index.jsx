import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';
import Search from './components/Search.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      product_id: '37312',
      count: 4,
      answers: [],
      temp: []
    }
    this.moreAnsweredQ = this.moreAnsweredQ.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortAnswer = this.sortAnswer.bind(this);
  }

  componentDidMount() {
    axios.get('/questions', { params: { product_id: this.state.product_id } })
      .then(result => {
        this.setState({
          display: result.data.results.sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness
          }),
          temp: result.data.results.sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness
          })
        });
      })
      .catch(err => console.log(err));
  }

  moreAnsweredQ() {
    this.setState({
      count: this.state.count + 2
    });
  }

  sortAnswer(question) {
    const tempArray = Object.values(question.answers);
    tempArray.sort((a, b) => { return b.helpfulness - a.helpfulness });
    tempArray.sort((a, b) => {
      if (a.answerer_name === "Seller") {
        return 1;
      } else if (b.answerer_name === "Seller") {
        return -1;
      } else return b.helpfulness - a.helpfulness;
    });
    const tempObject = {};
    for (let i = 0; i < tempArray.length; i++) {
      tempObject[tempArray[i].id] = tempArray[i];
    }
    question.answers = tempObject;
    return question;
  }

  handleSearch(text) {
    if (text.length > 2) {
      this.setState({
        display: []
      });
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].question_body.includes(text)) {
          this.setState({
            display: [...display, temp[i]]
          });
        }
      }
    } else {
      this.setState({
        display: this.state.temp
      });
    }
  }

  render() {
    return (
      <div>
        <div>{"QUESTIONS & ANSWERS"}</div>
        <Search text={this.handleSearch}></Search>
        {this.state.display.length === 0 ? <></> :
          <>
            {this.state.display.slice(0, this.state.count).map(question => {
              return <Question question={this.sortAnswer(question)}></Question>
            })}
          </>}
        {this.state.display.length > this.state.count ?
          <div>
            <button onClick={this.moreAnsweredQ}>MORE ANSWERD QUESRIONS</button>
            <button>ADD A QUESTION</button>
          </div> :
          <div>
            <button>ADD A QUESTION +</button>
          </div>}
      </div>
    );
  }
}

export default QuestionsAnswers;

//functionality version

// export default function QuestionsAnswers() {
//   const [display, setStateD] = useState([]);
//   const [product_id, setString] = useState('37312');
//   const [count, setCount] = useState(4);
//   const [answers, setStateA] = useState([]);
//   const [temp, setStateT] = useState([]);

//   useEffect(() => {
//     axios.get('/questions', { params: { product_id: product_id } })
//       .then(result => {
//         setStateD(result.data.results.sort((a, b) => {
//           return b.question_helpfulness - a.question_helpfulness
//         }));
//         setStateT(result.data.results.sort((a, b) => {
//           return b.question_helpfulness - a.question_helpfulness
//         }));
//       })
//       .catch(err => console.log(err));
//   }, [product_id]);

//   const moreAnsweredQ = function() {
//     setCount(count + 2);
//   };

//   const sortAnswer = function(question) {
//     const tempArray = Object.values(question.answers);
//     tempArray.sort((a, b) => { return b.helpfulness - a.helpfulness });
//     tempArray.sort((a, b) => {
//       if (a.answerer_name === "Seller") {
//         return 1;
//       } else if (b.answerer_name === "Seller") {
//         return -1;
//       } else return b.helpfulness - a.helpfulness;
//     });
//     const tempObject = {};
//     for (let i = 0; i < tempArray.length; i++) {
//       tempObject[tempArray[i].id] = tempArray[i];
//     }
//     question.answers = tempObject;
//     return question;
//   };

//   const handleSearch = function(text) {
//     if (text.length > 2) {
//       setStateD([]);
//       setStateD(prevState => { return prevState; });
//       for (let i = 0; i < temp.length; i++) {
//         if (temp[i].question_body.includes(text)) {
//           setStateD(prevState => { return [...prevState, temp[i]]; });
//         }
//       }
//     } else {
//       setStateD(temp);
//     }
//   }

//   return (
//     <div>
//       <div>{"QUESTIONS & ANSWERS"}</div>
//       <Search text={handleSearch}></Search>
//       {display.length === 0 ? <></> :
//         <>
//           {display.slice(0, count).map(question => {
//             return <Question question={sortAnswer(question)}></Question>
//           })}
//         </>}
//       {display.length > count ?
//         <div>
//           <button onClick={moreAnsweredQ}>MORE ANSWERD QUESRIONS</button>
//           <button>ADD A QUESTION</button>
//         </div> :
//         <div>
//           <button>ADD A QUESTION +</button>
//         </div>}
//     </div>
//   );
// }

