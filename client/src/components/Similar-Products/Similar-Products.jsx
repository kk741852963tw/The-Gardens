import React, { Component, useState, useEffect, useCallback } from 'react';
import Carousel from "./Carousel.jsx";
import axios from "axios";

export const CardsContext = React.createContext();

export default function Counter() {

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

  // make wrapper function to set state for RelatedProducts
  const setRelatedCardsState = useCallback(val => {
    setRelatedCards(val);
  }, [setRelatedCards]);

    // make wrapper function to set state for Outfit
    const setOutfitCardsState = useCallback(val => {
      setOutfitCards(val);
    }, [setOutfitCards]);


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
      card["price"] = "$" + product.data.default_price;

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

    setRelatedCards([...array]);

  };

  useEffect(() => {
    getRelatedProductsAndStore();
  }, []);

  return (
    <>
      <div className="relatedProducts pt-60">
        {
          <CardsContext.Provider value={{ cards: related_cards, setParentState: setRelatedCardsState, name:"Related Products"}} >
            <Carousel />
          </CardsContext.Provider>
        }
      </div>
      <div className="Outfit pt-10">
        <CardsContext.Provider value={{ cards: outfit_cards, setParentState: setOutfitCardsState, name:"Your Outfit"}} >
          <Carousel />
        </CardsContext.Provider>
      </div>
    </>
  );
}
