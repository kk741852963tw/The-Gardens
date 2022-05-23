import React from 'react';
import ReactDOM from 'react-dom';
import Ratings_Reviews from './components/Ratings_Reviews/Ratings_Reviews.jsx';
import RealtedProducts from './components/Similar-Products/Similar-Products.jsx'
import QuestionsAnswers from './components/Q&A/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <RealtedProducts/>
        <QuestionsAnswers/>
        <Ratings_Reviews/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
// const container = document.getElementById('app');
// const app = createRoot(container);
// app.render(<React.StrictMode><App></App></React.StrictMode>);