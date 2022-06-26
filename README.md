# Front End Capstone

## Overview

Front End Capstone is an e-commerce site built with React and Express, following a business requirements document and an API provided by the project stakeholders. Working as a team of four engineers, the first phase of our development was becoming acclimated to utilizing project management and ticket management tools, including the Git Feature Branch Workflow and Trello. We adapted an agile scrum methodology and held daily standup to keep track of each member's progress on the sub-components of the product. The main strengths of this storefront are a cohesive user experience, clear and easy-to-read usability as well as its sleek and modern design. Our team challenged ourselves by learning new technologies, including tailwindCSS and React Hooks, within a day of the sprint planning session.

## Table of Contents

  - [Tech Stack](#tech-stack)
  - [Features](#features)
    - [Product Overview](#product-overview)
    - [Related Products and Wishlist Carousels](#related-products-and-wishlist-carousels)
    - [Questions and Answers](#questions-and-answers)
    - [Ratings and Reviews](#ratings-and-reviews)
  - [Development](#development)
    - [Environment Variables Management](#environment-variables-management)
    - [Installation](#installation)
  - [Deployment](#deployment)
  - [Contributors](#contributors)

## Tech Stack
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?logo=webpack&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/-Babel-F9DC3E?logo=babel&logoColor=white&style=for-the-badge)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)
![Testing Library](https://img.shields.io/badge/-Testing_Library-E33332?logo=testing-library&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)
![Moment](https://img.shields.io/badge/-Moment-5A6AB1?logo=moment&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white&style=for-the-badge)
![AWS](https://img.shields.io/badge/-AWS-000000?logo=amazon-aws&logoColor=white&style=for-the-badge)
## Features

### Product Overview

### Related Products and Wishlist Carousels

### Questions and Answers

> This module wil allow asking and answering of questions for the selected product. The functionality contained within this module can be divided into five unique subsections:

[![Watch the video](https://i.postimg.cc/zXH772V4/FEC-QA.png)](https://youtu.be/nMPy5BeOXwE)


1. Search for a question
2. View questions
3. View answers
4. Ask a question
5. Answer a question
  - All question and answer data is obtained through HTTP requests to the API. If a different product is selected, it will trigger a request to the API and the module will re-render. After the data is received, questions and answers are sorted by their helpfulness, or number of helpful upvotes. Users are able to report both questions and answers to the website, as well as vote on a question or answer helpfulness up to a total of one time.
  - The search bar will only begin to filter questions after three characters are typed. It will also continuously resort both answers and questions by their helpfulness.
  - Adding a new question or answer will trigger a modal view with a form to be filled out and submitted. Upon submission, each field is validated based on a set of requirements provided in the business documents. Upon a successful submission, an post request will be sent to the API to persist the data.


### Ratings and Reviews

## Development

### Environment Variables Management

This project uses dotenv.

The environment variables necessary to run the application. The variable values in the file in a new `.env` file with a valid GitHub Token and PORT number.

### Installation

From the root directory, run the following commands in your terminal.

1. Install packages:

```
npm install
```

2. To initialize Webpack & Bundle:
```
npm run client-dev
```

3. To start the server:

```
npm run server-dev
```

## Deployment

The site is currently deployed in AWS EC2.

## Contributors

* Po-Chang CHEN - Questions & Answers
* Philip Koller - Related Products and Wishlist Carousels & Header
* Cam Estep - Product Information
* Hakeem Abdulmalik - Ratings & Reviews
