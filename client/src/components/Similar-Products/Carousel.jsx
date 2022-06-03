import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import { CardsContext } from './Similar-Products.jsx';

export default function Carousel() {
  const parentContext = useContext(CardsContext);

  const handleLeftClick = () => {

    // GOAL of handleLeftClick
    // 1. To show the element left of the first ACTIVE(visible) element in the list.
    // If there is no element hide left arrow
    // 2. To hide the Last ACTIVE(visible) element in the list
    const prevState = [...parentContext.cards];


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
      //unhide right arrow arrow
      let rightArrow = document.getElementById('rightArrow');
      rightArrow.setAttribute('class', 'flex-none m-0 pt-48 pl-12 max-h-0');

    } else {
      //hide left arrow
      let leftArrow = document.getElementById('leftArrow');
      leftArrow.setAttribute('class', 'flex-none m-0 pr-12 pt-48 max-h-0 opacity-40');
    }
    // setCards(prevState);
    parentContext.setParentState(prevState);
  }


  const handleRightClick = () => {
    // GOAL of handleRightClick
    // 1. To show the element right of the last ACTIVE(visible) element in list.
    // If there is no element hide right arrow
    // 2. To hide the First ACTIVE(visible) element in the list

    let rightArrow = document.getElementById('rightArrow');
    //sets prevState filters out the first car which does not need to be displayed
    const prevState = [...parentContext.cards.filter((card) => card.id > 0)];


    let newPrevState = prevState.filter((element) => element.active === true);
    let lastActiveElementId = newPrevState[newPrevState.length - 1].id;

    if (prevState[lastActiveElementId] !== undefined) {

      prevState[lastActiveElementId].active = true;

      // set first ACTIVE(visible) element
      let firstActiveElement = prevState[newPrevState[0].id - 1];
      // change first ACTIVE(visible) element to false
      firstActiveElement.active = false;

      //unhide left arrow
      let leftArrow = document.getElementById('leftArrow');
      leftArrow.setAttribute('class', 'flex-none m-0 pr-12 pt-48 max-h-0');
    } else {
      // hide arrow
      rightArrow.setAttribute('class', 'flex-none m-0 pt-48 pl-12 max-h-0 opacity-40');
    }
    parentContext.setParentState(prevState);
  };

  return (
    <>
      <div className="flex mx-auto max-w-7xl">
        <div id="leftArrow" className="flex-none m-0 pr-12 pt-48 max-h-0 opacity-40">
          <div onClick={() => handleLeftClick()} className="text-xl md:text-5xl cursor-pointer">
            <i className=" w-half fa-regular fa-circle-left flex items-left"></i>
          </div>
        </div>
        <div className="flex-1 w-64">
          <div id="cardDiv" className="max-w-7xl" >
            <div className="max-w-2xl mx-auto py-0 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-700 font-poppins">{parentContext.name}</h2>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                  parentContext.cards.map((card, index) => {
                    if (card.active === true)
                      return (
                        <Card key={index} card={card} toggleModal={parentContext.toggleModal} />
                      )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div id="rightArrow" className="flex-none m-0 pt-48 pl-12 max-h-0">
          <div onClick={() => handleRightClick()} className="text-xl md:text-5xl cursor-pointer">
            <i className="fa-regular fa-circle-right items-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
