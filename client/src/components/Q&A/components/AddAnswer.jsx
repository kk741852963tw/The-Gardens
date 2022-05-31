import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddAnswer(props) {

  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState([]);
  const [imagedisplay, setImageD] = useState([]);
  const [count, setCount] = useState(0);
  const [spec, setSpec] = useState([".tiff", ".pjp", ".jfif", ".bmp", ".gif", ".svg", ".png", ".xbm", ".dib", ".jxl", ".jpeg", ".svgz", ".jpg", ".webp", ".ico", ".tif", "pjpeg", ".avif"]);
  const [string, setString] = useState('');
  const fileInput = React.useRef();

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
    setImage([]);
    setImageD([]);
    setCount(0);
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
    } else if (!email.includes('@') || !email.includes('.') || email.includes('@.')) {
      alert('You must enter the following: \n' + 'Your email');
    } else {
      axios.post('/answers', {
        body: answer,
        name: name,
        email: email,
        photos: image,
        question_id: props.question_id
      });
      setImage([]);
      setImageD([]);
      setCount(0);
      props.status();
    }
  }

  const handleImage = function(e) {
    let fileFormat = e.target.value.substring(e.target.value.indexOf('.'), e.target.value.length);
    setString('loading...');
    if (spec.includes(fileFormat)) {
      let form = new FormData();
      form.append('image', e.target.files[0]);
      let obj = {
        url: 'https://api.imgbb.com/1/upload?key=3abacdca587b407502b6eb59570ac4f3', //ImgBB API
        method: 'post',
        "data": form
      };
      axios(obj).then(result => {
        setImage([...image, result.data.data.url]);
        setCount(count + 1);
        let reader = URL.createObjectURL(e.target.files[0]);
        setString('');
        setImageD([...imagedisplay, reader]);
      }).catch(err => console.log('err'));
      // let reader = new FileReader();
      // console.log(URL.createObjectURL(e.target.files[0]));
      // reader.readAsDataURL(e.target.files[0]);
      // reader.onload = function () {
      //   setImage([...image, reader.result]);
      //   setCount(count + 1);
      // }
    } else {
      alert('Data is not the image');
    }
  }

  const handleUrl = function(e) {
    const tempImage = new Image();
    tempImage.onload = function() {
      if (this.width > 0) {
        setImage([...image, e.target.value]);
        setImageD([...imagedisplay, e.target.value]);
        setTimeout(() => {
          e.target.value = null;
          setCount(count + 1);
        }, 500);
      } else {
        alert('Url is not the image');
      };
    }
    tempImage.onerror = function() {
      alert('Url is not the image');
    };
    tempImage.src = e.target.value;
  }

  const refClick = function() {
    fileInput.current.click();
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
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 425.75"><path fill-rule="nonzero" d="m105.77 362.14 60.82-58.31c2.08 10.53 5.05 20.9 8.9 31.01l-73.32 70.31a14.327 14.327 0 0 1-10.72 4.81c-7.91 0-14.32-6.41-14.32-14.32v-69.23H34.74c-9.01 0-17.24-3.54-23.42-9.22l-1.1-.99C3.93 309.9 0 301.17 0 291.67V34.74c0-9.49 3.98-18.21 10.25-24.49C16.53 3.98 25.25 0 34.74 0h325.58c9.48 0 18.22 3.94 24.51 10.24 6.25 6.25 10.21 14.95 10.21 24.5v46.68c-9.44-2.12-19.02-3.54-28.64-4.2V34.74c0-1.64-.71-3.16-1.81-4.26-1.11-1.12-2.66-1.84-4.27-1.84H34.74c-1.6 0-3.13.74-4.25 1.85-1.11 1.12-1.85 2.65-1.85 4.25v256.93c0 1.62.71 3.17 1.82 4.29l.4.4c1.05.86 2.42 1.4 3.88 1.4h56.71c7.91 0 14.32 6.42 14.32 14.32v50.06zM465.44 154.5C496.47 185.65 512 226.28 512 266.86c0 39.95-15.06 79.96-45.12 110.8l-1.41 1.54c-31.14 31.02-71.78 46.55-112.37 46.55-40.67 0-81.34-15.53-112.35-46.54-31.02-31.14-46.54-71.76-46.54-112.35 0-40.65 15.52-81.33 46.53-112.33 31.15-31.04 71.78-46.56 112.36-46.56 39.95 0 79.96 15.06 110.8 45.11l1.54 1.42zm-90.86 149.78h-43.94l-6.31 20.7h-39.59l47.24-125.53h42.45l47.04 125.53h-40.61l-6.28-20.7zm-8.21-27.16L352.67 232l-13.77 45.12h27.47zm81.39-104.91c-52.28-52.28-137.05-52.28-189.31 0-52.29 52.27-52.29 137.03 0 189.31 52.26 52.27 137.03 52.27 189.31 0 52.28-52.28 52.28-137.04 0-189.31zM98.27 128.75c-7.91 0-14.32-6.42-14.32-14.32 0-7.91 6.41-14.32 14.32-14.32h163.44a190.334 190.334 0 0 0-39.27 28.64H98.27zm0 84.73c-7.91 0-14.32-6.41-14.32-14.32 0-7.9 6.41-14.32 14.32-14.32h83.27c-4.44 9.31-8.1 18.87-10.94 28.64H98.27z"/></svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 h-10" id="modal-title">Submit your Answer</h3>
                  <h5 className="text-xl font-medium text-gray-900">{props.product_name} : {props.body}</h5><br></br>
                  <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 underline font-medium text-gray-900 dark:text-gray-300">Your Answer (*)</label>
                    <textarea id="large-input" rows="10" cols="100 "maxLength="1000" onChange={handleAnswer} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 underline font-medium text-gray-900 dark:text-gray-300">What is your nickname (*)</label>
                    <input type="text" id="small-input" maxLength="60" onChange={handleName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: jack543!"></input>
                    <span className="text-xs text-gray-900">For privacy reasons, do not use your full name or email address” will appear.</span>
                  </div>
                  <div>
                    <label htmlFor="small-input" className="block mb-2 underline font-medium text-gray-900 dark:text-gray-300">Your email (*)</label>
                    <input type="text" id="small-input" maxLength="60" onChange={handleEmail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: jack@email.com"></input>
                    <span className="text-xs text-gray-900">For authentication reasons, you will not be emailed” will appear.</span>
                  </div>
                  <br></br>
                  <div>
                    <label htmlFor="image" className="block mb-2 underline font-medium text-gray-900 dark:text-gray-300">Upload your photos</label>
                    {count < 5 ?
                    <div className="flex justify-start">
                      <input className="hidden" type="file" id="image" onChange={handleImage} accept="image/*" ref={fileInput}></input>
                      <button className="mr-3 bg-white hover:bg-gray-300 border-2 border-stone-900 shadow shadow-blue-500/40 px-1 rounded-full" onClick={refClick}>Pick File</button>
                      <span className="mx-1 flex flex-col justify-center">Or</span>
                      <input type="text" onChange={handleUrl} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-3" placeholder="Url of the image"></input>
                    </div> : <></>}
                    <br></br>
                    {imagedisplay.map(element => {
                      return <img src={element} className="h-18 w-32 mr-2 object-contain inline rounded-md"></img>
                    })}
                    {string}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
              <button type="button" onClick={handleCancel} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}