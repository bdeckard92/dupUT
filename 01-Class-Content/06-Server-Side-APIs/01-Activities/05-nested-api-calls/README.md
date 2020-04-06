# Nesting a Giphy API call inside a Wikipedia API call

In this activity, you're going to extend the code in the previous activity. You'll first make a call to Wikipedia's API
to get the title of a random article. You'll then pass that value to Giphy as the search term.

## Instructions

Using the starter code in `/Unsolved`, ensure the following functionality:

* Remove the `searchTerm` input from `index.html`

* Add a new element to display the Wikipedia article title above the Giphy result.

* Pressing the Search button submits a `fetch()` request to Wikipedia using this URL: `https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*`

* The article title is displayed in the HTML, above the Giphy result.

* The article title is passed to Giphy as the `searchTerm`, and the resulting image is displayed below the title.

## Hint(s)

* You can look at [Wikipedia's API Sandbox](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=random&rnnamespace=0&rnlimit=1) to see what your results should look like.

* You can look at the Wikipedia URL in your browser to see the structure of the results. Note that there's an array in there!

* You'll need to make the Giphy `fetch()` request in the `.then()` block following the Wikipedia `fetch()` request.

* You're going to be working with two sets of `fetch()` results simultaneously. It might be helpful to name their variables differently to keep track.


