//Dependencies
require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

//Middleware
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';

//========================== PHILIP'S ROUTES ============================
app.get('/api/related', (req, res) => {
  const config = {
    headers: { Authorization: process.env.TOKEN }
  }
  axios.get(url + `products/${req.query.product_id}/related`, config)
    .then((result) => res.status(200).json(result.data))
    .catch((err) => console.log('get data from API fail', err));
});

app.get('/api/product', (req, res) => {
  const config = {
    headers: { Authorization: `${process.env.TOKEN}` }
  }
  axios.get(url + `products/${req.query.product_id}`, config)
    .then((result) => res.status(200).json(result.data))
    .catch((err) => console.log('failed to fetch /api/product/', err));
});

app.get('/api/product/style', (req, res) => {
  const config = {
    headers: { Authorization: `${process.env.TOKEN}` }
  }
  axios.get(url + `products/${req.query.product_id}/styles`, config)
    .then((result) => res.status(200).json(result.data))
    .catch((err) => console.log('failed to fetch /api/product/styles', err));
});

// ========================END PHILIP'S ROUTES ================


// ======================== Hakeem's ROUTES ==================
var hackConfig = function (apiDirName, queryString = '?product_id=37314&page=1&count=25', method = 'get', data = '') {

  let newUrl = url + apiDirName + queryString;
  let config = {
    method,
    url: newUrl,
    headers: {
      'Authorization': process.env.TOKEN
    },
    data
  };

  return config;
}

var hackConfigParam = function (apiDirName, {product_id, page = 1, count = 100}, method = 'get', data = '') {

  console.log('page and count', count);
  let newUrl = url + apiDirName;
  let config = {
    method,
    url: newUrl,
    headers: {
      'Authorization': process.env.TOKEN
    },
    params:{
      product_id: product_id.toString(),
      page: page.toString(),
      count: count.toString()
    },
    data
  };

  return config;
}

// Take in a value for the page and count
// Hold the state of the page and count in Ratings and Reviews

app.get('/reviews', (req, res) => {

  // console.log('test params', req.query);

  axios(hackConfigParam('reviews/', req.query))
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log('Error with the Get call', error);
      result = error;
    });
});

app.get('/reviews/meta', (req, res) => {

  axios(hackConfig('reviews/meta/', '?product_id=37314'))
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log('Error with the Get call', error);
      result = error;
    });
});

app.post('/add/reviews', (req, res) => {

  axios(hackConfig('reviews', '', 'post', req.body))
    .then(data => (
      console.log('Passed here is data', data.data),
      res.status(201).end()
    ))
    .catch(err => (
      console.log('Error with post reviews call', err)
    ));
});
  // ======================== END Hakeem's ROUTES ==================


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
    url: url + `qa/questions?product_id=${req.query.product_id}&count=100`,
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'get'
  };
  axios(option)
    .then(result => res.status(200).json(result.data))
    .catch(err => console.log('get data from API fail', err));
});

app.put('/answers', (req, res) => {
  const option = {
    url: url + `qa/answers/${req.body.answer_id}/${req.body.type}`,
    headers: { Authorization: `${process.env.TOKEN}` },
    method: 'put'
  };
  axios(option)
    .then(result => res.status(204).end())
    .catch(err => console.log(`put answer ${req.body.type} to API fail`, err));
});

app.put('/questions', (req, res) => {
  const option = {
    url: url + `qa/questions/${req.body.question_id}/${req.body.type}`,
    headers: { Authorization: `${process.env.TOKEN}` },
    method: 'put'
  };
  axios(option)
    .then(result => res.status(204).end())
    .catch(err => console.log(`put question ${req.body.type} to API fail`, err));
});

app.post('/questions', (req, res) => {
  const option = {
    url: url + 'qa/questions',
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'post',
    data: req.body
  };
  axios(option)
    .then(result => res.status(201).end())
    .catch (err => console.log(`post question to API fail`, err));
});

// Modules
///////////////////////////////////////////////////////////////////////
//
// The following contains server routes handling the data for
// Overview section
//
///////////////////////////////////////////////////////////////////////


//Connection
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);