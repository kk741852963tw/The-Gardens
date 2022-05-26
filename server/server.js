//Dependencies
require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

//Middleware
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
//========================== PHILIP'S ROUTES ============================
app.get('api/products/related', (req, res) => {
  console.log(req.body);
  var config = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.body}`,
    headers: {
      'Authorization': process.env.TOKEN
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});
// ========================END PHILIP'S ROUTES ================
//Routes

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