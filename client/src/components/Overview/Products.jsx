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
      activeStyle: [],
      cartSize: '',
      cartQuant: 0
    }
    //Function Bindings
    this.updateActive = this.updateActive.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.sizeListener = this.sizeListener.bind(this);
    this.quantityListener = this.quantityListener.bind(this);
  }

  //Function Definitions
  componentDidMount() {
    this.fetchDataProduct();
    this.fetchDataStyle();
  }


  fetchDataStyle() {
    axios.get('/styleData', { params : {product_id: 37315}})
      .then((res) => {
        //Adds active property.
        //default style is active first
        let data = res.data.results.map((obj, key) => {
          if (obj['default?'] === true) {
            return {...obj, active: true};
          } else {
            return {...obj, active: false};
          }});

        //Isolate active style
        let active = data.filter(element => element['default?']);

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
      axios.get('/productData', { params : {product_id: 37315}})
      .then((res) => {
        this.setState({
          productData: res.data
        })
      })
      .catch((err) => {
        console.log('Error retrieving product data: ', err);
      })
    }

    updateActive(e) {
      //pull out state to avoid changes
      let styles = this.state.allStyles;
      //update active flag
      for (let i = 0; i < styles.length; i ++ ) {
        if (styles[i].active) {
          styles[i].active = false;
        }

        if (styles[i].style_id === Number(e.target.name)) {
          //Set active flag
          styles[i].active = true;
          //Wrap in brackets
          //Data downstream expects array of one object
          this.setState({
            activeStyle: [styles[i]]
          })
        }
      }
    }

    addToCart() {
      if (this.state.cartSize === '') {
        alert('You must choose a size.');

      } else {
        axios.post('/cartData', {id: this.state.cartSize})
        .then((res) => {
          console.log('Item Added!');
        })
        .catch((err) => {
          console.log('Failed to add to cart.', err);
        })
      }
    }

    //Event Listeners
    sizeListener(size) {
      this.setState({
        cartSize: size
      })
    }

    quantityListener(e) {
      this.setState({
        cartQuant: e.target.value
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

        <div className="grid grid-cols-5 gap-4 h-96">
          <div className='h-full flex flex-col col-span-4 justify-center'>
            <ImageCarousel activeStyle={this.state.activeStyle} />

          </div>
          <div className='relative grid grid-cols-1 justify-center'>

            <ProductInfo productData={this.state.productData} />

            <StyleSelector thumbnailArray={thumbnailArray}
                           updateActive={this.updateActive}
                           activeStyle={this.state.activeStyle} />
            <BagInteractButtons activeStyle={this.state.activeStyle}
                                sizeListener={this.sizeListener}
                                quantityListener={this.quantityListener}
                                addToCart={this.addToCart}
                                cartSize={this.state.cartSize}/>
          </div>
        </div>

            <div className="float-none mt-4">
            <ProductBlurb  productData={this.state.productData} />
            </div>
      </div>
    )
  }
};

//export to main app
export default Products;
