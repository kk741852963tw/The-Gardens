import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom";

import Card from '../src/components/Similar-Products/Card.jsx';
/* import Carousel from '../src/components/Q&A/components/Question.jsx';
import Modal from '../src/components/Q&A/components/Search.jsx';
import SimilarProducts from '../src/components/Q&A/components/Image.jsx';
 */



test('render Card', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card></Card>, div);
});
