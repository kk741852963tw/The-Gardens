import React, { useState } from "react";
import Card from "./Card.jsx";


export default function Carousel() {
  const [cards, setCards] = useState(
    [
      { idx: 1, text: "1", active: true },
      { idx: 2, text: "2", active: true },
      { idx: 3, text: "3", active: true },
      { idx: 4, text: "4", active: false },
      { idx: 5, text: "5", active: false },
      { idx: 6, text: "6", active: false },
      { idx: 7, text: "7", active: false },
    ]
  );

  const handleLeftClick = (isLeft) => {
    // GOAL of handleLeftClick
    // 1. To show the element left of the first ACTIVE(visible) element in the list.
    // If there is no element hide left arrow
    // 2. To hide the Last ACTIVE(visible) element in the list
    const prevState = [...cards];

    let newPrevState = prevState.filter((element) => element.active === true);
    let firstActiveElementIdx = newPrevState[0].idx;

    // set the hidden element
    let hiddenElementBeforeFirst = prevState[firstActiveElementIdx - 2]

    // check to see if there is an element before firstActiveElement
    if (hiddenElementBeforeFirst !== undefined) {
      hiddenElementBeforeFirst.active = true;

      // set last active element
      let lastActiveElement = prevState[newPrevState[newPrevState.length - 1].idx - 1]
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
    let lastActiveElementIdx = newPrevState[newPrevState.length - 1].idx;

    if (prevState[lastActiveElementIdx] !== undefined) {
      prevState[lastActiveElementIdx].active = true;

      // set first ACTIVE(visible) element
      let firstActiveElement =   prevState[newPrevState[0].idx - 1];
      // change first ACTIVE(visible) element to false
        firstActiveElement.active = false;
    } else {
      alert("last Element in the List!! TODO: hide Arrow");
    }



    setCards(prevState);
  };

  return (
    <>
      <div onClick={() => handleLeftClick()} className="text-xl md:text-5xl cursor-pointer">
        {"<"}
      </div>


      {
        cards.map((card, index) => {
          if (card.active === true)
            return <Card key={index} prop={card.text} />
        })


      }
      <div onClick={() => handleRightClick()} className="text-xl md:text-5xl cursor-pointer">
        {">"}
      </div>

    </>
  );
}
