fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    var responseContainerEl = document.querySelector('#response-container');
    var gifImg = document.createElement('img');
    gifImg.setAttribute('src', response.data.image_url);
    responseContainerEl.appendChild(gifImg);
  });
