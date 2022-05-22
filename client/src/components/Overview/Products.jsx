import React from 'react';
import Headline from './Headline.jsx';
const axios = require('axios');
class Products extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     display: []
  //    }

  //   //Function Bindings

  // }
  //Functions

  //Render
  render() {
    //All other sub-components should end up here
    return (
      <div className='outer-container-overview'>
        <Headline />
      </div>
    )
  }
};

//export to main app
export default Products;
