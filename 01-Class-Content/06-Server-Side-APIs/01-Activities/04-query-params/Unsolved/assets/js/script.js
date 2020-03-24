function myFunction() {
  var searchTerm = document.getElementById("searchTerm").value;
  fetch('https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response.data[0])
    var responseContainerEl = document.querySelector("#response-container")
    responseContainerEl.innerHTML = ''
    var gifImg = document.createElement("img");
    gifImg.setAttribute("src", response.data[0].images.fixed_height.url)
    responseContainerEl.appendChild(gifImg)
  });
}

