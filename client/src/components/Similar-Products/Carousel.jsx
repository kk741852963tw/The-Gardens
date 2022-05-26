import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";


export default function Carousel() {
  const [cards, setCards] = useState(
    [
      { id: 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", active: true },
      { id: 2, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg", active: true },
      { id: 3, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg", active: true },
      { id: 4, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: true },
      { id: 5, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 6, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 7, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },

    ]
  );

  useEffect(
    () => {
      console.log('useEffect! in Carousel.jsx')
      axios.get('api/products/related', {params: {product_id: 37314 }}).then(data => {
       // console.log(data);
      })
      .catch(
        err => {
          console.log(err)
        }
      )
    },
    []
  )


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


      <div className="bg-white" >
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div onClick={() => handleLeftClick()} className="text-xl md:text-5xl cursor-pointer">
            {"<"}
          </div>

          <div onClick={() => handleRightClick()} className="text-xl md:text-5xl cursor-pointer">
            {">"}
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Related Products</h2>

            </div>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              cards.map((card, index) => {
                if (card.active === true)
                  return <Card key={index} imageUrl={card.image} />
              })
            }

          </div>

        </div>
      </div>



    </>
  );
}
