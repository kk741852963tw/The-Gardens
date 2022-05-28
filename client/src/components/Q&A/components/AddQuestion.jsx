//need modify;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddQuestion(props) {

  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestion = function(e) {
    setQuestion(e.target.value);
  }

  const handleName = function(e) {
    setName(e.target.value);
  }

  const handleEmail = function(e) {
    setEmail(e.target.value);
  }

  const handleCancel = function() {
    props.status();
  }

  const handleSubmit = function() {
    if (!question || !name || !email) {
      const tempArray = [];
      if (!question) {
        tempArray.push('Your Question');
      }
      if (!name) {
        tempArray.push('What is your nickname');
      }
      if (!email) {
        tempArray.push('Your email');
      }
      const tempString = tempArray.join(', ');
      alert('You must enter the following: \n' + tempString);
    } else if (!email.includes('@') || !email.includes('.') || email.includes('@.')) {
      alert('You must enter the following: \n' + 'Your email');
    } else {
      axios.post('/questions', {
        body: question,
        name: name,
        email: email,
        product_id: Number(props.product_id)
      });
      props.status();
    }
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 425.75"><path fill-rule="nonzero" d="m105.77 362.14 60.82-58.31c2.08 10.53 5.05 20.9 8.9 31.01l-73.32 70.31a14.327 14.327 0 0 1-10.72 4.81c-7.91 0-14.32-6.41-14.32-14.32v-69.23H34.74c-9.01 0-17.24-3.54-23.42-9.22l-1.1-.99C3.93 309.9 0 301.17 0 291.67V34.74c0-9.49 3.98-18.21 10.25-24.49C16.53 3.98 25.25 0 34.74 0h325.58c9.48 0 18.22 3.94 24.51 10.24 6.25 6.25 10.21 14.95 10.21 24.5v46.68c-9.44-2.12-19.02-3.54-28.64-4.2V34.74c0-1.64-.71-3.16-1.81-4.26-1.11-1.12-2.66-1.84-4.27-1.84H34.74c-1.6 0-3.13.74-4.25 1.85-1.11 1.12-1.85 2.65-1.85 4.25v256.93c0 1.62.71 3.17 1.82 4.29l.4.4c1.05.86 2.42 1.4 3.88 1.4h56.71c7.91 0 14.32 6.42 14.32 14.32v50.06zm296.32-56.12c4.82 3.35 7.98 5.48 9.47 6.34 2.18 1.25 5.19 2.71 8.94 4.38l-10.73 21.7c-5.39-2.62-10.77-5.73-16.07-9.35-5.32-3.62-9.02-6.34-11.13-8.15-8.55 3.72-19.29 5.59-32.19 5.59-19.08 0-34.14-4.97-45.15-14.91-13.02-11.75-19.54-28.25-19.54-49.53 0-20.66 5.69-36.7 17.09-48.14 11.4-11.43 27.28-17.15 47.73-17.15 20.84 0 36.91 5.57 48.25 16.76 11.34 11.17 17 27.18 17 47.97 0 18.54-4.55 33.34-13.67 44.49zm-29.71-19.91c3.1-5.51 4.64-13.79 4.64-24.8 0-12.65-2.37-21.69-7.07-27.12-4.74-5.41-11.21-8.12-19.51-8.12-7.76 0-14.01 2.77-18.8 8.3-4.81 5.53-7.21 14.17-7.21 25.91 0 13.71 2.34 23.31 7 28.84 4.72 5.53 11.15 8.3 19.29 8.3 2.64 0 5.12-.26 7.46-.75-3.27-3.17-8.42-6.12-15.47-8.92l6.09-13.94c3.45.61 6.13 1.4 8.04 2.32 1.93.9 5.66 3.29 11.25 7.18 1.31.9 2.74 1.84 4.29 2.8zm93.06-131.61C496.47 185.65 512 226.28 512 266.86c0 39.95-15.06 79.96-45.12 110.8l-1.41 1.54c-31.14 31.02-71.78 46.55-112.37 46.55-40.67 0-81.34-15.53-112.35-46.54-31.02-31.14-46.54-71.76-46.54-112.35 0-40.65 15.52-81.33 46.53-112.33 31.15-31.04 71.78-46.56 112.36-46.56 39.95 0 79.96 15.06 110.8 45.11l1.54 1.42zm-17.68 17.71c-52.28-52.28-137.05-52.28-189.31 0-52.29 52.27-52.29 137.03 0 189.31 52.26 52.27 137.03 52.27 189.31 0 52.28-52.28 52.28-137.04 0-189.31zM98.27 128.75c-7.91 0-14.32-6.42-14.32-14.32 0-7.91 6.41-14.32 14.32-14.32h163.44a190.334 190.334 0 0 0-39.27 28.64H98.27zm0 84.73c-7.91 0-14.32-6.41-14.32-14.32 0-7.9 6.41-14.32 14.32-14.32h83.27c-4.44 9.31-8.1 18.87-10.94 28.64H98.27z"/></svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Ask Your Question</h3>
                  <h5 className="text-base leading-5 font-medium text-gray-500">About the {props.product_name}.</h5>
                  <div className="mb-6">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Question (*)</label>
                    <textarea id="large-input" rows="10" cols="100 "maxlength="1000" onChange={handleQuestion} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                  </div>
                  <div className="mb-6">
                    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your nickname (*)</label>
                    <input type="text" id="small-input" maxlength="60" onChange={handleName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: jackson11!"></input>
                    For privacy reasons, do not use your full name or email address” will appear.
                  </div>
                  <div>
                    <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email (*)</label>
                    <input type="text" id="small-input" maxlength="60" onChange={handleEmail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Why did you like the product or not?"></input>
                    For authentication reasons, you will not be emailed” will appear.
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
              <button type="button" onClick={handleCancel} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}