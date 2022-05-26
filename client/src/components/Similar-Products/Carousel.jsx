import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";


export const CardsContext = React.createContext();

export default function Carousel() {
  const [cards, setCards] = useState(
    [
      { id: 1, name: "coolpants", category: "pants", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", active: true },
      { id: 2, name: "coolhat", category: "hats", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg", active: true },
      { id: 3, name: "coolshirt", category: "shirts", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg", active: true },
      { id: 4, name: "coolshoes", category: "Jackets", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: true },
      { id: 5, name: "coolbill", category: "Jackets", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 6, name: "coolrunners", category: "Jackets", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 7, name: "coolluke", category: "Jackets", price: "140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },

    ]
  );

  const getRelatedProductsAndStore = async () => {
    const { data } = await axios.get('/api/related', { params: { product_id: '37314' } });

    let array = [];
    let i = 1;
    for (let id of data) {
      let card = {};
      let product = await axios.get('/api/product', { params: { product_id: id } });
      card["id"] = i;
      card["name"] = product.data.name;
      card["category"] = product.data.category;
      card["price"] = product.data.default_price;

      let productStyle = await axios.get('/api/product/style', { params: { product_id: id } });
      if (productStyle.data.results[0].photos[0].url !== null) {
        card["url"] = productStyle.data.results[0].photos[0].url
      } else {
        card["url"] = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
      }
      if (i > 4) {
        card["active"] = false;
      } else {
        card["active"] = true;
      }
      array.push(card);
      i++;
    }

    setCards([...array]);

  };

  useEffect(() => {
    getRelatedProductsAndStore();
  }, []);



  const handleLeftClick = (isLeft) => {

    // GOAL of handleLeftClick
    // 1. To show the element left of the first ACTIVE(visible) element in the list.
    // If there is no element hide left arrow
    // 2. To hide the Last ACTIVE(visible) element in the list
    const prevState = [...cards];


    let newPrevState = prevState.filter((element) => element.active === true);
    let firstActiveElementId = newPrevState[0].id;

    // set the hidden element
    let hiddenElementBeforeFirst = prevState[firstActiveElementId - 2]

    // check to see if there is an element before firstActiveElement
    if (hiddenElementBeforeFirst !== undefined) {
      hiddenElementBeforeFirst.active = true;

      // set last active element
      let lastActiveElement = prevState[newPrevState[newPrevState.length - 1].id - 1]
      // Hide the last active element
      lastActiveElement.active = false;
    } else {
      alert("no more elements left here TODO: hide left arrow!")
    }
    setCards(prevState);
  }
  const handleRightClick = () => {
    // GOAL of handleRightClick
    // 1. To show the element right of the last ACTIVE(visible) element in list.
    // If there is no element hide right arrow
    // 2. To hide the First ACTIVE(visible) element in the list

    const prevState = [...cards];

    let newPrevState = prevState.filter((element) => element.active === true);
    let lastActiveElementId = newPrevState[newPrevState.length - 1].id;

    if (prevState[lastActiveElementId] !== undefined) {
      prevState[lastActiveElementId].active = true;

      // set first ACTIVE(visible) element
      let firstActiveElement = prevState[newPrevState[0].id - 1];
      // change first ACTIVE(visible) element to false
      firstActiveElement.active = false;
    } else {
      alert("last Element in the List!! TODO: hide Arrow");
    }



    setCards(prevState);
  };


  return (
    <>
      <div class="flex mx-auto max-w-7xl">
        <div class="flex-none m-0 pt-72 max-h-0">
          <div onClick={() => handleLeftClick()} className="text-xl md:text-5xl cursor-pointer">
            <i class=" w-half fa-regular fa-circle-left flex items-left "></i>
          </div>
        </div>
        <div class="flex-1 w-64">
        <div className="bg-white max-w-7xl" >
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Related Products</h2>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              cards.map((card) => {
                if (card.active === true)
                  return (<CardsContext.Provider value={card}>
                    <Card />
                  </CardsContext.Provider>)
              })
            }

          </div>
        </div>
      </div>
        </div>
        <div class="flex-none m-0 pt-72 max-h-0">
          <div onClick={() => handleRightClick()} className="text-xl md:text-5xl cursor-pointer">
            <i class="fa-regular fa-circle-right items-right"></i>
          </div>
        </div>
      </div>




    </>
  );
}
