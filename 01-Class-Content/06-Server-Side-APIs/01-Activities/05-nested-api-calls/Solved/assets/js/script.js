function myFunction() {
  // Get a random Wikipedia article title
  fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*')
  .then(wikiResponse => {
    return wikiResponse.json();
  })
  .then(wikiResponse => {
    var searchTerm = wikiResponse.query.random[0].title;
    var responseHeaderEl = document.querySelector("#response-header");
    responseHeaderEl.innerHTML = '<h2>' + searchTerm + '</h2>';
    var rating = document.getElementById("rating").value;
    return fetch('https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&rating=' + rating + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1')
  })
  .then((response) => {
    return response.json();
  })
  .then(response => {
    if (response.data.length === 0) {
      console.log('Giphy could not find anything for that.');
    } else {
      console.log(response.data[0])
      var responseContainerEl = document.querySelector("#response-container")
      responseContainerEl.innerHTML = ''
      var gifImg = document.createElement("img");
      gifImg.setAttribute("src", response.data[0].images.fixed_height.url)
      responseContainerEl.appendChild(gifImg);
    }
  });
};