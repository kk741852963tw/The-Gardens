import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Overview/Products.jsx';
import Ratings_Reviews from './components/Ratings_Reviews/Ratings_Reviews.jsx';
import QuestionsAnswers from './components/Q&A/index.jsx';
import RelatedProducts from './components/Similar-Products/Similar-Products.jsx';
import Headline from './components/Overview/Header/Headline.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: [],
    }
    this.setCardHandler = this.setCardHandler.bind(this);
  }

  setCardHandler(value){
    this.setState({
      currentCard: value
    })
  }

  render() {
    return (
        <div className='mx-auto w-4/5'>
          <Products />
          <RelatedProducts/>
            <Ratings_Reviews/>
            <QuestionsAnswers/>
        </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
