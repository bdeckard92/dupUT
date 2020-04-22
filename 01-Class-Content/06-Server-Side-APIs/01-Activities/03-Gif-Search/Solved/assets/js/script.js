function myFunction() {
  const searchTerm = document.querySelector("#searchTerm").value;
  fetch('https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response.data[0])
    const responseContainerEl = document.querySelector("#response-container")
    responseContainerEl.innerHTML = ''
    let gifImg = document.createElement("img");
    gifImg.setAttribute("src", response.data[0].images.fixed_height.url)
    responseContainerEl.appendChild(gifImg)
  });
}
