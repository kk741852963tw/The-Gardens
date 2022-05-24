import React, { useState } from "react";
import Card from "./Card.jsx";


export default function Carousel() {
  const [cards, setCards] = useState(
    [
      { idx: 1, pos: 1, text: "1", active: true },
      { idx: 2, pos: 2, text: "2", active: true },
      { idx: 3, pos: 3, text: "3", active: true },
      { idx: 4, pos: 4, text: "4", active: false },
      { idx: 5, pos: 5, text: "5", active: false },
      { idx: 6, pos: 6, text: "6", active: false },
      { idx: 7, pos: 7, text: "7", active: false },
    ]
  );

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];

    let newPrevState = prevState.filter((element) => element.active === true);
    let firstActiveElementIdx = newPrevState[0].idx;

    // see if there is an element before firstActiveElement

    if(prevState[firstActiveElementIdx - 2] !== undefined) {
      prevState[firstActiveElementIdx - 2].active = true;
      // change last Item active to false
      prevState[newPrevState[newPrevState.length - 1].idx -1].active = false;
    } else {

    }
    setCards(prevState);
  }
  const handleRightClick = () => {

    const prevState = [...cards];

    let newPrevState = prevState.filter((element) => element.active === true);
    let lastActiveElementIdx = newPrevState[newPrevState.length - 1].idx;

    if (prevState[lastActiveElementIdx] !== undefined) {
      prevState[lastActiveElementIdx].active = true;
      // change first items active to false
      for(let element of prevState) {
        if(element.active === true) {
          element.active = false;
          break;
        }
      }
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
