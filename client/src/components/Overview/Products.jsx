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
      allStyles: [],
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
          horizontalCar: active,
          activeStyle: active,
          allStyles: data
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
    //Splits thumbnails and ids for vertical carousel
    //and style selector components
    const thumbnailArray = [];
      for (let i = 0; i < this.state.allStyles.length; i++) {
        let current = this.state.allStyles[i];
        let innerObj = {
          style_id: current.style_id,
          image: current.photos[0].thumbnail_url,
          name: current.name
        };
        thumbnailArray.push(innerObj);
      }

    return (

      <div>

        <div className='w-full h-[90px] bg-grey-800'>
          <Headline />
        </div>

        <div className="relative grid grid-cols-2 gap-4 ">
          <div className='justify-center'>
            <ImageCarousel activeStyle={this.state.activeStyle} />
            <ProductBlurb  productData={this.state.productData} />
          </div>
          <div className='relative grid grid-cols-1 justify-center'>
            <ProductInfo productData={this.state.productData} />
            <StyleSelector thumbnailArray={thumbnailArray}
                           updateActive={this.updateActive}
                           activeStyle={this.state.activeStyle} />
            <BagInteractButtons activeStyle={this.state.activeStyle} />
          </div>
        </div>

      </div>
    )
  }
};

//export to main app
export default Products;
