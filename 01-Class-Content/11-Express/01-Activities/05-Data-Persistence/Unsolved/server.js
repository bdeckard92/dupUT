const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Send a message to the client
  res.json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    // Convert the data to a string so we can save it
    const reviewString = JSON.stringify(newReview);

    // Write the string to a file
    fs.writeFile(`./db/reviews.json`, reviewString, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for ${newReview.product} has been written to JSON file`
          )
    );

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.json(response);
  } else {
    res.json('Error in posting review');
  }
});

// GET request for upvotes
app.get('/api/upvotes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to retrieve upvote count`);

  // Log our request to the terminal
  console.info(`${req.method} request received to retrieve upvote count`);
});

// Post request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  // Log our request to the terminal
  if (req.body && req.params.review_id && req.body.upvote) {
    console.info(`${req.method} request received to upvote a review`);

    // Log the request body
    console.info(req.body);

    const reviewId = req.params.review_id;
    const requestedUpvote = req.body.upvote;

    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      // console.log(currentReview.review_id, reviewId);
      if (currentReview.review_id === reviewId && requestedUpvote) {
        currentReview.upvotes += 1;
        res.json(`New upvote count is: ${currentReview.upvotes}`);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
