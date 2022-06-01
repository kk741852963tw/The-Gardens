import { React, useEffect } from 'react'

export default function Card({ card, toggleModal }) {

  useEffect(() => {
    let newWidth = card.rating / 5 * 100;
    newWidth = newWidth.toString() + '%';
    document.getElementById(card.id).style.width = newWidth;
    document.getElementById(card.id).style.color = 'orange';
  });

  return (
    <>

      <div className="group relative">
        <div >
          <i className="z-10 absolute fa-regular fa-star" onClick={(e) => { toggleModal(true, card.id) }}></i>
        </div>
        <div
          className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={card.url} alt="Front of men&#039;s Basic Tee in black."
            className="w-full h-full object-center object-cover lg:w-full lg:h-full">
          </img>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {card.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{card.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{card.price}</p>
          <div className="float-left pt-5">
            <div className="star-ratings text-lg text-gray-400 relative m-0 p-0 ">
              <div id={card.id} className="fill-ratings p-0 absolute z-[1] block top-0 left-0 truncate ">
                <span className="inline-block">★★★★★</span>
              </div>
              <div className="empty-ratings p-0 z-0 block">
                <span className="inline-block ">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

