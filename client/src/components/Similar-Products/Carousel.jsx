import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import { CardsContext } from './Similar-Products.jsx';



export default function Carousel(setParentState) {
  const cards = useContext(CardsContext);

  console.log('oh please', setParentState.setParentState)
  //const setCards = useContext({setCards});





  const handleLeftClick = () => {

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
    // setCards(prevState);
    setParentState.setParentState(prevState);
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



    setParentState.setParentState(prevState);
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
                      return (
                        <Card card={card} />
                      )
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
