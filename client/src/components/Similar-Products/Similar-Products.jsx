import React, { Component, useState, useEffect, useCallback } from 'react';
import Carousel from "./Carousel.jsx";
import axios from "axios";
import Modal from "./Modal.jsx";
import Card from "./Card.jsx";

export const CardsContext = React.createContext();

export default function RelatedProducts() {

  const [related_cards, setRelatedCards] = useState(
    [
      { id: 1, name: "coolpants", category: "pants", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", active: true },
      { id: 2, name: "coolhat", category: "hats", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg", active: true },
      { id: 3, name: "coolshirt", category: "shirts", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg", active: true },
      { id: 4, name: "coolshoes", category: "Jackets", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: true },
      { id: 5, name: "coolbill", category: "Jackets", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 6, name: "coolrunners", category: "Jackets", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },
      { id: 7, name: "coolluke", category: "Jackets", price: "$140.00", url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg", active: false },

    ]
  );

  const [outfit_cards, setOutfitCards] = useState(
    [
      { id: 1, name: "Add to outfit", category: "", price: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Circled_plus.svg/1200px-Circled_plus.svg.png", active: true }
    ]
  );

  const [isStarClicked, setHandleStarClick] = useState({ isClicked: false, cardId: 0 });

  function toggleModal(isClicked, cardId) {
    setHandleStarClick({ isClicked: isClicked, cardId: cardId })
  }

  // make wrapper function to set state for RelatedProducts
  const setRelatedCardsState = useCallback(val => {
    setRelatedCards(val);
  }, [setRelatedCards]);

  // make wrapper function to set state for Outfit
  const setOutfitCardsState = useCallback(val => {
    setOutfitCards(val);
  }, [setOutfitCards]);

  const getRelatedProductsAndStore = async () => {
    // First axios call fetches all related product data.It gets back an array of all related products ie.
    /* [
      37311,
      37312,
      37314,
    ] */
    // Second and Third axios calls are wrapped in a loop and make a get request for each individual product in the array
    // the information is stored in an object (id, name, category, price, url etc..) which is pushed to an array
    // at the end the state is updated with the correct information

    // NOTE*** the await keyword means it will wait until it fetches everything before proceeding ***
    // ** this is an async function **





    const { data } = await axios.get('/api/related', { params: { product_id: '37314' } });
    let currentSelectedProduct = await axios.get('/api/product', { params: { product_id: '37314' } });
    let card = {};
    card["id"] = 0;
    card["features"] = currentSelectedProduct.data.features;


    let array = [];
    array.push(card);
    let i = 1;
    for (let id of data) {
      let card = {};
      let product = await axios.get('/api/product', { params: { product_id: id } });
      card["id"] = i;
      card["name"] = product.data.name;
      card["category"] = product.data.category;
      card["price"] = "$" + product.data.default_price;
      card["features"] = product.data.features;

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

      // gets reviews loops through and get the average
      let productRating = await axios.get('/api/reviews', { params: { product_id: id } });
      let total = 0;
      for (let data of productRating.data.results) {
        total += data.rating;
      }

      card['rating'] = total / productRating.data.results.length
    }



    setRelatedCards([...array]);
  };


  useEffect(() => {
    getRelatedProductsAndStore();
  }, []);


  return (
    <>
      {
        isStarClicked.isClicked ? <Modal toggleModal={toggleModal} compareCardId={isStarClicked.cardId} cards={related_cards}></Modal> : null
      }

      <div className="relatedProducts pt-60">
        {
          <CardsContext.Provider value={{ cards: related_cards, setParentState: setRelatedCardsState, name: "Related Products", toggleModal: toggleModal }} >
            <Carousel />
          </CardsContext.Provider>
        }
      </div>
      <div className="Outfit pt-10">
        <CardsContext.Provider value={{ cards: outfit_cards, setParentState: setOutfitCardsState, name: "Your Outfit" }} >
          <Carousel />
        </CardsContext.Provider>
      </div>
    </>
  );
}
