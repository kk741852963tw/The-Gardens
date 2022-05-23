import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import RealtedProducts from './components/Similar-Products/Similar-Products.jsx'
import QuestionsAnswers from './components/Q&A/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        {/* <RealtedProducts/> */}
        <QuestionsAnswers/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
// const container = document.getElementById('app');
// const app = createRoot(container);
// app.render(<React.StrictMode><App></App></React.StrictMode>);