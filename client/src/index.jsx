import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Overview/Products.jsx';
import Ratings_Reviews from './components/Ratings_Reviews/Ratings_Reviews.jsx';
import QuestionsAnswers from './components/Q&A/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <Products />
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