var test = [
  {
  "data": {
    "review_id": 1274541,
  "rating": 4,
  "summary": "What is Camo?",
  "recommend": true,
  "response": null,
  "body": "Camo",
  "date": "2022-06-25T00:00:00.000Z",
  "reviewer_name": "Wikipina",
  "helpfulness": 4,
  "photos": []
  }
},

{
  "data": {
      "review_id": 1115561,
      "rating": 3,
      "summary": "I really liked this product 123s2",
      "recommend": true,
      "response": null,
      "body": "it was nice and easy to use",
      "date": "2022-01-03T00:00:00.000Z",
      "reviewer_name": "reviewer 12aaa",
      "helpfulness": 5,
      "photos": []
  }
},

{
  "data": {
      "review_id": 1274541,
      "rating": 4,
      "summary": "What is Camo?",
      "recommend": true,
      "response": null,
      "body": "Camo",
      "date": "2022-05-25T02:00:00.000Z",
      "reviewer_name": "Wikipina",
      "helpfulness": 4,
      "photos": []
  }
},

{
  "data": {
      "review_id": 1274541,
      "rating": 4,
      "summary": "What is Camo?",
      "recommend": true,
      "response": null,
      "body": "Camo",
      "date": "2022-05-25T01:00:00.000Z",
      "reviewer_name": "Wikipina",
      "helpfulness": 4,
      "photos": []
  }
},

{
  "data": {
      "review_id": 1274541,
      "rating": 4,
      "summary": "What is Camo?",
      "recommend": true,
      "response": null,
      "body": "Camo",
      "date": "2022-06-25T00:00:00.000Z",
      "reviewer_name": "Wikipina",
      "helpfulness": 4,
      "photos": []
  }
},

{
  "data": {
      "review_id": 1115561,
      "rating": 3,
      "summary": "I really liked this product 123s2",
      "recommend": true,
      "response": null,
      "body": "it was nice and easy to use",
      "date": "2022-01-03T00:00:00.000Z",
      "reviewer_name": "reviewer 12aaa",
      "helpfulness": 3,
      "photos": []
  }
}
];

// Relevant sort
var sortObj = function(arr) {
  var resultArr = [];

  arr.sort((data1, data2) => {
    if (data1.data.helpfulness > data2.data.helpfulness) {
      return -1;
    } else if (data1.data.helpfulness < data2.data.helpfulness) {
      return 1;
    } else {
      if (data1.data.date < data2.data.date) {
        return 1;
      } else if (data1.data.date > data2.data.date) {
        return - 1;
      }

      return 0;
    }
  });

  console.log('Check if the code passes', arr);

  // use the first occorance and the last occarance of those numbers
}

// Sort by date
var sortDate = function(arr) {
  arr.sort((data1, data2) => {
    if (data1.data.date < data2.data.date) {
      return 1;
    } else if (data1.data.date > data2.data.date) {
      return - 1;
    }

    return 0;
  })

  console.log('Check if the code passes', arr);
}

// Sort by helpfulness
var sortHelp = function(arr) {
  arr.sort((data1, data2) => {
    if (data1.data.helpfulness < data2.data.helpfulness) {
      return 1;
    } else if (data1.data.helpfulness > data2.data.helpfulness) {
      return - 1;
    }

    return 0;
  })

  console.log('Check if the code passes', arr);
}

sortHelp(test);


// Create a function for stars to be clicked on.