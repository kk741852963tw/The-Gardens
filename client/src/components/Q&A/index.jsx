import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import Search from './Search.jsx';


export default function QuestionsAnswers() {
  const [display, setStateD] = useState([]);
  const [product_id, setString] = useState('37312');
  const [count, setCount] = useState(4);
  const [answers, setStateA] = useState([]);
  const [temp, setStateT] = useState([]);

  useEffect(() => {
    axios.get('/questions', { params: { product_id: product_id } })
      .then(result => {
        setStateD(result.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        }));
        setStateT(result.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness
        }));
      })
      .catch(err => console.log(err));
  }, [product_id]);

  const moreAnsweredQ = function() {
    setCount(count + 2);
  };

  const sortAnswer = function(question) {
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
  };

  const handleSearch = function(text) {
    if (text.length > 2) {
      setStateD([]);
      setStateD(prevState => { return prevState; });
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].question_body.includes(text)) {
          setStateD(prevState => { return [...prevState, temp[i]]; });
        }
      }
    } else {
      setStateD(temp);
    }
  }

  return (
    <div>
      <div>{"QUESTIONS & ANSWERS"}</div>
      <Search text={handleSearch}></Search>
      {display.length === 0 ? <></> :
        <>
          {display.slice(0, count).map(question => {
            return <Question question={sortAnswer(question)}></Question>
          })}
        </>}
      {display.length > count ?
        <div>
          <button onClick={moreAnsweredQ}>MORE ANSWERD QUESRIONS</button>
          <button>ADD A QUESTION</button>
        </div> :
        <div>
          <button>ADD A QUESTION +</button>
        </div>}
    </div>
  );
}

// class QuestionsAnswers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: [],
//       product_id: '37312'
//     }
//   }

//   componentDidMount() {
//     axios.get('/questions', { params: { product_id: this.state.product_id } })
//       .then(result => this.setState({
//           display: result.data.results
//         }))
//       .catch(err => console.log(err));
//   }

//   changeTimeFormat(timeData) {
//     let temp = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(timeData).toLocaleDateString([], temp);
//   }

//   // console.log(result.data.results)
//   // this.setState({
//   //   display: result.data.results
//   // })
//   render() {
//     return (
//       <>{this.state.display.length === 0 ? <></> : <>
//         <div>Q: {this.state.display[0].question_body}</div>
//         <div>Helpful? <span>Yes </span><span>({this.state.display[0].question_helpfulness})  |  </span><span>Add Answer </span></div>
//         {for (let key in this.state.display[0].answers) {
//           return (
//             <>
//               <div>A: {this.state.display[0].answers[key].body}</div>
//               <span>by {this.state.display[0].answers[key].answerer_name}, {changeTimeFormat(this.state.display[0].answers[key].date)}  |  </span>
//               <span>Helpful? </span><span>Yes </span><span>({this.state.display[0].answers[key].helpfulness})  |  </span>
//               <span>Report</span>
//             </>
//           )
//         }}
//         {/* Object.keys(this.state.display[0].answers).map(function(key, index) {
//           return (
//             <>
//               <div>A: {this.state.display[0].answers[key].body}</div>
//               <span>by {this.state.display[0].answers[key].answerer_name}, {changeTimeFormat(this.state.display[0].answers[key].date)}  |  </span>
//               <span>Helpful? </span><span>Yes </span><span>({this.state.display[0].answers[key].helpfulness})  |  </span>
//               <span>Report</span>
//             </>
//           )
//         }) */}
//         </>}
//       </>
//     )
//   }
// }

// export default QuestionsAnswers;