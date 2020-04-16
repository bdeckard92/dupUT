# Giphy API call with rating parameter

In this activity you will add a "rating" parameter to the Giphy API call. This parameter filters Giphy results based on the MPAA rating system: G, PG, PG-13.

## Instructions

Using the starter code in `/Unsolved`, ensure the following functionality:

* Users can select a G, PG, or PG-13 rating from a select menu

* Pressing the Search button submits the `fetch()` request to Giphy, with the `rating` parameter set to the chosen value.

* The `response-container` element in the DOM is updated with the image in the Giphy response.

* The image returned from Giphy should have the appropriate `rating` value (or lower) in the response. You can check this by using the Chrome DevTools network tab.


## Hint(s)

* Take a look at the Giphy search [API endpoint docs](https://developers.giphy.com/docs/api/endpoint#search).

* Adding the rating is very similar to adding `searchTerm` in the previous activity.

* You will need to update both `index.html` and `script.js` to handle the selected rating option.

* Remember the query string parameters are separated by an ampersand (`&`).


