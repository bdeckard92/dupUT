fetch('https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const responseContainerEl = document.querySelector("#response-container")
    const gifImg = document.createElement("img");
    gifImg.setAttribute("src", response.data.image_url)
    responseContainerEl.appendChild(gifImg)
  });