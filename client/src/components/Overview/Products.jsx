import React from 'react';
import ImageCarousel from '../Overview/ImageCarousel/ImageCarousel.jsx';
import Headline from './Header/Headline.jsx';
import BagInteractButtons from './BagButtons/BagInteractButtons.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ProductInfo from './StyleSelector/ProductInfo.jsx';
import ProductBlurb from './ProductDesc/ProductBlurb.jsx';
const axios = require('axios');




class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      horizontalCar: [],
      verticalCar: [],
      productData: [],
      activeStyle: []
    }
    //Function Bindings
  }

  //Function Definitions
  componentDidMount() {
    this.fetchDataStyle();
    this.fetchDataProduct();
  }

  fetchDataStyle() {
    axios.get('/styleData', { params : {product_id: 37314}})
      .then((res) => {
        //Product data will flow to child comps

        //Adds active property.
        //default style is active first
        let data = res.data.results.map((obj, key) => {
          if (obj['default?'] === true) {
            return {...obj, active: true};
          } else {
            return {...obj, active: false};
          }});

        //Isolate active style
        let active = data.filter(element => element.active);

        this.setState({
          horizontalCar: data,
          activeStyle: active
          })
        })
      .catch((err) => {
        console.log('Error is style get' + err)
      });
    }

    fetchDataProduct() {
      axios.get('/productData', { params : {product_id: 37314}})
        .then((res) => {
          this.setState({
            productData: res.data
          })
        })
        .catch((err) => {
          console.log('Error retrieving product data: ', err);
        })
    }

  //Render
  render() {
    //All other sub-components should end up here
    let slideData = [];
    return (

      <div>

        <div className='w-full h-[90px] bg-grey-800'>
          <Headline />
        </div>

        <div className="relative grid grid-cols-2 gap-4 ">
          <div className='justify-center'>
            <ImageCarousel slides={slideData} />
            <ProductBlurb  productData={this.state.productData} />
          </div>
          <div className='relative grid grid-cols-1 justify-center'>
            <ProductInfo productData={this.state.productData} />
            <StyleSelector activeStyle={this.state.activeStyle} />
            <BagInteractButtons activeStyle={this.state.activeStyle} />
          </div>
        </div>

      </div>
    )
  }
};

//export to main app
export default Products;
