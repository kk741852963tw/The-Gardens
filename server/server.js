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

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";
// const products = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products";
// const reviews = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews";
// const questions = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions";
// const cart = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart";
// const interactions = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions";

//app.get('/overview');


app.get('/rnr', (req, res) => {

  // A query parameter to grab the data related to the
  // current id of the product.
  // add header authorization.
  axios.get(reviews)
  .then( result => res.status(200).send(JSON.stringify(result)))
  .catch(err => console.log('The api call did not work error: ', err);)
});

app.get('/questions', (req, res) => {
  const option = {
    url: url + 'qa/questions',
    headers: {
      Authorization: ${process.env.TOKEN}
    },
    method: 'get'
  };
  axios(option)
    .then(result => res.status(200).json(result);)
    .catch(err => console.log('get data from questions fail', err););
});

// Modules

//Connection
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`)