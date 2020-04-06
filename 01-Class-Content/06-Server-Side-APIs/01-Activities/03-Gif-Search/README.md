# Call Giphy's Search API endpoint with a search term

In this activity you will call Giphy's search API with a search term entered by the user. 

## Instructions

Using the starter code in `/Unsolved`, ensure the following functionality:

* There's an input field in `index.html` that collects a search term from the user, and a Search button to submit the term.

* Pressing the Search button triggers a request to Giphy, with a `q` query string parameter set to the value the input field.

* The `response-container` element in the DOM is updated with the image from the Giphy response.

* The image returned from Giphy should be related to the search term entered by the user. (It's likely this relationship will be loose.)

## Hint(s)

* You will need to update both `index.html` and `script.js` to handle the user's search term.

* Take a look at the Giphy search [API endpoint docs](https://developers.giphy.com/docs/api/endpoint#search).

* You'll need to wrap the JavaScript in a function that can be called when the button is clicked. You can use an `onlclick` attribute on the button element to trigger the function.
