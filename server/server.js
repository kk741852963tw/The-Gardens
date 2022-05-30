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
const apiUrl = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/";
var axiosGet = function (apiDirName, queryString) {

  let newUrl = apiUrl + apiDirName + queryString;
  let config = {
    method: 'get',
    url: newUrl,
    headers: {
      'Authorization': process.env.TOKEN
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

app.post('/answers', (req, res) => {
  const obj = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos
  };
  const option = {
    url: url + `qa/questions/${req.body.question_id}/answers`,
    headers: { Authorization: `${ process.env.TOKEN }` },
    method: 'post',
    data: obj
  };
  console.log(option);
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

app.get('/styleData', (req, res) => {

  const option ={
    url: url + `products/${req.query.product_id}/styles`,
    headers: { Authorization: process.env.TOKEN },
    method: 'get'
  };

  axios(option)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log('Error in style data Get Method', err)
    });
});

app.get('/productData', (req, res) => {
  const option ={
    url: url + `products/${req.query.product_id}`,
    headers: { Authorization: process.env.TOKEN },
    method: 'get'
  };

  axios(option)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log('Error in server prod data get method', err);
    })
});

app.post('/cartData', (req, res) => {
  console.log(req.body);
  const option = {
    url: url + 'cart',
    headers: { Authorization: process.env.TOKEN },
    method: 'post'
  };

  axios(option)
    .then((result) => {
      res.status(200).end()
    })
    .catch((err) => {
      console.log('Error in cart post method:', err);
    })

})

//Connection
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);