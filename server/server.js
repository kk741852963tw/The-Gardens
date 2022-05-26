//Dependencies
require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

//Middleware
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";


//========================== PHILIP'S ROUTES ============================
app.get('/api/related', (req, res) => {
  const config = {
    headers: { Authorization: `${ process.env.TOKEN }` }
  }
  axios.get(url + `products/${req.query.product_id}/related`, config)
  .then((result) => res.status(200).json(result.data))
  .catch((err) => console.log('get data from API fail', err));
});

app.get('/api/product', (req, res) => {
  const config = {
    headers: { Authorization: `${ process.env.TOKEN }` }
  }
  axios.get(url + `products/${req.query.product_id}`, config)
  .then((result) => res.status(200).json(result.data))
  .catch((err) => console.log('failed to fetch /api/product/', err));
});

app.get('/api/product/style', (req, res) => {  const config = {
    headers: { Authorization: `${ process.env.TOKEN }` }
  }
  axios.get(url + `products/${req.query.product_id}/styles`, config)
  .then((result) => res.status(200).json(result.data))
  .catch((err) => console.log('failed to fetch /api/product/styles', err));
});

// ========================END PHILIP'S ROUTES ================

//Routes

///////////////////////////////////////////////////////////////////////
//
// The following section contains server routes
// handling data for the Questions and Answers
// section.
//
///////////////////////////////////////////////////////////////////////

app.get('/questions', (req, res) => {
  const option = {
    url: url + `qa/questions?product_id=${req.query.product_id}&page=2`,
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'get'
    };
  axios(option)
    .then(result => res.status(200).json(result.data))
    .catch (err => console.log('get data from API fail', err));
});

app.put('/answers', (req, res) => {
  const option = {
    url: url + `qa/answers/${req.body.answer_id}/${req.body.type}`,
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'put'
  };
  axios(option)
    .then(result => res.status(204).end())
    .catch (err => console.log(`put answer ${req.body.type} to API fail`, err));
});

app.put('/questions', (req, res) => {
  const option = {
    url: url + `qa/questions/${req.body.question_id}/${req.body.type}`,
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'put'
  };
  axios(option)
    .then(result => res.status(204).end())
    .catch (err => console.log(`put question ${req.body.type} to API fail`, err));
});

///////////////////////////////////////////////////////////////////////
//
// The following contains server routes handling the data for
// Overview section
//
///////////////////////////////////////////////////////////////////////


//Connection
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);