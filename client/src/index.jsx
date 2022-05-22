import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/Overview/Products.jsx';
import RealtedProducts from './components/Similar-Products/Similar-Products.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <RealtedProducts/>
        <Products />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));