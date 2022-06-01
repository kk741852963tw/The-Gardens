import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Overview/Products.jsx';
import Ratings_Reviews from './components/Ratings_Reviews/Ratings_Reviews.jsx';
import QuestionsAnswers from './components/Q&A/index.jsx';
import RelatedProducts from './components/Similar-Products/Similar-Products.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='max-w-[1240px] mx-auto px-4 w-1/2'>
        <Products />
        <RelatedProducts/>
        <QuestionsAnswers/>
        <Ratings_Reviews/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
// const container = document.getElementById('app');
// const app = createRoot(container);
// app.render(<React.StrictMode><App></`App></React.StrictMode>);`