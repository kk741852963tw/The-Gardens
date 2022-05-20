import React from 'react';
import ReactDOM from 'react-dom';
import RealtedProducts from './components/Similar-Products/Similar-Products.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <RealtedProducts/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));