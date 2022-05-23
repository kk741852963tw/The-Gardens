import React from 'react';
import ReactDOM from 'react-dom';
import Ratings_Reviews from './components/Ratings_Reviews/Ratings_Reviews.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <Ratings_Reviews/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));