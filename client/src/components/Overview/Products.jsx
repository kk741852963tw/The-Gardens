import React from 'react';
import Headline from './Headline.jsx';
import BagInteractButtons from './BagInteractButtons.jsx';
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
      <div>
        <div>
          <Headline />
        </div>
        <div>
          <BagInteractButtons className='flex'/>
        </div>

      </div>
    )
  }
};

//export to main app
export default Products;
