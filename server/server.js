//Dependencies
require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

//Middleware
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//Routes

const apiUrl = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";

var axiosGet = function (apiDirName, queryString) {

  let newUrl = apiUrl + apiDirName + queryString;
  let config = {
    method: 'get',
    url: newUrl,
    headers: {
      'Authorization': process.env.APIKEY
    }
  };

  return config;
}

app.get('/reviews', (req, res) => {

  axios(axiosGet('reviews/', '?product_id=37314'))
    .then(function (response) {
      console.log('Good response for reviews');
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log('Error with the Get call', error);
      result = error;
    });
});

app.get('/reviews/meta', (req, res) => {

  axios(axiosGet('reviews/meta/', '?product_id=37314'))
  .then(function (response) {
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log('Error with the Get call', error);
    result = error;
  });

});

app.get('/questions', (req, res) => {
  const option = {
    url: url + 'qa/questions',
    headers: {
      Authorization: process.env.APIKEY
},
  method: 'get'
  };
axios(option)
  .then(result => res.status(200).json(result))
    .catch (err => console.log('get data from questions fail', err));
});

// Modules

//Connection
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`)