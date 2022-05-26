import React from 'react';

const Characteristics = function (props) {

  /**
   * Width
   * Comfort
   * Quality
   * Size
   * Length
   * Fit
   */

  if (props.trait) {
    if (props.traitName === 'Fit') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    } else if (props.traitName === 'Length') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    } else if (props.traitName === 'Comfort') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    } else if (props.traitName === 'Quality') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    } else if (props.traitName === 'Size') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    } else if (props.traitName === 'Width') {
      return (
        <div className= "mb-3">
          <h6>{props.traitName}</h6>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-gray-600 h-1 w-1/4"></div>
          </div>
        </div>
      );
    }
  }

}

export default Characteristics;