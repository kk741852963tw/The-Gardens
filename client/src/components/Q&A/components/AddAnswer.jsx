import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import dotenv from "dotenv";

//dotenv.config();

export default function AddAnswer(props) {

  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(0);
  const [spec, setSpec] = useState([".tiff", ".pjp", ".jfif", ".bmp", ".gif", ".svg", ".png", ".xbm", ".dib", ".jxl", ".jpeg", ".svgz", ".jpg", ".webp", ".ico", ".tif", "pjpeg", ".avif"]);

  const handleAnswer= function(e) {
    setAnswer(e.target.value);
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
    if (!answer || !name || !email) {
      const tempArray = [];
      if (!answer) {
        tempArray.push('Your Answer');
      }
      if (!name) {
        tempArray.push('What is your nickname');
      }
      if (!email) {
        tempArray.push('Your email');
      }
      const tempString = tempArray.join(', ');
      alert('You must enter the following: \n' + tempString);
    } else if (!email.includes('@') || !email.includes('.') || mail.includes('@.')) {
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

  const handleImage = function(e) {
    let fileFormat = e.target.value.substring(e.target.value.indexOf('.'), e.target.value.length);
    if (spec.includes(fileFormat)) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        setImage([...image, reader.result]);
        setCount(count + 1);
      }
    } else {
      alert('Data is not the image');
    }
  }

  const handleUrl = function(e) {
    let image = new Image();
    image.onload = function() {
      if (this.width > 0) {
        setImage([...image, e.target.value]);
        setTimeout(() => {
          e.target.value = null;
          setCount(count + 1);
        }, 500);
      } else {
        alert('Url is not the image');
      }
    image.onerror = function() {
      alert('Url is not the image');
    }
    image.src = e.target.value;
  }
    // let request = new XMLHttpRequest();
    // request.open("GET", e.target.value, true);
    // request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // request.send();
    // request.onload = function() {
    //   if (request.status == 200) {
    //     setImage([...image, e.target.value]);
    //     setTimeout(() => {
    //       e.target.value = null;
    //       setCount(count + 1);
    //     }, 500);
    //   } else {
    //     alert('Url is not the image');
    //   }
    // }
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Submit your Answer</h3>
                  <h5 className="text-base leading-5 font-medium text-gray-500">{props.product_name} : {props.body}</h5>
                  <div className="mb-6">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Answer (*)</label>
                    <textarea id="large-input" rows="10" cols="100 "maxlength="1000" onChange={handleAnswer} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                  </div>
                  <div className="mb-6">
                    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your nickname (*)</label>
                    <input type="text" id="small-input" maxlength="60" onChange={handleName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: jack543!"></input>
                    For privacy reasons, do not use your full name or email address” will appear.
                  </div>
                  <div>
                    <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email (*)</label>
                    <input type="text" id="small-input" maxlength="60" onChange={handleEmail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: jack@email.com"></input>
                    For authentication reasons, you will not be emailed” will appear.
                  </div>
                  <div>
                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload your photos</label>
                    {count < 5 ?
                    <div>
                      <input type="file" id="image" onChange={handleImage} accept="image/*"></input>
                      <input type="text" onChange={handleUrl} placeholder="Url of the image"></input>
                    </div> : <></>}
                    {image.map(element => {
                      return <img src={element} className="h-9 w-16 inline"></img>
                    })}
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